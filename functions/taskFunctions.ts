import AppError from '../utils/appError';
import { client } from '../utils/credentialHandler';
import createResponse from '../utils/createResponse';
import {
  isStringEmpty,
  isDateLessThanToday,
  isDateValid,
  isArrayEmpty,
} from '../utils/generalUtilities';
import parseNotification from '../utils/parseNotification';
import Task from '../models/taskModel';
import { transformResponse } from '../utils/responseHelper';

type DataToBeProcessed = {
  sourceId: string;
  sourceType: string;
  command: string;
  scheduler: string;
  replyToken: string;
};

export const scheduleTask = async (data: DataToBeProcessed): Promise<void> => {
  // 1. Process the input from the user.
  // Example input: '/schedule 2020-12-12 Working from home!'
  const splitText = data.command.split(' ');
  const chosenDate = splitText[1];
  const task = splitText.splice(2).join(' ');

  // 2. If there are any errors, resolve the function.
  if (!isDateValid(chosenDate)) {
    throw new AppError(
      'Invalid date! Please enter date in YYYY-MM-DD format!',
      400,
      data.replyToken
    );
  }

  if (isDateLessThanToday(chosenDate)) {
    throw new AppError(
      'You can only assign a task whose deadline is today or greater than today!',
      400,
      data.replyToken
    );
  }

  if (isStringEmpty(task)) {
    throw new AppError('Please specify the task name!', 400, data.replyToken);
  }

  // 3. Insert all the given data into the database.
  await Task.create({
    sourceId: data.sourceId,
    name: task,
    deadline: new Date(chosenDate),
    scheduler: data.scheduler,
    sourceType: data.sourceType,
  });

  // 4. Send back response to the user.
  const readableDateString = new Date(chosenDate).toISOString().split('T')[0];
  const message = transformResponse('scheduleTask', [task, readableDateString]);
  const response = createResponse(message);

  await client.replyMessage(data.replyToken, response);
};

export const getScheduledTasks = async (
  data: DataToBeProcessed
): Promise<void> => {
  // Prepare message to reply with.
  let message: string;

  // 1. Fetch all the available tasks for the current room.
  const tasks = await Task.find({ sourceId: data.sourceId });

  // 2. Sort the tasks based on date for easier reading.
  // Sort from the closest deadline to the furthest deadline!
  tasks.sort(
    (el1, el2) =>
      new Date(el1.deadline).getTime() - new Date(el2.deadline).getTime()
  );

  // 3. Prettify the tasks.
  const taskDeadlines: string[] = [];

  tasks.forEach((e, index) => {
    taskDeadlines.push(parseNotification(e, index + 1, 'reminder') || '');
  });

  // If there are no tasks, give this message for clarity.
  if (isArrayEmpty(tasks)) {
    message = 'You have no tasks due!';
  } else {
    message = taskDeadlines.join('\n');
  }

  // 4. Send response back to the user.
  const messageToBeTransformed = transformResponse('getScheduledTasks', [
    message,
  ]);
  const response = createResponse(messageToBeTransformed);

  await client.replyMessage(data.replyToken, response);
};

export const deleteScheduledTask = async (
  data: DataToBeProcessed
): Promise<void> => {
  // 1. Fetch the name of the task.
  const taskString = data.command.split(' ');
  const taskName = taskString.splice(1).join(' ');

  // 2. Check if task exists based on name and its sourceId.
  const task = await Task.find({ name: taskName, sourceId: data.sourceId });

  if (isArrayEmpty(task)) {
    throw new AppError(
      'The task that you want to delete does not exist!',
      400,
      data.replyToken
    );
  }

  // 3. If task exists, delete the task.
  await Task.deleteOne({ name: taskName, sourceId: data.sourceId });

  // 4. Send response to the user.
  const message = transformResponse('deleteScheduledTask', [taskName]);
  const response = createResponse(message);

  await client.replyMessage(data.replyToken, response);
};

export const rescheduleTask = async (
  data: DataToBeProcessed
): Promise<void> => {
  // 1. Fetch the name of the task.
  // Example: '/reschedule <newDate> <taskName>'
  const taskString = data.command.split(' ');
  const taskDate = taskString[1];
  const taskName = taskString.splice(2).join(' ');

  // 2. If there are any errors, resolve the function.
  const task = await Task.find({ sourceId: data.sourceId, name: taskName });

  if (isArrayEmpty(task)) {
    throw new AppError(
      'The task that you want to reschedule does not exist!',
      400,
      data.replyToken
    );
  }

  if (!isDateValid(taskDate)) {
    throw new AppError(
      'Invalid date! Please enter date in YYYY-MM-DD format!',
      400,
      data.replyToken
    );
  }

  if (isDateLessThanToday(taskDate)) {
    throw new AppError(
      'You can only assign a task whose deadline is today or greater than today!',
      400,
      data.replyToken
    );
  }

  // 3. Update the task.
  await Task.updateOne(
    { sourceId: data.sourceId, name: taskName },
    { deadline: new Date(taskDate) }
  );

  // 4. Send response.
  const readableDateString = new Date(taskDate).toISOString().split('T')[0];
  const message = transformResponse('rescheduleTask', [
    taskName,
    readableDateString,
  ]);
  const response = createResponse(message);

  await client.replyMessage(data.replyToken, response);
};

export const finishTask = async (data: DataToBeProcessed): Promise<void> => {
  // 1. Process input.
  // Example: '/finish taskName'
  const taskString = data.command.split(' ');
  const taskName = taskString.splice(1).join(' ');

  // 2. Check for task availability.
  const task = await Task.find({ sourceId: data.sourceId, name: taskName });

  if (isArrayEmpty(task)) {
    throw new AppError(
      'The task that you want to finish does not exists!',
      400,
      data.replyToken
    );
  }

  // 3. If there is a task with that name, solve it.
  await Task.deleteOne({ sourceId: data.sourceType, name: taskName });

  // 4. Send response to the user.
  const message = transformResponse('finishTask', [taskName]);
  const response = createResponse(message);

  await client.replyMessage(data.replyToken, response);
};
