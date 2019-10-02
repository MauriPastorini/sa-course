const arena = require('../routes/v1/arena-routes')

const express = require('express');
const router = express.Router();

router.use('/', arena);