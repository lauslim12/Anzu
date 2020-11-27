const mongoose = require('mongoose');

const sourceSchema = new mongoose.Schema({
  sourceId: {
    type: String,
    required: [true, 'A source must have a source ID!'],
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

const Source = mongoose.model('Source', sourceSchema);

module.exports = Source;
