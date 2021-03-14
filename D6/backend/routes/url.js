const express = require("express");
const router = express.Router();
const { shortUrl, redirectToNewUrl } = require("../services/shortUrlService");

router.post("/", shortUrl);
router.get("/:newUrl", redirectToNewUrl);

module.exports = router;
