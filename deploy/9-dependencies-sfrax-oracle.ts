import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

import { ADDRESSES } from "../helpers/deploymentConfig";

const func: DeployFunction = async ({ getNamedAccounts, deployments, network }: HardhatRuntimeEnvironment) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const proxyOwnerAddress = network.live ? ADDRESSES[network.name].timelock : deployer;

  await deploy("MockSFrax", {
    contract: "MockSFrax",
    from: deployer,
    log: true,
    autoMine: true, // speed up deployment on local network (ganache, hardhat), no effect on live networks
    skipIfAlreadyDeployed: true,
    args: ["Staked FRAX", "sFRAX", 18],
  });

  const mockSFraxContract = await ethers.getContract("MockSFrax");

  if ((await mockSFraxContract.owner()) === deployer) {
    await mockSFraxContract.transferOwnership(proxyOwnerAddress);
  }
};

export default func;
func.tags = ["sFraxOracle"];
func.skip = async (hre: HardhatRuntimeEnvironment) => hre.network.name !== "sepolia";
