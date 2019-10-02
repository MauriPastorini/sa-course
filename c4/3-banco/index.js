const mongoose = require('mongoose');

const app = require('./app');

mongoose.Promise = global.Promise;

const mongooseConection = mongoose.connect('mongodb://127.0.0.1/cqrs-banco', {
    useNewUrlParser: true
});

const mysqlConnection = require('./models').sequelize.sync();

Promise.all([mongooseConection, mysqlConnection]).then(() => {
        console.log("Database connected")
        const port = process.env.PORT || 3030
        app.listen(port, () => {
            console.log(`Server or start in port ${port}`);
        });
    })
    .catch(err => console.log('DB connection error:', err));

module.exports = app;