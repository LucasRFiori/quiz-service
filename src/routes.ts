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

export const router = Router();

router.get("/users", listUsers);
router.get("/users/:userId", getUser);
router.post("/users", createUser);
router.patch("/users/:userId", updateUser);

router.get("/questions/list", listQuestions);
router.get("/questions", getRandomQuestions);
router.post("/questions", createQuestion);
router.post("/createListOfQuestions", createQuestions);

router.post("/answers/validate/:questionId", validate);
