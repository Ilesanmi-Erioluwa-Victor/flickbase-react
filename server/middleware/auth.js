const passport = require("passport");
const { ApiError } = require("../middleware/Apierror");
const httpStatus = require("http-status");
const { role } = require("../util/role");

const verify = (req, res, resolve, reject) => async (err, user) => {
  if (err || !user) {
    return reject(
      new ApiError(
        httpStatus.UNAUTHORIZED,
        "Sorry, you are not unauthenticated...!!!"
      )
    );
  }
  req.user = user;
  resolve();
};

const auth =
  (...rights) =>
  async (req, res, next) => {
    return new Promise((resolve, reject) => {
      passport.authenticate(
        "jwt",
        { session: false },
        verify(req, res, resolve, reject)
      )(req, res, next);
    })
      .then(() => next())
      .catch((err) => next(err));
  };

module.exports = auth;
