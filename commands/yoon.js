exports.commandName= 'yoon';

exports.registerData= (client) => {
    return {
        name: this.commandName,
        description: "No longer a shitter" 
    }
}

exports.run = (client,interaction) => {
    interaction.reply("true !");
}