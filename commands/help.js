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
        .addField("p.userinfo", `information about a member`)
        .addField("p.serverinfo", `information about the server`)
        .addField("p.avatar", `get's an user avatar image/gif`)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("RANDOM")

        message.channel.send(pEmbed)
}
