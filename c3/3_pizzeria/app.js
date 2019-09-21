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
  res.status(err.status || 500);
  if (process.env.NODE_ENV === 'dev') {
    res.json(err)
  } else {
    res.jsonp({})
  }
});

app.listen(process.env.PORT, function(err){
  if(err) console.error('Error opening the server: ', err);
  else console.log('Server listening on: ', process.env.PORT);
})

module.exports = app;