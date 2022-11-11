const httpStatus = require("http-status");
const { ApiError } = require("../middleware/Apierror");

// Services
const { userService } = require("../services");

const userController = {
    async profile(req, res, next) {
        try {
            const user = await userService.findUserById(req.user_id)
        } catch (error) {
            
        }
    }
};
module.exports = userController;
