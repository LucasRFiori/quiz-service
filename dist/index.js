"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_config_1 = require("./api.config");
const routes_1 = require("./routes");
require("express-async-errors");
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
mongoose_1.default
    .connect(api_config_1.config.MONGO_URL)
    .then(() => {
    console.log("✅ Connected to MongoDB");
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "*");
        res.setHeader("Access-Control-Allow-Headers", "*");
        next();
    });
    app.use(express_1.default.json());
    app.use(routes_1.router);
    app.listen(api_config_1.config.NODE_PORT, () => {
        console.log(`🚀 Server is running at ${api_config_1.config.NODE_URL}`);
    });
})
    .catch(() => {
    console.log("❌ Couldn't connect to MongoDB.");
});
