"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base64CandleCoder = exports.Base64TradeCoder = void 0;
class Base64TradeCoder {
    constructor() { }
    ;
    encode(t) {
        const buf = Buffer.alloc(15);
        buf.writeFloatLE(t.price, 0);
        buf.writeFloatLE(t.size, 4);
        buf.writeUIntLE(t.ts, 8, 6);
        buf.writeUInt8(t.side, 14);
        const base64 = buf.toString('base64');
        return base64;
    }
    ;
    decode(s) {
        const buf = Buffer.from(s, 'base64');
        const trade = {
            price: buf.readFloatLE(0),
            size: buf.readFloatLE(4),
            ts: buf.readUIntLE(8, 6),
            side: buf.readUInt8(14),
        };
        return trade;
    }
    ;
}
exports.Base64TradeCoder = Base64TradeCoder;
;
class Base64CandleCoder {
    constructor() { }
    ;
    encode(c) {
        const buf = Buffer.alloc(36);
        buf.writeFloatLE(c.open, 0);
        buf.writeFloatLE(c.close, 4);
        buf.writeFloatLE(c.high, 8);
        buf.writeFloatLE(c.low, 12);
        buf.writeFloatLE(c.volume, 16);
        buf.writeFloatLE(c.vwap, 20);
        buf.writeUIntLE(c.start, 24, 6);
        buf.writeUIntLE(c.end, 30, 6);
        const base64 = buf.toString('base64');
        return base64;
    }
    ;
    decode(s) {
        const buf = Buffer.from(s, 'base64');
        const candle = {
            open: buf.readFloatLE(0),
            close: buf.readFloatLE(4),
            high: buf.readFloatLE(8),
            low: buf.readFloatLE(12),
            volume: buf.readFloatLE(16),
            vwap: buf.readFloatLE(20),
            start: buf.readUIntLE(24, 6),
            end: buf.readUIntLE(30, 6)
        };
        return candle;
    }
    ;
}
exports.Base64CandleCoder = Base64CandleCoder;
