const createResponse = require('../utils/createResponse');
const { client } = require('../utils/credentialHandler');

module.exports = async (err) => {
  const event = err.eventObject;
  const response = createResponse(err.message);

  await client.replyMessage(event.replyToken, response);
};
