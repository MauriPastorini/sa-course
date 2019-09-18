var express = require('express');
var router = express.Router();
var CocinaController = require('../../controllers/CocinaController');
var MenuController = require('../../controllers/MenuController');

router.get('/menu', MenuController.getMenu);
router.get('/pizza/:type/:toping', CocinaController.getPizza);

module.exports = router;