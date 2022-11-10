const passport = require("passport");
const { ApiError } = require("../middleware/Apierror");
const httpStatus = require("http-status");
const { role } = require("../util/role");

const verify = (req, res, resolve, reject, rights) => async (err, user) => {
  if (err || !user) {
    return reject(
      new ApiError(
        httpStatus.UNAUTHORIZED,
        "Sorry, you are not unauthenticated...!!!"
      )
    );
  }
  req.user = {
    _id: user._id,
    email: user.email,
    role: user.role,
    firstname: user.firstname,
    lastname: user.lastname,
    age: user.age,
    verified: user.verified,
  };

  if (rights.length) {
    const action = rights[0];
    const resource = rights[1];
    const permissiom = role.can();
  }
  resolve();
};

const auth =
  (...rights) =>
  async (req, res, next) => {
    return new Promise((resolve, reject) => {
      passport.authenticate(
        "jwt",
        { session: false },
        verify(req, res, resolve, reject, rights)
      )(req, res, next);
    })
      .then(() => next())
      .catch((err) => next(err));
  };

module.exports = auth;
