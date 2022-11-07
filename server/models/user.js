const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  firstname: {
    type: String,
    maxLength: 100,
    trim: true,
  },
  lastname: {
    type: String,
    maxLength: 100,
    trim: true,
  },
  age: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

// Hashing Password...
userSchema.pre("save", async function (next) {
  let user = this;
  if (user.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  }

  next();
});

// Methods..
userSchema.statics.emailTaken = async function (email) {
  const user = await this.findOne({ email });
  return !!user;
};

userSchema.methods.generateAuthToken = async function () {
  let user = await this;
  const userObj = { sub: user._id.toHexString(), email: user.email };
  // removed my expiresIn token
  const token = jwt.sign(userObj, process.env.DB_SECRET);
  return token;
};

userSchema.methods.comparePassword = async function (candidatePasword) {
  // Compare the un-hashed of user...
  const user = await this;

  const match = await bcrypt.compare(candidatePasword, user.password);

  return match;
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
