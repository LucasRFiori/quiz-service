import { Request, Response } from "express";
import { HTTP } from "../../utils/http";
import { User } from "../../Models/User";
import { convertToMinutesAndSeconds } from "../../utils/convertToTimeAndSeconds";

interface UpdateUserScoreBody {
  score?: number;
  time?: number;
}

interface UpdateUserParams {
  userId?: string;
}

export async function updateUserScore(
  req: Request<UpdateUserParams, any, UpdateUserScoreBody>,
  res: Response
) {
  const { userId } = req.params;

  if (!userId) {
    return res.status(HTTP.BAD_REQUEST.CODE).json({
      error: "Missing userId.",
    });
  }

  const body = req.body;

  if (!body.score || !body.time) {
    return res.status(HTTP.BAD_REQUEST.CODE).json({
      error: "Missing score or time to update.",
    });
  }

  const { score, time } = req.body;

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      score,
      quizTime: time,
      formattedTime: convertToMinutesAndSeconds(time ?? 0),
    },
    { new: true }
  );

  if (!updatedUser) {
    return res.status(HTTP.NOT_FOUND.CODE).json({
      error: "User not found.",
    });
  }

  // Return a single response
  return res.status(HTTP.CREATED.CODE).json(updatedUser);
}
