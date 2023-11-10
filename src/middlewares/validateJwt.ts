import { Request, Response, NextFunction } from "express";
import jwt, { TokenExpiredError } from "jsonwebtoken";
import { config } from "../api.config";
import { HTTP } from "../utils/http";

interface CustomRequest extends Request {
  userId?: string;
}

export async function validateJwt(
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.authToken;

  if (!token) {
    return res.status(401).json({ message: "Auth token not found." });
  }

  try {
    const payload = jwt.verify(token, config.JWT_SECRET) as { id: string };

    req.userId = payload.id;

    next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      res.status(HTTP.UNAUTHORIZED.CODE).json({ message: "Login expirado." });
    } else {
      res
        .status(HTTP.BAD_REQUEST.CODE)
        .json({ message: "Invalid token provided" });
    }
  }
}
