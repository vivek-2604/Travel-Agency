import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, // Ensure no duplicate emails
    },
  },
  { timestamps: true }
);

export default mongoose.model("News", newsSchema);
