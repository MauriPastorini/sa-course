const userBalanceService = require('../services/user-balance-service')

module.exports = {
    queueName: 'event.newUser',
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
            console.log(`handling new user job: ${JSON.stringify(data)}`);
            // add new balance in mongo
            await userBalanceService.createBalance(data.user)
            done()
        } catch (err) {
            throw new Error(err)
        }

    }
};