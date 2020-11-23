const cron = require('node-cron');
const { client } = require('../utils/credentialHandler');
const createResponse = require('../utils/createResponse');
const parseNotification = require('../utils/parseNotification');
const Task = require('../models/taskModel');

const reminder = async () => {
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

const cleanUpExpiredSchedules = async () => {
  // 1. Get current date.
  const currentDate = new Date(Date.now());

  // 2. Notify everyone about the tasks that are deleted.
  const sourceIds = await Task.find({}, 'sourceId sourceType').distinct(
    'sourceId'
  );

  await Promise.all(
    sourceIds.map(async (id) => {
      // 1. Get all tasks that are about to be deleted.
      const deadlines = await Task.find({
        sourceId: id,
        deadline: { $lt: currentDate },
      });

      // 2. Parse notification for every tasks to be deleted.
      const tasksToBeNotified = [];

      deadlines.forEach((e, index) => {
        tasksToBeNotified.push(parseNotification(e, index + 1, 'cleaning up'));
      });

      // It is impossible to get no tasks for an existing sourceId.
      const message = tasksToBeNotified.join('\n');

      // 3. Create response.
      const response = createResponse(
        `Hello everyone! Did you sleep well? Anzu just wants to let you know that she has cleaned up several expired tasks. Here is it:\n\n${message}\n\nThank you and good luck!`
      );

      // 4. Send response.
      await client.pushMessage(id, response);
    })
  );

  // 3. Delete every tasks that have expired.
  await Task.deleteMany({ deadline: { $lt: currentDate } });
};

exports.initializeCron = () => {
  const settings = {
    scheduled: true,
    timezone: 'Asia/Jakarta',
  };

  // Every day, at 02:00, delete every expired schedules.
  cron.schedule(
    '00 02 * * *',
    async () => {
      await cleanUpExpiredSchedules();
    },
    settings
  );

  // Every day, at 08:00, send a reminder to the groups that Anzu is in.
  cron.schedule(
    '00 08 * * *',
    async () => {
      await reminder();
    },
    settings
  );

  // Every day, at 17:00, send a reminder to the groups that Anzu is in.
  cron.schedule(
    '00 17 * * *',
    async () => {
      await reminder();
    },
    settings
  );
};
