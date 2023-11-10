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
exports.getRanking = void 0;
const http_1 = require("../../utils/http");
const User_1 = require("../../Models/User");
function getRanking(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield User_1.User.find({
                score: { $exists: true, $ne: null },
                quizTime: { $exists: true, $ne: null },
            }).select("-__v");
            users.sort((a, b) => {
                if (a.score === b.score) {
                    return a.quizTime - b.quizTime;
                }
                return b.score - a.score;
            });
            return res.status(http_1.HTTP.OK.CODE).json(users);
        }
        catch (error) {
            return res
                .status(http_1.HTTP.INTERNAL_SERVER_ERROR.CODE)
                .json({ error: "Erro interno do servidor" });
        }
    });
}
exports.getRanking = getRanking;
