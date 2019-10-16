const errManager = require('../errors');
const userService = require('../services/users_service');
const tokenManager = require('../util/token_generator');
const errorCodes = require('../config/err_codes');

exports.authAdmin = function auth(req, res, next) {
    const token = req.header('token') || req.body.token || req.query.token;
    if (!token)
        return next(AppError(errorCodes.InvalidToken))
    const decoded = tokenManager.decrypt(token);
    req.user = decoded;
    if (decoded.role === 'admin') {
        next();
    } else {
        next(AppError(errorCodes.Unthorized))
    }
}

exports.auth = (req, res, next) => {
    const token = req.header('token') || req.body.token || req.query.token;
    if (!token)
        next(AppError(errorCodes.InvalidToken))
    const decoded = tokenManager.decrypt(token);
    req.user = decoded;
    if (decoded.role === 'admin' || decoded.role === 'user') {
        next();
    } else {
        next(AppError(errorCodes.InvalidToken))
    }
}

exports.authenticateUser = async (req, res, next) => {
    console.log('Authenticating');
    try {
        let {
            username,
            password
        } = req.body;
        if (!username || !password) {
            return next(AppError(errManager.codes.InvalidParameters))
        }
        username = username.toLowerCase();
        const user = await userService.findByUsername(username);
        if (!user)
            return next(AppError(errManager.codes.UserNotExists))

        user.comparePassword(password, async function (err, isMatch) {
            console.log('After comparing');
            if (!isMatch)
                return next(AppError(errManager.codes.InvalidCredentials))
            const token = await tokenManager.encrypt({
                id: user.id,
                role: user.role
            }, {
                expiresIn: 3600
            });
            return res.status(200).json({
                token,
                user: {
                    id: user.id,
                    username: user.username,
                    role: user.role
                }
            });
        })
    } catch (err) {
        next(err);
    }
}

exports.checkUserIdSameIfRoleUser = (req, res, next) => {
    if(req.user.role === 'user' && req.params.userId != req.user.id){
        return next(AppError(errorCodes.Unthorized))
    } 
    return next();
}