import type { Repository, Task } from './domain';
import TaskModel from './schema';

/**
 * Repository instance / DAO.
 */
class TaskRepository implements Repository {
  public model: typeof TaskModel;

  constructor(model: typeof TaskModel) {
    this.model = model;
  }

  /**
   * Gets a single task.
   *
   * @param taskName - A task name
   * @param sourceId - A source ID
   * @returns A task if it exists
   */
  async getTask(taskName: string, sourceId: string) {
    const task = await this.model.findOne({ sourceId, name: taskName });

    return task;
  }

  /**
   * Gets all tasks related to a source sorted by deadlines.
   *
   * @param sourceId - A source ID
   * @returns All tasks sorted by deadlines
   */
  async getTasks(sourceId: string) {
    const tasks = await this.model.find({ sourceId }).sort({ deadline: -1 });

    return tasks;
  }

  /**
   * Finishes a single task.
   *
   * @param taskName - A task name
   * @param sourceId - An ID of where this task comes from
   */
  async finishTask(taskName: string, sourceId: string) {
    await this.model.deleteOne({ name: taskName, sourceId });
  }

  /**
   * Reschedules a task to a new deadline.
   *
   * @param taskName - A task name
   * @param sourceId - An ID of where this task comes from
   * @param taskDate - New deadline of the task
   */
  async rescheduleTask(taskName: string, sourceId: string, taskDate: number) {
    await this.model.updateOne({
      sourceId,
      name: taskName,
      deadline: taskDate,
    });
  }

  /**
   * Schedules a new task.
   *
   * @param task - A new task to be added
   * @returns The new added task
   */
  async scheduleTask(task: Omit<Task, '_id'>) {
    const newTask = await this.model.create({
      sourceId: task.sourceId,
      name: task.name,
      deadline: task.deadline,
      scheduler: task.scheduler,
      sourceType: task.sourceType,
    });

    return newTask;
  }
}

export default TaskRepository;
