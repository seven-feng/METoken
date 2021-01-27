 ERC20 代币发行案例



默认使用本地区块链网络 ganache，如果想要连接外部测试网络，在 truffle-config.js 中配置助记词 mnemonicPhrase 和 客户端地址 providerOrUrl



还需要在 migrations/2_deploy_contracts.js 中修改 owner 字段，owner 为当前网络中的账户