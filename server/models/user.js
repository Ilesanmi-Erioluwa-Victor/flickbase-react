const mongoose = require("mongoose");
require("dotenv").config();

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {},
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
