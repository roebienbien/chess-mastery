import mongoose from 'mongoose';
import config from '../config';
import logger from '../config/logger';

export default async function connectToDb() {
  try {
    await mongoose.connect(config.mongo.mongo_uri, config.mongo.mongo_options);
    logger.info(`Connected to db`);
  } catch (e) {
    logger.error(e);
  }
}
