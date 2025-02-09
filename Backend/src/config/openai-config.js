const { OpenAI, Configuration } = require("openai");
const dotenv = require("dotenv");

dotenv.config();

exports.configureOpenAI = () => {
  const config = new Configuration({
    apiKey: process.env.OPEN_AI_SECRET,
    organization: process.env.OPEN_AI_ORGANIZATION_ID,
  });

  return config;
};
