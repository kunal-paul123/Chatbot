const express = require("express");
const { verifyToken } = require("../utils/token-manager");
const { validate, chatCompletionValidator } = require("../utils/validator");
const { generateChatCompletion } = require("../controllers/chatControllers");
const router = express.Router();

router
  .route("/new")
  .post(validate(chatCompletionValidator), verifyToken, generateChatCompletion);
