import type { EventSource } from '@line/bot-sdk';

import {
  isArrayEmpty,
  isDateLessThanToday,
  isDateValid,
  isStringEmpty,
} from '../utils/generalUtilities';
import getEventMetadata from '../utils/getEventMetadata';
import type { TaskCommands } from './domain';
import TaskService from './service';

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
  // parse all sources
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

    return `Task ${taskName} has been finished!`;
  }

  if (message === '/schedule') {
    // example input: /schedule 2021-11-25 I chatted with my neighbor today
    const date = message.split(' ')[1];
    const taskName = message.split(' ').splice(2).join(' ');

    // validate input
    if (!date) {
      return 'Date is not found in your command!';
    }

    if (!isDateValid(date)) {
      return 'Invalid date! Please enter date in YYYY-MM-DD format!';
    }

    if (isDateLessThanToday(date)) {
      return 'You can only assign a task whose deadline is today or greater than today!';
    }

    if (isStringEmpty(taskName)) {
      return 'Please specify the task name!';
    }

    // create new task
    const task = await taskService.scheduleTask({
      sourceId,
      name: taskName,
      deadline: new Date(date).getTime() / 1000,
      scheduler: userId,
      sourceType,
      dateAdded: Date.now(),
    });

    return `Task '${task.name}' with deadline of ${date} has been scheduled!`;
  }

  if (message === '/reschedule') {
    // example input: /reschedule 2021-11-27 I chatted with my neighbor today
    const date = message.split(' ')[1];
    const taskName = message.split(' ').splice(2).join(' ');

    // check whether the task is available or not
    const task = await taskService.getTask(taskName, sourceId);
    if (!task) {
      return 'The task that you want to reschedule does not exist!';
    }

    // validate all inputs
    if (!date) {
      return 'Date is not found in your command!';
    }

    if (!isDateValid(date)) {
      return 'Invalid date! Please enter date in YYYY-MM-DD format!';
    }

    if (isDateLessThanToday(date)) {
      return 'You can only assign a task whose deadline is today or greater than today!';
    }

    if (isStringEmpty(taskName)) {
      return 'Please specify the task name!';
    }

    // update tasks
    const newDeadline = new Date(date).getTime() / 1000;
    await taskService.rescheduleTask(taskName, sourceId, newDeadline);

    return `Task ${taskName} has been updated to a new deadline!`;
  }

  // lastly, for our final input
  // example input: /tasks
  const tasks = await taskService.getTasks(sourceId);
  if (isArrayEmpty(tasks)) {
    return 'You have no tasks due!';
  }

  return `Tasks ${tasks}`;
};

export default handleTask;
