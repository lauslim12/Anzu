const AppError = require('../utils/appError');
const { client } = require('../utils/credentialHandler');
const createResponse = require('../utils/createResponse');
const getSourceId = require('../utils/getSourceId');
const Source = require('../models/sourceModel');
const { transformResponse } = require('../utils/responseHelper');

exports.added = async (event) => {
  const { sourceId, type } = getSourceId(event);

  // 1. If there's an exact sourceId in the database, don't insert anything.
  const source = await Source.find({ sourceId: sourceId, type: type });

  if (!source || source.length === 0) {
    await Source.create({
      sourceId: sourceId,
      sourceType: type,
    });
  }

  const message = transformResponse('added', []);
  const response = createResponse(message);

  await client.replyMessage(event.replyToken, response);
};

exports.help = async (event) => {
  // 1. Simply send a help message.
  const message = transformResponse('help', []);
  const response = createResponse(message);

  await client.replyMessage(event.replyToken, response);
};

exports.join = async (event) => {
  // 1. Add to database.
  const { sourceId, type } = getSourceId(event);

  // 1. If there's an exact sourceId in the database, don't insert anything.
  const source = await Source.find({ sourceId: sourceId, type: type });

  if (!source || source.length === 0) {
    await Source.create({
      sourceId: sourceId,
      sourceType: type,
    });
  }

  // 2. Send a greeting message.
  const message = transformResponse('join', []);
  const response = createResponse(message);

  await client.replyMessage(event.replyToken, response);
};

exports.anzuSpeaks = async (event) => {
  const message = transformResponse('anzuSpeaks', []);
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

  const message = transformResponse('leave', []);
  const response = createResponse(message);

  await client.replyMessage(event.replyToken, response);

  // If Anzu is located in a room or a group, leave.
  if (type === 'room') {
    return await client.leaveRoom(sourceId);
  }

  await client.leaveGroup(sourceId);
};
