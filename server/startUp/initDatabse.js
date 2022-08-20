const User = require("../models/User");
const Comment = require("../models/Comment");
const Article = require('../models/Article')

const userMock = require("../mock/user.json");
const commentMock = require("../mock/comment.json");
const articleMock = require('../mock/article.json')

module.exports = async () => {
  const user = await User.find();
  if (user.length !== userMock.length) {
    await createInitialEntity(User, userMock);
  }

  const comment = await Comment.find();
  if (comment.length !== commentMock.length) {
    await createInitialEntity(Comment, commentMock);
  }

  const article = await Article.find()
  if (article.length !== articleMock.length) {
    await createInitialEntity(Article, articleMock);
  }
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
      data.map(async (item) => {
        try {
          delete item._id;
          const newItem = new Model(item);
          await newItem.save();
          return newItem;
        } catch (e) {
          return e;
        }
      })
  );
}
