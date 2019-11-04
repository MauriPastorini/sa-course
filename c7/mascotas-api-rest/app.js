require('./config')();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/v1');
const respondMiddelware = require('./middlewares/respond-middleware')
const healthcheckMiddelware = require('./middlewares/healtcheck-middleware')

const app = express();

// view engine setup
app.use(bodyParser.json());
app.use(express.urlencoded({
  extended: false
}));

app.use('/healthcheck', healthcheckMiddelware)

app.use('/api/v1/', router);

app.use(respondMiddelware)

// error handler
app.use(function (err, req, res, next) {
  console.log(err)
  res.status(err.status || 500);
  if (process.env.NODE_ENV === 'dev') {
    res.json(err)
  } else {
    res.jsonp({})
  }
});


module.exports = app;