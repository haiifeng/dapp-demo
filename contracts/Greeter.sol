//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

import "hardhat/console.sol";

contract Greeter {
  string greeting;

  constructor(string memory _greeting) {
    console.log("Deploying a Greeter with greeting:", _greeting);
    greeting = _greeting;
  }

  // 读
  // 对于读，该操作只是从区块链中读取，则是免费的
  // 读取调用的函数只由当前所连接的节点来执行，所以不需要付出任何gas
  function greet() public view returns (string memory) {
    return greeting;
  }

  // 写（交易）
  // 对于写入交易，必须为写入区块链交易付费（gas）
  function setGreeting(string memory _greeting) public {
    console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
    greeting = _greeting;
  }
}
