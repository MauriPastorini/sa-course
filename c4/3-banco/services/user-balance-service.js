var UserBalance = require('../models/user-balance.js');
const models = require('../models');

const findById = (id) => {
    return UserBalance.findOne({
        id
    }).exec()
}

const createBalance = async (user) => {
    const userBalance = new UserBalance();
    userBalance.id = user.id;
    userBalance.fullName = user.fullName;
    userBalance.email = user.email
    userBalance.accounts = []
    return await userBalance.save()
}

const addAccountToBalance = async (userId, account) => {
    const userBalance = await UserBalance.findOne({
        id: userId
    }).exec()

    if (!userBalance) {
        throw new Error('User does not exist')
    }

    userBalance.accounts.push({
        id: account.id,
        currency: account.currency,
        balance: 0,
        transactions: []
    });
    const user = await userBalance.save();
    console.log(user)
    return user;
}

const addTransactionToBalance = async (userId, accountId, transaction) => {
    const userBalance = await UserBalance.findOne({
        id: userId
    }).exec()

    if (!userBalance) {
        throw new Error('User does not exist')
    }
    const index = userBalance.accounts.findIndex(a => a.id == accountId);
    if (index >= 0) {
        //add amount to balance
        userBalance.accounts[index].balance += transaction.amount;
        //add transaction to list
        userBalance.accounts[index].transactions.unshift({
            id: transaction.id,
            concept: transaction.amount >= 0 ? 'deposit' : 'withdrawal',
            amount: transaction.amount
        })
        //delete transactions if lenght > 3
        if (userBalance.accounts[index].transactions.length > 3) {
            userBalance.accounts[index].transactions.pop()
        }
        return await userBalance.save()
    } else {
        throw new Error('Account does not exist')
    }
}

const getUserReport = (userId) => {
    return models.sequelize.query(`
    SELECT users.id, users.fullName, accounts.id, currency, sum(amount) 
    FROM transactions, users, accounts 
    WHERE users.id = accounts.userId
    AND users.id = ?
    AND accounts.id = transactions.accountId
    GROUP BY users.id, users.fullName, accounts.id, currency
  `, {
        replacements: [userId]
    })
}

module.exports = {
    findById,
    addTransactionToBalance,
    addAccountToBalance,
    createBalance,
    getUserReport
}