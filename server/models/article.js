const mongoose = require("mongoose");
require("dotenv").config();

const articleSchema = mongoose.Schema({
  title: {
    type: String,
    maxLength: 100,
    required: [true, "Its a must that you have title."],
  },
  content: {
    type: String,
    required: [true, "Its a must that you have content."],
  },
  excerpt: {
    type: String,
    required: [true, "You need to add some excerpt."],
    maxLength: 500,
  },
  score: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },

  actors: {},
});

const Article = mongoose.model("Article", articleSchema);

module.exports = { Article };
