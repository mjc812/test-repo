const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    discordID: String, 
});

module.exports = mongoose.model('Player', playerSchema);