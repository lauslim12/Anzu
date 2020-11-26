const { client } = require('../utils/credentialHandler');
const createResponse = require('../utils/createResponse');
const Task = require('../models/taskModel');

exports.purge = async (event) => {
  // 1. After the administrator says 'System Call: Purge', clean all the database.
  await Task.deleteMany();

  // 2. Notify the administrator.
  const response = createResponse('Alright, all of the data has been purged!');
  await client.replyMessage(event.replyToken, response);
};

// exports.leave = async (event) => {
//   try {
//   } catch (err) {}
// };

exports.administrator = async (event) => {
  const response = createResponse(
    'Hello my creator, how are you? When will you open source me?'
  );
  await client.replyMessage(event.replyToken, response);
};
