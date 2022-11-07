const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post("/register", authController.register);
router.post("/signin", authController.signin);
router.post("/isauth", authController.isAuth);

module.exports = router;
