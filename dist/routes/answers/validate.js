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
exports.validate = void 0;
const http_1 = require("../../utils/http");
const Question_1 = require("../../Models/Question");
function validate(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { questionId } = req.params;
        const { answer } = req.body;
        if (!questionId || !answer) {
            return res.sendStatus(http_1.HTTP.BAD_REQUEST.CODE);
        }
        const questionById = yield Question_1.Question.findById(questionId);
        if (!questionById) {
            return res.sendStatus(http_1.HTTP.NOT_FOUND.CODE);
        }
        if (questionById.rightAnswer === answer) {
            return res.status(http_1.HTTP.OK.CODE).json({
                status: "hit",
            });
        }
        return res.status(http_1.HTTP.OK.CODE).json({
            status: "miss",
        });
    });
}
exports.validate = validate;
