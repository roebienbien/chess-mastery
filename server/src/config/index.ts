import dotenv from 'dotenv';

dotenv.config();

// Server configuration
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME;
const SERVER_PORT = process.env.SERVER_PORT;

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

// Database configuration
const MONGO_URI = process.env.MONGO_URI;

const MONGO = {
  mongo_uri: MONGO_URI as string,
  mongo_options: {
    family: 4, //use ipv4 otherwise will err
    useUnifiedTopology: true,
    useNewUrlParser: true,
    wTimeOutMS: 30_000,
    autoIndex: false,
    retryWrites: false,
  },
};

const config = {
  server: SERVER,
  mongo: MONGO,
};

export default config;
