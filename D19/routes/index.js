const express = require("express");
const router = express.Router();

router.use("/user", require('./user'));
router.use("/article", require('./feed'))

module.exports = router;
