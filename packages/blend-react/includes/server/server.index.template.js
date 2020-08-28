const spawn = async (cmd, title) => {
    console.log(title);
    const chunks = cmd.split(' ');
    await new Promise((resolve) => {
        const child = require('child_process').spawn(chunks.shift(), chunks, {
            stdio: 'inherit',
            shell: true,
            cwd: __dirname,
        });
        child.on('close', () => {
            resolve();
        });
    });
};

const run = async () => {
    await spawn('npm install --no-save', 'Installing dependencies');
    console.log('Starting server');
    require('./server');
};

run().catch((err) => console.trace(err));
