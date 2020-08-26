/*
 * @Author: your name
 * @Date: 2020-08-21 16:42:57
 * @LastEditTime: 2020-08-22 00:47:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blend/test/react/index.js
 */
const spawn = require('blend-spawn');
const spinner = require('blend-spinner');
const { bfs, efs, fs } = require('blend-fs');
const path = require('path');
const src = path.resolve(__dirname, './react-family-meals');

const runScript = async () => {
    efs.remove(src + '/node_modules');
    spinner('  🔩 重新下载模块...').succeed();
    await spawn('yarn install --no-lockfile', {
        cwd: path.resolve(__dirname, './react-family-meals'),
    });
    spinner('  🔩 重新启动...').succeed();
    await spawn('npm start', {
        cwd: path.resolve(__dirname, './react-family-meals'),
    });
    spinner('  🔩 打包完成...').succeed();
};
runScript();
