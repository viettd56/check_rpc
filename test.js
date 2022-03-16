'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const ethers_1 = require('ethers');
const POLYGON_MAINNET_RPC = '';
(async () => {
    const provider = new ethers_1.ethers.providers.StaticJsonRpcProvider(POLYGON_MAINNET_RPC);
    console.log({
        provider,
    });

    const data = await provider.getBlockNumber();
    console.log({
        data,
    });
})();
