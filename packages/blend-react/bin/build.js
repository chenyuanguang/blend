#!/usr/bin/env node
const webpack = require('webpack');
const config = require('../config/webpack.build.js');

const log = require('../utils/log');
const spinner = require('blend-spinner');

async function startBuild() {
    const sp = spinner('打包中...');
    const compiler = webpack(config);
    compiler.run((err, stats) => {
        if (err) {
            // console.error(err.stack || err);
            log(err.stack || err);
            if (err.details) {
                // console.error(err.details);
                log(err.details);
            }

            return;
        }

        const info = stats.toJson();

        if (stats.hasErrors()) {
            // console.error(info.errors);
            log(info.errors);
        }

        if (stats.hasWarnings()) {
            // console.warn(info.warnings);
            log(info.warnings);
        }

        console.log(
            stats.toString({
                // 增加控制台颜色开关
                colors: true,
            })
        );
        log(
            stats.toString({
                colors: true,
            })
        );
        sp.succeed('打包结束');
    });
}
startBuild();
