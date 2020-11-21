const Discord = require('discord.js')

exports.run = function(client, message, args) {
  
  
const Tawdess = new Discord.MessageEmbed() 
                            
.setTitle("Tawdess")
.setDescription("**Botun Davet Linki :** [Davet Et](https://discord.com/oauth2/authorize?client_id=773531645600989204&permissions=8&scope=bot)\n**Botun Destek Sunucusu :** [Katıl](https://discord.gg/rebels)")
.setColor("GREEN")

return message.channel.send(Tawdess)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["botu-ekle"],
permLevel: 0
  
};
  
exports.help = {
name: 'davet'
};