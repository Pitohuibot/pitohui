
module.exports.run = async (client, message, args) => {
    
        var users = ['335193454034419715']
if(!users.includes(message.author.id)) return message.reply("nope")
    
    const guildArray = client.guilds.map((guild) => {
    return `Nome: ${guild.name}\nID: ${guild.id}\nPessoas: ${guild.memberCount}\n\n`
    })

    await message.author.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
    return message.channel.send("Lansei no pv")
}

module.exports.help = {
    name: "guild"
}
