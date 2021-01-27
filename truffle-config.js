// Install dependencies:
// npm init
// npm install --save-dev dotenv truffle-wallet-provider ethereumjs-wallet

// Create .env in project root, with keys:
// ROPSTEN_PRIVATE_KEY="123abc"
// MAINNET_PRIVATE_KEY="123abc"

const Web3 = require("web3")
const web3 = new Web3()
const HDWalletProvider = require("@truffle/hdwallet-provider")
const mnemonicPhrase = "" // 12 word mnemonic
let provider = new HDWalletProvider({
  mnemonic: {
    phrase: mnemonicPhrase
  },
  providerOrUrl: ""
})

module.exports = {
  networks: {
		dev: { // Whatever network our local node connects to
			network_id: "*", // Match any network id
			host: "localhost",
			port: 8545,
		},
		rinkeby: {
			network_id: "*",
			provider: provider,
			gas: 1000000,
			gasPrice: web3.utils.toWei("20", "gwei"),
		}
	}
}