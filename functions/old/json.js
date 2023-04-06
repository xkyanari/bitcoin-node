const init = require('../mempool');

const sendResponse = async (res, status) => {
    const fees = await init();

    res.setHeader('Content-Type', 'application/json');
    res.status(status);
    res.send(JSON.stringify(fees));
};

module.exports = {
    sendResponse
};