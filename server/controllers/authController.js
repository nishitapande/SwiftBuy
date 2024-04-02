const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncCatch = require("../utils/asyncCatch");
const AppError = require("../utils/appError");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = asyncCatch(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return next(new Error("User already exists", 400));
  }
  const newUser = await User.create(req.body);

  const token = signToken(newUser._id);
  res.status(200).json({
    status: "success",
    token,
    user: newUser,
  });
});

exports.login = asyncCatch(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }
  const user = await User.findOne({ email: email });
  if (!user) {
    return next(new AppError("Incorrect email or password", 401));
  }

  const correctPassword = await user.comparePassword(password, user.password);
  if (!user || !correctPassword) {
    return next(new AppError("Invalid password or email", 401));
  }

  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    token,
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});
