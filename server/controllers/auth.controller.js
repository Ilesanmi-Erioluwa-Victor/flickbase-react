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
      return token;
      res.json(user);

      console.log(email, password);
    } catch (error) {
      console.log(error.message);
    }
  },
};

module.exports = authController;
