import commonjs from 'rollup-plugin-commonjs';
import npm from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
	entry: './lib/index.js',
	dest: './lib/umd/ceylon.min.js',
	format: 'umd',
	moduleName: 'expect',
	plugins: [
		npm({
			jsnext: true,
			main: true,
		}),
		commonjs(),
		uglify(),
	],
};
