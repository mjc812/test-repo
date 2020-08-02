const mongoose = require('mongoose');
const Discord = require('discord.js');

const deleteMessages = async (client, channelID) => {
    const channel = client.channels.cache.get(channelID);
    const testV = await channel.messages.fetch({ limit: 20 });

    let keys = Array.from(testV.keys());

    for (i = 0; i < keys.length; i++) {
        await testV.get(keys[i]).delete();
    }
}

module.exports = deleteMessages;

