const { fs, efs, bfs } = require('blend-fs');
const path = require('path');
module.exports = () => {
    const blendPackage = require('../../package.json');
    const projectPackage = require(path.resolve(
        process.cwd(),
        './package.json'
    ));
    const copyAttrs = ['name', 'author', 'license', 'dependencies'];
    let _package = {};
    copyAttrs.forEach((i) => {
        _package[i] = projectPackage[i];
    });
    _package.scripts = {
        start: 'node index.js',
    };
    const copyDependencies = [
        'react',
        'react-dom',
        'react-redux',
        'react-router-dom',
        'react-router-config',
        'redux',
        'md5',
        'blend-fs',
        'koa',
        'koa-static',
        'axios',
    ];
    copyDependencies.forEach((i) => {
        _package.dependencies[i] = blendPackage.dependencies[i];
    });

    efs.ensureDirSync(path.resolve(process.cwd(), 'dist'));

    efs.writeJsonSync(
        path.resolve(process.cwd(), './dist/package.json'),
        _package,
        {
            spaces: 4,
        }
    );
    // 复制server启动文件
    efs.copySync(
        path.resolve(__dirname, './server.index.template.js'),
        path.resolve(process.cwd(), 'dist/index.js')
    );
};
