const httpStatus = require("http-status");
// Models
const { Article} = require("../models/article");
// Middleware
const { ApiError } = require("../middleware/Apierror");

const Addarticle = async (body) => {
    try {
         
        const article = new Article( {
      
        })

    } catch (error) {
        
    }
}

module.exports = {
  Addarticle,
};