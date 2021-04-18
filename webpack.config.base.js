const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin');

module.exports = (_env, argv) => ({
    mode: argv.mode,
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
        modules: [
            'src',
            'src/client',
            'src/common',
            'src/server',
            'node_modules'
        ],
        alias: {
            common: path.resolve(__dirname, 'src/common/'),
            client: path.resolve(__dirname, 'src/client/'),
            server: path.resolve(__dirname, 'src/server/'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
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
    plugins: argv.mode === 'production' ? [
        new TypedCssModulesPlugin({
            globPattern: 'src/**/*.css',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
    ] : [
        new TypedCssModulesPlugin({
            globPattern: 'src/**/*.css',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
    ]
})