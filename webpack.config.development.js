const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const common = require('./webpack.config.base.js')(null, {
    mode: 'development'
});

const client = (isProduction) =>
    merge(common,{
        name: 'client',
        target: 'web',
        devtool: 'source-map',
        entry: path.resolve(__dirname, 'src/client/index.tsx'),
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].css',
                                outputPath: 'stylesheets/'
                            }
                        },
                        {
                            loader: 'extract-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true
                            }
                        },
                    ],
                    include: /\.module\.css$/
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].css',
                                outputPath: 'stylesheets/'
                            }
                        },
                        {
                            loader: 'extract-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true
                            }
                        },
                    ],
                    exclude: /\.module\.css$/
                },
                {
                    test: /\.(eot|otf|ttf|woff|woff2)$/,
                    use: [
                        {
                            loader: require.resolve('file-loader'),
                            options: {
                                name: 'src/fonts/[name].[fullhash:8].[ext]',
                            },
                        }
                    ]
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: '@svgr/webpack',
                        }
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                                name: 'src/assets/[name].[fullhash:8].[ext]',
                            },
                        }
                    ]
                }
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
            new CleanWebpackPlugin({
                dry: true,
                verbose: isProduction,
                dangerouslyAllowCleanPatternsOutsideProject: true
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: '**/*',
                        context: path.resolve(__dirname, 'src'),
                        to: './assets',
                        noErrorOnMissing: true,
                    },
                ],
            }),
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1,
            }),
            new webpack.DefinePlugin({
                'global': {},
                'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
                'process.env.APP_VERSION': JSON.stringify(process.env.APP_VERSION),
            }),
        ].filter(Boolean),
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'build'),
            publicPath: '/',
        },
    });

const server = (isProduction) =>
    merge(common, {
        name: 'server',
        target: 'node',
        devtool: 'source-map',
        node: { __dirname: false },
        externals: [
            nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })
        ],
        entry: path.resolve(__dirname, 'src', 'server', 'index.tsx'),
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true
                            }
                        },
                    ],
                    include: /\.module\.css$/
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                    ],
                    exclude: /\.module\.css$/
                },
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': isProduction ? '"production"': '"development"',
                'process.env.BROWSER': JSON.stringify(true),
                __DEV__: !isProduction
            }),
        ],
        output: {
            filename: "server.js",
            libraryTarget: 'commonjs2',
            path: path.resolve(__dirname, "build")
        },
    });

module.exports = function (_env, argv) {
    const isProduction = argv.mode === 'production';
    return [client(isProduction), server(isProduction)];
};
