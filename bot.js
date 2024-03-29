const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

var prefix = "!minty"
client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');

    //minty will ignore any message that is not addressed to her
    if (!message.content.startsWith(prefix)) return;

    //prevent minty from responding to herself
    if (message.author.bot) return;

    //basic response cases
    if (message.content.startsWith(prefix + ' greet')) {
        message.reply('Hello!');
    } else

    if (message.content.startsWith(prefix + 'status')) {
        client.user.setStatus(argresult);
    } else

    if (message.content.startsWith(prefix + 'play')) {
        client.user.setPresence({ game: { name: argresult, type: 0 } });
    }
});

client.login(process.env.BOT_TOKEN);
