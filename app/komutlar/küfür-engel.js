const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client ,message, args) => {
  
if(args[0] === 'aç') {
  
db.set(`${message.guild.id}.kufur`, true)
  
const Tawdess = new Discord.MessageEmbed()  
  
.setDescription(`Küfür Engel Başarılı Bir Şekilde Akif Edildi!`)
.setColor("GREEN")

return message.channel.send(Tawdess)
}
  
if (args[0] === 'kapat') {
  
db.delete(`${message.guild.id}.kufur`)
  
const Tawdess = new Discord.MessageEmbed() 
  
.setDescription(`Küfür Engel Başarılı Bir Şekilde Deaktif Edildi!`)
.setColor("GREEN")
  
return message.channel.send(Tawdess)
}
{
  
const Tawdess = new Discord.MessageEmbed() 
  
.setDescription('Lütfen **aç** Veya **kapat** Yazın. Örnek Kullanım : **${prefix}küfür-engel aç/kapat**')
.setColor("RED")

return message.channel.send(Tawdess)
}
  
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfürengel'], 
 permLevel: 0
};

exports.help = {
 name: 'küfür-engel',
 description: 'Tawdess',
 usage: 'küfür-engel'
};