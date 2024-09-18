const {ethers, upgrades } = require("hardhat");

async function main() {

    const BoxV1 = await ethers.getContractFactory("BoxV1");
    const proxy = await upgrades.deployProxy(BoxV1, [11, 10]);

    await proxy.waitForDeployment();

    console.log("Contract deployed to:", await proxy.getAddress());
    const proxyAddresss1 = await proxy.getAddress();


    const BoxV2 = await ethers.getContractFactory("BoxV2");
    const upgraded = await upgrades.upgradeProxy(proxyAddresss1, BoxV2);
    console.log((await upgraded.area()) .toString());
    console.log((await upgraded.perimeter()) .toString());

    
}

main();