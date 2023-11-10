"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuestion = void 0;
const http_1 = require("../../utils/http");
const Question_1 = require("../../Models/Question");
function createQuestion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { video_url, answers, rightAnswer } = req.body;
            if (!video_url || !answers || !rightAnswer) {
                return res.status(http_1.HTTP.BAD_REQUEST.CODE).json(http_1.HTTP.BAD_REQUEST.MESSAGE);
            }
            const question = yield Question_1.Question.create({
                video_url,
                answers,
                rightAnswer,
            });
            return res.status(http_1.HTTP.OK.CODE).json(question);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.createQuestion = createQuestion;
