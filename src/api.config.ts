import "dotenv/config";

const NODE_PORT = 3000;
const MONGO_PORT = 27017;
const MAIN_URL = "localhost";

export const config = {
  NODE_PORT,
  NODE_URL: `http://${MAIN_URL}:${NODE_PORT}`,
  MONGO_URL:
    process.env.MONGO_URL || `mongodb://${MAIN_URL}:${MONGO_PORT}/quiz`,
  QUIZ_TOTAL_TIME: 600,
  JWT_SECRET: process.env.JWT_SECRET || "--",
  ALLOW_ORIGIN: [
    "http://127.0.0.1:5173",
    "https://quiz-libras.vercel.app",
    `http://${MAIN_URL}:5137`,
  ],
};
