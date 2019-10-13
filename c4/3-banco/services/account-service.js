const models = require('../models');
const {
    Jobs
} = require('../services/sync-service');

const createAccount = async (userId, currency) => {
    const account = await models.Account.create({
        userId,
        currency
    });

    await Jobs.bankEvents.add({
        event: 'newAccount',
        user: {
            id: userId
        },
        account
    }, {
        priority: 5
    }); //medium priority to transactions
    return account;
}

const findAll = () => {
    return models.Account.findAll({
        attributes: ['id', 'userId', 'currency'],
        raw: true
    });
}

module.exports = {
    createAccount,
    findAll
}