const {
    pizzaTypes
} = require('../config/constants');

let salsa = [4, 4, 4, 4];

const nuevaBotella = () => {
    const index = salsa.findIndex(s => s === 0);
    salsa[index] = 4;
}
const ponerSalsa = (type) => {
    let cantidad = type === pizzaTypes.CHICA ? 1 : 2;
    let index = 0;
    while (index < 4 && cantidad > 0) {
        const resto = salsa[index] - cantidad > 0 ? salsa[index] - cantidad : 0;
        cantidad = cantidad - salsa[index];
        salsa[index] = resto;
        index++;
    }
}

module.exports = {
    nuevaBotella,
    ponerSalsa
}