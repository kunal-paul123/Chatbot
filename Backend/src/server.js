const app = require("./app");
const dotenv = require("dotenv");
const database = require("./config/database");

//config
dotenv.config();

//connecting to databasez
database();

//start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is working on port 5000");
});
