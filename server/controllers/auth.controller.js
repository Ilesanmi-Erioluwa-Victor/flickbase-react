const authController = {
  async Test(res, req, next) {
    res.json({ ok: "Yes sire" });
  },
};

module.exports = authController;
