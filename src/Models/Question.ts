import { Schema, model } from "mongoose";

export const Question = model(
  "Question",
  new Schema({
    title: {
      type: String,
      required: true,
    },
    answers: {
      a: {
        type: String,
        required: true,
      },
      b: {
        type: String,
        required: true,
      },
      c: {
        type: String,
        required: true,
      },
      d: {
        type: String,
        required: true,
      },
    },
    rightAnswer: {
      type: String,
      enum: ["a", "b", "c", "d"],
      required: true,
    },
  })
);
