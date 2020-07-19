
module.exports.run = async (client, message, args) => {
    if(!message.member.hasID('335193454034419715')) return message.reply("nope")
    const guildArray = client.guilds.map((guild) => {
    return `Nome: ${guild.name}\nID: ${guild.id}\nPessoas: ${guild.memberCount}\n\n`
    })

    await message.author.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
    return message.channel.send("Lansei no pv")
}

module.exports.help = {
    name: "guild"
}
