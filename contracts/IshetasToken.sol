//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract IshetasToken is ERC20("Kitsune Token", "KT"), Ownable{
        
        function mintTokens(address mintTo, uint amount) public onlyOwner{
            _mint(mintTo, amount* 10**18);
        }

        function burnTokens(uint amount) public {
            _burn(msg.sender, amount* 10**18);
        }
}



//0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199 - 3

//0xdD2FD4581271e230360230F9337D5c0430Bf44C0 - 4