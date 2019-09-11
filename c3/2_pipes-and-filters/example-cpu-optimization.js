var request = require('request');
var {
  fork
} = require('child_process');

var Pipeline = require('./pipeline/pipeline');
console.log('imported');
var pipeline = new Pipeline();

var filterEncrypt = (input, next) => {
  const concurrencyEnabled = process.argv[2] == '--async';

  if (concurrencyEnabled) {
    // async
    fork('./filters/encrypt.js', [input]).on('message', result => next(null, result));
    // require('./filters/encrypt').filterEncrypt(input, next);
  } else {
    // sync
    require('./filters/encrypt').filterEncrypt(input, next);
  }
};

var filterPrint = (input, next) => {
  console.log(`Result from filter is ${input}`);
  next(null, input);
};

var filterSend = (input, next) => {
  request.post(
    'http://httpbin.org/post', {
      form: {
        result: input
      }
    },
    (err, response, body) => {
      console.log(body);
      next(null, body);
    });
};

var printSuccess = (input, next) => {
  console.log('Success');
}

pipeline.use(filterEncrypt);
pipeline.use(filterPrint);
pipeline.use(printSuccess);

for (i = 0; i < 10; i++) pipeline.run('asdfqwerzxcv');

pipeline.on('error', (err) => {
  console.log(`The error is ${err}`);
});

pipeline.on('end', (result) => {
  console.log(`The result is ${result}`);
});