const NODE_PORT = 3000;
const MONGO_PORT = 27017;
const MAIN_URL = "localhost";

export const config = {
  NODE_PORT,
  NODE_URL: `http://${MAIN_URL}:${NODE_PORT}`,
  MONGO_URL: `mongodb://${MAIN_URL}:${MONGO_PORT}/quiz`,
};
