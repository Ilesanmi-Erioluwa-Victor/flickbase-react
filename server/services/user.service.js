const { ApiError } = require("../middleware/Apierror");
const httpStatus = require("http-status");
const jwt = require ("jsonwebtoken")
require("dotenv").config()

// Models
const { User } = require("../models/user");

const findUserByEmail = async (email) => {
  return User.findOne({ email });
};

const findUserById = async (_id) => {
  return User.findById(_id);
};

const updateUserProfile = async (req) => {
  try {
    const user = await User.findByIdAndUpdate(
      {
        _id: req.user._id,
      },
      {
        $set: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          age: req.body.age,
        },
      },
      { new: true }
    );

    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, "Sorry, No user found...");
    }

    return user;
  } catch (error) {
    throw error;
  }
};


const updateUserEmail =async (req) => {

    try {
     
      if(await User.emailTaken(req.body.newemail)) {
        throw new ApiError(httpStatus.NOT_FOUND, "Sorry, email taken already....")
      }

      const user = await User.findOneAndUpdate(
        {_id : req.user._id, email : req.user.email},
        {
          "$set" : {
            email : req.body.newemail,
            verified : false
          }
        },
        {new : true}
      )

       if (!user) {
         throw new ApiError(httpStatus.NOT_FOUND, "Sorry, No user found...");
       }
       
       return user

    } catch (error) {
      throw error;
    }
}

const validateToken = (token) => {
   return jwt.verify(token, process.env.DB_SECRET)
}

module.exports = {
  findUserByEmail,
  findUserById,
  updateUserProfile,
  updateUserEmail,
  validateToken,
};
