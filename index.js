const libnut = (() => {
	switch (process.platform) {
		case 'win32':
			return require(`automately-lib-win32`);
		case 'linux':
			return require(`automately-lib-linux`);
		case 'darwin':
			return require(`automately-lib-darwin`);
	}
})();

module.exports = libnut;
