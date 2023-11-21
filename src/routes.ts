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
import { loginUser } from "./routes/login/loginUser";
import { deleteUser } from "./routes/users/deleteUser";
import { deleteQuestion } from "./routes/questions/deleteQuestion";
import { getRanking } from "./routes/ranking/getRanking";
import { deleteAllQuestions } from "./routes/questions/deleteAllQuestions";
import { validateAuth } from "./middlewares/validateAuth";
import { validateAdminAuth } from "./middlewares/validateAdminAuth";
import { adminToken } from "./routes/login/adminToken";

export const router = Router();

// Users
router.get("/users", validateAdminAuth, listUsers);

// User
router.get("/user", validateAuth, getUser);
router.post("/user", createUser);
router.patch("/user/:userId", validateAdminAuth, updateUser);
router.delete("/user/:userId", validateAdminAuth, deleteUser);

//Question
router.get("/questions/list", validateAdminAuth, listQuestions);
router.get("/questions", validateAuth, getRandomQuestions);
router.post("/questions", validateAdminAuth, createQuestion);
router.post(
  "/questions/createListOfQuestions",
  validateAdminAuth,
  createQuestions
);
router.delete(
  "/questions/deleteAllQuestions",
  validateAdminAuth,
  deleteAllQuestions
);
router.delete("/questions/:questionId", validateAdminAuth, deleteQuestion);

// Validate answer
router.post("/answers/validate/:questionId", validateAuth, validate);

// Score
router.post("/score", validateAuth, updateUserScore);

//Login
router.post("/login", loginUser);

//Ranking
router.get("/ranking", validateAuth, getRanking);

// GENERATE ADMIN TOKEN
router.post("/login/admin", adminToken);
