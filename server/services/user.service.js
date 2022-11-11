// Models
const { User } = require("../models/user");

const findUserByEmail = async (email) => {
  return User.findOne({ email });
};

const findUserById = async(_id) => {
   return User.findById(_id)
}

const updateUserProfile = async (req) => {
   try {
     const user =  await User.findByIdAndUpdate({
      _id : req.user._id,
     },
     {"$set" : {
       firstname : req.body.firstname,
       lastname : req.body.lastname,
       age : req.body.age
     }},
     {new : true}
     )
   } catch (error) {
    throw error
   }
}

module.exports = {
  findUserByEmail,
  findUserById,
  updateUserProfile
};
