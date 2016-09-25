const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');
const exec = require('child_process').execSync;

// Transpile the original TypeScript into ES5 with CommonJS modules
exec('tsc --outDir ./lib --declaration ./src/index.ts');

// Transpile the original TypeScript into ES5 with ES6 modules
exec('tsc --target es5 --module es2015 --moduleResolution node --outDir ./lib/es6 ./src/index.ts');

// Create a UMD bundle
rollup.rollup({
	entry: './lib/index.js',
	plugins: [
		nodeResolve({
			jsnext: true,
			main:true,
		}),
		commonjs(),
	],
}).then((bundle) => {
	bundle.write({
		format: 'umd',
		dest: './lib/umd/ceylon.js',
		moduleName: 'expect',
	});
});

// Create a minified UMD bundle
rollup.rollup({
	entry: './lib/index.js',
	plugins: [
		nodeResolve({
			jsnext: true,
			main:true,
		}),
		commonjs(),
		uglify(),
	],
}).then((bundle) => {
	bundle.write({
		format: 'umd',
		dest: './lib/umd/ceylon.min.js',
		moduleName: 'expect',
	});
});
