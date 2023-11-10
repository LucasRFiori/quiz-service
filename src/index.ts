import express from "express";
import { config } from "./api.config";
import { router } from "./routes";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import "express-async-errors";

const app = express();

// Lista de origens permitidas

const corsOptions = {
  origin: (
    origin: string | undefined,
    callback: (error: Error | null, allow: boolean) => void
  ) => {
    if (!origin || config.ALLOW_ORIGIN.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Origem não permitida pelo CORS"), false);
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

mongoose
  .connect(config.MONGO_URL)
  .then(() => {
    console.log("✅ Connected to MongoDB");

    app.use(cors(corsOptions));

    app.use(cookieParser());

    app.use(express.json());

    app.use(router);

    app.listen(config.NODE_PORT, () => {
      console.log(`🚀 Server is running at ${config.NODE_URL}`);
    });
  })
  .catch(() => {
    console.log("❌ Couldn't connect to MongoDB.");
  });
