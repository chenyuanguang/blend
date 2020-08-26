const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const config = require('./webpack.base.js');

const serverConfig = {
    target: 'node',
    mode: 'development',
    entry: path.resolve(process.cwd(), './src/server/index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(process.cwd(), './dist/server'),
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.css?$/,
                use: [
                    'isomorphic-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]_[local]_[hash:base64:5]',
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8000,
                    outputPath: path.resolve(process.cwd(), './dist/public'),
                    publicPath: '/',
                },
            },
        ],
    },
};

module.exports = merge(config, serverConfig);
