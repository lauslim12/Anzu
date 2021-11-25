import mongoose from 'mongoose';

import type { Source } from './domain';

/**
 * Schema type for Mongoose.
 */
const sourceSchema = new mongoose.Schema<Source>({
  sourceId: {
    type: String,
    required: [true, 'A source must have a source ID!'],
    unique: true,
  },
  sourceType: {
    type: String,
    enum: ['group', 'room', 'user'],
  },
  dateAdded: {
    type: Number,
    default: Date.now(),
  },
});

/**
 * Setup index to prevent double source ids.
 */
sourceSchema.path('sourceId').index({ unique: true });

/**
 * Setup model for our usage as DAO.
 */
const SourceModel = mongoose.model<Source>('Source', sourceSchema);

export default SourceModel;
