#!/usr/bin/env node
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');
const blendConfig = require(path.resolve(process.cwd(), 'blend.config.js'));
const log = require('../utils/log');
const spawn = require('blend-spawn');
const spinner = require('blend-spinner');
const chalk = require('chalk');
async function startDevServer() {
    if (blendConfig.type == 'ssr') {
        // server编译
        spinner().info(
            `${chalk.green('[server-compile]')} server compile is start`
        );
        spawn(
            `node ${path.resolve(__dirname, '../scripts/server.compile.js')} `
        );

        //client编译
        spinner().info(
            `${chalk.green('[client-compile]')} client compile is start`
        );
        spawn(
            `node ${path.resolve(__dirname, '../scripts/client.compile.js')} `
        );

        return;
    }

    const config = require('../config/webpack.dev.js');
    const { devServer } = config;
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
//收到退出信号 退出自身进程
process.stdin.on('data', function (data) {
    if (data.toString() === 'exit') {
        process.exit();
    }
});
startDevServer();
