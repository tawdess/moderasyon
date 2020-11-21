const db = require('quick.db');
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  
  if (!args[0]) {
    
  const Tawdess = new Discord.MessageEmbed() 
  
  .setDescription('Lütfen **aç** Veya **kapat** Yazın. Örnek Kullanım : **${prefix}ever-here-engel aç/kapat**')
  .setColor("RED")

  return message.channel.send(Tawdess)
  }
  
  if (args[0] == 'aç') {
    
  db.set(`hereengel_${message.guild.id}`, 'acik')
    
  const Tawdess = new Discord.MessageEmbed() 
  
  .setDescription('Ever-Here Engel Başarılı Bir Şekilde Aktif Edildi!')
  .setColor("GREEN")

  return message.channel.send(Tawdess)
  }
  
  if (args[0] == 'kapat') {
    
  db.set(`hereengel_${message.guild.id}`, 'kapali')
    
  const Tawdess = new Discord.MessageEmbed() 
  
  .setDescription('Ever-Here Engel Başarılı Bir Şekilde Deaktif Edildi!')
  .setColor("GREEN")

  return message.channel.send(Tawdess)
  } 
  
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ever-here-engel','everhere-engel','ever-hereengel'],
  permLevel: 3
};

exports.help = {
  name: 'everhereengel',
  description: 'Tawdess',
  usage: 'everhereengel'
};