/*
 * @Author: your name
 * @Date: 2020-08-21 15:29:32
 * @LastEditTime: 2020-08-21 18:14:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blend/packages/blend-fs/lib/blend-fs.js
 */
'use strict';
const fs = require('fs');
const efs = require('fs-extra');
let path = require('path');
module.exports = {
    bfs: {
        isExist(file) {
            try {
                fs.statSync(file);
                return true;
            } catch (error) {
                return false;
            }
        },
        deleteDir(dir) {
            function rmDir(dir) {
                try {
                    fs.accessSync(dir, fs.constants.F_OK);
                    const data = fs.readdirSync(dir);

                    data.forEach((i) => {
                        let filePath = dir + '/' + i;
                        if (fs.statSync(filePath).isDirectory()) {
                            rmDir(filePath);
                        } else {
                            fs.unlinkSync(filePath);
                        }
                    });
                    fs.rmdirSync(dir);
                } catch (error) {
                    console.log(error);
                }
            }
            rmDir(dir);
        },
    },
    fs: fs,
    efs,
};
