const Filter = require('./Filter');

class FilterVertidero extends Filter {
    constructor(name) {
        super(name);
    }
    
    syncWork(data) {
        console.log(`FilterVertidero`, data);
        switch(data.toping){
            case 'jamon': {
                data.pizza.jamon = true;
                data.pizza.aceitunas = false;
                break;
            }
            case 'aceitunas': {
                data.pizza.jamon = false;
                data.pizza.aceitunas = true;
                break;
            }
        }
        data.pizza.muzzarella = true;
        return data;
    }
}

module.exports = FilterVertidero;