require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain equip hockey enroll bottom trial'; 
let testAccounts = [
"0xe70948f079d647814c2192a8420ae782ced7c06eb713d5110e79213ff9e3a2b5",
"0xbe501036fc93150f74e2fb6de1fe75a67add5adad1951627a2252bf00924b8e7",
"0x0e43b881761d7feebf660e814fee9ba7d2310820732fd162ba73919444516138",
"0x9f0c0855e41cb17e0c613360645170ef2183ffa6f0b4968771dca64346622477",
"0x7472d4438ee57009d4b01e56d388b0926fe036be1c15c9109ab58645e1e66b13",
"0xc37bd8778966596e303f623bfc891e4fa56c671b1e832be08932cd17b152d82e",
"0x3413e4d1f976e37237b12717e6a1573c150c1b117ec0a17adbe0e4cefaa6253b",
"0xf2af182f79851d4288faf17add94870ac862e94a5aa3a046cba1bc65e2010f12",
"0x75a1f52d3f03ee5c23683826d39f710d0b67f5dc7b534881cfff629182f88dca",
"0xc16309c36f96fd6963f7451f60ddb571379a905d815df3791682bff288fd5b43"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

