import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  kindeID: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  bio: { type: String },
  avatar: { type: String },
  theme: { type: String, default: "light" }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

export default User
