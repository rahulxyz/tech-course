const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./routes/index.js");
const cors = require("cors");

const port = process.env.PORT;
const dbUrl = process.env.DB_URL;

app.use(cors());
app.use(express.json());

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Check if connection is success
mongoose.connection.on("connected", function () {
  console.log("Connected to " + dbUrl);
});

//Check if connection is failed
mongoose.connection.on("error", function (error) {
  console.log("Connection error " + error);
});

app.use("/api", routes);

app.get("/health", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
