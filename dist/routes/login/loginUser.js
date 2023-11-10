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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUser = void 0;
const http_1 = require("../../utils/http");
const User_1 = require("../../Models/User");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv");
const api_config_1 = require("../../api.config");
function LoginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(http_1.HTTP.BAD_REQUEST.CODE).json(http_1.HTTP.BAD_REQUEST.MESSAGE);
            }
            const user = yield User_1.User.findOne({ email });
            if (!user) {
                return res
                    .status(401)
                    .json({ message: "Nome de usuário ou senha inválidos." });
            }
            const passwordMatch = yield bcryptjs_1.default.compare(password, user.password);
            if (!passwordMatch) {
                return res
                    .status(401)
                    .json({ message: "Nome de usuário ou senha inválidos." });
            }
            const token = jsonwebtoken_1.default.sign({ id: user._id }, api_config_1.config.JWT_SECRET, {
                expiresIn: "15m",
            });
            res.cookie("authToken", token, {
                httpOnly: true,
                sameSite: "none",
                secure: true,
            });
            res.json({ message: "Logged in." });
        }
        catch (e) {
            console.error(e);
        }
    });
}
exports.LoginUser = LoginUser;
