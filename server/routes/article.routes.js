const express = require("express");
const Article = require("../models/Article");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(async (req, res) => {
    try {
      const list = await Article.find();
      res.status(200).send(list);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже.",
      });
    }
  })
  .post(async (req, res) => {
    try {
      const newArticle = await Article.create({
        ...req.body,
        articleId: req.article._id,
      });

      res.status(200).send(newArticle);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже.",
      });
    }
  });

router.patch("/:_id", auth, async (req, res) => {
  try {
    const { _id } = req.params;
    if (_id === req.article._id) {
      const updatedArticle = await Article.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
      res.send(updatedArticle);
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже.",
    });
  }
});

router.delete("/:articleId", auth, async (req, res) => {
  try {
    const { articleId } = req.params;
    const removeArticle = await Article.findById(articleId);

    if (removeArticle.articleId.toString() === req.article._id) {
      await removeArticle.remove();
      return res.send(null);
    } else {
    }
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже.",
    });
  }
});

module.exports = router;
