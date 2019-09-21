const Filter = require('./Filter');

class FilterChefOrder extends Filter {
    constructor(name) {
        super(name);
    }
    
    syncWork(data) {
        console.log(`Nuevo pedido de pizza`, data);
        return data;
    }
}

module.exports = FilterChefOrder;