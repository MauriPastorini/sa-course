var express = require('express');
var router = express.Router();


const userBalanceController = require('../../controllers/user-balance-controller');

router.get('/balance/:type/:id', userBalanceController.getUserReport);

module.exports = router;