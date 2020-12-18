import mongoose, { Document } from 'mongoose';

interface SourceType extends Document {
  sourceId: string;
  sourceType: string;
  dateAdded?: Date;
}

const sourceSchema = new mongoose.Schema({
  sourceId: {
    type: String,
    required: [true, 'A source must have a source ID!'],
    unique: true,
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

// Setup index to prevent double sourceIds.
sourceSchema.path('sourceId').index({ unique: true });

const Source = mongoose.model<SourceType>('Source', sourceSchema);

module.exports = Source;
