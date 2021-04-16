const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const config = {
    mode: 'development',
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: ['src', 'node_modules'],
    },
};

const client = (isProduction) =>
    Object.assign({}, config, {
        name: 'client',
        target: 'web',
        devtool: 'inline-source-map',
        entry: path.resolve(__dirname, 'src/client/index.tsx'),
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
                            envName: isProduction ? 'production' : 'development',
                        },
                    },
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {},
                        },
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'src/public/assets/media/[name].[hash:8].[ext]',
                        },
                    },
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.(eot|otf|ttf|woff|woff2)$/,
                    loader: require.resolve('file-loader'),
                    options: {
                        name: 'src/public/assets/media/[name].[hash:8].[ext]',
                    },
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
        },
        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserWebpackPlugin({
                    terserOptions: {
                        compress: {
                            comparisons: false,
                        },
                        mangle: {
                            safari10: true,
                        },
                        output: {
                            comments: false,
                            ascii_only: true,
                        },
                        warnings: false,
                    },
                }),
                new OptimizeCssAssetsPlugin(),
            ],
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.css$/,
                        chunks: 'all',
                        enforce: true,
                    },
                    vendor: {
                        chunks: 'initial',
                        test: 'vendor',
                        name: 'vendor',
                        enforce: true,
                    },
                },
            },
            runtimeChunk: 'single',
        },
        plugins: [
            new CaseSensitivePathsPlugin(),
            new CleanWebpackPlugin(),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: '**/*',
                        context: path.resolve(__dirname, 'src', 'public', 'assets'),
                        to: './assets',
                        noErrorOnMissing: true,
                    },
                ],
            }),
            !isProduction && new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                template: 'src/client/public/index.html',
                filename: 'index.html',
                minify: {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                },
            }),
            new MiniCssExtractPlugin({
                filename: 'style-[hash].css',
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
                'process.env.APP_VERSION': JSON.stringify(process.env.APP_VERSION),
            }),
        ].filter(Boolean),
        devServer: {
            hot: true,
            host: 'localhost',
            port: 3000,
            open: true,
            overlay: true,
            compress: true,
            historyApiFallback: true,
            contentBase: path.join(__dirname, 'dist'),
        },
        output: {
            filename: 'bundle-[contenthash].js',
            path: path.resolve(__dirname, 'build'),
        },
    });

const server = (isProduction) =>
    Object.assign({}, config, {
        name: 'server',
        target: 'node',
        externals: [nodeExternals()],
        entry: path.resolve(__dirname, 'src/server/index.tsx'),
        output: {
            filename: 'server.js',
            path: path.resolve(__dirname, 'build'),
        },
    });

module.exports = function (_env, argv) {
    const isProduction = argv.mode === 'production';

    return [client(isProduction), server(isProduction)];
};
