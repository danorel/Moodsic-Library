const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = (_env, argv) => ({
    mode: argv.mode,
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
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
        },
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
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
                        cacheDirectory: true,
                        cacheCompression: false,
                        envName: argv.mode,
                    },
                },
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'stylesheets/[name].css',
        }),
    ]
})