const config = require('./config/properties.json');
const mongoose = require('mongoose');

const app = require('./app');

mongoose.Promise = global.Promise;

const mongooseConection = mongoose.connect(config.database, {
    useNewUrlParser: true
});

const mysqlConnection = require('./models').sequelize.sync();

Promise.all(mongooseConection, mysqlConnection).then(() => {
        console.log("Database connected")
        const port = process.env.PORT || 8080
        app.listen(port, () => {
            console.log(`Server or start in port ${port}`);
        });
    })
    .catch(err => console.log('DB connection error:', err));