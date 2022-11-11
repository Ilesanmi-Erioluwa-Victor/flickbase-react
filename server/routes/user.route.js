const express = require("express");
const router = express.Router();

// Middleware
const auth = require("../middleware/auth");

router.route("/profile")
.get(auth("readOwn", "profile"))
module.exports = router