// client编译
const webpack = require('webpack');
const path = require('path');
const blendConfig = require(path.resolve(process.cwd(), 'blend.config.js'));
const log = require('../utils/log');
const spinner = require('blend-spinner');
const chalk = require('chalk');

const clientConfig = require('../config/webpack.base.js');
const clientCompiler = webpack(clientConfig);
const { bfs, efs, fs } = require('blend-fs');
const clientWatching = clientCompiler.watch(
    {
        aggregateTimeout: 300, // 类似节流功能,聚合多个更改一起构建
        ignored: /node_modules/, //排除文件
        poll: 2000, //轮训的方式检查变更 单位：秒  ,如果监听没生效，可以试试这个选项.
        'info-verbosity': 'verbose', //在增量构建的开始和结束时，向控制台发送消息
    },
    (err, stats) => {
        spinner().succeed(
            `${chalk.green('[client-compile]')} client code compile done`
        );

        // 同步最新打包结果进行文件缓存（server的html同步此打包结果）
        console.log(stats.compilation['namedChunks'].get('main')['files']);
        const _file = path.resolve(process.cwd(), 'dist/sync.build.json');
        efs.ensureDirSync(path.resolve(process.cwd(), 'dist'));
        efs.pathExistsSync(_file);
        fs.writeFileSync(
            _file,
            JSON.stringify(
                stats.compilation['namedChunks'].get('main')['files']
            )
        );
        log(
            stats.toString({
                colors: true,
            })
        );
    }
);
