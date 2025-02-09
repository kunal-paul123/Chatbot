const { configureOpenAI } = require("../config/openai-config");
const { OpenAIApi } = require("openai");
const User = require("../models/userModel");

exports.generateChatCompletion = async (req, res, next) => {
  const { message } = req.body;

  try {
    const user = await User.findById(res.locals.jwtData.id);

    if (!user) {
      return res.status(401).json({ message: "User Not Registered" });
    }

    //grab chats of user
    const chats = user.chats.map(({ role, content }) => ({ role, content }));
    chats.push({ content: message, role: "user" });
    user.chats.push({ content: message, role: "user" });

    //send all chats with new one to openai api
    const config = configureOpenAI();
    const openai = new OpenAIApi(config);

    //get latest response
    const chatResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      message: chats,
    });

    user.chats.push(chatResponse.data.choices[0].message);
    await user.save();

    return res.status(200).json({
      chats: user.chats,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
};
