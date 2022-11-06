const User = require("../models/User.js");
const bcrypt = require("bcrypt");

exports.register = async (req, res, next) => {
  const { userName, email, password } = req.body;
  const saltPassword = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, saltPassword);
  try {
    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
    });
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.login = (req, res, next) => {
  res.send("login route");
};

exports.forgotPassword = (req, res, next) => {
  res.send("forgot password route");
};

exports.resetPassword = (req, res, next) => {
  res.send("reset password route");
};
