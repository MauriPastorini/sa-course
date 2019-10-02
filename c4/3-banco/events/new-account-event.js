const userBalanceService = require('../services/user-balance-service')

module.exports = {
    queueName: 'event.newAccount',
    options: {
        limiter: {
            max: 5,
            duration: 1000,
        },
    },
    async handler({
        data
    }, done) {
        try {
            console.log(`handling account job: ${JSON.stringify(data)}`);
            await userBalanceService.addAccountToBalance(data.user.id, data.account)
            done();
            console.log(`end`);
        } catch (err) {
            throw new Error(err)
        }
    }

};