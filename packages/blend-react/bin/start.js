#!/usr/bin/env node
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');
const blendConfig = require(path.resolve(process.cwd(), 'blend.config.js'));
console.log(blendConfig);
async function startDevServer() {
    if (blendConfig.type == 'ssr') {
        // server编译
        const serverConfig = require('../config/webpack.server.js');
        const serverCompiler = webpack(serverConfig);
        const serverWatching = serverCompiler.watch(
            {
                aggregateTimeout: 300, // 类似节流功能,聚合多个更改一起构建
                ignored: /node_modules/, //排除文件
                poll: 2000, //轮训的方式检查变更 单位：秒  ,如果监听没生效，可以试试这个选项.
                'info-verbosity': 'verbose', //在增量构建的开始和结束时，向控制台发送消息
            },
            (err, stats) => {
                // Stats Object
                // 这里打印 watch/build 结果...
                console.log(stats);
            }
        );

        serverCompiler.hooks.done.tap('done', function (data) {
            console.log('\n svr code done'); //编译完成的时候  可以监听每次的监听
        });

        // 客户端编译
        const clientConfig = require('../config/webpack.dev.js');
        const clientCompiler = webpack(clientConfig);
        const clientWatching = clientCompiler.watch(
            {
                aggregateTimeout: 300, // 类似节流功能,聚合多个更改一起构建
                ignored: /node_modules/, //排除文件
                poll: 2000, //轮训的方式检查变更 单位：秒  ,如果监听没生效，可以试试这个选项.
                'info-verbosity': 'verbose', //在增量构建的开始和结束时，向控制台发送消息
            },
            (err, stats) => {
                // Stats Object
                // 这里打印 watch/build 结果...
                console.log(stats);
            }
        );

        clientCompiler.hooks.done.tap('done', function (data) {
            console.log('\n svr code done'); //编译完成的时候  可以监听每次的监听
        });

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
