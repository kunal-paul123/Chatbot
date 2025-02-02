const mongoose = require("mongoose");

const mongodb = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log("Database Connection Failed:", err));
};

module.exports = mongodb;
