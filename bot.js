const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

var prefix = "!minty"
client.on('message', message => {
    //minty will ignore any message that is not addressed to her
    if (!message.content.startsWith(prefix)) return;

    //prevent minty from responding to herself
    if (message.author === client.user) return;

    //basic response cases
    if (message.content.startsWith(prefix)) {
        message.reply('Hello!');
    }
});

client.login(process.env.BOT_TOKEN);
