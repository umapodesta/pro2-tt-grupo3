var express = require('express');
var router = express.Router();
const indexControllers = require("../Controllers/indexControllers");
const bcrypt = require("bcryptjs");

/* GET home page. */
router.get('/', indexControllers.index);
router.get('/searchResults', indexControllers.results)

module.exports = router;
