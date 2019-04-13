const Discord = require('discord.js');

exports.run = async (client, message, params) => {
  var channel = client.channels.find('id', '557977142395404298')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("Dark | Canlı Destek")
  .setDescription("**Canlı Desteği kullandğın için teşekkür ederiz, Seninle ekibim ilgilenicektir lütfen bekle!**")
 message.channel.send(embed).then(msg => {msg.delete(100000)});
      const invite = new Discord.RichEmbed()
  .setAuthor("Uzaylı Canlı Destek | Talep")
  .addField('**:small_red_triangle_down: Kullanıcı Adı: **', `:white_small_square: <@${message.author.id}>`)
  .addField('**:small_red_triangle_down: Talep edilen: **', ":white_small_square: <@&540640047129427995>")
  .setThumbnail("https://subiz.com/blog/wp-content/uploads/2015/01/Great-customer-service-animated-icon-by-Fede-Cook.gif")
  .setDescription(`**:small_red_triangle_down:   Talep edilen kanal:**\n:white_small_square: ${asdf.url}`)
      channel.send(invite)
};

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["canlı"],
  permLevel: 0
};

exports.help = {
  name: 'canlıdestek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: '.canlıdestek'
};