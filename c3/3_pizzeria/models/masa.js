const {
    pizzaTypes
} = require('../config/constants');

const masa = [3, 3];

const nuevoBolo = () => {
    let bolo = masa[0];
    masa[0] = 3;
    masa[1] = bolo;
}

const amasar = (type) => {
    let cantidad = type === pizzaTypes.CHICA ? 1 : 2;
    if (masa[1] >= cantidad) {
        masa[1] -= cantidad;
        cantidad = 0;
    } else {
        cantidad -= masa[1];
        masa[1] = 0;
        masa[0] -= cantidad;
    }
}

module.exports = {
    nuevoBolo,
    amasar
}