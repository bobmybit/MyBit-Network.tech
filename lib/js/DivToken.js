"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var DivToken = exports.DivToken = 
{
  "contractName": "DivToken",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_sender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_paymentAmount",
          "type": "uint256"
        }
      ],
      "name": "LogIncomeReceived",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_block",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_address",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "LogIncomeCollected",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "approveAndCall",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "collectOwedDividends",
      "outputs": [
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenHolder",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "tokenSupply",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenHolder",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "valuePerToken",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "scalingFactor",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getAmountOwed",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getOwedDividends",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "assetIncome",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getERC20",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\n\n// @title ERC20 token contract with shared revenue distribution functionality.\n// @notice This token contract can receive payments in the fallback function and token owners receive their share when transferring tokens.\n// Credit goes to Nick Johnson for the dividend token https://medium.com/@weka/dividend-bearing-tokens-on-ethereum-42d01c710657\n// TODO: Suicide function\ninterface DivToken {\n\n    // @notice Transfer _amount tokens to address _to.\n    // @dev Sender must have enough tokens. Cannot send to 0x0.\n    // @param (address) _to = The address which will receive the tokens\n    // @param (uint) _amount = The amount of tokens to send\n    function transfer(address _to, uint _amount)\n    external\n    returns (bool success);\n\n    // @notice A 3rd party can transfer tokens if user approves them to do so\n    // @dev Transfer _amount of tokens if _from has allowed msg.sender to do so.\n    // @param (address) _from = The address who approved msg.sender to spend tokens\n    // @param (address) _to = The address who will receive the tokens\n    // @param (uint) _amount = The number of tokens to send\n    function transferFrom(address _from, address _to, uint _amount)\n    external\n    returns (bool success);\n\n    // @notice approves a 3rd party to transfer msg.sender's tokens on behalf of him/her\n    // @param (address) _spender = The address of who msg.sender approves to spend tokens on their behalf\n    // @param (uint) _amount = The upper limit of how many tokens can be spent\n    function approve(address _spender, uint _amount)\n    external\n    returns (bool success);\n\n\n    // @notice Token holder can notify a contract that it has been approved to spend _amount of tokens\n    // @param (address) _spender = The contract to call after approval is done\n    // @param (uint) _amount = Number of tokens to send\n    // @param (bytes) _data = Bytes data to send along with the contract call\n    function approveAndCall(address _spender, uint _amount, bytes _data)\n    external\n    returns (bool success);\n\n    function withdraw()\n    external\n    returns (bool);\n\n    // @notice Updates incomeClaimed, sends all wei to the token holder\n    function collectOwedDividends()\n    external\n    returns (uint _amount);\n\n\n    // @notice Returns amount of tokens _spender is allowed to transfer or burn\n    function allowance(address _tokenHolder, address _spender)\n    external\n    view\n    returns (uint);\n\n    // @notice Returns the number of tokens in circulation\n    function totalSupply()\n    external\n    view\n    returns (uint tokenSupply);\n\n    // @notice Returns the token balance of user\n    function balanceOf(address _tokenHolder)\n    external\n    view\n    returns (uint balance);\n\n    // @notice Returns the URI of this token\n    function tokenURI()\n    external\n    view\n    returns (string);\n\n    function valuePerToken()\n    external\n    view\n    returns (uint);\n\n    function scalingFactor()\n    external\n    view\n    returns (uint);\n\n    // @notice Calculates how much value _user holds\n    function getAmountOwed(address _user)\n    external\n    view\n    returns (uint);\n\n    // @notice Calculates how much wei user is owed. (points + incomeClaimed) / 10**32\n    function getOwedDividends(address _user)\n    external\n    view\n    returns (uint);\n\n    function assetIncome()\n    external\n    view\n    returns (uint);\n\n    function getERC20()\n    external\n    view\n    returns (address);\n\n    event LogIncomeReceived(address indexed _sender, uint _paymentAmount);\n    event LogIncomeCollected(uint _block, address _address, uint _amount);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DivToken.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DivToken.sol",
    "exportedSymbols": {
      "DivToken": [
        8529
      ]
    },
    "id": 8530,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8404,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:33"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8529,
        "linearizedBaseContracts": [
          8529
        ],
        "name": "DivToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8413,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8409,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8406,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8413,
                  "src": "695:11:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8405,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "695:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8408,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8413,
                  "src": "708:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8407,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "708:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "694:27:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8411,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8413,
                  "src": "748:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8410,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "748:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "747:14:33"
            },
            "scope": 8529,
            "src": "677:85:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8424,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8420,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8415,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 8424,
                  "src": "1163:13:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8414,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1163:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8417,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8424,
                  "src": "1178:11:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8416,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1178:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8419,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8424,
                  "src": "1191:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8418,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1191:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1162:42:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8423,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8422,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8424,
                  "src": "1231:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8421,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1231:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1230:14:33"
            },
            "scope": 8529,
            "src": "1141:104:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8433,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8429,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8426,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8433,
                  "src": "1542:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8425,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1542:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8428,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8433,
                  "src": "1560:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8427,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1560:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1541:32:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8432,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8431,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8433,
                  "src": "1600:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8430,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1600:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1599:14:33"
            },
            "scope": 8529,
            "src": "1525:89:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8444,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approveAndCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8440,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8435,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8444,
                  "src": "1961:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8434,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1961:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8437,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8444,
                  "src": "1979:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8436,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1979:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8439,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 8444,
                  "src": "1993:11:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 8438,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1993:5:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1960:45:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8443,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8442,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8444,
                  "src": "2032:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8441,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2032:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2031:14:33"
            },
            "scope": 8529,
            "src": "1937:109:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8449,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8445,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2069:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8447,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8449,
                  "src": "2098:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8446,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2098:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2097:6:33"
            },
            "scope": 8529,
            "src": "2052:52:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8454,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "collectOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8450,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2211:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8453,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8452,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8454,
                  "src": "2240:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8451,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2240:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2239:14:33"
            },
            "scope": 8529,
            "src": "2182:72:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8463,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8459,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8456,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 8463,
                  "src": "2360:20:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8455,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2360:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8458,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8463,
                  "src": "2382:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8457,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2382:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2359:40:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8462,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8461,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8463,
                  "src": "2435:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8460,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2435:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2434:6:33"
            },
            "scope": 8529,
            "src": "2341:100:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8468,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8464,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2526:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8467,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8466,
                  "name": "tokenSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 8468,
                  "src": "2564:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8465,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2564:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2563:18:33"
            },
            "scope": 8529,
            "src": "2506:76:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8475,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8471,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8470,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 8475,
                  "src": "2656:20:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8469,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2656:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2655:22:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8474,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8473,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 8475,
                  "src": "2713:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8472,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2713:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2712:14:33"
            },
            "scope": 8529,
            "src": "2637:90:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8480,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8476,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2795:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8479,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8478,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8480,
                  "src": "2833:6:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8477,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2833:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2832:8:33"
            },
            "scope": 8529,
            "src": "2778:63:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8485,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "valuePerToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8481,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2869:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8484,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8483,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8485,
                  "src": "2907:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8482,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2907:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2906:6:33"
            },
            "scope": 8529,
            "src": "2847:66:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8490,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "scalingFactor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8486,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2941:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8489,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8488,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8490,
                  "src": "2979:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8487,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2979:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2978:6:33"
            },
            "scope": 8529,
            "src": "2919:66:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8497,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAmountOwed",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8493,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8492,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 8497,
                  "src": "3067:13:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8491,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3067:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3066:15:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8496,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8495,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8497,
                  "src": "3117:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8494,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3117:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3116:6:33"
            },
            "scope": 8529,
            "src": "3044:79:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8504,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8500,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8499,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 8504,
                  "src": "3242:13:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8498,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3242:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3241:15:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8503,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8502,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8504,
                  "src": "3292:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8501,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3292:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3291:6:33"
            },
            "scope": 8529,
            "src": "3216:82:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8509,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "assetIncome",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8505,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3324:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8508,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8507,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8509,
                  "src": "3362:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8506,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3362:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3361:6:33"
            },
            "scope": 8529,
            "src": "3304:64:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8514,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getERC20",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8510,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3391:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8513,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8512,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8514,
                  "src": "3429:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8511,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3429:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3428:9:33"
            },
            "scope": 8529,
            "src": "3374:64:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 8520,
            "name": "LogIncomeReceived",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 8519,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8516,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8520,
                  "src": "3468:23:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8515,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3468:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8518,
                  "indexed": false,
                  "name": "_paymentAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8520,
                  "src": "3493:19:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8517,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3493:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3467:46:33"
            },
            "src": "3444:70:33"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 8528,
            "name": "LogIncomeCollected",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 8527,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8522,
                  "indexed": false,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 8528,
                  "src": "3544:11:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8521,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3544:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8524,
                  "indexed": false,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 8528,
                  "src": "3557:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8523,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3557:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8526,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8528,
                  "src": "3575:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8525,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3575:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3543:45:33"
            },
            "src": "3519:70:33"
          }
        ],
        "scope": 8530,
        "src": "400:3192:33"
      }
    ],
    "src": "0:3593:33"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/DivToken.sol",
    "exportedSymbols": {
      "DivToken": [
        8529
      ]
    },
    "id": 8530,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8404,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:33"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8529,
        "linearizedBaseContracts": [
          8529
        ],
        "name": "DivToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8413,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8409,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8406,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8413,
                  "src": "695:11:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8405,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "695:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8408,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8413,
                  "src": "708:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8407,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "708:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "694:27:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8411,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8413,
                  "src": "748:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8410,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "748:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "747:14:33"
            },
            "scope": 8529,
            "src": "677:85:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8424,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8420,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8415,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 8424,
                  "src": "1163:13:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8414,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1163:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8417,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8424,
                  "src": "1178:11:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8416,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1178:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8419,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8424,
                  "src": "1191:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8418,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1191:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1162:42:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8423,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8422,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8424,
                  "src": "1231:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8421,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1231:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1230:14:33"
            },
            "scope": 8529,
            "src": "1141:104:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8433,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8429,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8426,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8433,
                  "src": "1542:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8425,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1542:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8428,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8433,
                  "src": "1560:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8427,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1560:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1541:32:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8432,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8431,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8433,
                  "src": "1600:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8430,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1600:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1599:14:33"
            },
            "scope": 8529,
            "src": "1525:89:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8444,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approveAndCall",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8440,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8435,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8444,
                  "src": "1961:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8434,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1961:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8437,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8444,
                  "src": "1979:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8436,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1979:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8439,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 8444,
                  "src": "1993:11:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 8438,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1993:5:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1960:45:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8443,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8442,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8444,
                  "src": "2032:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8441,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2032:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2031:14:33"
            },
            "scope": 8529,
            "src": "1937:109:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8449,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8445,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2069:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8447,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8449,
                  "src": "2098:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8446,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2098:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2097:6:33"
            },
            "scope": 8529,
            "src": "2052:52:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8454,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "collectOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8450,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2211:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8453,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8452,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8454,
                  "src": "2240:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8451,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2240:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2239:14:33"
            },
            "scope": 8529,
            "src": "2182:72:33",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8463,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8459,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8456,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 8463,
                  "src": "2360:20:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8455,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2360:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8458,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8463,
                  "src": "2382:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8457,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2382:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2359:40:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8462,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8461,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8463,
                  "src": "2435:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8460,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2435:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2434:6:33"
            },
            "scope": 8529,
            "src": "2341:100:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8468,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8464,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2526:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8467,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8466,
                  "name": "tokenSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 8468,
                  "src": "2564:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8465,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2564:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2563:18:33"
            },
            "scope": 8529,
            "src": "2506:76:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8475,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8471,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8470,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 8475,
                  "src": "2656:20:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8469,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2656:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2655:22:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8474,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8473,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 8475,
                  "src": "2713:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8472,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2713:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2712:14:33"
            },
            "scope": 8529,
            "src": "2637:90:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8480,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8476,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2795:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8479,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8478,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8480,
                  "src": "2833:6:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8477,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2833:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2832:8:33"
            },
            "scope": 8529,
            "src": "2778:63:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8485,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "valuePerToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8481,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2869:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8484,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8483,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8485,
                  "src": "2907:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8482,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2907:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2906:6:33"
            },
            "scope": 8529,
            "src": "2847:66:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8490,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "scalingFactor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8486,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2941:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8489,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8488,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8490,
                  "src": "2979:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8487,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2979:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2978:6:33"
            },
            "scope": 8529,
            "src": "2919:66:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8497,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAmountOwed",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8493,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8492,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 8497,
                  "src": "3067:13:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8491,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3067:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3066:15:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8496,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8495,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8497,
                  "src": "3117:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8494,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3117:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3116:6:33"
            },
            "scope": 8529,
            "src": "3044:79:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8504,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getOwedDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8500,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8499,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 8504,
                  "src": "3242:13:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8498,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3242:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3241:15:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8503,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8502,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8504,
                  "src": "3292:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8501,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3292:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3291:6:33"
            },
            "scope": 8529,
            "src": "3216:82:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8509,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "assetIncome",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8505,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3324:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8508,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8507,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8509,
                  "src": "3362:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8506,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3362:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3361:6:33"
            },
            "scope": 8529,
            "src": "3304:64:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8514,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getERC20",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8510,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3391:2:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 8513,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8512,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8514,
                  "src": "3429:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8511,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3429:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3428:9:33"
            },
            "scope": 8529,
            "src": "3374:64:33",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 8520,
            "name": "LogIncomeReceived",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 8519,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8516,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8520,
                  "src": "3468:23:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8515,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3468:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8518,
                  "indexed": false,
                  "name": "_paymentAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8520,
                  "src": "3493:19:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8517,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3493:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3467:46:33"
            },
            "src": "3444:70:33"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 8528,
            "name": "LogIncomeCollected",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 8527,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8522,
                  "indexed": false,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 8528,
                  "src": "3544:11:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8521,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3544:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8524,
                  "indexed": false,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 8528,
                  "src": "3557:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8523,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3557:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8526,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8528,
                  "src": "3575:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8525,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3575:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3543:45:33"
            },
            "src": "3519:70:33"
          }
        ],
        "scope": 8530,
        "src": "400:3192:33"
      }
    ],
    "src": "0:3593:33"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:16.358Z"
}