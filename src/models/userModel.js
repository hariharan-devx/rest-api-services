import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String,
});

const user = mongoose.models.User || mongoose.model("User", userSchema);

export { user };
