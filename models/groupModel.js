const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'A group must have a group ID!'],
  },
});

const Group = mongoose.Model('Group', groupSchema);

module.exports = Group;
