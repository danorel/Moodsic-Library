const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = function(_env, argv) {
    const isProduction = argv.mode === "production";

    return {
        mode: 'development',
        devtool: "inline-source-map",
        entry: {
            app: "./src/index.tsx"
        },
        output: {
            filename: '[name].[hash].js',
            publicPath: path.join(__dirname, 'public')
        },
        module: {
            rules: [
                { test: /\.m?js/, type: "javascript/auto" },
                {
                    test: /\.(ts|.tsx)?$/,
                    use: 'awesome-typescript-loader',
                    include: __dirname
                },
                {
                    test: /\.(js|jsx)?$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react'],
                            cacheDirectory: true,
                            cacheCompression: false,
                            envName: isProduction ? "production" : "development"
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : "style-loader",
                        "css-loader"
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: "static/media/[name].[hash:8].[ext]"
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
                        name: "static/media/[name].[hash:8].[ext]"
                    }
                }
            ]
        },
        resolve: {
            alias: {
                "react-dom": "@hot-loader/react-dom",
            },
            extensions: [".js", ".jsx", ".ts", ".tsx"]
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
            !isProduction &&
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public/index.html"),
                inject: true
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
            contentBase: path.join(__dirname, 'public')
        }
    };
};
