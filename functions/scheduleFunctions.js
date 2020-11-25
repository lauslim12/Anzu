const cron = require('node-cron');
const { client } = require('../utils/credentialHandler');
const createResponse = require('../utils/createResponse');
const parseNotification = require('../utils/parseNotification');
const Task = require('../models/taskModel');
const { transformResponse } = require('../utils/responseHelper');

const reminder = async () => {
  // 1. Get all distinct 'sourceIds'. Will return an array filled with 'sourceId'.
  const sourceIds = await Task.find({}, 'sourceId').distinct('sourceId');

  // 2. Send a push message that reminds them of their schedules.
  await Promise.all(
    sourceIds.map(async (id) => {
      // 1. Call the tasks for the group.
      const tasks = await Task.find({ sourceId: id });

      // 2. Sort the tasks based on date for easier reading.
      // Sort from the closest deadline to the furthest deadline!
      tasks.sort((el1, el2) => new Date(el1.deadline) - new Date(el2.deadline));

      // 3. Process them as a string to be sent.
      const taskDeadlines = [];

      tasks.forEach((e, index) => {
        taskDeadlines.push(parseNotification(e, index + 1, 'reminder'));
      });

      // It is impossible to get no tasks for an existing sourceId.
      const message = taskDeadlines.join('\n');

      // 4. Send response to user.
      const messageToBeTransformed = transformResponse('reminder', [message]);
      const response = createResponse(messageToBeTransformed);

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
      // Prepare message to be used.
      let message;

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

      // If there are no tasks, give this message for clarity.
      if (deadlines.length === 0) {
        message = 'You have no expired tasks for now!';
      } else {
        message = tasksToBeNotified.join('\n');
      }

      // 3. Create response.
      const messageToBeTransformed = transformResponse(
        'cleanUpExpiredSchedules',
        [message]
      );
      const response = createResponse(messageToBeTransformed);

      // 4. Send response.
      await client.pushMessage(id, response);
    })
  );

  // 3. Delete every tasks that have expired.
  await Task.deleteMany({ deadline: { $lt: currentDate } });
};

exports.initializeCron = () => {
  // We are going to setup reminders at 08:00, 12:00, and 17:00.
  // We are going to setup cleanup jobs at 02:00.
  const cleanUpSchedules = ['00 02 * * *'];
  const reminderSchedules = ['00 08 * * *', '00 12 * * *', '00 17 * * *'];
  const settings = {
    scheduled: true,
    timezone: 'Asia/Jakarta',
  };

  // For reminders, we are going to iterate through the 'reminderSchedules' array.
  reminderSchedules.forEach((schedule) => {
    cron.schedule(
      schedule,
      async () => {
        await reminder();
      },
      settings
    );
  });

  // For cleanups, we are going to iterate through the 'cleanUpSchedules' array.
  cleanUpSchedules.forEach((schedule) => {
    cron.schedule(
      schedule,
      async () => {
        await cleanUpExpiredSchedules();
      },
      settings
    );
  });
};
