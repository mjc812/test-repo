const Discord = require('discord.js');
const mongoose = require('mongoose');
const Player = require('./playerSchema.js');
const Record = require('./recordSchema.js');
const Nest = require('./nestedSchema.js');

const caveManager = async (client, channel) => {
    const filter = (message) => {
        return !message.author.bot;
    }
    const collector = new Discord.MessageCollector(channel, filter);
    collector.on('collect', (message, col) => {
        console.log('cave ' + message.content)
    })
}

module.exports = caveManager;