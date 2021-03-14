const shortid = require("shortid");
const Url = require("../entity/url");
shortid.characters(
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@"
);
const { saveUrl, findBigUrl, findByShortUrl } = require("./urlEntityService");

module.exports = {
  shortUrl: async (req, res) => {
    try {
      let { url } = req.body;

      if (!url || url === "") {
        return res.status(400).json({
          msg: "Some fields missing",
        });
      }
      if (!(url.startsWith("https://") || url.startsWith("http://"))) {
        url = "https://" + url;
      }

      const findUrlIfPresent = await findBigUrl(url);

      if (findUrlIfPresent != null) {
        return res.status(200).json(findUrlIfPresent);
      }

      const newUrl = new Url({
        bigUrl: url,
        smallUrl: shortid.generate(),
      });

      const savedData = await saveUrl(newUrl);

      res.status(200).json(savedData);
    } catch (error) {
      return res.status(500).json({
        error: "Conuld not genrate URL",
      });
    }
  },

  redirectToNewUrl: async (req, res) => {
    try {
      const tinyUrl = req.params.newUrl;

      const getBigUrl = await findByShortUrl(tinyUrl);
      if (!getBigUrl) {
        return res.status(404).json({ error: "Given URL not found...!!!!" });
      }
      return res.redirect(getBigUrl.bigUrl);
    } catch (error) {
      return res.status(500).json({
        error: "Some error occured",
      });
    }
  },
};
