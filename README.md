# DTenders
A Decentralized online Tender filling platform, 
With high security as well as transperency 

---
## Content
- [Key Features](#key-features)
- [Introduction](#introduction)
- [Detailed Explanation](#detailed-explanation)

---  
# Key Features
- Completely decentralized
- Directly interactible via contracts or any 3rd party app
- Dynamic and Realtime fees according to USD
- KYC Enabled With CRD Network
- Random number generation for encrypting files before upoading to IPFS 
- All data on blockchain, zero database requirements
- Frontend using Moralis 
- Deployable on Etherium Mainnet, Binance Smart Chain, Polygon(Matic) as well as Avalance 
- KYC only avalable on Eth and Polygon 

# Introduction 
### What are other options in market
- Most of the online tender filling platforms available out there are centralized. 
- And hence there is a huge risk of your bid amount or details getting leaked out.
- This may lead to greater loss to both parties.
- Plus there is a lack of transparency in market, as once submitted only winner bid is announced to public. 

### Dream
- We want to create a much more secure as well as transparent platform for filling tender. 
- With blockchain technology we try to solve the previously stated problems and provide A secure and Transparent way to do the same 
---
## How does It work
- dTenders allows users to get registered and have their account on blockchain it self, with a facility to add kyc details with the help of CRD network and chainlink oracle 

- User can then create the tender by creating new smart contract 

- This means every Tender is a new smart contract and so is every submission to the smart contract. 
User can search through our website and apply for tender form our site by creating a Submission smart contract whose values can only be read after the opening period.  

# Detailed Explanation
## Registration 
- To register user must connect their  metamask wallet, and allow the contract the spend your LINK tokens.
- Then user will interact with the register user function of Register contract

## KYC
- User first have to do the kyc at CRD network portal
- The function fetchs KYC details fetchs the kyc details of the user for Chainlink oracle from CRD network

## Submit tender
- To submit the tender user can interact with createTender function of register function 
- A fee of $50 USD worth chainlink has to be paid to submit a tender
- The value is calculated in realtime via chainlink datafeed
- creatTender function will create a smart contract and create linkings in Register contract.

## Bidding on a tender
- To bid on a tender the user can go interact directly with the Tender's smart contract through following steps,
    1. First generate a random number using Register contracts requestRandomNumber function and then using getRandomess function.
    2. Encrypt the file to be uploaded using the generated random number 
    3. Upload the file to IPFS server 
    4. Call submit tender function of tender contract and create a submission on Tender Contract while submitting description and bidding amoount
    5. Upload the random number and file location on the submission vai updateFile function 

## Opening a bid
- All bids will be automatically available once block timestamp becomes greater than openTenderTime

#
