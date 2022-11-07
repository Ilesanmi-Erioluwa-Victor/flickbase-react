const { User } = require("../models/user");
require("dotenv").config();
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
