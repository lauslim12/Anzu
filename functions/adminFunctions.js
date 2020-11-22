const { client } = require('../utils/credentialHandler');
const createResponse = require('../utils/createResponse');
const Task = require('../models/taskModel');

exports.purge = async (event) => {
  try {
    // 1. After the administrator says 'System Call: Purge', clean all the database.
    await Task.deleteMany();

    // 2. Notify the administrator.
    const response = createResponse(
      'Alright, all of the data has been purged!'
    );
    await client.replyMessage(event.replyToken, response);
  } catch (err) {
    console.error(err);
  }
};

exports.leave = async (event) => {
  try {
  } catch (err) {}
};
