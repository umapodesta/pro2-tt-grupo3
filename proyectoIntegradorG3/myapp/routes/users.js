var express = require('express');
var router = express.Router();

const usersControllers = require("../Controllers/usersControllers");

/* GET INFO */
router.get("/", usersControllers.users);
router.get("/login", usersControllers.login);
router.get("/register", usersControllers.register);
router.get("/profile", usersControllers.profile);
router.get("/usersEdit", usersControllers.usersEdit);

module.exports = router;

