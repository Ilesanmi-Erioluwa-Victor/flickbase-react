const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Connected successfully on : ${port}`);
});
