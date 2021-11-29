console.log("askjdh");
const RegisterABI= [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_Heading",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Agency",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_openingtime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_lastSubmissionTime",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_fileLoc",
				"type": "string"
			}
		],
		"name": "createTender",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRandomness",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTenderFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getuserDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Company",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "phone_number",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "kyc",
						"type": "bool"
					},
					{
						"internalType": "address",
						"name": "Address",
						"type": "address"
					}
				],
				"internalType": "struct Register.user",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "randomResult",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "requestId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "randomness",
				"type": "uint256"
			}
		],
		"name": "rawFulfillRandomness",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Company",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "phone_number",
				"type": "string"
			}
		],
		"name": "registerUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "requestRandomNumber",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "requestId",
				"type": "bytes32"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tenders",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Company",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "phone_number",
				"type": "string"
			}
		],
		"name": "updateUserDetails",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userTenders",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userlist",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const submissionABI=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_submissionId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_tenderid",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_tenderAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_bid",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_key",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_fileLoc",
				"type": "string"
			}
		],
		"name": "updateFile",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_bid",
				"type": "string"
			}
		],
		"name": "updateSubmissions",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewTender",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "submissionId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "tenderid",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "tenderAddress",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "creator",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "bid",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "filepin",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "fileLoc",
						"type": "string"
					}
				],
				"internalType": "struct submission.submissionDetails",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const tenderABI= [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_creator",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_Heading",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Agency",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_openingtime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_lastSubmissionTime",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_fileLoc",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "archeiveTender",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_Heading",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Agency",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_openingtime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_lastSubmissionTime",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_fileLoc",
				"type": "string"
			}
		],
		"name": "editTender",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getOpeningDate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_bid",
				"type": "string"
			}
		],
		"name": "submit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewTender",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "uniId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "creator",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "Heading",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Agency",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "openingtime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "lastSubmissionTime",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "fileLoc",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "submissions",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "active",
						"type": "bool"
					}
				],
				"internalType": "struct tender.tenderDetail",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const RegisterAddress=  "0x8684754D2bcbFe7a31cBC2779B17b9D55757bd38";
function start(){
    const serverUrl = "https://ffkvbnrtpnxu.usemoralis.com:2053/server";
    const appId = "XPEOMm8PphplaioLfVWo4dgUUqALWKunBYKSxjey";
    Moralis.start({ serverUrl, appId });
}
function testUserLogin(){
    let user = Moralis.User.current();
    if(!user){
        window.location.href="./app";
    }
}
function login(){
    let user = Moralis.User.current();
    if(!user){
        user = await Moralis.authenticate();
    }
    window.location.href="./register";
}

function getUserdetails(){
    const options = {
        contractAddress: RegisterAddress,
        functionName: "getuserDetails",
        abi: RegisterABI,
        params: {},
      };

    const user = await Moralis.executeFunction(options);
    console.log(user);
}