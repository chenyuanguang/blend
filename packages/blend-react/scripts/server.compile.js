// server编译
const webpack = require('webpack');
const path = require('path');
const blendConfig = require(path.resolve(process.cwd(), 'blend.config.js'));
const log = require('../utils/log');
const serverConfig = require('../config/webpack.server.js');
const spinner = require('blend-spinner');
const chalk = require('chalk');
const serverCompiler = webpack(serverConfig);

const serverWatching = serverCompiler.watch(
    {
        aggregateTimeout: 300, // 类似节流功能,聚合多个更改一起构建
        ignored: /node_modules/, //排除文件
        poll: 2000, //轮训的方式检查变更 单位：秒  ,如果监听没生效，可以试试这个选项.
        'info-verbosity': 'verbose', //在增量构建的开始和结束时，向控制台发送消息
    },
    (err, stats) => {
        spinner().succeed(
            `${chalk.green('[server-compile]')} server code compile done`
        );
        log(
            stats.toString({
                colors: true,
            })
        );
    }
);
