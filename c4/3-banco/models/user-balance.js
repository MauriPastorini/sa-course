const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const userBalanceSchema = Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    accounts: [{
        id: {
            type: String,
            required: true,
        },
        currency: {
            type: String,
            required: true,
        },
        balance: {
            type: Number
        },
        transactions: [{
            concept: {
                type: String,
                required: true
            },
            amount: {
                type: Number,
                required: true
            },
        }]
    }]
});


userBalanceSchema.plugin(uniqueValidator);

module.exports = mongoose.model('user-balance', userBalanceSchema);