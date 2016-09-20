module.exports = function (wallaby) {
	var typescriptOptions = {
		module: 'commonjs',
		target: 'es5',
		transpileOnly: true,
	};

	return {
		files: [
			{ pattern: 'src/**/*.ts', load: false },
		],

		tests: [
			{ pattern: 'tests/**/*.ts' },
		],

		compilers: {
			'**/*.ts': wallaby.compilers.typeScript(typescriptOptions),
		},

		testFramework: 'mocha',

		env: {
			type: 'node',
			runner: 'node',
		},
	};
};