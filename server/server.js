const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const xss = require("xss-clean");
const mongoSanitise = require("express-mongo-sanitize");

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
mongoose.connect(mongoUri);

// PARSING MIDDLEWARE
app.use(bodyParser.json());

// SANITIZE MIDDLEWARE
app.use(xss());
app.use(mongoSanitise());

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Connected successfully on : ${port}`);
});
