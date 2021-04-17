const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const common = require('./webpack.config.base.js')(null, {
    mode: 'development'
});

const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
        modules: true,
        importLoaders: 2,
        sourceMap: false, // turned off as causes delay
    }
}

// For our normal CSS files we would like them globally scoped
const CSSLoader = {
    loader: 'css-loader',
    options: {
        modules: "global",
        importLoaders: 2,
        sourceMap: false, // turned off as causes delay
    }
}

// Our PNG, JPG and GIF loader
const ImageLoader = {
    loader: 'url-loader',
    options: {
        limit: 8192,
        name: 'src/assets/[name].[fullhash:8].[ext]',
    },
};

// Our SVG loader
const SVGLoader = {
    loader: '@svgr/webpack',
};

// Our FontLoader
const FontLoader = {
    loader: require.resolve('file-loader'),
    options: {
        name: 'src/fonts/[name].[fullhash:8].[ext]',
    },
};

// Our StyleLoader
const StyleLoader = 'development' ? 'style-loader' : MiniCssExtractPlugin.loader;

const client = (isProduction) =>
    merge(common,{
        name: 'client',
        target: 'web',
        devtool: 'inline-source-map',
        entry: path.resolve(__dirname, 'src/client/index.tsx'),
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    exclude: /\.module\.(sa|sc|c)ss$/,
                    use: [StyleLoader, CSSLoader, "sass-loader"]
                },
                {
                    test: /\.module\.(sa|sc|c)ss$/,
                    use: [StyleLoader, CSSModuleLoader, "sass-loader"]
                },
                {
                    test: /\.(eot|otf|ttf|woff|woff2)$/,
                    use: [FontLoader]
                },
                {
                    test: /\.svg$/,
                    use: [SVGLoader]
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [ImageLoader]
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
    merge(common, {
        name: 'server',
        target: 'node',
        externals: [nodeExternals()],
        entry: path.resolve(__dirname, 'src/server/index.tsx'),
        plugins: [
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
