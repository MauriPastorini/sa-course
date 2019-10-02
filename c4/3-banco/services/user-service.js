const models = require('../models');

const createUser = (fullName, email) => {
    return models.User.create({
        fullName,
        email
    });
}

const findAllIds = () => {
    return models.User.findAll({
        attributes: ['id'],
        raw: true
    });
}

module.exports = {
    createUser,
    findAllIds
}