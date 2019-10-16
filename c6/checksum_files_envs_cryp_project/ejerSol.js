var crypto = require('crypto')
const fs = require('fs')

function checksum(str, algorithm, encoding) {
    return crypto
        .createHash(algorithm || 'md5')
        .update(str, 'utf8')
        .digest(encoding || 'hex')
}

fs.readFile(__dirname + '/.env', function (err, data) {
    const encData = checksum(data, 'sha1');
    console.log('enc:: ', encData)
    if (encData === 'a017805d124fc4e0068fe2946bbe42aa08506e1a') {
        console.log('Todo bien')
        require('dotenv').config()
    } else {
        console.log('FILE WAS CHANGED')
    }
})