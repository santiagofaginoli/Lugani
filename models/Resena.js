/** @format */

import { Schema, model, models } from "mongoose";

const resenaSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlenght: [40, "title must be less than 40 characters"],
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlenght: [200, "title must be less than 100 characters"],
    },
    numStars: {
      type: String,
      required: [true, "punctuation required"],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Resena || model("Resena", resenaSchema);
