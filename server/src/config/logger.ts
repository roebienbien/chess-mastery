import pino from 'pino';

// Logger for better terminal experience
const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      // translateTime: 'SYS:mm:dd:yyyy HH:MM',
      translateTime: 'SYS:HH:MM',
      ignore: 'pid,hostname',
    },
  },
});

const info = (message: string, object?: any) => {
  if (!object) {
    logger.info(message);
  } else logger.info(message, object);
};

const error = (message: string | unknown, object?: any) => {
  if (!object) {
    logger.error(message);
  } else logger.error(message, object);
};

export default {
  logger,
  info,
  error,
};
