const userService = require('./../services/user-service');
const userBalanceService = require('../services/user-balance-service')

const {
  randomInt,
  extractIds
} = require('../lib/util');

const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

const mongooseConection = mongoose.connect('mongodb://127.0.0.1/cqrs-banco', {
  useNewUrlParser: true
});



mongooseConection.then(() => {
    setInterval(async function generateUserAccountsReport() {
      try {
        const userIds = await userService.findAll().then(extractIds);

        const timeToken = `rand(${Math.floor(100000 + Math.random() * 900000)})`;
        console.time(timeToken);

        const randomUserId = userIds[randomInt(userIds.length)];

        const user = await userBalanceService.findById(randomUserId)

        console.timeEnd(timeToken)
        console.log('Read result', user)

      } catch (error) {
        console.log(error);
      }
    }, 100);
  })
  .catch(err => console.log('DB connection error:', err));