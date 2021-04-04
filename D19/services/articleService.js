const _ = require("lodash");
const { save, findAllArticles } = require("../dao/article");
const { findByUserId } = require("../dao/user");
module.exports = {
  writeArticle: async (req, res, next) => {
    try {
      let { title, text, tags, user } = req.body;

      if (_.isEmpty(title) || _.isEmpty(text)) {
        return res.status(400).json({
          message: "Incomplete article",
        });
      }
      if (title.length > 20 || title.length < 5) {
        return res.status(400).json({
          message: "Wrong title length",
        });
      }

      if (text.length > 20 || text.length < 5) {
        return res.status(400).json({
          message: "Wrong text length",
        });
      }

      const userData = await findByUserId(user);
      let textPreview = text.substring(0, 30);

      const article = {
        title,
        text,
        textPreview,
        tags,
        author: userData.name,
        userInfo: userData._id,
      };

      let savedArticle = await save(article);

      return res.status(200).json({ savedArticle });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Some error occured",
      });
    }
  },

  getNewsFeed: async (req, res, next) => {
    try {
      const data = await findAllArticles();
      return res.status(200).json({
        data,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Some error occured",
      });
    }
  },
};
