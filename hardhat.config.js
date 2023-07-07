require("@nomicfoundation/hardhat-toolbox");

task("accounts", "Prints the list of all accounts", async (taskArgs,hre) => {
  const accounts = await hre.ethers.getSigners();
  
  for(const account of accounts){
    // const networkName = hre.network.name;
    // const chainId = hre.network.config.chainId;
    const address = await account.getAddress();
    // const balance = await account.getBalance();//does not work
    // console.log(account);
    // console.log(chainId);
    console.log(address);
  }
})

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    }
  }
};
