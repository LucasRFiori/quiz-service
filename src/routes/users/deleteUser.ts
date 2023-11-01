import { Request, Response } from "express";
import { HTTP } from "../../utils/http";
import { User } from "../../Models/User";

export async function deleteUser(req: Request, res: Response) {
  const { userId } = req.params;

  if (!userId) {
    return res.status(HTTP.BAD_REQUEST.CODE).json(HTTP.BAD_REQUEST.MESSAGE);
  }

  await User.findByIdAndDelete(userId);

  return res.sendStatus(HTTP.OK.CODE);
}
