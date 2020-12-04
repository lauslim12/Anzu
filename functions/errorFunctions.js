const createResponse = require('../utils/createResponse');
const { client } = require('../utils/credentialHandler');
const { isObjectEmpty } = require('../utils/generalUtilities');

module.exports = async (err) => {
  const event = err.eventObject || {};

  // If the 'event' object is empty, we don't need to reply anything.
  // Just return silently.
  if (isObjectEmpty(event)) {
    return;
  }

  const response = createResponse(err.message);

  await client.replyMessage(event.replyToken, response);
};
