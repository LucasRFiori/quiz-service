"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
const mongoose_1 = require("mongoose");
exports.Question = (0, mongoose_1.model)("Question", new mongoose_1.Schema({
    video_url: {
        type: String,
        required: true,
    },
    answers: {
        a: {
            type: String,
            required: true,
        },
        b: {
            type: String,
            required: true,
        },
        c: {
            type: String,
            required: true,
        },
        d: {
            type: String,
            required: true,
        },
    },
    rightAnswer: {
        type: String,
        enum: ["a", "b", "c", "d"],
        required: true,
    },
}));
