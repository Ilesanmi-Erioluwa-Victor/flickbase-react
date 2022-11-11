const httpStatus = require("http-status");
const { ApiError } = require("../middleware/Apierror");

// Services
const { userService } = require("../services");

const userController = {
  async profile(req, res, next) {
    try {
      const user = await userService.findUserById(req.user._id);
      if (!user) {
        return new ApiError(httpStatus.NOT_FOUND, "User noot Found...");
      }
      res.json(user);
    } catch (error) {
      next(error);
    }
  },
};
module.exports = userController;
