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
  
    const article = await Article.findById(_id);
    if(!article) throw new ApiError(httpStatus.NOT_FOUND, "Sorry, no article is found...");

    if(user.role === "user" && article.status === "draft") {
        throw new ApiError(httpStatus.NOT_FOUND, "Sorry, you are not allowed to view this route, Only admin allowed..");
    }

    return article;

  } catch (error) {
    throw error;
  }
};


const getUsersArticleById = async (_id) => {
  try {
    const article = await Article.findById(_id);
    if (!article) throw new ApiError(httpStatus.NOT_FOUND, "Sorry, no article is found...");

    if (article.status === "draft") {
      throw new ApiError(
        httpStatus.NOT_FOUND,
        "Sorry, you are allowed to view this route, Only admin allowed.."
      );
    }

    return article;
  } catch (error) {
    throw error;
  }
};


const updateArticleById = async (_id, body) => {
  try {
    const article = await Article.findOneAndUpdate(
        {_id},
        {"$set" : body},
        {new : true}
        );

        if (!article)throw new ApiError(httpStatus.NOT_FOUND, "Sorry, no article is found...");
    
    return article;
  } catch (error) {
    throw error;
  }
};



module.exports = {
  Addarticle,
  getArticleById,
  getUsersArticleById,
  updateArticleById,
};
