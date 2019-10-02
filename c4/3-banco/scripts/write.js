const {
  randomInt
} = require('../lib/util');


const randomAmount = () => randomInt(100) - randomInt(100);
const randomNames = [{
  name: 'Kamren Sawyer',
  email: 'ksawyer@gmail.com'
}, {
  name: 'Fabian Meadows',
  email: 'fmeadows@gmail.com'
}, {
  name: 'Genesis Stewart',
  email: 'gstewart@gmail.com'
}, {
  name: 'Jayla Crawford',
  email: 'jcrawford@gmail.com'
}, {
  name: 'Kristina Lynn',
  email: 'klynn@gmail.com'
}, {
  name: 'Louis Ware',
  email: 'lware@gmail.com'
}, {
  name: 'Harper Compton',
  email: 'hcampton@gmail.com'
}, {
  name: 'Jaslene Stanton',
  email: 'jstanton@gmail.com'
}, {
  name: 'Justine Dodson',
  email: 'jdodson@gmail.com'
}, {
  name: 'Alejandra Bauer',
  email: 'abauer@gmail.com'
}, {
  name: 'Ray Mcneil',
  email: 'rmcneil@gmail.com'
}, {
  name: 'Kaiya Carr',
  email: 'kcarr@gmail.com'
}];

const userService = require('./../services/user-service');
const accountService = require('./../services/account-service');
const transactionService = require('./../services/transaction-service');


(async () => {
  try {
    for (i = 0; i < 10; i++) {
      const user = await userService.createUser(
        randomNames[i].name,
        randomNames[i].email
      );
      console.log(`Created user ${user.id}`);
    }

    const users = await userService.findAll();
    for (let u of users) {
      for (i = 0; i < 5; i++) {
        const account = await accountService.createAccount(
          'UYU',
          u.id
        );
        console.log(`Created account ${account.id}`);
      }
    }

    let amount;
    const accounts = await accountService.findAll()



    for (;;) {
      amount = randomAmount();
      console.log(newTransaction);
      let accountIndex = randomInt(accounts.length).id
      let newTransaction = await transactionService.createTransaction(accounts[accountIndex], amount)
    }
  } catch (e) {
    console.log(e);
  }
})();