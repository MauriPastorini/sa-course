const userBalanceService = require('../services/user-balance-service')

module.exports = {
    queueName: 'event.newTransaction',
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
            console.log(`handling transaction job: ${JSON.stringify(data)}`);

            await userBalanceService.addTransactionToBalance(data.user.id, data.account.id, data.transaction)
            // edit created balance
            done()
        } catch (err) {
            throw new Error(err)
        }
    }
};