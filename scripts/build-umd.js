const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');

// Create a UMD bundle
rollup.rollup({
    entry: './lib/umd.js',
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
    entry: './lib/umd.js',
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
