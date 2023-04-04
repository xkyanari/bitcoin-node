const rpcClient = require('../../../config/clients/rpcClient');

async function getBlockCount(req, res) {
  try {
    const payload = {
      jsonrpc: '1.0',
      id: 'test',
      method: 'getblockcount',
      params: []
    };

    const result = await rpcClient.post('/', JSON.stringify(payload), {
      headers: {
        'content-type': 'text/plain;'
      }
    });

    res.json(result.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
}

module.exports = getBlockCount;
