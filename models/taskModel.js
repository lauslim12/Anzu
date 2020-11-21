const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
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

const Task = mongoose.Model('Task', taskSchema);

module.exports = Task;
