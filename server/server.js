const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Connected successfully on : ${port}`);
});
