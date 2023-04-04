const { spawn } = require('node:child_process');
require('dotenv').config();

const {
    BITCOIN_DATA_DIR,
    CWD
} = process.env;

const spawn_options = {
    cwd: CWD
}

const wallet = (req, res, status) => {
    const ordinal = spawn('ord', ['--bitcoin-data-dir', BITCOIN_DATA_DIR, 'wallet', req], spawn_options);

    let output = '';

    ordinal.stdout.on('data', (data) => {
        output += data.toString();
    });

    ordinal.stderr.on('data', (data) => console.error(`stderr:\n${data}`));
    
    ordinal.on('exit', (code) => {
        if (code === 0) {
            res.setHeader('Content-Type', 'application/json');
            res.status(status);
            res.send(JSON.parse(output));
        }
        else {
            console.log(`child process exited with code ${code}`);
        }
    });
};

module.exports = {
    wallet
};