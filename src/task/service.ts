import type { Repository, Service, Task } from './domain';

/**
 * Service for 'Task' entity.
 */
class TaskService implements Service {
  public taskRepository: Repository;

  constructor(taskRepository: Repository) {
    this.taskRepository = taskRepository;
  }

  /**
   * Gets a single task.
   *
   * @param taskName - A task name
   * @param sourceId - A source ID
   * @returns A task if it exists
   */
  async getTask(taskName: string, sourceId: string) {
    const task = await this.taskRepository.getTask(taskName, sourceId);

    return task;
  }

  /**
   * Gets all tasks for 'sourceId'.
   *
   * @returns Tasks available for the concerned 'sourceId'
   */
  async getTasks(sourceId: string) {
    const tasks = await this.taskRepository.getTasks(sourceId);

    return tasks;
  }

  /**
   * Finishes a task.
   *
   * @param taskName - A task name
   * @param sourceId - A source ID
   */
  async finishTask(taskName: string, sourceId: string) {
    await this.taskRepository.finishTask(taskName, sourceId);
  }

  /**
   * Reschedules a task.
   *
   * @param taskName - A task name
   * @param sourceId - A source ID
   * @param taskDate - A task's new deadline
   */
  async rescheduleTask(taskName: string, sourceId: string, taskDate: number) {
    await this.taskRepository.rescheduleTask(taskName, sourceId, taskDate);
  }

  /**
   * Schedules a new task.
   *
   * @param task - A task
   * @returns The new scheduled task
   */
  async scheduleTask(task: Omit<Task, '_id'>) {
    const newTask = await this.taskRepository.scheduleTask(task);

    return newTask;
  }
}

export default TaskService;
