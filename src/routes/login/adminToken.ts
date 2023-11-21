import { Request, Response } from "express";
import { HTTP } from "../../utils/http";
import jwt from "jsonwebtoken";
import "dotenv";
import { config } from "../../api.config";

export async function adminToken(req: Request, res: Response) {
  try {
    const { adminSecret, email } = req.body;

    if (!adminSecret || !email) {
      return res.status(HTTP.BAD_REQUEST.CODE).json(HTTP.BAD_REQUEST.MESSAGE);
    }

    if (adminSecret !== config.ADMIN_SECRET) {
      return res.status(HTTP.UNAUTHORIZED.CODE).json(HTTP.UNAUTHORIZED.MESSAGE);
    }

    const token = jwt.sign({ email: email }, config.ADMIN_SECRET, {
      expiresIn: "15m",
    });

    res.cookie("adminAuthToken", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.json(token);
  } catch (e) {
    console.error(e);
  }
}
