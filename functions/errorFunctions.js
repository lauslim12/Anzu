const createResponse = require('../utils/createResponse');
const { client } = require('../utils/credentialHandler');

module.exports = async (err) => {
  const event = err.eventObject;
  const response = createResponse(err.message);

  // Handle duplicate key errors here.
  // Error code for Mongoose duplicate key is 11000.
  if (err && err.code === 11000) {
    return;
  }

  await client.replyMessage(event.replyToken, response);
};
