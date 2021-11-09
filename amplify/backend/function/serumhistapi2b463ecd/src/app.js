var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = require("./interfaces");
// var time_1 = require("./time");
var { nativeMarketsV3 } = require("./markets");
var { Base64TradeCoder } = require("./base64");
var { batch } = require("./candle");
var coder = new Base64TradeCoder();
var redis = require("redis");
var { resolutions, sleep } = require("./time");
var LRUCache = require("lru-cache");
var util = require("util");

var client = redis.createClient(process.env.ELASTICACHE);

let lrangey = util.promisify(client.lrange).bind(client);

var symbolsByPk = Object.assign(
  {},
  ...Object.entries(nativeMarketsV3).map(([a, b]) => ({ [b]: a }))
);

const cache = new LRUCache(parseInt("500"));

var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

const keyForDay = (ts, symbol) => {
  const d = new Date(ts);
  return `${symbol}-${d.getUTCFullYear()}-${d.getUTCMonth()}-${d.getUTCDate()}`;
};

const keysForCandles = (resolution, from, to, symbol) => {
  const keys = new Set();
  while (from < to) {
    keys.add(keyForDay(from, symbol));
    from += resolution;
  }
  keys.add(keyForDay(to, symbol));
  return Array.from(keys);
};

const today = Date.now();
// const yesterday = today - 24 * 60 * 60 * 1000

app.get("/tv/config", async (req, res) => {
  try {
    const response = {
      supported_resolutions: Object.keys(resolutions),
      supports_group_request: false,
      supports_marks: false,
      supports_search: true,
      supports_timescale_marks: false,
    };

    res.set("Cache-control", "public, max-age=360");
    res.send(response);
    return;
  } catch (err) {
    // notify(`tv/history ${marketName} ${err}`)
    // const error = { s: 'error' }
    // res.status(500).send(error)
    res.json({ status: 500, url: req.url, err: err });
  }
});

const priceScales = {
  ATLAS: 10000,
  POLIS: 10000,
};

app.get("/tv/symbols", async (req, res) => {
  try {
    const symbol = req.query.symbol;
    const response = {
      name: symbol,
      ticker: symbol,
      description: symbol,
      type: "Spot",
      session: "24x7",
      exchange: "StarAtlas.Exchange",
      listed_exchange: "StarAtlas.Exchange",
      timezone: "Etc/UTC",
      has_intraday: true,
      supported_resolutions: Object.keys(resolutions),
      minmov: 1,
      pricescale: priceScales[symbol] || 100,
    };

    res.set("Cache-control", "public, max-age=360");
    res.send(response);
    return;
  } catch (err) {
    // notify(`tv/history ${marketName} ${err}`)
    // const error = { s: 'error' }
    // res.status(500).send(error)
    res.json({ status: 500, url: req.url, err: err });
  }
});

app.get("/tv/history", async (req, res) => {
  // parse
  const marketPk = req.query.symbol;
  const marketName = nativeMarketsV3[marketPk];
  const resolution = resolutions[req.query.resolution];
  let from = parseInt(req.query.from) * 1000;
  let to = parseInt(req.query.to) * 1000;

  // validate
  const validSymbol = marketName != undefined;
  const validResolution = resolution != undefined;
  const validFrom = true || new Date(from).getFullYear() >= 2021;
  console.log( "marketPk", marketPk);
  // console.log( "marketName", marketName);
  // console.log( "nativeMarketsV3[marketPk];", nativeMarketsV3[marketPk]);
  console.log(
    "validSymbol && validResolution && validFrom",
    validSymbol && validResolution && validFrom
  );
  if (!(validSymbol && validResolution && validFrom)) {
    const error = { s: "error", validSymbol, validResolution, validFrom };
    res.json({
      status: 404,
      url: req.url,
      marketName,
      body: marketName,
      err: error,
    });
    return;
  }

  // respond
  try {
    // snap candle boundaries to exact hours
    from = Math.floor(from / resolution) * resolution;
    to = Math.ceil(to / resolution) * resolution;
    // ensure the candle is at least one period in length
    if (from == to) {
      to += resolution;
    }

    const loadTrades = async (key, cache) => {
      const cached = cache?.get(key);
      if (cached && key != keyForDay(Date.now(), marketPk)) return cached;
      const response = await lrangey(key, 0, -1);
      const result = response.map((t) => coder.decode(t));
      cache?.set(key, result);
      return result;
    };

    const candles = [];
    const keys = keysForCandles(resolution, from, to, marketPk);
    const tradeRequests = keys.map((k) => loadTrades(k, cache));
    const tradeResponses = await Promise.all(tradeRequests);
    const trades = tradeResponses.flat();
    while (from + resolution <= to) {
      let candle = batch(trades, from, from + resolution);
      if (candle) {
        candles.push(candle);
      }
      from += resolution;
    }

    const response = {
      s: "ok",
      t: candles.map((c) => c.start / 1000),
      c: candles.map((c) => c.close),
      o: candles.map((c) => c.open),
      h: candles.map((c) => c.high),
      l: candles.map((c) => c.low),
      v: candles.map((c) => c.volume),
    };
    res.set("Cache-control", "public, max-age=1");
    res.send(response);
    return;
  } catch (err) {
    // notify(`tv/history ${marketName} ${err}`)
    // const error = { s: 'error' }
    // res.status(500).send(error)
    res.json({ status: 500, url: req.url, body: marketName, err: err });
  }
})

app.get("/trades/address/*", async (req, res) => {
  // req.apiGateway.event req.apiGateway.context --  available
  const marketPk = req.params["0"];
  const marketName = symbolsByPk[marketPk];
  const key = keyForDay(today, marketName);

  try {
    const reply = await lrangey(key, 0, -1);
    const trades = reply
      .flat()
      .slice(-50)
      .reverse()
      .map((t) => coder.decode(t));

    const response = {
      success: true,
      data: trades.map((t) => {
        return {
          market: marketName,
          marketAddress: marketPk,
          price: t.price,
          size: t.size,
          side: t.side == interfaces_1.TradeSide.Buy ? "buy" : "sell",
          time: t.ts,
          orderId: "",
          feeCost: 0,
        };
      }),
    };
    res.send(response);
  } catch (err) {
    res.json({ status: 500, url: req.url, market, body: marketName, err: err });
    // res.status(500).send(err);
  }
});

app.listen(5000, function () {
  console.log("App started on port 5000");
});

module.exports = app;
