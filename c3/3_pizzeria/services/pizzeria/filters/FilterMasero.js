const Filter = require('./Filter');

class FilterMasero extends Filter{
    constructor(name){
        super(name);
    }

    syncWork(data){
        console.log(`Masero: `, data);
        return data;
    }
};

module.exports = FilterMasero;