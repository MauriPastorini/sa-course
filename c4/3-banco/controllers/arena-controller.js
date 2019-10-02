const Arena = require('bull-arena');

const arena = Arena({
    queues: [{
        name: 'event.newTransaction',
        hostId: 'local'
    }, ]
});

module.exports = {
    arena
}