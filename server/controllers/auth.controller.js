const httpStatus = require("http-status");

const { authService, emailService } = require("../services");

const authController = {
  // register user
  async register(req, res, next) {
    try {
      const { email, password } = req.body;
      //    created User
      const user = await authService.createUser(email, password);

      //   Generate Token for user
      const token = await authService.genAuthToken(user);

    //  send verification email
    await emailService.registerEmail(email, user)
      //   setting res.cookie to user
      res.cookie("x-access-token", token).status(httpStatus.CREATED).send({
        user,
        token,
      });

      //   res.json(user);

      console.log(email, password);
    } catch (error) {
      // res.status(httpStatus.BAD_REQUEST).send(error.message);
      next(error);
    }
  },

  // signin
  async signin(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await authService.signInWithEmailAndPassword(
        email,
        password
      );

      const token = await authService.genAuthToken(user);

      res.cookie("x-access-token", token).status(httpStatus.CREATED).send({
        user,
        token,
      });
    } catch (error) {
      // res.status(httpStatus.BAD_REQUEST).send(error.message);
      next(error);
    }
  },

  // isAuth
  async isauth(req, res, next) {
    res.json(req.user);
  },

  async testrole(req, res, next) {
    res.json({ Message: "You are permitted" });
  },
};

module.exports = authController;
