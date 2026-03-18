const hre = require("hardhat");

async function main() {
  const StealthRelay = await hre.ethers.getContractFactory("StealthRelay");
  const relay = await StealthRelay.deploy();

  await relay.waitForDeployment();
  console.log(`StealthRelay deployed to: ${await relay.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
