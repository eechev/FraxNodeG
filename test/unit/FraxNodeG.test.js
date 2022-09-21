const { expect } = require("chai");

describe("FraxNodeG NFT contract", function () {
  let contractFactory, fraxNodeGContract;

  beforeEach(async function () {
    contractFactory = await ethers.getContractFactory("FraxNodeG");
    fraxNodeGContract = await contractFactory.deploy();
  });

  it("Deployment should have no minted NFTs", async function () {
    const initialMinted = 0;
    expect(await fraxNodeGContract.totalMinted()).to.equal(initialMinted);
  });
});
