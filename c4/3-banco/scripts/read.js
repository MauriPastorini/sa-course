const userService = require('./../services/user-service');
const userBalanceService = require('./../services/user-balance-service');
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
    userBalanceService.getUserReport(randomUserId).then(
      ([results, metadata]) => {
        console.timeEnd(timeToken)
      },
      (error) => console.log(timeToken + ':', error.message)
    );
  } catch (error) {
    console.log(error);
  }
}, 100);