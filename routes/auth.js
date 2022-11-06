const express = require("express");
const router = express.Router();

const {
  register,
  login,
  forgotpassword,
  resetPassword,
} = require("../controllers/auth");

router.route("/register").post(() => {
  register;
});

router.route("/login").post(() => {
  login;
});

router.route("/forgotpassword").post(() => {
  forgotpassword;
});

router.route("/resetPassword/:resetToken").post(() => {
  resetPassword;
});

module.exports = router;
