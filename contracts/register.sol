// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "./tender.sol";
contract Register is VRFConsumerBase{
    address linkAdr = 0xa36085F69e2889c224210F603D836748e7dC0088;
    bytes32 internal keyHash;
    uint256 internal randomnessfee;   
    uint256 public randomResult;
    address payable public owner;
    LinkTokenInterface link = LinkTokenInterface(linkAdr);   
    AggregatorV3Interface internal priceFeed;
    struct user{
        uint id;
        string Name;
        string Company;
        string email; 
        string phone_number;
        bool kyc;
        address Address;
    } 
    mapping(address => user) internal users;
    mapping(address => address[]) public userTenders;
    mapping(uint => address) public tenders;
    uint totalTenders;
    uint totalUsers;
    address[] public userlist;
    mapping(bytes32 => address ) internal requests;
    mapping(address => uint256) internal randomness;

    constructor()
        VRFConsumerBase(
            0xdD3782915140c8f3b190B5D67eAc6dc5760C46E9, // VRF Coordinator
            0xa36085F69e2889c224210F603D836748e7dC0088  // LINK Token
        ){
        keyHash = 0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4;
        randomnessfee = 0.1 * 10 ** 18; // 0.1 LINK (Varies by network)
        owner=payable(0x06cb2E3e4768742D19347Fc9234995A85E778837);
        priceFeed = AggregatorV3Interface(0x396c5E36DD0a0F5a5D33dae44368D4193f69a1F0);
    }
    function registerUser(        
        string memory Name,
        string memory Company,
        string memory email, 
        string memory phone_number
        ) public returns(uint){

        address senderAddress= msg.sender;
        require (users[senderAddress].id == 0,"user aleady registered");
        users[senderAddress].Name = Name;
        users[senderAddress].Company = Company;
        users[senderAddress].email = email;
        users[senderAddress].phone_number = phone_number;
        users[senderAddress].Address = senderAddress;
        totalUsers++;
        users[senderAddress].id = totalUsers;
        users[senderAddress].kyc= false;
        userlist.push(senderAddress);
        return users[senderAddress].id;       
    }

    function getuserDetails() public view returns(user memory){
        require(users[msg.sender].id!=0, "user not yet registered");
        return users[msg.sender];
    }

    
    function updateUserDetails(
        string memory Name,
        string memory Company,
        string memory email, 
        string memory phone_number
        ) public returns(uint){
        
        address senderAddress= msg.sender;
        require (users[senderAddress].id != 0,"User not yet registered");
        users[senderAddress].Name = Name;
        users[senderAddress].Company = Company;
        users[senderAddress].email = email;
        users[senderAddress].phone_number = phone_number;
        return users[senderAddress].id;   

    }

    function getTenderFee() public view returns(uint){
        (            
            , 
            int price,
            ,,
            ) = priceFeed.latestRoundData();
        return uint(50*10**26/price);   // USD 50 to create a tender 
    }

    
    function createTender(
        string memory _Heading,
        string memory _Description,
        string memory _Agency, 
        uint _openingtime,
        uint _lastSubmissionTime,
        string memory _fileLoc
        ) public  {
            ( , 
            int price,
            ,,
            ) = priceFeed.latestRoundData();
            require(users[msg.sender].id!=0,"user not yet registered");
            link.transferFrom(msg.sender, address(this),uint256(50*10**26/price));
            tender T= new tender(
                            totalTenders+1,
                            msg.sender,
                            _Heading,
                            _Description,
                            _Agency,
                            _openingtime,
                            _lastSubmissionTime,
                            _fileLoc );
            totalTenders++;
            tenders[totalTenders]=address(T);
            userTenders[msg.sender].push(address(T));
        }
    
    function requestRandomNumber() public returns (bytes32 requestId) {
        //require(msg.value >= 10**18);
        require(LINK.balanceOf(address(this)) >= randomnessfee, "Not enough LINK - fill contract with faucet");
        requests[requestId]= msg.sender;
        return requestRandomness(keyHash, randomnessfee);
    }

    function fulfillRandomness(bytes32 _requestId, uint256 _randomness) internal override {
        address add=requests[_requestId];
        randomness[add] = _randomness;
        randomResult=_randomness;
    }
    
    function getRandomness() public view returns(uint256){
        return randomness[msg.sender];
    } 

    function withdraw(uint256 amount) public {
        require(msg.sender==owner);
        link.transfer(owner,amount);
    }
}