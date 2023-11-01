import { Request, Response } from "express";
import { HTTP } from "../../utils/http";
import { Question } from "../../Models/Question";

export async function deleteQuestion(req: Request, res: Response) {
  const { questionId } = req.params;

  if (!questionId) {
    return res.status(HTTP.BAD_REQUEST.CODE).json(HTTP.BAD_REQUEST.MESSAGE);
  }

  await Question.findByIdAndDelete(questionId);

  return res.sendStatus(HTTP.OK.CODE);
}
