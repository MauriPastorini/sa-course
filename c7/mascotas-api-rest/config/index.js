const path = require('path');

module.exports = () => {
    configEnvs();
}

function configEnvs() {
    require('dotenv').config({
        path: path.resolve(__dirname + '/../.env')
    })
}