import { Request, Response } from "express";
import { HTTP } from "../../utils/http";
import { Question } from "../../Models/Question";
import { CreateQuestionBody } from "../../typings/question.type";

export async function createQuestion(req: Request, res: Response) {
  try {
    const { title, answers, rightAnswer } = req.body as CreateQuestionBody;

    if (!title || !answers || !rightAnswer) {
      return res.status(HTTP.BAD_REQUEST.CODE).json(HTTP.BAD_REQUEST.MESSAGE);
    }

    const user = await Question.create({
      title,
      answers,
      rightAnswer,
    });

    return res.status(HTTP.OK.CODE).json(user);
  } catch (e) {
    console.log(e);
  }
}
