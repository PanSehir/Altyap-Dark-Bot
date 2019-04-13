const Discord = require('discord.js');


exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`${client.user.username} Bilgi`, client.user.avatarURL)
    .addField('❯ Yapımcı', '<@540640047129427995>')
    .addField('❯ Davet', 'Davet İçin [Tıkla]( https://discordapp.com/oauth2/authorize?client_id=549127199651921940&scope=bot&permissions=805314622)')
 .addField('❯ Destek sunucusu', 'Destek Sunucusu İçin [Tıkla](https://discord.gg/HyQD6tj)')
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botbilgi','boti'],
  permLevel: 0,
};

exports.help = {
  name: 'istatistik',
  description: '',
  usage: ''
};
