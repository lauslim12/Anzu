const cron = require('node-cron');
const { client } = require('../utils/credentialHandler');
const createResponse = require('../utils/createResponse');
const parseNotification = require('../utils/parseNotification');
const Task = require('../models/taskModel');
const { transformResponse } = require('../utils/responseHelper');

const compactReminder = async () => {
  // 1. Get all distinct 'sourceIds'.
  const sourceIds = await Task.find({}, 'sourceId').distinct('sourceId');

  // 2. Send a push message.
  await sourceIds.reduce(async (_, id) => {
    // 1. Send a message to the client to open 'tasks'.
    const messageToBeTransformed = transformResponse('compactReminder', []);
    const response = createResponse(messageToBeTransformed);

    // 2. Wait 2 seconds to prevent 'tooManyRequests' error.
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return await client.pushMessage(id, response);
  });
};

const reminder = async () => {
  // 1. Get all distinct 'sourceIds'. Will return an array filled with 'sourceId'.
  const sourceIds = await Task.find({}, 'sourceId').distinct('sourceId');

  // 2. Send a push message that reminds them of their schedules.
  await sourceIds.reduce(async (_, id) => {
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

    // 5. Wait 2 seconds before sending a message (prevent too many requests error).
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return await client.pushMessage(id, response);
  }, Promise.resolve(null));
};

const cleanUpExpiredSchedules = async () => {
  // 1. Get current date.
  const currentDate = new Date(Date.now());

  // 2. Notify everyone about the tasks that are deleted.
  const sourceIds = await Task.find({}, 'sourceId sourceType').distinct(
    'sourceId'
  );

  // Create a sequential loop to prevent 'Too Many Requests' error.
  await sourceIds.reduce(async (_, id) => {
    // 1. Get all tasks that are about to be deleted.
    const deadlines = await Task.find({
      sourceId: id,
      deadline: { $lt: currentDate },
    });

    // 2. Added feature: no need to notify if there are no expired tasks.
    if (deadlines.length === 0) {
      return;
    }

    // 3. Parse notification for every tasks to be deleted.
    const tasksToBeNotified = [];

    deadlines.forEach((e, index) => {
      tasksToBeNotified.push(parseNotification(e, index + 1, 'cleaning up'));
    });

    // If there are no tasks, give this message for clarity.
    const message = tasksToBeNotified.join('\n');

    // 4. Create response.
    const messageToBeTransformed = transformResponse(
      'cleanUpExpiredSchedules',
      [message]
    );
    const response = createResponse(messageToBeTransformed);

    // 5. Wait 2 seconds before sending a message (prevent too many requests error).
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 6. Send response.
    return await client.pushMessage(id, response);
  }, Promise.resolve(null));

  // 3. Delete every tasks that have expired.
  await Task.deleteMany({ deadline: { $lt: currentDate } });
};

exports.initializeCron = () => {
  // We are going to setup reminders at 17:00.
  // We are going to setup cleanup jobs at 01:00.
  const cleanUpSchedules = ['00 01 * * *'];
  const reminderSchedules = ['00 17 * * *'];
  const settings = {
    scheduled: true,
    timezone: 'Asia/Jakarta',
  };

  // For reminders, we are going to iterate through the 'reminderSchedules' array.
  reminderSchedules.forEach((schedule) => {
    cron.schedule(
      schedule,
      async () => {
        if (process.argv[3] === '--enable-long-reminder') {
          await reminder();
        } else {
          await compactReminder();
        }
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
