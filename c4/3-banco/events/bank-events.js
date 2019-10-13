const userBalanceService = require('../services/user-balance-service')

module.exports = {
    queueName: 'bank-event',
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
            switch (data.event) {
                case "newUser":
                    console.log(`handling new user job: ${JSON.stringify(data)}`);
                    // add new balance in mongo
                    await userBalanceService.createBalance(data.user)
                    break;
                case "newAccount":
                    console.log(`handling new account job: ${JSON.stringify(data)}`);
                    await userBalanceService.addAccountToBalance(data.user.id, data.account)
                    break;
                case "newTransaction":
                    console.log(`handling transaction job: ${JSON.stringify(data)}`);
                    await userBalanceService.addTransactionToBalance(data.user.id, data.account.id, data.transaction)
                    break;
            }

            done()
        } catch (err) {
            console.log(err);
            done(new Error(err));
        }

    }
};