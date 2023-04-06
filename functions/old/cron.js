const { spawn } = require('node:child_process');
require('dotenv').config();

/**
 * ord commands always index blocks first so it's no longer necessary to add it here
 * --bitcoin-data-dir was added in case it needs to be separate from umbrel
*/

const {
    BITCOIN_DATA_DIR,
    CWD
} = process.env;

const args = {
    index: ['--bitcoin-data-dir', BITCOIN_DATA_DIR, 'info']
};

const options = {
    cwd: CWD
};

const cronJob = async () => {
    const cron = spawn('ord', args.index, options);

    cron.stdout.on('data', (data) => {
        console.log(`<${date.toLocaleString()}> index completed.`);
    });

    cron.stderr.on('data', (data) => console.error(`<${date.toLocaleString()}> stderr: ${data}`));

    cron.on('exit', (code) => {
        if (code === 0) return;
        else {
            console.log(`child process exited with code ${code}`);
        }
    });
};

module.exports = {
    cronJob
};