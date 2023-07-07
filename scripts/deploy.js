const hre = require("hardhat");

async function main() {

  const IshetasToken = await hre.ethers.getContractFactory("IshetasToken");
  const ishetasToken = await IshetasToken.deploy();
  await ishetasToken.waitForDeployment();

  const address = await ishetasToken.getAddress();
  console.log("IshetasToken is deployed to: ",address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
  console.error(error);
  process.exitCode = 1;
});