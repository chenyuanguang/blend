let spawn = require('../utils/spawn.js');
spawn('webpack-dev-server --config bin/webpack.dev.js').then(() => {
    console.log('正在启动');
});
