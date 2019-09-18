var express = require('express');
var router = express.Router();
var CocinaController = require('../../controllers/cocina-controller');
var MenuController = require('../../controllers/menu-controller');

router.get('/menu', MenuController.getMenu);
router.get('/pizza/:type/:toping', CocinaController.getPizza);

module.exports = router;