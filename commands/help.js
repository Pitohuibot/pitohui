const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

     message.channel.send(`${message.author}`)
    let pEmbed = new Discord.RichEmbed()
        .setTitle("Commands")
        .addField("p.ban", `Ban an user`)
        .addField("p.kick", `Kick out a user`)
        .addField("p.ping", `View bot ping`)
        .addField("p.sayemb", `Say a message in a embed`)
        .addField("p.mute", `Mute an user in a text channel in D(Days), M(Minutes), H(Hours)`) 
        .addField("p.unmute", `Unmute an user in a text channel`)
        .addField("p.invite", `Link to my support serverᵇʳ`)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("RANDOM")

        message.channel.send(pEmbed)
}
module.exports.help = {
    name: "help"
}
