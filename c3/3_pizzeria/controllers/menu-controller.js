const {
    statusCode,
    pizzaTypes,
    pizzaTopings
} = require('../config/constants');

var getMenu = async (req, res, next) => {
    return res.status(statusCode.SUCCESS).json({
        types: [pizzaTypes.CHICA, pizzaTypes.GRANDE],
        topings: [pizzaTopings.JAMON, pizzaTopings.ACEITUNAS],
        notes: 'Todas las pizzas vienen con salsa y muzzarella'
    });
};



module.exports = {
    getMenu
};