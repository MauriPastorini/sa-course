const Sequelize = require('sequelize');

// initialize connection
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: process.env.DB_STORAGE_PATH || './db.sqlite',
//   logging: false,
//   retry: 0,
// });

const sequelize = new Sequelize('cqrs-example', 'user', 'password', {
  dialect: 'mysql',
})


// set up models
const User = require('./user')(sequelize, Sequelize);
const Account = require('./account')(sequelize, Sequelize);
const Transaction = require('./transaction')(sequelize, Sequelize);

// set up associations
Account.belongsTo(User);
User.hasMany(Account);

Transaction.belongsTo(Account);
Account.hasMany(Transaction);

module.exports = {
  User,
  Account,
  Transaction,
  sequelize,
};