const Arena = require('bull-arena');

const arena = Arena({
    queues: [{
        name: 'event.newTransaction',
        hostId: 'local'
    }, {
        name: 'event.newAccount',
        hostId: 'local'
    }, {
        name: 'event.newUser',
        hostId: 'local'
    }]
});

module.exports = {
    arena
}