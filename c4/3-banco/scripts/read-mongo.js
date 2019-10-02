const userService = require('./../services/user-service');
var UserBalance = require('../models/user-balance.js');

const {
  randomInt
} = require('../lib/util');

const extractEmails = xs => xs.map(({
  email
}) => email);

setInterval(async function generateUserAccountsReport() {
  try {
    const userEmails = await userService.findAll().then(extractEmails);

    const timeToken = `rand(${Math.floor(100000 + Math.random() * 900000)})`;
    console.time(timeToken);

    const randomUserEmail = userEmails[randomInt(userEmails.length)];

    const user = await UserBalance.findOne({
      email: randomUserEmail
    }).exec()

    console.timeEnd(timeToken)
    console.log('Read result', user)

  } catch (error) {
    console.log(error);
  }
}, 100);