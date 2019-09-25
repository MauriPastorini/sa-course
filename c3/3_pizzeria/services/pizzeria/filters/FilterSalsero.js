const Filter = require('./Filter');
const dbManager = require('../../../models/db_manager');

class FilterSalsero extends Filter {

    constructor(name) {
        super(name);
        this.porcionesMantenidas = 3;
    }

    async syncWork(data) {
        console.log(`FilterSalsero`, data);
        const cantidad = data.type === 'chica' ? 1 : 2;
        const salsaPreparada = await dbManager.extraerCantidadDeSalsa(cantidad);
        this.controlarSalsa();
        data.pizza = {
            ...data.pizza,
            salsaPreparada: `${salsaPreparada}`
        };
        return data;
    }

    asyncWork() {
        this.controlarSalsa();
    }

    controlarSalsa() {
        while (dbManager.obtenerSalsaDisponible() < this.porcionesMantenidas) {
            dbManager.prepareSalsa();
        }
    }
}

module.exports = FilterSalsero;