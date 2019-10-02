const models = require('../models');
const {
    Jobs
} = require('../services/sync-service');

const createUser = (fullName, email) => {
    const user = await models.User.create({
        fullName,
        email
    });

    await Jobs.newUserEvent.add({
        event: 'created',
        user
    }, {
        priority: 1
    }); //high priority to transactions

    return user
}

const findAll = () => {
    return models.User.findAll();
}

module.exports = {
    createUser,
    findAll
}