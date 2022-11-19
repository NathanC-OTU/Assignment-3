const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    exercise_type: {
        type: String,
        required: true
    },

    duration: {
        type: String,
        required: true
    },

    srl: {
        type: String,
        required: true
    },

    cals: {
        type: String,
        required: true
    }

})

const exerciseDB = mongoose.model('exerciseDB', schema)
module.exports = exerciseDB