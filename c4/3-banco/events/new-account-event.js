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
        console.log(`handling account job: ${JSON.stringify(data)}`);
        if (data.event === 'created') {
            userBalanceService.addAccountToBalance(data.user.id, data.account)
            done();
        }
    }

};