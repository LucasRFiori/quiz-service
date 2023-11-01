import { Request, Response } from "express";
import { HTTP } from "../../utils/http";
import { Question } from "../../Models/Question";

export async function getRandomQuestion(req: Request, res: Response) {
  try {
    const questions = await Question.aggregate([{ $sample: { size: 10 } }]);

    res.status(HTTP.OK.CODE).json(questions);
  } catch (e) {
    console.log(e);
  }
}
