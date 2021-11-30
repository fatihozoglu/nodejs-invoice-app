const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();
const homePage = require("./routers/homePage");

const app = express();

mongoose.connect(process.env.DB_CONNECTION);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", homePage);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started listening at ${port}.`);
});
