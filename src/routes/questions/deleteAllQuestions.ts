import { Request, Response } from "express";
import { Question } from "../../Models/Question";

export async function deleteAllQuestions(req: Request, res: Response) {
  try {
    await Question.deleteMany();

    res.sendStatus(200);
  } catch {
    console.error("Error to delete all questions.");
  }
}
