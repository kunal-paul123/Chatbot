const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//config
dotenv.config();

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//Import Routes
const user = require("./routes/userRoute");

app.use("/api/v1", user);

module.exports = app;
