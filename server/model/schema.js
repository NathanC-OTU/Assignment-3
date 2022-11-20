const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    exercise_type: {
        type: String,
    },

    duration: {
        type: String,

    },

    //shourthand for "Sets Reps Laps"
    srl: {
        type: String,
    },

    cals: {
        type: String,
    }

})

const exerciseDB = mongoose.model('exerciseDB', schema)
module.exports = exerciseDB