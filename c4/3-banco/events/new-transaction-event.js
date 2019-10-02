var UserBalance = require('../models/user-balance.js');

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
        console.log(`handling transaction job: ${JSON.stringify(data)}`);
        if (data.event === 'created') {
            // edit created balance
            const user = await UserBalance.findById(data.user.id).exec()

            const index = user.accounts.findIndex(a => a.id == data.account.id);
            if (index >= 0) {
                //add amount to balance
                user.accounts[index].balance += data.transaction.amount;
                //add transaction to list
                user.accounts[index].transactions.unshift({
                    concept: data.transaction.amount >= 0 ? 'deposit' : 'withdrawal',
                    amount: data.transaction.amount
                })
                //delete transactions if lenght > 3
                if (user.accounts[index].transactions.length > 3) {
                    user.accounts[index].transactions.pop()
                }
                await user.save()
                done()
            } else {
                throw new Error('Account does not exist')
            }

        }
    }
};