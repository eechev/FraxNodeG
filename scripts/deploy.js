async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(`Deploying contract with account # ${deployer.address}`);
  console.log(
    `Account balance: ${await (await deployer.getBalance()).toString()}`
  );

  const contractFactory = await ethers.getContractFactory("FraxNodeG");
  const contract = await contractFactory.deploy();

  console.log(`FraxNodeG contract address: ${contract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
