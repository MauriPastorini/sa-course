const userService = require('../services/user-service');

const createUser = async (req, res, next) => {

    try {
        //validate data first
        const response = await userService.createUser(req.body)
        res.status(statusCode.SUCCESS).json(response)
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createUser
};