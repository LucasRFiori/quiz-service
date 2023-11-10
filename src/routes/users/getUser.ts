import { Request, Response } from "express";
import { User } from "../../Models/User";
import { HTTP } from "../../utils/http";
import CustomRequest from "../../typings/express";

export async function getUser(req: CustomRequest, res: Response) {
  try {
    const userId = req?.userId;

    if (!userId) {
      return res.status(HTTP.BAD_REQUEST.CODE).json(HTTP.BAD_REQUEST.MESSAGE);
    }

    const userById = await User.findById(userId).select("-password");

    if (!userById) {
      return res.sendStatus(HTTP.NOT_FOUND.CODE);
    }

    return res.status(HTTP.OK.CODE).json(userById);
  } catch (e) {
    console.log(e);
  }
}
