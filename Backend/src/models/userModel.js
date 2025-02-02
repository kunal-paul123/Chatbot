const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  role: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  chats: [chatSchema],
});

module.exports = mongoose.model("User", userSchema);
