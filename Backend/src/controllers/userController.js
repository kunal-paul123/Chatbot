const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      message: "OK",
      users,
    });
  } catch (error) {
    return res.status(200).json({
      message: "Error",
      cause: error.message,
    });
  }
};

exports.userSignup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });

    await user.save();

    return res.status(201).json({
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    return res.status(200).json({
      message: "Error",
      cause: error.message,
    });
  }
};
