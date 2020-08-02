const Discord = require('discord.js');
const mongoose = require('mongoose');
const Player = require('./playerSchema.js');
const Record = require('./recordSchema.js');
const Nest = require('./nestedSchema.js');
const caveManager = require('./caveManager.js');
const mineManager = require('./mineManager.js');

const runGame = async (client, channels, channelID) => {
    await caveManager(client, channels.get(channelID.textChannelCaveID));
    await mineManager(client, channels.get(channelID.textChannelMineID));
}

module.exports = runGame;

// client.on('message', async message => {
//     if (message.content === 'a') {
//         console.log('a')
//         const player = new Player({
//             _id: new mongoose.Types.ObjectId(),
//             discordID: message.author.id,
//         })

//         player.save()
//             .then(result => {
//                 //console.log(result)
//             })
//             .catch(err => {
//                 //console.log(err)
//             })
//     } else if (message.content === 'b') {
//         console.log('b')
//         const record = new Record({
//             _id: new mongoose.Types.ObjectId(),
//             highScorePlayer: message.author.id,
//         })
//         record.save()
//             .then(result => {
//                 //console.log(result)
//             })
//             .catch(err => {
//                 //console.log(err)
//             })
//     } else if (message.content === 'c') {
//         console.log('c')
//         let doc = await Player.findById('5ee6c717758745384beda87d');
//         const discordID = doc.discordID;
//     } else if (message.content === 'd') {
//         console.log('d')
//         let player = await Player.findById('5ee6c717758745384beda87d');
//         player.discordID = "testDiscordID";
//         player.save()
//             .then(result => {
//                 //console.log(result)
//             })
//             .catch(err => {
//                 //console.log(err)
//             })
//         // add nest
//     } else if (message.content === 'e') {
//         console.log('e')
//         const nest = new Nest({
//             _id: new mongoose.Types.ObjectId(),
//             nest: {
//                 nestedChildOne: 10,
//                 nestedChildTwo: [],
//                 nestedChildThree: "test nest three",
//             }
//         })
//         nest.save()
//             .then(result => {
//                 //console.log(result)
//             })
//             .catch(err => {
//                 //console.log(err)
//             })
//     } else if (message.content === 'f') {
//         console.log('f')
//         let nest = await Nest.findById('5ee6c8869c6d843aa823f427');
//         nest.nest.nestedChildOne = 5;
//         nest.save()
//             .then(result => {
//                 //console.log(result)
//             })
//             .catch(err => {
//                 //console.log(err)
//             })
//     }
// })