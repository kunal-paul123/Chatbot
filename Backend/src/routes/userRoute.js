const express = require("express");
const {
  getAllUser,
  userSignup,
  userLogin,
  verifyUser,
} = require("../controllers/userController");
const {
  validate,
  signupValidator,
  loginValidator,
} = require("../utils/validator");
const { verifyToken } = require("../utils/token-manager");
const router = express.Router();

router.route("/").get(getAllUser);
router.route("/signup").post(validate(signupValidator), userSignup);
router.route("/login").post(validate(loginValidator), userLogin);
router.route("/auth-status").get(verifyToken, verifyUser);

module.exports = router;
