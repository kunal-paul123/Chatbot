const express = require("express");
const { getAllUser, userSignup } = require("../controllers/userController");
const { validate, signupValidator } = require("../utils/validator");
const router = express.Router();

router.route("/").get(getAllUser);
router.route("/signup").post(validate(signupValidator), userSignup);

module.exports = router;
