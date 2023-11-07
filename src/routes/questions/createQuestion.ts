import { Request, Response } from "express";
import { HTTP } from "../../utils/http";
import { Question } from "../../Models/Question";
import { CreateQuestionBody } from "../../typings/question.type";

export async function createQuestion(req: Request, res: Response) {
  try {
    const { video_url, answers, rightAnswer } = req.body as CreateQuestionBody;

    if (!video_url || !answers || !rightAnswer) {
      return res.status(HTTP.BAD_REQUEST.CODE).json(HTTP.BAD_REQUEST.MESSAGE);
    }

    const question = await Question.create({
      video_url,
      answers,
      rightAnswer,
    });

    return res.status(HTTP.OK.CODE).json(question);
  } catch (e) {
    console.log(e);
  }
}
