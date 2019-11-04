const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = Schema({
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

catSchema.methods.toJson = () => {
    
}

module.exports = mongoose.model('cat', catSchema);