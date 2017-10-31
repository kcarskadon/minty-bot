const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
      var args = message.substring(1).split(' ');
      var cmd = args[0];

      args = args.splice(1);
      switch(cmd) {
          // !ping
          case 'greet':
              bot.sendMessage({
                  to: channelID,
                  message: 'hello!'
              });
          break;
          // Just add any case commands if you want to..
       }
    }
});

client.login(process.env.BOT_TOKEN);
