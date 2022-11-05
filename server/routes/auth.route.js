const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.get("/test", authController.Test);

module.exports = router;
