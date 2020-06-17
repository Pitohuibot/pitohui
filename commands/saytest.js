const Discord = require('discord.js')

module.exports = {
    run: (client, message, args) => {

       
        let splitarg = args.join(" ").split(" / ")
        let titulo = splitarg[0]
    

        if(!titulo){
            message.reply("Use o formato ``p.say <mensagem>``")
            return
        }

    

        message.reply(" ${titulo} ")

    }
}
