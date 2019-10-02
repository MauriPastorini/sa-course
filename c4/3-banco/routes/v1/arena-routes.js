var express = require('express');
var router = express.Router();


const arenaController = require('../../controllers/arena-controller');

router.use('/', arenaController.arena);

module.exports = router;
