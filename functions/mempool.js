const mempool = require('@mempool/mempool.js');

module.exports = async () => {
    const { bitcoin: { fees } } = mempool({
        hostname: 'mempool.space'
    });

    const feesRecommended = await fees.getFeesRecommended();
    return feesRecommended;
};