const userService = require('./../services/user-service');
const userBalanceService = require('../services/user-balance-service')

const {
  randomInt,
  extractIds
} = require('../lib/util');


setInterval(async function generateUserAccountsReport() {
  try {
    const userIds = await userService.findAll().then(extractIds);

    const timeToken = `rand(${Math.floor(100000 + Math.random() * 900000)})`;
    console.time(timeToken);

    const randomUserId = userIds[randomInt(userIds.length)];

    const timeToken = `rand(${Math.floor(100000 + Math.random() * 900000)})`;
    console.time(timeToken);

    const user = await userBalanceService.findById(randomUserId)

    console.timeEnd(timeToken)
    console.log('Read result', user)

  } catch (error) {
    console.log(error);
  }
}, 100);