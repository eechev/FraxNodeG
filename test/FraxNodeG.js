const { expect } = require("chai");

describe("FraxNodeG NFT contract", function () {
  it("Deployment should have no minted NFTs", async function () {
    const contractFactory = await ethers.getContractFactory("FraxNodeG");
    const fraxNodeGContract = await contractFactory.deploy();
    expect(await fraxNodeGContract.totalMinted()).to.equal(0);
  });
});
