// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

/**
 * Request testnet LINK and ETH here: https://faucets.chain.link/
 * Find information on LINK Token Contracts and get the latest ETH and LINK faucets here: https://docs.chain.link/docs/link-token-contracts/
 */

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * PLEASE DO NOT USE THIS CODE IN PRODUCTION.
 */
contract APIConsumer is ChainlinkClient {
    using Chainlink for Chainlink.Request;
  
    uint256 public volume;
    bytes32[] public array;
    address private oracle;
    bytes32 private jobId;
    uint256 private fee;
    struct KYCData {
        string kycAddress;
        uint8 kycLevel;
        bytes22 kycId;
    }
    mapping(bytes32 => KYCData) public requestIdKYCData;
    /**
     * Network: Kovan
     * Oracle: 0xc57B33452b4F7BB189bB5AfaE9cc4aBa1f7a4FD8 (Chainlink Devrel   
     * Node)
     * Job ID: d5270d1c311941d0b08bead21fea7747
     * Fee: 0.1 LINK
     */
    constructor() {
        setPublicChainlinkToken();
        oracle = 0xfF07C97631Ff3bAb5e5e5660Cdf47AdEd8D4d4Fd;
        jobId = "9fc8fdd7965e4891b5ac000cc3ef65f7";
        fee = 1 * 10 ** 18; // (Varies by network and job)
    }
    
    /**
     * Create a Chainlink request to retrieve API response, find the target
     * data, then multiply by 1000000000000000000 (to remove decimal places from data).
     */
    function requestVolumeData() public returns (bytes32 requestId) 
    {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        //req.add("endpoint", "address-info"); // Not required if it has been hardcoded in the jobspec
        string memory _address= "0x06cb2E3e4768742D19347Fc9234995A85E778837";
        req.add("address", _address);
        // Set the URL to perform the GET request on
        return sendChainlinkRequestTo(oracle, req, fee);
    }
        function fulfill(
        bytes32 _requestId,
        bytes22 _kycId,
        uint8 _kycLevel
    ) public recordChainlinkFulfillment(_requestId) returns (bytes32){
        if (_kycId.length > 0) {
            requestIdKYCData[_requestId].kycId = _kycId;
            requestIdKYCData[_requestId].kycLevel = _kycLevel; 
        }
        else {    
            requestIdKYCData[_requestId].kycId = 0;
            requestIdKYCData[_requestId].kycLevel = 0; 

        }
        array.push(_requestId);
        return _requestId;
    }

    function read(uint256 inp) public view returns (bytes32){
        return array[inp];
    } 
    /**
     * Receive the response in the form of uint256
     */ 

    // function withdrawLink() external {} - Implement a withdraw function to avoid locking your LINK in the contract
}
