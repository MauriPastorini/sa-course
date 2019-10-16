const index = require('./index');

module.exports = () => {
    console.log('Config err');
    global.AppError = (appErr, msg) => {
        const err = new Error(msg);
        err.appErr = appErr;
        return err;
    };
}