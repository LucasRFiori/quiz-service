import { Request, Response } from "express";
import { HTTP } from "../../utils/http";
import { Question } from "../../Models/Question";

export async function validate(req: Request, res: Response) {
  const { questionId } = req.params;
  const { answer } = req.body;

  if (!questionId || !answer) {
    return res.sendStatus(HTTP.BAD_REQUEST.CODE);
  }

  const questionById = await Question.findById(questionId);

  if (!questionById) {
    return res.sendStatus(HTTP.NOT_FOUND.CODE);
  }

  if (questionById.rightAnswer === answer) {
    return res.status(HTTP.OK.CODE).json({
      status: "hit",
    });
  }

  return res.status(HTTP.OK.CODE).json({
    status: "miss",
  });
}
