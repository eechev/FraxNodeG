// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.17;

contract FraxNodeG{
   
   string public name = "FraxNodeG NFTs";
   uint256 public constant MAX_NFT_MINT = 100;

   uint256 public currentMinted = 0;

   function totalMinted() external view returns(uint256){
      return currentMinted;
   }

}