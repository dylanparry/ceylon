module.exports = function (wallaby) {
	var typescriptOptions = {
		module: 'commonjs',
		target: 'es5',
		transpileOnly: true,
	};

	return {
		files: [
			{ pattern: 'src/**/*.ts', load: false },
			{ pattern: 'src/**/*.spec.ts', ignore: true },
		],

		tests: [
			{ pattern: 'src/**/*.spec.ts' },
			{ pattern: 'src/**/*.spec.tsx' },
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