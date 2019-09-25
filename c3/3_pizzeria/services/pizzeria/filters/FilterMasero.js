const Filter = require('./Filter');
const dbManager = require('../../../models/db_manager');

class FilterMasero extends Filter {
    constructor(name) {
        super(name);
        this.porcionesMantenidas = 2;
    }

    async syncWork(data) {
        console.log(`Masero: `, data);
        const cantidad = data.type === 'chica' ? 1 : 2;
        const masaPreparada = await dbManager.extraerCantidaDedMasa(cantidad);
        this.controlarPorciones();
        return {
            ...data,
            pizza: {
                masaPreparada: `${masaPreparada * 12}cm`
            }
        };
    }

    asyncWork() {
        this.controlarPorciones();
    }

    controlarPorciones() {
        while (dbManager.obtenerMasaDisponible() < this.porcionesMantenidas) {
            dbManager.prepareMasa();
        }
    }
};

module.exports = FilterMasero;