exports.errorHandler = function (err, req, res, next) {
    const errsHandler = require('./index');
    const codes = errsHandler.codes;
    try {
        console.info("Error handler: ", err);
        if (err.appErr != null) {
            const bodyErr = err.appErr;
            if (err.message) bodyErr.message = err.message;
            return res.status(err.appErr.http_status).jsonp(bodyErr)
        }
        res.locals.message = err.message;
        if (process.env.NODE_ENV === "dev") {
            console.log('DEV: ', err);
            res.locals.error = err;
        } else {
            console.log('NO DEV');
            res.locals.error = {};
        }
        err.code = err.code || codes.UnkownErrorCode;
        if (err.status && err.status !== 500) {
            res.status(err.status);
            delete err.status;
            return res.jsonp(err);
        }
        return res.status(err.status || 500).send(res.locals.error);
    } catch (err) {
        console.error("Error in error handler: ", err);
        return res.status(500).jsonp({
            error: err
        })
    }
}