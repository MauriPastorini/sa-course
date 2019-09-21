var express = require('express');
var router = express.Router();
var pizzaControler = require('../../controllers/pizza_controller');

router.get('/', pizzaControler.getPizza);

module.exports = router;