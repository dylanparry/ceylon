import commonjs from 'rollup-plugin-commonjs';
import npm from 'rollup-plugin-node-resolve';

export default {
	entry: './lib/index.js',
	dest: './lib/umd/ceylon.js',
	format: 'umd',
	moduleName: 'expect',
	plugins: [
		npm({
			jsnext: true,
			main: true,
		}),
		commonjs(),
	],
};
