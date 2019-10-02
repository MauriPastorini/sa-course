const models = require('../models');

const createAccount = (userId, currency) => {
    return models.Account.create({
        userId,
        currency
    });
}

const findAllIds = () => {
    return models.Account.findAll({
        attributes: ['id'],
        raw: true
    });
}

module.exports = {
    createAccount,
    findAllIds
}