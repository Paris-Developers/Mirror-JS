const { MessageEmbed,Permissions } = require('discord.js');

exports.commandName= 'yoon';

exports.registerData= (client) => {
    return {
        name: this.commandName,
        description: "No longer a shitter" 
    }
}

exports.run = (client,interaction) => {
    const embed = new MessageEmbed()
        .setThumbnail('https://imgur.com/u74gSZU.jpg');
    interaction.reply({embeds:[embed],content:"false!"});
    return;
}