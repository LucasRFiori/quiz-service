import { Request, Response } from "express";
import { User } from "../../Models/User";
import { HTTP } from "../../utils/http";
import Bcrypt from "bcryptjs";

export async function createUser(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(HTTP.BAD_REQUEST.CODE).json(HTTP.BAD_REQUEST.MESSAGE);
    }

    const userByEmail = await User.findOne({ email });

    if (userByEmail) {
      return res.status(HTTP.FORBIDDEN.CODE).json({
        error: `${email} already exists.`,
      });
    }

    const hashedPassword = await Bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(HTTP.CREATED.CODE).json(user);
  } catch (e) {
    console.log(e);
  }
}
