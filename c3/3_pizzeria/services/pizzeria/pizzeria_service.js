const Pipeline = require('../../util/pipeline/Pipeline');
const FilterChefOrder = require('./filters/FilterChefOrden');
const FilterMasero = require('./filters/FilterMasero');
const FilterSalsero = require('./filters/FilterSalsero');
const FilterVertidero = require('./filters/FilterVertidero');
const FilterChefEntrega = require('./filters/FilterChefEntrega');

const pizzaTypes = {
    CHICA: 'chica',
    GRANDE: 'grande'
};

const pizzaTopings = {
    JAMON: 'jamon',
    ACEITUNAS: 'aceitunas',
    SIMPLE: 'simple'
};

exports.getAvailablePizzas = () => {
    return {
        types: Object.values(pizzaTypes),
        topings: Object.values(pizzaTopings),
        notes: 'Todas las pizzas vienen con salsa y muzzarella'
    }
}

exports.prepararPizza = (type, toping) => {
    return new Promise(async (resolve, reject) => {
        var pipeline = new Pipeline();

        pipeline.use(new FilterChefOrder('Chef orden'));
        pipeline.use(new FilterMasero('Filter masero'));
        pipeline.use(new FilterSalsero('Filter salsero'));
        pipeline.use(new FilterVertidero('Filter vertidero'));
        pipeline.use(new FilterChefEntrega('Filter Chef Entrega'));

        pipeline.run({
                type: type,
                toping: toping
            }).then(response => resolve(response))
            .catch(err => reject(err))
    })
}

exports.isValidType = (type) => {
    return Object.values(pizzaTypes).includes(type);
}

exports.isValidToping = (toping) => {
    return Object.values(pizzaTopings).includes(toping);
}