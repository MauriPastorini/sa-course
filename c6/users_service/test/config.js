const config = require('../config');

before(async function(){
    await config.startServerConfigs();
});