import mongoose, { Document } from 'mongoose';

interface TaskType extends Document {
  sourceId: string;
  name: string;
  deadline: Date;
  scheduler: string;
  sourceType: string;
  dateAdded: Date;
}

const taskSchema = new mongoose.Schema({
  sourceId: {
    type: String,
    required: [true, 'A task must be assigned to a group!'],
  },
  name: {
    type: String,
    required: [true, 'A task must have a name!'],
  },
  deadline: {
    type: Date,
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
    type: Date,
    default: Date.now(),
  },
});

const Task = mongoose.model<TaskType>('Task', taskSchema);

export default Task;
