const mongoose = require('mongoose');

const nestedSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nest: {
        nestedChildOne: Number,
        nestedChildTwo: Array,
        nestedChildThree: String,
    }, 
});

module.exports = mongoose.model('Nest', nestedSchema);