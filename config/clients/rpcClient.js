const axios = require('axios');

const {
    RPC_USERNAME,
    RPC_PASSWORD,
    RPC_HOSTNAME,
    RPC_PORT
} = process.env;

const rpcClient = axios.create({
  baseURL: `http://${RPC_HOSTNAME}:${RPC_PORT}/`,
  headers: {
    'content-type': 'text/plain'
  },
  auth: {
    username: RPC_USERNAME,
    password: RPC_PASSWORD
  }
});

console.log("Connected to the Bitcoin Node.");

module.exports = rpcClient;
