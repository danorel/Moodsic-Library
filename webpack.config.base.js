const webpack = require('webpack');

module.exports = (_env, argv) => ({
    mode: argv.mode,
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
        modules: ['src', 'node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        compact: false,
                        presets: [['es2015', { modules: false, loose: true }], 'react'],
                        cacheDirectory: true,
                        cacheCompression: false,
                        envName: argv.mode,
                    },
                },
            },
        ]
    },
    plugins: argv.mode === 'production' ? [new webpack.HotModuleReplacementPlugin()] : []
})