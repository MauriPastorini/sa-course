const redis = require('redis');
let client;

exports.startCacheserver = () => {
    console.log('Start cache server');
    client = redis.createClient(process.env.IN_MEMORY_DB_CON_STRING);
    client.on('connect', function () {
        console.log('Redis client connected');
    });

    client.on('error', function (err) {
        console.log('Something went wrong ' + err);
    });
    
    exports.client = client;
};
