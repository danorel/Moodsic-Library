const { merge } = require('webpack-merge');

const [client, server] = require('./webpack.config.development.js')(null, {
    mode: 'production'
});

const production = (config) => merge(config, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.production.json',
                },
            },
        ],
    },
});

module.exports = function (_env) {
    return [
        production(client),
        production(server)
    ];
};
