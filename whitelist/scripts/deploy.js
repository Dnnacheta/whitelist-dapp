const { ethers } = require("hardhat");

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so whitelistContract here is a factory for instances of our Whitelist contract.
  */
  const whitelist = await ethers.getContractFactory("Whitelist");
  console.log("Deployment started🔹🔹🔹, returning a promise that resolves to a contract object 🤞"); 
  // here we deploy the contract
  const deployedWhitelist = await whitelist.deploy(10);
  // 10 is the Maximum number of whitelisted addresses allowed

  // Wait for it to finish deploying
  await deployedWhitelist.deployed();

  // print the address of the deployed contract  // 0x880D39159b00586465609E8aF4387b79B19422b2
  console.log("🎉Whitelist Contract Address ==>", deployedWhitelist.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });