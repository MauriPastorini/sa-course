const userBalanceService = require('../services/user-balance-service');
const getUserReport = async (req, res, next) => {
    try {
        let report = null;
        switch (req.params.type) {
            case 'mongo':
                report = await userBalanceService.findById(req.params.id);
                break;
            default:
                report = await userBalanceService.getUserReport(req.params.id);
                break;
        }
        res.status(statusCode.SUCCESS).json(report)
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getUserReport
};