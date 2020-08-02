const mongoose = require('mongoose');
const Discord = require('discord.js');
const Player = require('./playerSchema.js');
const Record = require('./recordSchema.js');
const Nest = require('./nestedSchema.js');

const deleteMessages = require('./deleteMessages.js');

const setTextChannel = async (channel, data) => {
    const { image, message } = data;
    await channel.send(message, { files: [image] })
}

const startGame = async (client, channelID) => {
    const channels = client.channels.cache;

    const mineData = {
        image: './mine.png',
        message: 'Welcome to the Mine',
    }

    const caveData = {
        image: './cave.png',
        message: 'Welcome to the Cave',
    }

    const marketData = {
        image: './market.png',
        message: 'Welcome to the Market',
    }

    //Cannot be placed in Promise.all. discordjs delete message limit reached.
    //Find better way to empty channel.
    await deleteMessages(client, channelID.textChannelMineID);
    await deleteMessages(client, channelID.textChannelStoreID);
    await deleteMessages(client, channelID.textChannelCaveID);

    const setMine = setTextChannel(channels.get(channelID.textChannelMineID), mineData);
    const setMarket = setTextChannel(channels.get(channelID.textChannelStoreID), marketData);
    const setCave = setTextChannel(channels.get(channelID.textChannelCaveID), caveData);

    await Promise.all([setMine, setMarket, setCave]);
}

module.exports = startGame;
