const asyncCatch = require("../utils/asyncCatch");
const User = require("../models/userModel");
const AppError = require("../utils/appError");

// @ desc  Auth user and get token
//@route  POST /api/users/login
//@access Public
exports.getUserProfile = asyncCatch(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    return next(new AppError("User not found", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
  });
});

// @ desc Update user profile
//@route  POST /api/users/profile
//@access Private

exports.updateUserProfile = asyncCatch(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    return next(new AppError("User not found", 404));
  }
  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  if (req.body.password) {
    user.password = req.body.password;
  }
  const updatedUser = await user.save();
  res.status(200).json({
    status: "success",
    data: {
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    },
  });
});
