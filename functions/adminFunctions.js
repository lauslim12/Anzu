const { client } = require('../utils/credentialHandler');
const createResponse = require('../utils/createResponse');
const getSourceId = require('../utils/getSourceId');
const Task = require('../models/taskModel');
const { transformResponse } = require('../utils/responseHelper');

// exports.disable = async (event) => {};

exports.purge = async (event) => {
  // 1. After the administrator says 'System Call: Purge', clean all the database.
  await Task.deleteMany();

  // 2. Notify the administrator.
  const message = transformResponse('purge', []);
  const response = createResponse(message);

  await client.replyMessage(event.replyToken, response);
};

exports.cleanExpired = async (event) => {
  // 1. Clean all expired tasks, manually.
  const currentDate = new Date(Date.now());
  await Task.deleteMany({ deadline: { $lt: currentDate } });

  // 2. Send response.
  const message = transformResponse('cleanExpired', []);
  const response = createResponse(message);

  await client.replyMessage(event.replyToken, response);
};

exports.cleanLocally = async (event) => {
  const { sourceId } = getSourceId(event);

  // 1. Clean all tasks in an envionment, manually.
  await Task.deleteMany({ sourceId: sourceId });

  // 2. Send response.
  const message = transformResponse('cleanLocally', []);
  const response = createResponse(message);

  await client.replyMessage(event.replyToken, response);
};

// exports.leave = async (event) => {};

exports.administrator = async (event) => {
  // 1. If a user is an administrator, accept and send response.
  const message = createResponse('administrator', []);
  const response = createResponse(message);

  await client.replyMessage(event.replyToken, response);
};
