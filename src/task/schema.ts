import mongoose from 'mongoose';

import type { Task } from './domain';

/**
 * Schema type for Mongoose.
 */
const taskSchema = new mongoose.Schema<Task>({
  sourceId: {
    type: String,
    required: [true, 'A task must be assigned to a group!'],
  },
  name: {
    type: String,
    required: [true, 'A task must have a name!'],
  },
  deadline: {
    type: Number,
    required: [true, 'A task must have a deadline!'],
  },
  scheduler: {
    type: String,
    required: [true, 'A task must have a person who is the scheduler!'],
  },
  sourceType: {
    type: String,
    enum: ['group', 'room', 'user', 'none'],
    default: 'none',
  },
  dateAdded: {
    type: Number,
    default: Date.now(),
  },
});

/**
 * Creates a 'Task' model based on above schema.
 */
const TaskModel = mongoose.model<Task>('Task', taskSchema);

export default TaskModel;
