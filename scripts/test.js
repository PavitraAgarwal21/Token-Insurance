const { ethers } = require("hardhat"); //https://127.0.0.1:8545/
let provider = new ethers.providers.JsonRpcProvider("https://127.0.0.1:8545");
async function main() {
  const USDC_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
  const USDC_ABI = [
    "function balanceOf(address account) external view returns (uint256)",
    "function transfer(address recipient, uint256 amount) external returns (bool)",
  ];
  const usdc = await ethers.getContractAt("IERC20", USDC_ADDRESS);


  // Get the contract instance

  // const usdc = new ethers.Contract(USDC_ADDRESS, USDC_ABI, provider);
  const balance = await usdc.balanceOf(
    "0x09c01AA4dfaa767f8319A001A1d5eE848f99A44E"
  );
  console.log(balance);
  
}

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
