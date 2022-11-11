const express = require("express");
const router = express.Router();

// Middleware
const auth = require("../middleware/auth");

module.exports = router