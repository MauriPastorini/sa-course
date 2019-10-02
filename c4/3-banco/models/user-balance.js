const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const userBalanceSchema = Schema({
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
        currency: {
            type: String,
            required: true,
            unique: true
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