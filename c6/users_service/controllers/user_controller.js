const usersService = require('../services/users_service');
const messagesService = require('../services/messages_service');
const codes = require('../config/err_codes');

exports.createUser = async (req, res, next) => {
    const role = req.role;
    try {
        await usersService.createUser({
            ...req.body,
            role
        });
        res.status(200).json({})
    } catch (err) {
        next(err);
    }
}

exports.updateUser = async (req, res, next) => {
    const on_shift = req.body.on_shift;
    if (on_shift == null) {
        return next(new AppError(codes.InvalidParameters));
    }
    try {
        await usersService.updateUser(req.user.id, {
            on_shift
        });
        return res.status(200).json({})
    } catch (err) {
        next(err);
    }
}

exports.getUsers = async (req, res, next) => {
    try {
        const users = await usersService.getUsers();
        return res.status(200).json(users)
    } catch (err) {
        next(err);
    }
}

exports.getUserInfoId = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const users = await usersService.getUserById(userId);
        return res.status(200).json(users)
    } catch (err) {
        next(err);
    }
}

exports.sendMessage = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const messageP = req.body.message;
        const users = await messagesService.sendMessage(userId, messageP);
        return res.status(200).json(users)
    } catch (err) {
        next(err);
    }
}