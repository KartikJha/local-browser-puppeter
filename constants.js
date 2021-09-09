const entity = {
	BROWSER: 'BROWSER',
};

const supportedBrowser = {
	CHROME: 'chrome',
	FIREFOX: 'firefox'
};

const supportedBrowserList = Object.keys(supportedBrowser);

const supportedProcessEvents = ['close', 'end', 'disconnect' ]

module.exports = {
	supportedBrowser,
	entity,
	supportedBrowserList
}