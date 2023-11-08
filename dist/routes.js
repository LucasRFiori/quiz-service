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
exports.router = (0, express_1.Router)();
// User
exports.router.get("/users", listUsers_1.listUsers);
exports.router.get("/users/:userId", getUser_1.getUser);
exports.router.post("/users", createUser_1.createUser);
exports.router.patch("/users/:userId", updateUser_1.updateUser);
exports.router.delete("/users/:userId", deleteUser_1.deleteUser);
//Question
exports.router.get("/questions/list", listQuestions_1.listQuestions);
exports.router.get("/questions", getRandomQuestions_1.getRandomQuestions);
exports.router.post("/questions", createQuestion_1.createQuestion);
exports.router.post("/questions/createListOfQuestions", createQuestions_1.createQuestions);
exports.router.delete("/questions/deleteAllQuestions", deleteAllQuestions_1.deleteAllQuestions);
exports.router.delete("/questions/:questionId", deleteQuestion_1.deleteQuestion);
// Validate answer
exports.router.post("/answers/validate/:questionId", validate_1.validate);
// Score
exports.router.post("/score/:userId", updateUserScore_1.updateUserScore);
//Login
exports.router.post("/login", loginUser_1.LoginUser);
//Ranking
exports.router.get("/ranking", getRanking_1.getRanking);
