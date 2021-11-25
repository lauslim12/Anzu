/**
 * Task domain.
 */
export type Task = {
  _id: string;
  sourceId: string;
  name: string;
  deadline: number;
  scheduler: string;
  sourceType: string;
  dateAdded: number;
};

/**
 * Allowed task commands.
 */
export type TaskCommands = '/finish' | '/schedule' | '/reschedule' | '/tasks';

/**
 * Task service contract.
 */
export interface Service {
  getTask: (taskName: string, sourceId: string) => Promise<Task | null>;
  getTasks: (sourceId: string) => Promise<Task[]>;
  finishTask: (taskName: string, sourceId: string) => Promise<void>;
  rescheduleTask: (
    taskName: string,
    sourceId: string,
    date: number
  ) => Promise<void>;
  scheduleTask: (task: Omit<Task, '_id'>) => Promise<Task>;
}

/**
 * Task repository contract.
 */
export interface Repository {
  getTask: (taskName: string, sourceId: string) => Promise<Task | null>;
  getTasks: (sourceId: string) => Promise<Task[]>;
  finishTask: (taskName: string, sourceId: string) => Promise<void>;
  rescheduleTask: (
    taskName: string,
    sourceId: string,
    taskDate: number
  ) => Promise<void>;
  scheduleTask: (task: Omit<Task, '_id'>) => Promise<Task>;
}
