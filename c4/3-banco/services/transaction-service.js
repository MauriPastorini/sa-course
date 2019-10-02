const models = require('../models');
const {
    Jobs
} = require('../services/sync-service');

const createTransaction = (accountId, amount) => {
    let newTransaction = {
        accountId,
        amount,
        concept: amount >= 0 ? 'deposit' : 'withdrawal'
    };
    const transaction = await models.Transaction.create(newTransaction);

    await Jobs.newTransactionEvent.add({
        event: 'created',
        user: {
            id: accounts[accountIndex].userId
        },
        account: {
            id: accounts[accountIndex].id
        },
        transaction
    }, {
        priority: 3
    }); //lower priority to transactions
}

const findAll = () => {
    return models.Transaction.findAll({
        attributes: ['id'],
        raw: true
    });
}

module.exports = {
    createTransaction,
    findAll
}