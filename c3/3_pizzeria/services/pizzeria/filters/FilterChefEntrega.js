const Filter = require('./Filter');

class FilterChefEntrega extends Filter {
    constructor(name) {
        super(name);
    }
    
    syncWork(data) {
        console.log(`FilterChefEntrega`, data);
    }
}

module.exports = FilterChefEntrega;