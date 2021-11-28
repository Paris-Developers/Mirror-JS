const {MessageEmbed} = require('discord.js');

exports.run = (client, message, args) => {
    //Embed editing
    const embed = new MessageEmbed()
        .setColor('#d4af37')
        .setTitle(':mirror: __Mirror__')
        .setThumbnail('https://i.imgur.com/xBXfVeF.png')
        .setTimestamp()
        .setDescription('Discord utility bot created by Ford, Zac, Leo and Gavin')
        .addField('__Command List:__', '$weather [city]: displays current weather for specified city \n$info: you are here! \n$test: :smile:')
        .setFooter('Created by Fordle#0001', 'https://i.imgur.com/Cq4Sbwq.jpg?1');





    message.channel.send({embeds:[embed]});
}