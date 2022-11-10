const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

// Middleware
const auth = require("../middleware/auth");

router.post("/register", authController.register);
router.post("/signin", authController.signin);
// using auth middleware to verify user, before going to isauth route.
router.get("/isauth", auth(), authController.isauth);
router.post("/testrole", auth("createAny", "test"), authController.testrole);

module.exports = router;
