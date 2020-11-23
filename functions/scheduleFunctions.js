const { client } = require('../utils/credentialHandler');
const createResponse = require('../utils/createResponse');
const parseNotification = require('../utils/parseNotification');
const Task = require('../models/taskModel');

exports.reminder = async () => {
  // 1. Get all distinct 'sourceIds'. Will return an array filled with 'sourceId'.
  const sourceIds = await Task.find({}, 'sourceId').distinct('sourceId');

  // 2. Send a push message that reminds them of their schedules.
  await Promise.all(
    sourceIds.map(async (id) => {
      // 1. Call the tasks for the group.
      const tasks = await Task.find({ sourceId: id });

      // 2. Process them as a string to be sent.
      const taskDeadlines = [];

      tasks.forEach((e, index) => {
        taskDeadlines.push(parseNotification(e, index + 1, 'reminder'));
      });

      // It is impossible to get no tasks for an existing sourceId.
      const message = taskDeadlines.join('\n');

      // 3. Send response to user.
      const response = createResponse(
        `Hello everyone! How are you? This is an automated message from Anzu to remind you all of your schedules. Here is it:\n\n${message}\n\nGood luck and stay in high spirits!`
      );

      await client.pushMessage(id, response);
    })
  );
};

exports.cleanUpExpiredSchedules = async () => {
  // 1. Get current date.
  const currentDate = new Date(Date.now());

  // 2. Delete every tasks that have expired.
  await Task.deleteMany({ deadline: { $lt: currentDate } });
};
