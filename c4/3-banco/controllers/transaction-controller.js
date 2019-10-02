const transactionService = require('../services/transaction-service');

const createTransaction = async (req, res, next) => {

    try {
        //validate data first
        const response = await transactionService.createTransaction(req.body)
        res.status(statusCode.SUCCESS).json(response)
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createTransaction
};