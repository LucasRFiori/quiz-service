import { Request, Response } from "express";
import { User } from "../../Models/User";
import { HTTP } from "../../utils/http";

export async function createUser(req: Request, res: Response) {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(HTTP.BAD_REQUEST.CODE).json(HTTP.BAD_REQUEST.MESSAGE);
    }

    const userByEmail = await User.find({ email });

    if (userByEmail) {
      return res.status(HTTP.FORBIDDEN.CODE).json({
        error: `${email} already exists.`,
      });
    }

    const user = await User.create({
      name,
      email,
    });

    return res.status(HTTP.CREATED.CODE).json(user);
  } catch (e) {
    console.log(e);
  }
}
