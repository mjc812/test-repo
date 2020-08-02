const Discord = require('discord.js');
const mongoose = require('mongoose');
const Player = require('./playerSchema.js');
const Record = require('./recordSchema.js');
const Nest = require('./nestedSchema.js');

let performingAction = false;

const mineAction = async (client, channel) => {
    
}

const mineManager = async (client, channel) => {
    const filter = (message) => {
        return !message.author.bot;
    }
    const collector = new Discord.MessageCollector(channel, filter);
    collector.on('collect', async (message, col) => {
        if (!performingAction) {
            performingAction = true;

            const action = message.content.slice(0, 4);
            switch (action) {
                case 'mine':
                    await mineAction(client, channel);
                    break;
                default:
                    console.log('command not found')
            }
            performingAction = false;
        } else {
            console.log('wait')
        }
    })
}

module.exports = mineManager;