const statusCodes = require('./codes');

const pizzeriaService = require('../services/pizzeria/pizzeria_service');

exports.getMenu = async (req, res, next) => {
    const availablePizzas = pizzeriaService.getAvailablePizzas();
    return res.status(statusCodes.SUCCESS).json({
        pizzas: availablePizzas,
    });
};