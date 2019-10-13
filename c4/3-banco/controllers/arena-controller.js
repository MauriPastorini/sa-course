const Arena = require('bull-arena');

const arena = Arena({
    queues: [{
        name: 'bank-event',
        hostId: 'local'
    }]
});

module.exports = {
    arena
}