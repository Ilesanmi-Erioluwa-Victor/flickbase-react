const httpStatus = require("http-status");
const {articlesService} = require("../services")

const articlesController = {
  async createArticle(req, res, next) {
    try {
      const article = await articlesService.Addarticle(req.body);

      res.json(article);
    } catch (error) {
      next(error);
    }
  },

  async getArticleById(req, res, next) {
    try {
      const _id = req.params.id;

      const article = await articlesService.getArticleById(_id, req.user);

      res.json(article);
    } catch (error) {
      next(error);
    }
  },

  async getUsersArticleById(req, res, next) {
    try {
      const _id = req.params.id;

      const article = await articlesService.getUsersArticleById(_id);
      res.json(article);
    } catch (error) {
      next(error);
    }
  },

  async updateArticleById(req, res, next) {
    try {
      const _id = req.params.id;
      const article = await articlesService.updateArticleById(_id, req.body);
      res.json(article);
    } catch (error) {
      next(error);
    }
  },

  async deleteArticleById(req, res, next) {
    try {
      const _id = req.params.id;
      await articlesService.deleteArticleById(_id, req.body);
      res.status(httpStatus.OK).json({ responde: " Deleted successfully..." });
    } catch (error) {
      next(error);
    }
  },

  async getAllArticles(req, res, next) {
    try {
     const artilces = await articlesService.allArticles(req);
     res.json(artilces)
    } catch (error) {
      next(error);
    }
  },
};

module.exports = articlesController;
