import cron, { ScheduleOptions } from 'node-cron';
import { client } from '../utils/credentialHandler';
import createResponse from '../utils/createResponse';
import { isArrayEmpty } from '../utils/generalUtilities';
import parseNotification from '../utils/parseNotification';
import Task from '../models/taskModel';
import { transformResponse } from '../utils/responseHelper';

const compactReminder = async (): Promise<void> => {
  // 1. Get all distinct 'sourceIds'.
  const sourceIds = await Task.find({}, 'sourceId').distinct('sourceId');

  // 2. Send a push message.
  // Sequential loop is required.
  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < sourceIds.length; i += 1) {
    // 1. Send a message to the client to open 'tasks'.
    const messageToBeTransformed = transformResponse('compactReminder', []);
    const response = createResponse(messageToBeTransformed);

    // 2. Wait 2 seconds to prevent 'tooManyRequests' error.
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await client.pushMessage(sourceIds[i], response);
  }
  /* eslint-enable no-await-in-loop */
};

const reminder = async (): Promise<void> => {
  // 1. Get all distinct 'sourceIds'. Will return an array filled with 'sourceId'.
  const sourceIds = await Task.find({}, 'sourceId').distinct('sourceId');

  // Create a sequential loop to prevent 'Too Many Requests' error.
  // We're going to use a normal 'for' loop, refactor later with 'reduce' for readability.
  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < sourceIds.length; i += 1) {
    // 1. Call the tasks for the group.
    const tasks = await Task.find({ sourceId: sourceIds[i] });

    // 2. Sort the tasks based on date for easier reading.
    // Sort from the closest deadline to the furthest deadline!
    tasks.sort(
      (el1, el2) =>
        new Date(el1.deadline).getTime() - new Date(el2.deadline).getTime()
    );

    // 3. Process them as a string to be sent.
    const taskDeadlines: string[] = [];

    tasks.forEach((e, index) => {
      taskDeadlines.push(parseNotification(e, index + 1, 'reminder') || '');
    });

    // It is impossible to get no tasks for an existing sourceId.
    const message = taskDeadlines.join('\n');

    // 4. Send response to user.
    const messageToBeTransformed = transformResponse('reminder', [message]);
    const response = createResponse(messageToBeTransformed);

    // 5. Wait 2 seconds before sending a message (prevent too many requests error).
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await client.pushMessage(sourceIds[i], response);
  }
  /* eslint-enable no-await-in-loop */
};

const cleanUpExpiredSchedules = async (): Promise<void> => {
  // 1. Get current date.
  const currentDate = new Date(Date.now());

  // 2. Notify everyone about the tasks that are deleted.
  const sourceIds = await Task.find({}, 'sourceId sourceType').distinct(
    'sourceId'
  );

  // Create a sequential loop to prevent 'Too Many Requests' error.
  /* eslint-disable no-await-in-loop */
  for (let i = 0; i < sourceIds.length; i += 1) {
    // 1. Get all tasks that are about to be deleted.
    const deadlines = await Task.find({
      sourceId: sourceIds[i],
      deadline: { $lt: currentDate },
    });

    // 2. Added feature: no need to notify if there are no expired tasks.
    /* eslint-disable no-continue */
    if (isArrayEmpty(deadlines)) {
      continue;
    }
    /* eslint-enable no-continue */

    // 3. Parse notification for every tasks to be deleted.
    const tasksToBeNotified: string[] = [];

    deadlines.forEach((e, index) => {
      tasksToBeNotified.push(
        parseNotification(e, index + 1, 'cleaning up') || ''
      );
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
    await client.pushMessage(sourceIds[i], response);
  }
  /* eslint-enable no-await-in-loop */

  // 3. Delete every tasks that have expired.
  await Task.deleteMany({ deadline: { $lt: currentDate } });
};

const initializeCron = (): void => {
  // We are going to setup reminders at 17:00.
  // We are going to setup cleanup jobs at 01:00.
  const cleanUpSchedules = ['00 01 * * *'];
  const reminderSchedules = ['00 17 * * *'];
  const settings: ScheduleOptions = {
    scheduled: true,
    timezone: 'Asia/Jakarta',
  };

  // For reminders, we are going to iterate through the 'reminderSchedules' array.
  if (process.argv[3] === '--enable-long-reminder') {
    reminderSchedules.forEach((schedule) => {
      cron.schedule(
        schedule,
        async () => {
          await reminder();
        },
        settings
      );
    });
  } else {
    reminderSchedules.forEach((schedule) => {
      cron.schedule(
        schedule,
        async () => {
          await compactReminder();
        },
        settings
      );
    });
  }

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

export default initializeCron;
