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
exports.updateUserScore = void 0;
const http_1 = require("../../utils/http");
const User_1 = require("../../Models/User");
const convertToTimeAndSeconds_1 = require("../../utils/convertToTimeAndSeconds");
function updateUserScore(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.userId;
        if (!userId) {
            return res.status(http_1.HTTP.BAD_REQUEST.CODE).json({
                error: "Missing userId -> Token.",
            });
        }
        const body = req.body;
        if (!body.score || !body.time) {
            return res.status(http_1.HTTP.BAD_REQUEST.CODE).json({
                error: "Missing score or time to update.",
            });
        }
        const { score, time } = req.body;
        const updatedUser = yield User_1.User.findByIdAndUpdate(userId, {
            score,
            quizTime: time,
            formattedTime: (0, convertToTimeAndSeconds_1.convertToMinutesAndSeconds)(time !== null && time !== void 0 ? time : 0),
        }, { new: true }).select("-password -__v");
        if (!updatedUser) {
            return res.status(http_1.HTTP.NOT_FOUND.CODE).json({
                error: "User not found.",
            });
        }
        return res.status(http_1.HTTP.CREATED.CODE).json(updatedUser);
    });
}
exports.updateUserScore = updateUserScore;
