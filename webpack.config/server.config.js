var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './@server/bin/server.js'
    },
    target: 'node',
    node: {
        __filename: false,
        __dirname: false
    },
    output: {
        path: path.resolve('./dist'),
        filename: 'server.js'
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader'
        },
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },

        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('PROD')
            }
        }),
    ]
}