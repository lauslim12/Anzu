const AppError = require('../utils/appError');
const { client } = require('../utils/credentialHandler');
const createResponse = require('../utils/createResponse');
const getSourceId = require('../utils/getSourceId');
const { transformResponse } = require('../utils/responseHelper');

exports.help = async (event) => {
  // 1. Simply send a help message.
  const message = transformResponse('help');
  const response = createResponse(message);

  await client.replyMessage(event.replyToken, response);
};

exports.anzuSpeaks = async (event) => {
  const message = transformResponse('anzuSpeaks');
  const response = createResponse(message);

  await client.replyMessage(event.replyToken, response);
};

exports.leave = async (event) => {
  const { sourceId, type } = getSourceId(event);

  if (type !== 'room' && type !== 'group') {
    throw new AppError(
      'Sorry, but you cannot kick me out from personal chats.',
      400,
      event
    );
  }

  const message = transformResponse('leave');
  const response = createResponse(message);

  await client.replyMessage(event.replyToken, response);

  // If Anzu is located in a room or a group, leave.
  if (type === 'room') {
    return await client.leaveRoom(sourceId);
  }

  await client.leaveGroup(sourceId);
};
