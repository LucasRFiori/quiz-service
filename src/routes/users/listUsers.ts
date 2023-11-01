import { Request, Response } from "express";
import { User } from "../../Models/User";
import { HTTP } from "../../utils/http";

export async function listUsers(req: Request, res: Response) {
  try {
    const users = await User.find();

    res.status(HTTP.OK.CODE).json(users);
  } catch (e) {
    console.log(e);
  }
}
