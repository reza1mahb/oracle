// SPDX-License-Identifier: BSD-3-Clause
pragma solidity 0.8.13;

interface IPStakePool {
    struct Data {
        uint256 totalWei;
        uint256 poolTokenSupply;
    }

    function exchangeRate() external view returns (Data memory);
}
