const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please provide a username"],
    match: [
      /^[a-z][a-z0-9_]+[a-z0-9]$/g,
      "Please provide a username with more than 3 letters, all small letters and doesn't start by a symbol",
    ],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
    match: [/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    select: false,
    match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/g, "Please provide a password with at least one uppercase letter, one lowercase letter, one number and one special character"],
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

module.exports = mongoose.model("User", UserSchema);
