const express = require("express");
const app = express();
const dotenv = require("dotenv");

//config
dotenv.config();

app.use(express.json());

//Import Routes
const user = require("./routes/userRoute");

app.use("/api/v1", user);

module.exports = app;
