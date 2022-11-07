// Models
const { User } = require("../models/user");

const createUser = async (email, password) => {
  try {
    // 1. Check if user email is already taken
    if (await User.emailTaken(email)) {
      throw new Error("Sorry, email already taken...");
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
  } catch (error) {}
};

module.exports = {
  createUser,
  genAuthToken,
};
