const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = function(_env, argv) {
    const isProduction = argv.mode === "production";

    return {
        mode: 'development',
        devtool: 'inline-source-map',
        entry: path.resolve(__dirname, "./src/index.tsx"),
        output: {
            filename: 'bundle-[contenthash].js',
            path: path.resolve(__dirname, 'dist')
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
                            presets: [["es2015", {"modules": false, "loose" : true}], 'react'],
                            cacheDirectory: true,
                            cacheCompression: false,
                            envName: isProduction ? "production" : "development"
                        }
                    }
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
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: "src/public/assets/media/[name].[hash:8].[ext]"
                        }
                    }
                },
                {
                    test: /\.svg$/,
                    use: ["@svgr/webpack"]
                },
                {
                    test: /\.(eot|otf|ttf|woff|woff2)$/,
                    loader: require.resolve("file-loader"),
                    options: {
                        name: "src/public/assets/media/[name].[hash:8].[ext]"
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.css']
        },
        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserWebpackPlugin({
                    terserOptions: {
                        compress: {
                            comparisons: false
                        },
                        mangle: {
                            safari10: true
                        },
                        output: {
                            comments: false,
                            ascii_only: true
                        },
                        warnings: false
                    }
                }),
                new OptimizeCssAssetsPlugin()
            ],
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.css$/,
                        chunks: 'all',
                        enforce: true
                    },
                    vendor: {
                        chunks: 'initial',
                        test: 'vendor',
                        name: 'vendor',
                        enforce: true
                    }
                }
            },
            runtimeChunk: "single"
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
                        noErrorOnMissing: true
                    },
                ],
            }),
            !isProduction &&
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                template: 'src/public/index.html',
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
                "process.env.NODE_ENV": JSON.stringify(
                    isProduction ? "production" : "development"
                )
            })
        ].filter(Boolean),
        devServer: {
            hot: true,
            host: "localhost",
            port: 3000,
            open: true,
            overlay: true,
            compress: true,
            historyApiFallback: true,
            contentBase: path.join(__dirname, 'dist')
        }
    };
};
