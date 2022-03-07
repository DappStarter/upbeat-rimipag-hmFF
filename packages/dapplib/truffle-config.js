require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift rice pizza pudding idea arctic slot gather'; 
let testAccounts = [
"0x85dbdc5d2882393dce5121b597edb7f8c9b7cd79adb57c3b0195ec969dc64a39",
"0x30c124f2d6839995ca1d9e5a2b339706a1b3456acbfb5111f4f20178408b0542",
"0xb8312c758b4bdf2e0fc8c58df4d34802cdbc526dfbd0a579c05cac96c06ec4aa",
"0xca6f3c79f2cc81b7c6dfbab9b3209239037cb95c4d8c5dac8fbf82e5d3c1a890",
"0x0b3053a3d10c819c897b492332aa1f533c1a20c0672a75680d7f190e6610f528",
"0x711ec71d5c53f7f97f97264d3f4639d7aaf8a67a9354f9ccd259770eb2bdc7cd",
"0x6dd316605833583818ae4e692a11ab38d759dc405a06e8d311fdcf8589302013",
"0x90e35d3408bb261675f5697db4372c011dba444843ea0c046c0d84f6ad05139d",
"0x2dd920f8ad9870437451660a0c0e880571e180d36fb0d8a4481968af8085391b",
"0x0aad1dc28847c88415aa992991dab0df218ad92afcda94b8f285b83b527b1f19"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

