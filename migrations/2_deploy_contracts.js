const METoken = artifacts.require("METoken");
const METFaucet = artifacts.require("METFaucet");
// let accounts =  await web3.eth.getAccounts();
// let owner = accounts[0];

let owner = ''; // 根据当前区块链网络进行修改

module.exports = async function(deployer) {
	// Deploy the METoken contract first
	deployer.deploy(METoken, {from: owner}).then(function() {
		// then deploy METFaucet and pass the address of METoken
		// and the address of the owner of all the MET who will approve METFaucet
		return deployer.deploy(METFaucet, METoken.address, owner);
  	});
}
