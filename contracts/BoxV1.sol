// SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;

contract BoxV1 {

    uint public length;
    uint public width;

    function initialize(uint _length, uint _width) public {
        length = _length;
        width = _width;

    }

    function area() public view returns(uint){
        return length * width;
    }
}