import { Request, Response } from "express";
import { HTTP } from "../../utils/http";
import { User } from "../../Models/User";
import Bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv";
import { config } from "../../api.config";

export async function loginUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(HTTP.BAD_REQUEST.CODE).json(HTTP.BAD_REQUEST.MESSAGE);
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Nome de usuário ou senha inválidos." });
    }

    const passwordMatch = await Bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res
        .status(401)
        .json({ message: "Nome de usuário ou senha inválidos." });
    }

    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.cookie("authToken", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.json({ message: "Logged in." });
  } catch (e) {
    console.error(e);
  }
}
