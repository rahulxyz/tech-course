const express = require('express');
const router = express.Router();
const {registerUser} = require('../services/userService');

router.post("/register", registerUser)

module.exports = router;

