const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

var prefix = "!Minty"
client.on('message', message => {
  if (message.content.startsWith (prefix)) {
      message.reply('Hello!');
  }
});

client.login(process.env.BOT_TOKEN);
