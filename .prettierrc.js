module.exports = {
	printWidth: 100,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	tabSize: 2,
	tabWidth: 2,
	trailingComma: 'none',
	useTabs: false,
	overrides: [
		{
			files: ['*.json', '*.js', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false
			}
		}
	],
	endOfLine: 'lf'
}
