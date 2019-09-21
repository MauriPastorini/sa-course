const router = require('express').Router();
const menuRoutes = require('./v1/menu_routes')
const pizzaRoutes = require('./v1/pizza_routes')

router.use('/menu', menuRoutes);
router.use('/pizza', pizzaRoutes);

module.exports = router;