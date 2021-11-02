require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://speedy-nodes-nyc.moralis.io/b65721b234191476859760a4/polygon/mumbai",
      accounts: ["702e6d39d8f30bfded86d0134aca403389fe1aec21d2bdc6b9d29afcea72d204"]
    },
    mainnet: {
      url: "https://polygon-mainnet.infura.io/v3/6307caad0d0f4f5e92c46eda712a0daf",
      accounts: []
    }
  },
  solidity: "0.8.4",
};
