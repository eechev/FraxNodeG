const { network } = require("hardhat");
//const { networkConfig } = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("Deploying FraxNodeG contract...");

  await deploy("FraxNodeG", {
    from: deployer,
    log: true,
    args: [],
  });
};

module.exports.tags = ["all", "fraxnode"];
