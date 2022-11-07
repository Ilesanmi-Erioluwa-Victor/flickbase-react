const httpStatus = require("http-status");

const { authService } = require("../services");

const authController = {
  // register user
  async register(req, res, next) {
    try {
      const { email, password } = req.body;
      //    created User
      const user = await authService.createUser(email, password);

      //   Generate Token for user
      const token = await authService.genAuthToken(user);
      //   setting res.cookie to user
      res.cookie("x-access-token", token).status(httpStatus.CREATED).send({
        user,
        token,
      });

      //   res.json(user);

      console.log(email, password);
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).send(error.message);
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
      res.status(httpStatus.BAD_REQUEST).send(error.message);
    }
  },
};

module.exports = authController;
