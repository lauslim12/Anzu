const mongoose = require('mongoose');

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
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
