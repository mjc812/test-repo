const { Client } = require('discord.js');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const startGame = require('./start.js');
const runGame = require('./run.js');
const deleteMessages = require('./deleteMessages.js');
const mongoose = require('mongoose');
const Player = require('./playerSchema.js');
const Record = require('./recordSchema.js');
const Nest = require('./nestedSchema.js');

const guildID = "701252819075727400";
const channelID = {
    textChannelGeneralID: "701252819075727404",
    textChannelCaveID: "723053728130662471",
    textChannelStoreID: "723053993433104445",
    textChannelMineID: "725875038187814993",
}
const client = new Client();
const channels = client.channels.cache;

//client.channels.cache.get(...); use this to send messages into certain channels

//message.channel.id to get message's channel id

//npm start

mongoose.connect(
    'TOKEN',
    { useNewUrlParser: true, useUnifiedTopology: true }); //added to remove deprecation warnings

client.once('ready', async () => {
    const channel = client.channels.cache.get(channelID.textChannelGeneralID);
    const start = startGame(client, channelID);
    const run = runGame(client, channels, channelID);
    await Promise.all([start, run]);
    channel.send('ready');
});

client.login(token);


// function timeout(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// await timeout(3000);