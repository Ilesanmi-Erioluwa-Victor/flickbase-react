const { User } = require("../models/user");
require("dotenv").config();
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

const jwtOptions = {
  secretOrKey: process.env.DB_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);
