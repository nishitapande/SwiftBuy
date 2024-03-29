const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @ desc  Auth user and get token
//@route  POST /api/users/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (user && user.comparePassword(password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
    res.send("userr found");
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

module.exports = authUser;
