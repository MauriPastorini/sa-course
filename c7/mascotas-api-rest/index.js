const mongoose = require('mongoose');

const app = require('./app');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1/db', {
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Database connected")
        const port = process.env.PORT || 3040
        const listener = app.listen(port, () => {
            console.log(`Server or start in port ${port}`);
        });
    })
    .catch(err => console.log('MongoDB connection error:', err));

module.exports = app;