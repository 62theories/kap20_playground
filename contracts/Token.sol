//SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "./modules/KAP20/KAP20.sol";

contract Token is KAP20 {

    constructor(
    string memory _name,
    string memory _symbol,
    uint8 _decimals,
    address committee_,
    address adminRouter_,
    address kyc_, 
    uint256 acceptedKycLevel_
  ) KAP20(_name, _symbol, _decimals, committee_, adminRouter_, kyc_, acceptedKycLevel_) {}

}
