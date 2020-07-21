const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

     message.channel.send(`${message.author}`)
    let pEmbed = new Discord.RichEmbed()
        .setTitle("Comandos")
        .addField("p.ban", `Banir um usuário`)
        .addField("p.kick", `Expulsar alguém do servidor`)
        .addField("p.ping", `Ver o ping do bot`)
        .addField("p.sayemb", `Faça o bot enviar uma mensagem em formato de embed`)
        .addField("p.mute", `Silenciar um usuário no canal de texto em D(Dias), M(Minutos), H(Horas)`)
        .addField("p.unmute", `Desmutar um usuário no canal de texto`)
        .addField("p.invite", `Link do meu servidor de suporte!`)
        .addField("p.userinfo", `Mostra as informações de algum usuário`)
        .addField("p.serverinfo", `Mostra as informações do servidor`)
        .addField("p.avatar", `Mostra o avatar de algum usuário`)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("RANDOM")

        message.channel.send(pEmbed)
}
module.exports.help = {
    name: "ajuda"
}
