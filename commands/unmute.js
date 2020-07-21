const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let muteRole = message.guild.roles.find("name", "Mutado");
    let member = message.mentions.members.first();
    if(!member) return message.channel.send(` ${message.author} Mencione o usuário que deseja desmutar!`);
     else{
     member.removeRole(muteRole);
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Você não é um ademir.");
       let pEmbed = new Discord.RichEmbed()
       .setTitle("🔊UnMute")
       .addField("Membro Desmutado", `${member}`)
       .addField("Desmutado por", `${message.author}`)
       
     message.channel.send(pEmbed);
    }
}

module.exports.help = {
     name: "unmute"
}
