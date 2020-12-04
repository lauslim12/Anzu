const { client } = require('../utils/credentialHandler');
const createResponse = require('../utils/createResponse');
const Task = require('../models/taskModel');

// exports.disable = async (event) => {};

exports.purge = async (event) => {
  // 1. After the administrator says 'System Call: Purge', clean all the database.
  await Task.deleteMany();

  // 2. Notify the administrator.
  const response = createResponse('Alright, all of the data has been purged!');
  await client.replyMessage(event.replyToken, response);
};

exports.cleanExpired = async (event) => {
  // 1. Clean all expired tasks, manually.
  const currentDate = new Date(Date.now());
  await Task.deleteMany({ deadline: { $lt: currentDate } });

  // 2. Send response.
  const response = createResponse('All expired data have been deleted!');
  await client.replyMessage(event.replyToken, response);
};

// exports.leave = async (event) => {};

exports.administrator = async (event) => {
  const response = createResponse('Hello Administrator! How are you?');
  await client.replyMessage(event.replyToken, response);
};
