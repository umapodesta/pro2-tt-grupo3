var express = require('express');
var router = express.Router();

const patitosControllers = require("../Controllers/patitosControllers");

/* GET PRODUCTOS */
router.get('/', patitosControllers.patitos);
router.get('/add-product', patitosControllers.add);

/* GET details movie page. */
router.get('/id/:idPatitos', patitosControllers.detalle); 
module.exports = router; 

