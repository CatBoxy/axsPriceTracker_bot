const CoinGecko = require('coingecko-api');

const CoinGeckoClient = new CoinGecko();

const coinGecko = {
	// Queries the price of a criptocurrency to the coingecko API
	criptoPrice: async () => {

		try {
			// Queries the API
			const geckoJson = await CoinGeckoClient.simple.price({
				ids: 'axie-infinity',
				vs_currencies: 'usd',
			});
			// Stores the data value recieved from the API
			const priceValue = Object.values(geckoJson.data)[0];
			const priceUsd = priceValue.usd;

			return priceUsd;
		} catch (error) {
			let message = `Algo salio mal, ${error}`;
			console.log(error);
			return message;
		}

	},
};


module.exports = coinGecko;