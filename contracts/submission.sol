// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "./tender.sol";
contract submission{
    struct submissionDetails{
        uint submissionId;
        uint tenderid; 
        address tenderAddress;
        address creator;
        string description;
        string bid;
        uint timestamp;
        uint filepin;
        string fileLoc;
    } 
    
    submissionDetails private submissions;

    constructor(
        uint _submissionId,
        uint _tenderid, 
        address _tenderAddress,
        string memory _description,
        string memory _bid
    ){
        submissions.submissionId=_submissionId;
        submissions.tenderid=_tenderid; 
        submissions.tenderAddress=_tenderAddress;
        submissions.creator= msg.sender;
        submissions.description=_description;
        submissions.bid=_bid;
        submissions.timestamp=block.timestamp;
    }

    function updateFile(
        uint256 _key,
        string memory _fileLoc) public {
        require(submissions.creator==msg.sender);
        submissions.fileLoc=_fileLoc;
        submissions.filepin=_key;
        } 

    function viewTender() public view returns(submissionDetails memory){
        tender T= tender(submissions.tenderAddress);
        require(T.getOpeningDate()<=block.timestamp);
        return submissions;
    }

    function updateSubmissions(
        string memory _description,
        string memory _bid) public {
        require(submissions.creator==msg.sender);
        submissions.bid=_bid;
        submissions.description=_description;
        } 

}