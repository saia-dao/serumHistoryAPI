const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

const server = awsServerlessExpress.createServer(app);

exports.handler = async function (event, context) {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return await awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
