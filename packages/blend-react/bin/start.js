#!/usr/bin/env node
let spawn = require('../utils/spawn.js');
let paht = require('path');
spawn('webpack-dev-server --config config/webpack.dev.js', {
    cwd: path.resolve(__dirname, '..'),
}).then(() => {
    console.log('正在启动');
});
