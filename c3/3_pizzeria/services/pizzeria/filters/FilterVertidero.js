const Filter = require('./Filter');

class FilterVertidero extends Filter {
    constructor(name) {
        super(name);
    }
    
    syncWork(data) {
        console.log(`FilterVertidero`, data);
        return data;
    }
}

module.exports = FilterVertidero;