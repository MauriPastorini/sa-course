const accountService = require('../services/account-service');

const createAccount = async (req, res, next) => {

    try {
        //TODO: validate data first
        const response = await accountService.createAccount(req.body)
        res.status(statusCode.SUCCESS).json(response)
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createAccount
};