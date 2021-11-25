import createFormattedDeadline from '../utils/createFormattedDeadline';
import type { Task } from './domain';

/**
 * Not really clean architecture-y, but this depends on the domain as well.
 */
const responses = {
  /**
   * Response when someone finishes a task.
   *
   * @param task - A task
   * @returns A message
   */
  finishTaskResponse: (task: string) =>
    `Great work! The task '${task}' has been finished!`,

  /**
   * Response when someone gets scheduled tasks.
   *
   * @param tasks - A task
   * @returns A message
   */
  getScheduledTasksResponse: (tasks: Task[]) => {
    const compiledTasks = tasks
      .map((task, idx) =>
        createFormattedDeadline(task.name, task.deadline, idx)
      )
      .join('\n');

    return `Hello everyone!

    Anzu is here to remind you all of your schedules. Here are your schedules:
    
    ${compiledTasks}
    
    Good luck and stay in high spirits!`;
  },

  /**
   * Response when someone reschedules their task.
   *
   * @param task - A task
   * @param deadline - A deadline
   * @returns A message
   */
  rescheduleTaskResponse: (task: string, deadline: string) =>
    `Thank you! Your task of '${task}' has been rescheduled to '${deadline}'!`,

  /**
   * Response when someone schedules a task.
   *
   * @param task - A task
   * @param deadline - A deadline
   * @returns A message
   */
  scheduleTaskResponse: (task: string, deadline: string) =>
    `Thank you! Your task of '${task}' with the deadline being '${deadline}' has been created successfully!`,
};

export default responses;
