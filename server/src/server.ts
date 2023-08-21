import express from 'express';
import http from 'http';
import config from './config';
import logger from './config/logger';
import connectToDb from './utils/connect-to-db';

const app = express();

connectToDb();

// Server
const httpServer = http.createServer(app);
httpServer.listen(config.server.port, () =>
  logger.info(`Server running on port ${config.server.hostname}: ${config.server.port}`)
);
