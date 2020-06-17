const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

     message.channel.send(`${message.author}`)
    let pEmbed = new Discord.RichEmbed()
        .setTitle("Comandos")
        .addField("p.ban", `Banir um usuário`)
        .addField("p.clear", `Limpar o chat (Comando em desenvolvimento)`)
        .addField("p.kick", `Expulsar alguém do servidor`)
        .addField("p.ping", `Ver o ping do bot`)
        .addField("p.sayemb", `Faça o bot enviar uma mensagem em formato de embed`)
        .addField("p.mute", `Silenciar um usuário no canal de texto`)
        .addField("p.unmute", `Desmutar um usuário no canal de texto`)
        .addField("p.invite", `Link do meu servidor de suporte!`)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("RANDOM")

        message.channel.send(pEmbed)
}
module.exports.help = {
    name: "ajuda"
}
