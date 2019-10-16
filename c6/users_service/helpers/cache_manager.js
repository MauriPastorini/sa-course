var cacheConfig = require('../config/in_memory_database');
let client = cacheConfig.client;
const {
    promisify
} = require('util');

exports.getAsync = promisify(client.get).bind(client);
exports.setAsync = promisify(client.set).bind(client);
exports.delAsync = promisify(client.del).bind(client);
exports.client = client;