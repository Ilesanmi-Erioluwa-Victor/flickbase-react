const { authService } = require("../services");

const authController = {
  // register user
  async register(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await authService.createUser(email, password);
      res.json(user);

      console.log(email, password);
    } catch (error) {
      console.log(error.message);
    }
  },
};

module.exports = authController;
