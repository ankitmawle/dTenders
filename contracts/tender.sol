// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./submission.sol";
contract tender{
    uint id;
    address creator;
    string Heading;
    string Description;
    string Agency; 
    uint openingtime;
    uint lastSubmissionTime;
    string fileLoc;
    uint submissions;
    bool active; 
    mapping(uint => address) submissonAddress;
    mapping(address => address) userSubmissions;
    struct tenderDetail{
        uint uniId;
        uint id;
        address creator;
        string Heading;
        string Description;
        string Agency; 
        uint openingtime;
        uint lastSubmissionTime;
        string fileLoc;
        uint submissions;
        bool active; 
    }

    constructor(
        uint _id,
        address _creator,
        string memory _Heading,
        string memory _Description,
        string memory _Agency, 
        uint _openingtime,
        uint _lastSubmissionTime,
        string memory _fileLoc
    ){
        
        id=_id;
        creator=_creator;
        Heading=_Heading;
        Description=_Description;
        Agency=_Agency; 
        openingtime=_openingtime;
        lastSubmissionTime=_lastSubmissionTime;
        fileLoc=_fileLoc;
        submissions=0;
        active=true; 
    }

    function editTender(
        string memory _Heading,
        string memory _Description,
        string memory _Agency, 
        uint _openingtime,
        uint _lastSubmissionTime,
        string memory _fileLoc
        ) public {
        require(msg.sender==creator);
        Heading= _Heading;
        Description=_Description;
        Agency= _Agency;
        openingtime=_openingtime;
        lastSubmissionTime= _lastSubmissionTime;
        fileLoc= _fileLoc;
    }

    function viewTender() public view returns(tenderDetail memory){
        tenderDetail memory D;
        D.id=id;
        D.creator=creator;
        D.Heading=Heading;
        D.Description=Description;
        D.Agency=Agency; 
        D.openingtime=openingtime;
        D.lastSubmissionTime=lastSubmissionTime;
        D.fileLoc=fileLoc;
        D.submissions=submissions;
        D.active=active; 
        return D;
    }

    
    function archeiveTender() public {
        require(msg.sender==creator);
        active=false;
    }

    function submit(
        string memory _description,
        string memory _bid) public {
        //require(users[msg.sender].id!=0,"user not yet registered");
        require(active==true);
        require(lastSubmissionTime>=block.timestamp);
        submission S = new submission(
            submissions+1,
            id,
            address(this),
            _description,
            _bid
            );
        submissions++;
        submissonAddress[submissions]=address(S);
        userSubmissions[msg.sender]= address(S);
    }

    function getOpeningDate() public view returns(uint){
        return openingtime;
    }
    
}