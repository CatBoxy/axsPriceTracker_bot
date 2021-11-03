require('dotenv').config();
const fs = require('fs');
const { Client, Intents } = require('discord.js');

// Creates new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const botToken = process.env.TOKEN;

// Returns array of all file names in events directory
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

// Dinamically executes events from events directory
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(botToken);