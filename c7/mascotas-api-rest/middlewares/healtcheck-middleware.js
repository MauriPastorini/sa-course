const mongoose = require('mongoose');
const statusCodes = require('../middlewares/codes');

module.exports = async function healthcheck(req, res, next) {
    if (mongoose.connection.readyState !== mongoose.STATES.connected) {
        res.status(statusCodes.SUCCESS).json({
            state: 'down',
            dbState: mongoose.STATES[mongoose.connection.readyState]
        })
    } else {
        res.status(statusCodes.SUCCESS).json({
            state: 'up',
            dbState: mongoose.STATES[mongoose.connection.readyState]
        })
    }

}