const {
    startWorker
} = require('../services/sync-service');

const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

const mongooseConection = mongoose.connect('mongodb://127.0.0.1/cqrs-banco', {
    useNewUrlParser: true
});



mongooseConection.then(() => {
    try {
        startWorker();
    } catch (err) {
        console.log(err)
    }
})