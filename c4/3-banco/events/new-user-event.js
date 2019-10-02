var UserBalance = require('../models/user-balance.js');

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
    }) {
        console.log(`handling new user job: ${JSON.stringify(data)}`);
        if (data.event === 'created') {
            // add new balance in mongo
            const newBalance = new UserBalance();
            newBalance.fullName = data.user.fullName;
            newBalance.email = data.user.email
            newBalance.accounts = []
            await newBalance.save()
        }
    }
};