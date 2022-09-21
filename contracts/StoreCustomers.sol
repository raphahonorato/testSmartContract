// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract StoreCustomers {
    string public message = 'Tiao Macale na area!!!!';

    function setMessage(string memory newMessage)public{
        message = newMessage;
    }
}
