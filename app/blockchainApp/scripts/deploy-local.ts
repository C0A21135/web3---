import { ethers } from "hardhat";

async function main() {
    const myToken = await ethers.deployContract("MyToken");
    myToken.waitForDeployment();
    console.log(`mytoken deployed to: ${myToken.target}`);

    const myERC20 = await ethers.deployContract("MyERC20");
    myERC20.waitForDeployment();
    console.log(`myERC20 deployed to: ${myERC20.target}`);

}

/*
  We recommend this patterm to be able to use async/await everywhere
  and properly handle errors.
*/ 
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})