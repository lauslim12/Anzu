import type { EventSource } from '@line/bot-sdk';

import {
  isArrayEmpty,
  isDateLessThanToday,
  isDateValid,
  isStringEmpty,
} from '../utils/generalUtilities';
import getEventMetadata from '../utils/getEventMetadata';
import type { TaskCommands } from './domain';
import responses from './responses';
import TaskService from './service';

/**
 * Validates task name and date (string representation).
 *
 * @param taskName - A task name
 * @param date - The date of the input
 * @returns An error message or null
 */
const validateTaskNameAndDate = (taskName: string, date: string) => {
  if (!isDateValid(date)) {
    return 'Invalid date! Please enter date in YYYY-MM-DD format!';
  }

  if (isDateLessThanToday(date)) {
    return 'You can only assign a task whose deadline is today or greater than today!';
  }

  if (isStringEmpty(taskName)) {
    return 'Please specify the task name!';
  }

  return null;
};

/**
 * Handles all tasks commands.
 *
 * @param message - Text message
 * @param taskService - A service for 'Task' entity
 */
const handleTask = async (
  message: TaskCommands,
  source: EventSource,
  taskService: TaskService
) => {
  const { userId, sourceId, sourceType } = getEventMetadata(source);

  if (message === '/finish') {
    // example input: /finish taskName
    const taskName = message.split(' ').splice(1).join(' ');

    // check whether the task exists
    const task = await taskService.getTask(taskName, sourceId);
    if (!task) {
      return 'The task that you want to finish does not exists.';
    }

    // delete task
    await taskService.finishTask(taskName, sourceId);

    // print message
    const response = responses.finishTaskResponse(taskName);

    return response;
  }

  if (message === '/schedule') {
    // example input: /schedule 2021-11-25 I chatted with my neighbor today
    const date = message.split(' ')[1];
    const taskName = message.split(' ').splice(2).join(' ');
    if (!date) {
      return 'Date is not found in your command!';
    }

    // validate input
    const err = validateTaskNameAndDate(taskName, date);
    if (err) {
      return err;
    }

    // create new task
    await taskService.scheduleTask({
      sourceId,
      name: taskName,
      deadline: new Date(date).getTime() / 1000,
      scheduler: userId,
      sourceType,
      dateAdded: Date.now(),
    });

    // print message
    const response = responses.scheduleTaskResponse(taskName, date);

    return response;
  }

  if (message === '/reschedule') {
    // example input: /reschedule 2021-11-27 I chatted with my neighbor today
    const date = message.split(' ')[1];
    const taskName = message.split(' ').splice(2).join(' ');
    if (!date) {
      return 'Date is not found in your command!';
    }

    // check whether the task is available or not
    const task = await taskService.getTask(taskName, sourceId);
    if (!task) {
      return 'The task that you want to reschedule does not exist!';
    }

    // validate all inputs
    const err = validateTaskNameAndDate(taskName, date);
    if (err) {
      return err;
    }

    // update tasks
    const newDeadline = new Date(date).getTime() / 1000;
    await taskService.rescheduleTask(taskName, sourceId, newDeadline);

    // print message
    const response = responses.rescheduleTaskResponse(taskName, date);

    return response;
  }

  // lastly, for our final input
  // example input: /tasks
  const tasks = await taskService.getTasks(sourceId);
  if (isArrayEmpty(tasks)) {
    return 'You have no tasks due!';
  }

  // print message
  const response = responses.getScheduledTasksResponse(tasks);

  return response;
};

export default handleTask;
