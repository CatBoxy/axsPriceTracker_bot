// Logs on console the bot is ready

const coinGecko = require('../APIs/coingeckoApi');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		async	function axsPrice() {
			const response = await coinGecko.criptoPrice();
			// stores owner's Discord ID
			const user = await client.users.fetch('350460024981815299');
			if (typeof response !== 'number') {
				// notifies discord owner the error
				client.user.setActivity(`waiting for price`, { type: 'WATCHING' });
				user.send(`${response}`);
				console.log(response);
			}else{
				client.user.setActivity(`$${response}`, { type: 'WATCHING' });
			}
		}

		axsPrice();
		setInterval(() =>{
			axsPrice();
		}, 300000);
	},
};