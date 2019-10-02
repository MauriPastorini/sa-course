const models = require('../models');

const createTransaction = (accountId, amount) => {
    let newTransaction = {
        accountId,
        amount,
        concept: amount >= 0 ? 'deposit' : 'withdrawal'
    };
    return models.Transaction.create(newTransaction);
}

const findAllIds = () => {
    return models.Transaction.findAll({
        attributes: ['id'],
        raw: true
    });
}

module.exports = {
    createTransaction,
    findAllIds
}