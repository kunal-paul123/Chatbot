const express = require("express");
const {
  getAllUser,
  userSignup,
  userLogin,
} = require("../controllers/userController");
const {
  validate,
  signupValidator,
  loginValidator,
} = require("../utils/validator");
const router = express.Router();

router.route("/").get(getAllUser);
router.route("/signup").post(validate(signupValidator), userSignup);
router.route("/login").post(validate(loginValidator), userLogin);

module.exports = router;
