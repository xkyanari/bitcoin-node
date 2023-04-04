const conn = require('../../../config/clients/sshClient');

async function ls(req, res) {
  conn.exec('ls -l', (err, stream) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error');
      return;
    }
    stream.on('close', (code, signal) => {
      console.log(`Command exited with code ${code} and signal ${signal}.`);
      res.send('Done');
    }).on('data', (data) => {
      console.log(`Received stdout:\n${data}`);
    }).stderr.on('data', (data) => {
      console.error(`Received stderr:\n${data}`);
      res.status(500).send('Error');
    });
  });
}

module.exports = ls;
