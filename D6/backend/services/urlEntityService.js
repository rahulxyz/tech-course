const Url = require("../entity/url");

module.exports = {
  saveUrl: (newUrl) => {
    try {
      const savedUrl = newUrl.save();
      return savedUrl;
    } catch (error) {
      throw new Error(error);
    }
  },

  findBigUrl: (url) => {
    try {
      const findUrl = Url.findOne({
        bigUrl: url,
      });
      return findUrl;
    } catch (error) {
      throw new Error(error);
    }
  },

  findByShortUrl: (url) => {
    try {
      const findUrl = Url.findOne({
        smallUrl: url,
      });
      return findUrl;
    } catch (error) {
      throw new Error(error);
    }
  },
};
