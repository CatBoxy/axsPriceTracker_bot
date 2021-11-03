// Dinamically executes commands
module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		if (!interaction.isCommand()) return;

		// Fetch the command in the Collection with that name
		const command = interaction.client.commands.get(interaction.commandName);
		// If it doesn't exist, exit with return
		if (!command) return;
		// If it exist, call command's execute method
		try {
			await command.execute(interaction);
			console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
		}
		catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};