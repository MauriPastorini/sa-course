const Filter = require('./Filter');

class FilterSalsero extends Filter {
    constructor(name) {
        super(name);
    }
    
    syncWork(data) {
        console.log(`FilterSalsero`, data);
        return data;

    }
}

module.exports = FilterSalsero;