/*
 * @Author: your name
 * @Date: 2020-08-21 16:03:55
 * @LastEditTime: 2020-08-21 16:09:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /blend/packages/blend-spawn/lib/blend-spawn.js
 */
const spinner = require('blend-spinner');

const spawn = async (cmd, options = {}) => {
    const chunks = cmd.split(' ');
    await new Promise((resolve, reject) => {
        const child = require('child_process').spawn(chunks.shift(), chunks, {
            stdio: 'inherit', //独立监听子进程日志
            shell: true,
            ...options,
        });
        child.on('close', () => {
            resolve();
        });
        child.on('error', (...args) => {
            reject(...args);
        });

        //主进程关闭退出子进程
        process.on('close', (code) => {
            console.log('main process  close', code);
            child && child.kill();
        });
        //主进程关闭退出子进程
        process.on('exit', (code) => {
            console.log('main process  exit', code);
            child && child.kill();
        });
        //非正常退出情况
        process.on('SIGINT', function () {
            child && child.kill();
        });
    }).catch((e) => {
        spinner(cmd).fail();
        console.error(e);
    });
};

module.exports = spawn;
