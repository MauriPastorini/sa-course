const express = require('express');
const router = express.Router();

const usersRoutes = require('./v1/users_routes');

router.use('/users', usersRoutes);

module.exports = router;