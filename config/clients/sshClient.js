const { Client } = require('ssh2');
require('dotenv').config();

const {
  SSH_HOSTNAME,
  SSH_PORT,
  SSH_USERNAME,
  SSH_PASSWORD
} = process.env;

const options = {
  host: SSH_HOSTNAME,
  port: SSH_PORT,
  username: SSH_USERNAME,
  password: SSH_PASSWORD
};

const conn = new Client();

conn
  .on('ready', () => {
    console.log('Connected to the SSH server.');
  })
  .on('error', (err) => {
    console.error('Error connecting to the SSH server:', err);
  })
  .connect(options);

module.exports = conn;
