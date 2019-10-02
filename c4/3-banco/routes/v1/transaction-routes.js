var express = require('express');
var router = express.Router();


const transactionController = require('../../controllers/transaction-controller');

router.post('/create', transactionController.createTransaction);

module.exports = router;