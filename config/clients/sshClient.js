const { Client } = require('ssh2');
const fs = require('fs');
require('dotenv').config();

const {
  SSH_HOSTNAME,
  SSH_PORT,
  SSH_USERNAME,
} = process.env;

const privateKey = process.env.SSH_PRIVATE_KEY.replace(/\\n/g, '\n');

const options = {
  host: SSH_HOSTNAME,
  port: SSH_PORT,
  username: SSH_USERNAME,
  privateKey: privateKey,
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
