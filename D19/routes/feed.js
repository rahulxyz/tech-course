const express = require("express");
const router = express.Router();
const {writeArticle, getNewsFeed} = require("../services/articleService")
const {auth} = require("../middleware/index");

router.post("/createArticle", auth ,writeArticle);
router.get("/newsFeed",getNewsFeed);

module.exports = router;