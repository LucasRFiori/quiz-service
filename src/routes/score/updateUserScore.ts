import { Request, Response } from "express";
import { HTTP } from "../../utils/http";
import { User } from "../../Models/User";
import { convertToMinutesAndSeconds } from "../../utils/convertToTimeAndSeconds";
import CustomRequest from "../../typings/express";

export async function updateUserScore(req: CustomRequest, res: Response) {
  const userId = req.userId;

  if (!userId) {
    return res.status(HTTP.BAD_REQUEST.CODE).json({
      error: "Missing userId -> Token.",
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
  ).select("-password -__v");

  if (!updatedUser) {
    return res.status(HTTP.NOT_FOUND.CODE).json({
      error: "User not found.",
    });
  }

  return res.status(HTTP.CREATED.CODE).json(updatedUser);
}
