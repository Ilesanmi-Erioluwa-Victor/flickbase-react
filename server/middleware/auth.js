const passport = require("passport");
const { ApiError } = require("../middleware/Apierror");
const httpStatus = require("http-status");

const auth = () => async (req, res, next) => {
  return new Promise((resolved, reject) => {})
    .then(() => next())
    .catch((err) => next(err));
};

module.exports = auth;
