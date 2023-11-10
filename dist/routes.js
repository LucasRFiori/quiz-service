"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const createUser_1 = require("./routes/users/createUser");
const updateUser_1 = require("./routes/users/updateUser");
const listUsers_1 = require("./routes/users/listUsers");
const getUser_1 = require("./routes/users/getUser");
const createQuestion_1 = require("./routes/questions/createQuestion");
const listQuestions_1 = require("./routes/questions/listQuestions");
const getRandomQuestions_1 = require("./routes/questions/getRandomQuestions");
const createQuestions_1 = require("./routes/questions/createQuestions");
const validate_1 = require("./routes/answers/validate");
const updateUserScore_1 = require("./routes/score/updateUserScore");
const loginUser_1 = require("./routes/login/loginUser");
const deleteUser_1 = require("./routes/users/deleteUser");
const deleteQuestion_1 = require("./routes/questions/deleteQuestion");
const getRanking_1 = require("./routes/ranking/getRanking");
const deleteAllQuestions_1 = require("./routes/questions/deleteAllQuestions");
const validateJwt_1 = require("./middlewares/validateJwt");
exports.router = (0, express_1.Router)();
// Users
exports.router.get("/users", listUsers_1.listUsers);
// User
exports.router.get("/user", validateJwt_1.validateJwt, getUser_1.getUser);
exports.router.post("/user", createUser_1.createUser);
exports.router.patch("/user/:userId", updateUser_1.updateUser);
exports.router.delete("/user/:userId", deleteUser_1.deleteUser);
//Question
exports.router.get("/questions/list", listQuestions_1.listQuestions);
exports.router.get("/questions", validateJwt_1.validateJwt, getRandomQuestions_1.getRandomQuestions);
exports.router.post("/questions", createQuestion_1.createQuestion);
exports.router.post("/questions/createListOfQuestions", createQuestions_1.createQuestions);
exports.router.delete("/questions/deleteAllQuestions", deleteAllQuestions_1.deleteAllQuestions);
exports.router.delete("/questions/:questionId", deleteQuestion_1.deleteQuestion);
// Validate answer
exports.router.post("/answers/validate/:questionId", validateJwt_1.validateJwt, validate_1.validate);
// Score
exports.router.post("/score", validateJwt_1.validateJwt, updateUserScore_1.updateUserScore);
//Login
exports.router.post("/login", loginUser_1.LoginUser);
//Ranking
exports.router.get("/ranking", validateJwt_1.validateJwt, getRanking_1.getRanking);
