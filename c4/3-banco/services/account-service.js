const models = require('../models');
const {
    Jobs
} = require('../services/sync-service');

const createAccount = (userId, currency) => {
    const account = await models.Account.create({
        userId,
        currency
    });

    await Jobs.newAccountEvent.add({
        event: 'created',
        user: {
            id: u.id
        },
        account
    }, {
        priority: 2
    }); //medium priority to transactions
    return account;
}

const findAll = () => {
    return models.Account.findAll({
        attributes: ['id'],
        raw: true
    });
}

module.exports = {
    createAccount,
    findAll
}