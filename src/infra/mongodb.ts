import mongoose from 'mongoose';

import environments from '../config/environments';

/**
 * Loads a MongoDB database based on the connection string.
 *
 * @returns A MongoDB connection instance
 */
const loadMongoDB = async () => {
  const res = await mongoose.connect(environments.database);
  return res.connection.db;
};

export default loadMongoDB;
