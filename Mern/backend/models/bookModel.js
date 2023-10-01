import mongoose from "mongoose";
import { Schema } from "mongoose";
const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    }, // String is shorthand for {type: String}
    author: {
      type: String,
      required: true,
    },
    publishyear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamp: true,
  },
);
export const Book = mongoose.model("Book", BookSchema);
