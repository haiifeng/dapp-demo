// const { expect } = require("chai");

import { ethers } from "ethers";

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {

    // Signer 代表 ethers.js 中以太坊的对象。
    // 它用于向合约和其他账户发送交易。
    // 在这里，我们得到了所连接节点中的账户列表，在本例中时Hardhat 网络，并且只保留第一个
    const provider = new ethers.providers.JsonRpcProvider('https://example.com');
    const signer = provider.getSigner();

    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Token");

    // const wallet = new ethers.Wallet(privateKey, provider);
    // const signer = wallet.connect(provider);
    // const contractFactory = new ethers.ContractFactory(abi, bytecode, signer);


    // 返回Contract解析后的 Promise
    const hardhatToken = await Token.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});