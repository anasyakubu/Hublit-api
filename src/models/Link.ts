import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  icon: { type: String },
  order: { type: Number, default: 0 }
}, { timestamps: true });

const Link = mongoose.model("Link", LinkSchema);

export default Link
