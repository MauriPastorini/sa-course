var UserBalance = require('../models/user-balance.js');

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
            // edit created balance
            const user = await UserBalance.findById(data.user.id).exec()
            user.accounts.push({
                currency: data.account.currency,
                balance: 0,
                transactions: []
            });
            await user.save();
            done();
        }
    }

};