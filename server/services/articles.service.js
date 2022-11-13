const httpStatus = require("http-status");
// Models
const { Article } = require("../models/article");
// Middleware
const { ApiError } = require("../middleware/Apierror");

const Addarticle = async (body) => {
  try {
    const article = new Article({
      ...body,
      score: parseInt(body.score),
    });
    await article.save();
    return article;
  } catch (error) {
    throw error;
  }
};

const getArticleById = async (_id, user) => {
  try {
  
    const article = await Article.findById()
  } catch (error) {
    throw error;
  }
};

module.exports = {
  Addarticle,
  getArticleById,
};
