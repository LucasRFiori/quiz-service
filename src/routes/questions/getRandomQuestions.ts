import { Request, Response } from "express";
import { HTTP } from "../../utils/http";
import { Question } from "../../Models/Question";

export async function getRandomQuestions(req: Request, res: Response) {
  try {
    const randomQuestions = await Question.aggregate([
      { $sample: { size: 10 } },
      { $project: { __v: 0, rightAnswer: 0 } },
    ]);

    res.status(HTTP.OK.CODE).json(randomQuestions);
  } catch (e) {
    console.log(e);
  }
}
