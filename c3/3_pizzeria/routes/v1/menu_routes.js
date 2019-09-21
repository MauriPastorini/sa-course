var express = require('express');
var router = express.Router();

const menuController = require('../../controllers/menu_controller');

router.use('/', menuController.getMenu);

module.exports = router;