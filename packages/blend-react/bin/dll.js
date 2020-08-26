#!/usr/bin/env node
const webpack = require('webpack');
const config = require('../config/webpack.dll.js');
const { bfs, efs, fs } = require('blend-fs');
const path = require('path');
const md5 = require('md5');
const spinner = require('blend-spinner');
const log = require('../utils/log');

async function startDll() {
    const sp = spinner('DLL打包中...');
    const compiler = webpack(config);
    await new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err) {
                log(err.stack || err);
                if (err.details) {
                    log(err.details);
                }
                sp.fail('DLL打包出错,请查看log日志');
                reject('dll打包出错');
                return;
            }

            const info = stats.toJson();

            if (stats.hasErrors()) {
                log(info.errors);
            }

            if (stats.hasWarnings()) {
                log(info.warnings);
            }

            log(
                stats.toString({
                    // 增加控制台颜色开关
                    colors: true,
                })
            );
            resolve();
        });
    });
    sp.succeed('DLL打包结束');
}
// startDll();
module.exports = async () => {
    const file = path.resolve(
        process.cwd(),
        'node_modules/.cache/dll.cache.json'
    );

    const newVal = md5(
        fs
            .readFileSync(path.resolve(process.cwd(), 'package.json'), 'utf-8')
            .replace(/\s+/g, '')
    );

    if (efs.pathExistsSync(file)) {
        const val = efs.readJsonSync(file);

        if (newVal != val) {
            efs.writeJsonSync(file, newVal);
            await startDll();
        }
        return;
    }
    efs.ensureDirSync(path.resolve(process.cwd(), 'node_modules/.cache'));
    efs.ensureFileSync(file);
    efs.writeJsonSync(file, newVal);
    await startDll();
};
