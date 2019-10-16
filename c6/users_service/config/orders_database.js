const host = process.env.DB_CON_STRING || 'mongodb://127.0.0.1:27017/';
const dbName = process.env.DB_NAME || 'jaak';
const mongoose = require('mongoose');

const connection_string = host + dbName;
async function config() {
    console.log('Host: ', host);
    console.log('Db name: ', dbName);
    console.log('User: ', process.env.USERNAME_DB);
    console.log('Pass: ', process.env.PASS_DB);

    try {
        await mongoose.connect(connection_string, {
            useNewUrlParser: true,
        })
        console.log("Connected to mongodb: ", connection_string);
    } catch (err) {
        console.log("ERROR: Could not connect to mongodb: ", err);
        throw err;
    }
}

async function close() {
    console.log('Closing');
    mongoose.connection.close()
}

module.exports = {
    config,
    close
}