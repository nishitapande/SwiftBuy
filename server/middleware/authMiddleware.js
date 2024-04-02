const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const User = require("../models/userModel");
const asyncCatch = require("./../utils/asyncCatch");
const AppError = require("../utils/appError");

exports.protect = asyncCatch(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(new AppError("Not Authorized", 401));
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded.id);
  if (!req.user) {
    return next(new AppError("the user does not exist", 401));
  }

  next();
});
