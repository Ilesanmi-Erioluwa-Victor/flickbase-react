const mongoose = require("mongoose");
const httpStatus = require("http-status");

class ApiError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}
