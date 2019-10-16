require('./config').startServerConfigs();
const Subscriber = require('./helpers/publish-suscribe/subscriber');

var express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//Routes
var apiV1Router = require('./routes/v1');
app.use('/api/v1', apiV1Router);

//Messages
let channel = 'messages_channel';
let subscriber = new Subscriber(channel);

subscriber.subscribe((message) => {
    console.log(`Received message: ${JSON.stringify(message)}\n`);
});

/**
 * Error Handler.
 */
const errors = require('./errors');
app.use(errors.errorHandler);

app.listen(process.env.PORT || 8080, function () {
    console.log('Now listening for request in ' + (process.env.PORT || 8080));
});

console.log('Finishing');

module.exports = app;