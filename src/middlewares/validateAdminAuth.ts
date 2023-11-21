import { Request, Response, NextFunction } from "express";
import jwt, { TokenExpiredError } from "jsonwebtoken";
import { config } from "../api.config";
import { HTTP } from "../utils/http";

export async function validateAdminAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.adminAuthToken;

  if (!token) {
    return res.status(401).json({ message: "Admin Auth token not found." });
  }

  try {
    jwt.verify(token, config.ADMIN_SECRET) as { id: string };

    next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      res
        .status(HTTP.UNAUTHORIZED.CODE)
        .json({ message: "Admin Auth Token expirado." });
    } else {
      res
        .status(HTTP.BAD_REQUEST.CODE)
        .json({ message: "Invalid token provided" });
    }
  }
}
