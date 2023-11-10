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
exports.createUser = void 0;
const User_1 = require("../../Models/User");
const http_1 = require("../../utils/http");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email, password } = req.body;
            if (!name || !email || !password) {
                return res.status(http_1.HTTP.BAD_REQUEST.CODE).json(http_1.HTTP.BAD_REQUEST.MESSAGE);
            }
            const userByEmail = yield User_1.User.findOne({ email });
            if (userByEmail) {
                return res.status(http_1.HTTP.FORBIDDEN.CODE).json({
                    error: `${email} already exists.`,
                });
            }
            const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
            const user = yield User_1.User.create({
                name,
                email,
                password: hashedPassword,
            });
            return res.status(http_1.HTTP.CREATED.CODE).json(user);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.createUser = createUser;
