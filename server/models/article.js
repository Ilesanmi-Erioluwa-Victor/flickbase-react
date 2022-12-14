const mongoose = require("mongoose");
require("dotenv").config();
const aggregatePaginate = require( "mongoose-aggregate-paginate-v2")

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

  actors: {
    type: [String],
    required: true,
    validate: {
      validator: function (array) {
        // Validating the length of array..
        return array.length >= 2;
      },
      message: "You must add atleast Three actors",
    },
  },
  status: {
    type: String,
    required: true,
    enum: ["draft", "public"],
    default: "draft",
    index: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

articleSchema.plugin(aggregatePaginate);

const Article = mongoose.model("Article", articleSchema);

module.exports = { Article };
