const AppError = require('../utils/appError');
const { client } = require('../utils/credentialHandler');
const createResponse = require('../utils/createResponse');
const getSourceId = require('../utils/getSourceId');
const {
  isStringEmpty,
  isDateLessThanToday,
  isDateValid,
  isArrayEmpty,
} = require('../utils/generalUtilities');
const parseNotification = require('../utils/parseNotification');
const Task = require('../models/taskModel');
const { transformResponse } = require('../utils/responseHelper');

exports.scheduleTask = async (event) => {
  // Check for all variables.
  const { sourceId, type } = getSourceId(event);
  const userId = event.source.userId || 'no id';

  // 1. Process the input from the user.
  // Example input: '/schedule 2020-12-12 Working from home!'
  const splitText = event.message.text.split(' ');
  const chosenDate = splitText[1];
  const task = splitText.splice(2).join(' ');

  // 2. If there are any errors, resolve the function.
  if (!isDateValid(chosenDate)) {
    throw new AppError(
      'Invalid date! Please enter date in YYYY-MM-DD format!',
      400,
      event
    );
  }

  if (isDateLessThanToday(chosenDate)) {
    throw new AppError(
      'You can only assign a task whose deadline is today or greater than today!',
      400,
      event
    );
  }

  if (isStringEmpty(task)) {
    throw new AppError('Please specify the task name!', 400, event);
  }

  // 3. Insert all the given data into the database.
  await Task.create({
    sourceId: sourceId,
    name: task,
    deadline: new Date(chosenDate),
    scheduler: userId,
    sourceType: type,
  });

  // 4. Send back response to the user.
  const readableDateString = new Date(chosenDate).toISOString().split('T')[0];
  const message = transformResponse('scheduleTask', [task, readableDateString]);
  const response = createResponse(message);

  await client.replyMessage(event.replyToken, response);
};

exports.getScheduledTasks = async (event) => {
  // Prepare message to reply with.
  let message;

  // 1. Get the current room ID.
  const { sourceId } = getSourceId(event);

  // 2. Fetch all the available tasks for the current room.
  const tasks = await Task.find({ sourceId: sourceId });

  // 3. Sort the tasks based on date for easier reading.
  // Sort from the closest deadline to the furthest deadline!
  tasks.sort((el1, el2) => new Date(el1.deadline) - new Date(el2.deadline));

  // 4. Prettify the tasks.
  const taskDeadlines = [];

  tasks.forEach((e, index) => {
    taskDeadlines.push(parseNotification(e, index + 1, 'reminder'));
  });

  // If there are no tasks, give this message for clarity.
  if (isArrayEmpty(tasks)) {
    message = 'You have no tasks due!';
  } else {
    message = taskDeadlines.join('\n');
  }

  // 5. Send response back to the user.
  const messageToBeTransformed = transformResponse('getScheduledTasks', [
    message,
  ]);
  const response = createResponse(messageToBeTransformed);

  await client.replyMessage(event.replyToken, response);
};

exports.deleteScheduledTask = async (event) => {
  // 1. Fetch the name of the task.
  const { sourceId } = getSourceId(event);
  const taskString = event.message.text.split(' ');
  const taskName = taskString.splice(1).join(' ');

  // 2. Check if task exists based on name and its sourceId.
  const task = await Task.find({ name: taskName, sourceId: sourceId });

  if (isArrayEmpty(task)) {
    throw new AppError(
      'The task that you want to delete does not exist!',
      400,
      event
    );
  }

  // 3. If task exists, delete the task.
  await Task.deleteOne({ name: taskName, sourceId: sourceId });

  // 4. Send response to the user.
  const message = transformResponse('deleteScheduledTask', [taskName]);
  const response = createResponse(message);

  await client.replyMessage(event.replyToken, response);
};

exports.rescheduleTask = async (event) => {
  // 1. Fetch the name of the task.
  // Example: '/reschedule <newDate> <taskName>'
  const { sourceId } = getSourceId(event);
  const taskString = event.message.text.split(' ');
  const taskDate = taskString[1];
  const taskName = taskString.splice(2).join(' ');

  // 2. If there are any errors, resolve the function.
  const task = await Task.find({ sourceId: sourceId, name: taskName });

  if (isArrayEmpty(task)) {
    throw new AppError(
      'The task that you want to reschedule does not exist!',
      400,
      event
    );
  }

  if (!isDateValid(taskDate)) {
    throw new AppError(
      'Invalid date! Please enter date in YYYY-MM-DD format!',
      400,
      event
    );
  }

  if (isDateLessThanToday(taskDate)) {
    throw new AppError(
      'You can only assign a task whose deadline is today or greater than today!',
      400,
      event
    );
  }

  // 3. Update the task.
  await Task.updateOne(
    { sourceId: sourceId, name: taskName },
    { deadline: new Date(taskDate) }
  );

  // 4. Send response.
  const readableDateString = new Date(taskDate).toISOString().split('T')[0];
  const message = transformResponse('rescheduleTask', [
    taskName,
    readableDateString,
  ]);

  await client.replyMessage(event.replyToken, message);
};
