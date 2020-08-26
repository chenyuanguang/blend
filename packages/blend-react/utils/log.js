const { bfs, efs, fs } = require('blend-fs');
const path = require('path');
module.exports = (log) => {
    const _file = path.resolve(process.cwd(), 'log/webpack.log.txt');
    efs.ensureDirSync(path.resolve(process.cwd(), 'log'));
    efs.pathExistsSync(_file);
    fs.writeFileSync(_file, fs.readFileSync(_file, 'utf-8') + '\n' + log);
};
