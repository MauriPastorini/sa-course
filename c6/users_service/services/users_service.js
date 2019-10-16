const User = require('../models/User');
const codes = require('../config/err_codes');

exports.createUser = async (body) => {
    const {
        username,
        password,
    } = body;
    if (!username || !password) {
        throw AppError(codes.InvalidParameters);
    }
    const userDB = await User.findOne({
        username: body.username
    });
    if (userDB) {
        throw new AppError(codes.UserAlreadyExists);
    }
    const user = new User(body);
    await user.save();
}

exports.findByUsername = async (username) => {
    const user = await User.findOne({
        username
    });
    return user;
}

exports.updateUser = async (userId, body) => {
    let user = await User.findById(userId);
    if (!user) {
        throw errsHandler.Error(errsHandler.codes.UserNotExists);
    }
    for (let key in body) {
        user[key] = body[key];
    }
    try {
        await user.save();
    } catch (err) {
        console.log(err);
        throw errsHandler.Error(errsHandler.codes.InvalidModelSaved);
    }
}

exports.getUsers = async () => {
    return await User.find({});
}

exports.getUserById = async (userId) => {
    return await User.findById(userId);
}