#!/usr/bin/env node
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../config/webpack.dev.js');
const { devServer } = config;

async function startDevServer() {
    const compiler = webpack(config);

    const server = await new WebpackDevServer(compiler, devServer);
    server.use(require('webpack-hot-middleware')(compiler));

    try {
        server.listen(devServer.port, async (err) => {
            if (err) console.error(err);
            // if (err) buildingError(err);
            // console.log('===========')
        });
    } catch (e) {
        console.error(e);
    }
}
startDevServer();
