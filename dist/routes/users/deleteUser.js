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
exports.deleteUser = void 0;
const http_1 = require("../../utils/http");
const User_1 = require("../../Models/User");
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userId } = req.params;
        if (!userId) {
            return res.status(http_1.HTTP.BAD_REQUEST.CODE).json(http_1.HTTP.BAD_REQUEST.MESSAGE);
        }
        yield User_1.User.findByIdAndDelete(userId);
        return res.sendStatus(http_1.HTTP.OK.CODE);
    });
}
exports.deleteUser = deleteUser;
