const mongoose = require('mongoose');

const recordSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    highScorePlayer: String, 
});

module.exports = mongoose.model('Record', recordSchema);