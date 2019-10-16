const {
    expect
} = require('chai');

describe('Mongo test', function () {
  
    it('Should check mongo health', () => {
        const mongoose = require('mongoose');
        const state = mongoose.connection.readyState;
        const connected = 1;
        expect(state).to.equal(connected);
    });
    
})