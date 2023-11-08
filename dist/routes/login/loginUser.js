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
exports.LoginUser = void 0;
const http_1 = require("../../utils/http");
const User_1 = require("../../Models/User");
function LoginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email } = req.body;
            if (!name || !email) {
                return res.status(http_1.HTTP.BAD_REQUEST.CODE).json(http_1.HTTP.BAD_REQUEST.MESSAGE);
            }
            const userByEmail = yield User_1.User.find({ email });
            if (userByEmail.length) {
                return res.status(http_1.HTTP.OK.CODE).json({
                    _id: userByEmail[0]._id,
                });
            }
            const user = yield User_1.User.create({
                name,
                email,
            });
            return res.status(http_1.HTTP.CREATED.CODE).json(user);
        }
        catch (e) {
            console.error(e);
        }
    });
}
exports.LoginUser = LoginUser;
