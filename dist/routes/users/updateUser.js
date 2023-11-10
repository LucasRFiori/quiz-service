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
exports.updateUser = void 0;
const User_1 = require("../../Models/User");
const http_1 = require("../../utils/http");
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            if (!req.body) {
                return res.status(http_1.HTTP.BAD_REQUEST.CODE).json({
                    error: "Need a field to update.",
                });
            }
            const user = yield User_1.User.findByIdAndUpdate(userId, Object.assign({}, req.body));
            if (!user) {
                return res.status(http_1.HTTP.NOT_FOUND.CODE).json({
                    error: "User not found.",
                });
            }
            return res.sendStatus(http_1.HTTP.OK.CODE);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.updateUser = updateUser;
