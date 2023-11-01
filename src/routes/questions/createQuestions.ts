import { Request, Response } from "express";
import { HTTP } from "../../utils/http";
import { Question } from "../../Models/Question";
import { CreateQuestionBody } from "../../typings/question.type";

export async function createQuestions(req: Request, res: Response) {
  try {
    const questionsData = req.body as CreateQuestionBody[];

    if (!Array.isArray(questionsData) || questionsData.length === 0) {
      return res.status(HTTP.BAD_REQUEST.CODE).json(HTTP.BAD_REQUEST.MESSAGE);
    }

    const createdQuestions = [];

    for (const questionInfo of questionsData) {
      const { title, answers, rightAnswer } = questionInfo;

      if (!title || !answers || !rightAnswer) {
        return res.status(HTTP.BAD_REQUEST.CODE).json(HTTP.BAD_REQUEST.MESSAGE);
      }

      const createdQuestion = await Question.create({
        title,
        answers,
        rightAnswer,
      });

      createdQuestions.push(createdQuestion);
    }

    return res.status(HTTP.OK.CODE).json(createdQuestions);
  } catch (e) {
    console.log(e);
  }
}
