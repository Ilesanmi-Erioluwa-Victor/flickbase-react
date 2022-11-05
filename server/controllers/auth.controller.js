const authController = {
  async Test(req, res, next) {
    res.json(console.log({ ok: "Yes sire" }));
  },
};

module.exports = authController;
