const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const { config } = require('./w.conf');

const client = (isProduction) =>
    Object.assign({}, config(isProduction), {
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
                            loader: ExtractCssChunks.loader,
                            options: {
                                publicPath: (resourcePath, context) => {
                                    // publicPath is the relative path of the resource to the context
                                    // e.g. for ./css/admin/main.css the publicPath will be ../../
                                    // while for ./css/main.css the publicPath will be ../
                                    return path.relative(path.dirname(resourcePath), context) + '/src/client/public';
                                },
                                hot: !isProduction,
                                reloadAll: !isProduction,
                            },
                        },
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ],
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'src/client/public/assets/media/[name].[fullhash:8].[ext]',
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
                        name: 'src/client/public/assets/media/[name].[fullhash:8].[ext]',
                    },
                },
            ]
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
            !isProduction && new webpack.HotModuleReplacementPlugin(),
            new CleanWebpackPlugin({
                dry: true,
                verbose: isProduction,
                dangerouslyAllowCleanPatternsOutsideProject: true
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: '**/*',
                        context: path.resolve(__dirname, 'src', 'client', 'public', 'assets'),
                        to: './assets',
                        noErrorOnMissing: true,
                    },
                ],
            }),
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
            new ExtractCssChunks({
                filename: !isProduction ? '[name].css' : '[name].[hash].css',
                chunkFilename: !isProduction ? '[id].css' : '[id].[hash].css',
                ignoreOrder: false,
            }),
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1,
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
                'process.env.APP_VERSION': JSON.stringify(process.env.APP_VERSION),
            }),
        ].filter(Boolean),
        output: {
            filename: 'bundle-[contenthash].js',
            path: path.resolve(__dirname, 'build'),
        },
    });

const server = (isProduction) =>
    Object.assign({}, config(isProduction), {
        name: 'server',
        target: 'node',
        externals: [nodeExternals()],
        entry: path.resolve(__dirname, 'src/server/index.tsx'),
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
            ]
        },
        plugins: [
            !isProduction && new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': isProduction ? '"production"': '"development"',
                'process.env.BROWSER': JSON.stringify(true),
                __DEV__: !isProduction
            }),
        ],
        output: {
            filename: "server.js",
            path: path.resolve(__dirname, "build")
        },
    });

module.exports = function (_env, argv) {
    const isProduction = argv.mode === 'production';
    return [client(isProduction), server(isProduction)];
};
