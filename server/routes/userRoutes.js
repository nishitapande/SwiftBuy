const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router
  .route("/profile")
  .get(authMiddleware.protect, authController.getUserProfile)
  .put(authMiddleware.protect, authController.updateUserProfile);

module.exports = router;
