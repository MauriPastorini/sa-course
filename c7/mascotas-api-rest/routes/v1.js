const router = require('express').Router();
const dogsRoutes = require('./v1/dogs_routes')
const catsRoutes = require('./v1/cats_routes')

router.use('/dogs', dogsRoutes);
router.use('/cats', catsRoutes);

module.exports = router;