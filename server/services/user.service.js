// Models
const { User } = require("../models/user");

const findUserByEmail = async (email) => {
  return User.findOne({ email });
};

const findUserById = async(_id) => {
   return User.findById(_id)
}

const updateUserProfile = async() => {

}

module.exports = {
  findUserByEmail,
  findUserById,
  updateUserProfile
};
