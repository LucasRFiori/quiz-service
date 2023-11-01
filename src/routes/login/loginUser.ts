import { Request, Response } from "express";
import { HTTP } from "../../utils/http";
import { User } from "../../Models/User";

export async function LoginUser(req: Request, res: Response) {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(HTTP.BAD_REQUEST.CODE).json(HTTP.BAD_REQUEST.MESSAGE);
    }

    const userByEmail = await User.find({ email });

    if (userByEmail.length) {
      return res.status(HTTP.OK.CODE).json({
        userId: userByEmail[0]._id,
      });
    }

    const user = await User.create({
      name,
      email,
    });

    return res.status(HTTP.CREATED.CODE).json(user);
  } catch (e) {
    console.error(e);
  }
}
