// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.17;

/** @title
 *  @author Elgardo Echevarria
 *  @notice
 *  @dev
 */
contract FraxNodeG {
   
   string public constant NAME = "FraxNodeG NFTs";
   uint256 public constant MAX_NFT_MINT = 100;

   uint256 public currentMinted = 0;

   function totalMinted() external view returns(uint256){
      return currentMinted;
   }

}