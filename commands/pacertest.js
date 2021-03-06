const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

        let pacertest = ['π **The FitnessGramβ’ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues.**',
            'π **The 20 meter pacer test will begin in 30 seconds.**', 'π **Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep]**',
            'π **A single lap should be completed each time you hear this sound. [ding]**',
            'π **Remember to run in a straight line, and run as long as possible.**',
            'π **The second time you fail to complete a lap before the sound, your test is over.**',
            'π **The test will begin on the word start. On your mark, get ready, start.**']

        let pacertestrandom = Math.floor((Math.random() * pacertest.length))
        message.channel.send(pacertest[pacertestrandom])

    }

module.exports.help = {
    name: "pacertest",
    aliases: ["pt", "pacer", "test"]
}