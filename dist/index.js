"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_config_1 = require("./api.config");
const routes_1 = require("./routes");
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
const app = (0, express_1.default)();
// Lista de origens permitidas
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || api_config_1.config.ALLOW_ORIGIN.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error("Origem não permitida pelo CORS"), false);
        }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
};
mongoose_1.default
    .connect(api_config_1.config.MONGO_URL)
    .then(() => {
    console.log("✅ Connected to MongoDB");
    app.use((0, cors_1.default)(corsOptions));
    app.use((0, cookie_parser_1.default)());
    app.use(express_1.default.json());
    app.use(routes_1.router);
    app.listen(api_config_1.config.NODE_PORT, () => {
        console.log(`🚀 Server is running at ${api_config_1.config.NODE_URL}`);
    });
})
    .catch(() => {
    console.log("❌ Couldn't connect to MongoDB.");
});
