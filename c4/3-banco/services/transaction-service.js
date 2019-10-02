const models = require('../models');
const {
    Jobs
} = require('../services/sync-service');

const createTransaction = async (userId, accountId, amount) => {
    const transaction = await models.Transaction.create({
        accountId,
        amount,
        concept: amount >= 0 ? 'deposit' : 'withdrawal'
    });

    await Jobs.newTransactionEvent.add({
        event: 'created',
        user: {
            id: userId
        },
        account: {
            id: accountId
        },
        transaction
    }, {
        priority: 3
    }); //lower priority to transactions

    return transaction;
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