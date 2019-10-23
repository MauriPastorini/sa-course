const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    owner: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String
        }
    }
});


module.exports = mongoose.model('dog', dogSchema);