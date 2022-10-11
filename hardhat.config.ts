import "@nomiclabs/hardhat-waffle"
import "hardhat-gas-reporter"
import "./tasks/block-number"
import "@nomiclabs/hardhat-etherscan" 
import { task, HardhatUserConfig } from "hardhat/config"
import "./tasks/block-number"
import "dotenv/config"
import "solidity-coverage"
import "@typechain/hardhat"
import "@nomiclabs/hardhat-ethers"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "https://eth-goreli"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {},
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
        },
        localhost: {
            url: "http://localhost:8545",
            chainId: 31337,
        },
    },
    solidity: "0.8.7",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: COINMARKETCAP_API_KEY,
    },
}
