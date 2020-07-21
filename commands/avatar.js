

const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    if (!message.mentions.users.size) {
      return message.channel.send(
        `> O **Seu** avatar é: 🖼 ${message.author.displayAvatarURL}`
      )
    }
    const avatarList = message.mentions.users.map(
      user => `> **${user.username}'s** avatar 🖼 ${user.displayAvatarURL}`
    )

    return message.channel.send(avatarList)
  }

  conf: {}



