const router = require('express').Router();
const userRoutes = require('./v1/user-routes')
const accountRoutes = require('./v1/account-routes')
const transactionRoutes = require('./v1/transaction-routes')
const userBalanceRoutes = require('./v1/user-balance-routes')

router.use('/user', userRoutes);
router.use('/account', accountRoutes);
router.use('/transaction', transactionRoutes);
router.use('/balance', userBalanceRoutes);
module.exports = router;