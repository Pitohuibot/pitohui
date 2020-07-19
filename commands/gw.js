const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

function rolldice() {
    var x = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    var y = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    var dicetotal = x + y;
    var double = 0;
    $('.dice1').attr('id', "dice" + x);
    $('.dice2').attr('id', "dice" + y);
    if (x == y) {
        var double = double++; 
     
   }
 }
}
