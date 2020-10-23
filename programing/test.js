const { MessageMentions, MessageManager, Message } = require('discord.js');
 Discord = require('discord.js');
 client = new Discord.Client();


 function sleep(milliseconds) { 
  let timeStart = new Date().getTime(); 
  while (true) { 
    let elapsedTime = new Date().getTime() - timeStart; 
    if (elapsedTime > milliseconds) { 
      break; 
    } 
  } 
} 
client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	console.log(`${message.author.username}`,":",message.content);
		if (message.content === '!test') {
      sleep(1000)
      message.channel.send('you are not a dissapoinment');
    }
});
client.login(Token)