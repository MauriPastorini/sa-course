const Filter = require('./Filter');

class FilterChefEntrega extends Filter {
    constructor(name) {
        super(name);
    }
    
    syncWork(data) {
        console.log(`FilterChefEntrega`, data);
        return data;
    }
}

module.exports = FilterChefEntrega;