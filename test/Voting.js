const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Voting contract', function () {
  let owner, signer1, signer2, hardhatVoting;
  beforeEach(async function () {
    [owner, signer1, signer2] = await ethers.getSigners();
    const Voting = await ethers.getContractFactory('Voting');
    hardhatVoting = await Voting.deploy([signer1.address, signer2.address]);
  });
  it('should expect addresses passed into constructor to map to true', async function () {
    expect(await hardhatVoting.members(signer1.address)).to.be.true;
    expect(await hardhatVoting.members(signer2.address)).to.be.true;
  });
});
