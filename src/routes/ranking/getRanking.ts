import { Request, Response } from "express";
import { HTTP } from "../../utils/http";
import { User } from "../../Models/User";

export async function getRanking(req: Request, res: Response) {
  try {
    const users = await User.find({
      score: { $exists: true, $ne: null },
      quizTime: { $exists: true, $ne: null },
    }).select("-__v");

    users.sort((a: any, b: any) => {
      if (a.score === b.score) {
        return a.quizTime - b.quizTime;
      }
      return b.score - a.score;
    });

    return res.status(HTTP.OK.CODE).json(users);
  } catch (error) {
    return res
      .status(HTTP.INTERNAL_SERVER_ERROR.CODE)
      .json({ error: "Erro interno do servidor" });
  }
}
