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

export const router = Router();

// User
router.get("/users", listUsers);
router.get("/users/:userId", getUser);
router.post("/users", createUser);
router.patch("/users/:userId", updateUser);
router.delete("/users/:userId", deleteUser);

//Question
router.get("/questions/list", listQuestions);
router.get("/questions", getRandomQuestions);
router.post("/questions", createQuestion);
router.post("/createListOfQuestions", createQuestions);
router.delete("/questions/:questionId", deleteQuestion);

// Validate answer
router.post("/answers/validate/:questionId", validate);

// Score
router.post("/score/:userId", updateUserScore);

//Login
router.post("/login", LoginUser);
