const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

//config
dotenv.config();

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//Import Routes
const user = require("./routes/userRoute");

app.use("/api/v1", user);

module.exports = app;
