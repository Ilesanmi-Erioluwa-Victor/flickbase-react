const httpStatus = require("http-status");

// Middleware
const { ApiError } = require("../middleware/Apierror");
// Models
const { User } = require("../models/user");
// Services
const userService = require("./user.service");

const createUser = async (email, password) => {
  try {
    // 1. Check if user email is already taken
    if (await User.emailTaken(email)) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "Sorry, email already taken..."
      );
    }

    // else. Register new user to MongoDb
    const user = new User({
      email,
      password,
    });
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

const genAuthToken = async (user) => {
  // generateAuthToken: method coming from user.js schema Method..
  const token = await user.generateAuthToken();
  return token;
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    const user = await userService.findUserByEmail(email);

    if (!user) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Sorry, No email found...");
    }

    if (!(await user.comparePassword(password))) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Sorry, Bad Password...");
    }

    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  genAuthToken,
  signInWithEmailAndPassword,
};
