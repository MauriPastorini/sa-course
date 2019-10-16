// Checksums
var crypto = require('crypto');

function checksum(str, algorithm, encoding) {
  return crypto
  .createHash(algorithm || 'md5')
  .update(str, 'utf8')
  .digest(encoding || 'hex')
}

checksum('This is my test text') // e53815e8c095e270c6560be1bb76a65d
checksum('This is my test text', 'sha1') // cd5855be428295a3cc1793d6e80ce47562d23def


// Read file
const fs = require('fs');
fs.readFile('.env', function cb(err, data) {
  
})