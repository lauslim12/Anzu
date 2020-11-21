const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  groupId: {
    type: String,
    ref: 'Group',
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
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
