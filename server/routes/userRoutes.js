const express = require("express");
const router = express.Router();
const authUser = require("../controllers/userController");
const authController = require("./../controllers/authController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;
