const path = require('path');
const errors = require('../errors')
exports.startServerConfigs = async function () {
    console.log('Start config');
    configEnvs();
    configCacheServer();
    configErrors(),
    await configDatabase();
    console.log('End config');
}

function configErrors(){
    errors.config();
}

function configCacheServer() {
    console.log('STARTING CACHE');
    require('./in_memory_database').startCacheserver();
}

function configEnvs() {
    require('dotenv').config({
        path: path.resolve(__dirname + '/../.env')
    })
}

async function configDatabase() {
    await require('./orders_database').config();
}

exports.closeServer = async function () {
    await require('./orders_database').close();
    require('../jobs').closeWorkers();
}