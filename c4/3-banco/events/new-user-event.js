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
        console.log(`handling new user job: ${JSON.stringify(data)}`);
        if (data.event === 'created') {
            // add new balance in mongo
            userBalanceService.createBalance(data.user)
            done()
        }
    }
};