require('./config')();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/v1');

const app = express();

// view engine setup
app.use(bodyParser.json());
app.use(express.urlencoded({
  extended: false
}));

app.use('/api/v1/', router);

// error handler
app.use(function (err, req, res, next) {
  consolelog(err)
  res.status(err.status || 500);
  if (process.env.NODE_ENV === 'dev') {
    res.json(err)
  } else {
    res.jsonp({})
  }
});


module.exports = app;