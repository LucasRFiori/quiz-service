import { Router } from "express";
import { createUser } from "./routes/users/createUser";
import { updateUser } from "./routes/users/updateUser";
import { listUsers } from "./routes/users/listUsers";
import { getUser } from "./routes/users/getUser";
import { createQuestion } from "./routes/questions/createQuestion";
import { listQuestions } from "./routes/questions/listQuestions";
import { getRandomQuestions } from "./routes/questions/getRandomQuestions";
import { createQuestions } from "./routes/questions/createQuestions";
import { validate } from "./routes/answers/validate";
import { updateUserScore } from "./routes/score/updateUserScore";
import { LoginUser } from "./routes/login/loginUser";
import { deleteUser } from "./routes/users/deleteUser";
import { deleteQuestion } from "./routes/questions/deleteQuestion";
import { getRanking } from "./routes/ranking/getRanking";
import { deleteAllQuestions } from "./routes/questions/deleteAllQuestions";
import { validateJwt } from "./middlewares/validateJwt";

export const router = Router();

// Users
router.get("/users", listUsers);

// User
router.get("/user", validateJwt, getUser);
router.post("/user", createUser);
router.patch("/user/:userId", updateUser);
router.delete("/user/:userId", deleteUser);

//Question
router.get("/questions/list", listQuestions);
router.get("/questions", validateJwt, getRandomQuestions);
router.post("/questions", createQuestion);
router.post("/questions/createListOfQuestions", createQuestions);
router.delete("/questions/deleteAllQuestions", deleteAllQuestions);
router.delete("/questions/:questionId", deleteQuestion);

// Validate answer
router.post("/answers/validate/:questionId", validateJwt, validate);

// Score
router.post("/score", validateJwt, updateUserScore);

//Login
router.post("/login", LoginUser);

//Ranking
router.get("/ranking", validateJwt, getRanking);
