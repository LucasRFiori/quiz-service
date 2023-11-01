import { Request, Response } from "express";
import { User } from "../../Models/User";
import { HTTP } from "../../utils/http";

export async function updateUser(req: Request, res: Response) {
  try {
    const { userId } = req.params;

    if (!req.body) {
      return res.status(HTTP.BAD_REQUEST.CODE).json({
        error: "Need a field to update.",
      });
    }

    const user = await User.findByIdAndUpdate(userId, { ...req.body });

    if (!user) {
      return res.status(HTTP.NOT_FOUND.CODE).json({
        error: "User not found.",
      });
    }

    return res.sendStatus(HTTP.OK.CODE);
  } catch (e) {
    console.log(e);
  }
}
