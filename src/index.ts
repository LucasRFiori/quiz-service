import express from "express";
import { config } from "./api.config";
import { router } from "./routes";
import "express-async-errors";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(config.MONGO_URL)
  .then(() => {
    console.log("✅ Connected to MongoDB");

    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "*");
      res.setHeader("Access-Control-Allow-Headers", "*");

      next();
    });

    app.use(express.json());

    app.use(router);

    app.listen(config.NODE_PORT, () => {
      console.log(`🚀 Server is running at ${config.NODE_URL}`);
    });
  })
  .catch(() => {
    console.log("❌ Couldn't connect to MongoDB.");
  });
