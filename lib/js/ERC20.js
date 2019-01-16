"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ERC20 = exports.ERC20 = 
{
  "contractName": "ERC20",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
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
          "name": "_who",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
          "name": "_owner",
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
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
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
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
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
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\n\n/**\n * @title ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/20\n */\ninterface ERC20 {\n  function totalSupply() external view returns (uint256);\n\n  function balanceOf(address _who) external view returns (uint256);\n\n  function allowance(address _owner, address _spender) external view returns (uint256);\n\n  function transfer(address _to, uint256 _value) external returns (bool);\n\n  function approve(address _spender, uint256 _value) external returns (bool);\n\n  function transferFrom(address _from, address _to, uint256 _value) external returns (bool);\n\n  event Transfer(address indexed from, address indexed to, uint256 value);\n\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
    "exportedSymbols": {
      "ERC20": [
        8598
      ]
    },
    "id": 8599,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8531,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:34"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 8598,
        "linearizedBaseContracts": [
          8598
        ],
        "name": "ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8536,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8532,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "156:2:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 8535,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8534,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8536,
                  "src": "182:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8533,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "182:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "181:9:34"
            },
            "scope": 8598,
            "src": "136:55:34",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8543,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8539,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8538,
                  "name": "_who",
                  "nodeType": "VariableDeclaration",
                  "scope": 8543,
                  "src": "214:12:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8537,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "214:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "213:14:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 8542,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8541,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8543,
                  "src": "251:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8540,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "251:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "250:9:34"
            },
            "scope": 8598,
            "src": "195:65:34",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8552,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8548,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8545,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 8552,
                  "src": "283:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8544,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "283:7:34",
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
                  "id": 8547,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8552,
                  "src": "299:16:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8546,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "299:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "282:34:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 8551,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8550,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8552,
                  "src": "340:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8549,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "339:9:34"
            },
            "scope": 8598,
            "src": "264:85:34",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8561,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8557,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8554,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8561,
                  "src": "371:11:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8553,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "371:7:34",
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
                  "id": 8556,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8561,
                  "src": "384:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8555,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "384:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "370:29:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 8560,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8559,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8561,
                  "src": "418:4:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8558,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "418:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "417:6:34"
            },
            "scope": 8598,
            "src": "353:71:34",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8570,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8566,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8563,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8570,
                  "src": "445:16:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8562,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "445:7:34",
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
                  "id": 8565,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8570,
                  "src": "463:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8564,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "463:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "444:34:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 8569,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8568,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8570,
                  "src": "497:4:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8567,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "497:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "496:6:34"
            },
            "scope": 8598,
            "src": "428:75:34",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8581,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8577,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8572,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 8581,
                  "src": "529:13:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8571,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "529:7:34",
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
                  "id": 8574,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8581,
                  "src": "544:11:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8573,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "544:7:34",
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
                  "id": 8576,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8581,
                  "src": "557:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8575,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "557:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "528:44:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 8580,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8579,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8581,
                  "src": "591:4:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8578,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "591:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "590:6:34"
            },
            "scope": 8598,
            "src": "507:90:34",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 8589,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 8588,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8583,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 8589,
                  "src": "616:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8582,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "616:7:34",
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
                  "id": 8585,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8589,
                  "src": "638:18:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8584,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "638:7:34",
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
                  "id": 8587,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8589,
                  "src": "658:13:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8586,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "658:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "615:57:34"
            },
            "src": "601:72:34"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 8597,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 8596,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8591,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 8597,
                  "src": "692:21:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8590,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "692:7:34",
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
                  "id": 8593,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8597,
                  "src": "715:23:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8592,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "715:7:34",
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
                  "id": 8595,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8597,
                  "src": "740:13:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8594,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "740:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "691:63:34"
            },
            "src": "677:78:34"
          }
        ],
        "scope": 8599,
        "src": "116:641:34"
      }
    ],
    "src": "0:758:34"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
    "exportedSymbols": {
      "ERC20": [
        8598
      ]
    },
    "id": 8599,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8531,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:34"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 8598,
        "linearizedBaseContracts": [
          8598
        ],
        "name": "ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8536,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8532,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "156:2:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 8535,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8534,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8536,
                  "src": "182:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8533,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "182:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "181:9:34"
            },
            "scope": 8598,
            "src": "136:55:34",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8543,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8539,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8538,
                  "name": "_who",
                  "nodeType": "VariableDeclaration",
                  "scope": 8543,
                  "src": "214:12:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8537,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "214:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "213:14:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 8542,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8541,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8543,
                  "src": "251:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8540,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "251:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "250:9:34"
            },
            "scope": 8598,
            "src": "195:65:34",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8552,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8548,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8545,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 8552,
                  "src": "283:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8544,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "283:7:34",
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
                  "id": 8547,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8552,
                  "src": "299:16:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8546,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "299:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "282:34:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 8551,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8550,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8552,
                  "src": "340:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8549,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "339:9:34"
            },
            "scope": 8598,
            "src": "264:85:34",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8561,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8557,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8554,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8561,
                  "src": "371:11:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8553,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "371:7:34",
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
                  "id": 8556,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8561,
                  "src": "384:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8555,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "384:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "370:29:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 8560,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8559,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8561,
                  "src": "418:4:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8558,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "418:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "417:6:34"
            },
            "scope": 8598,
            "src": "353:71:34",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8570,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8566,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8563,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8570,
                  "src": "445:16:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8562,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "445:7:34",
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
                  "id": 8565,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8570,
                  "src": "463:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8564,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "463:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "444:34:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 8569,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8568,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8570,
                  "src": "497:4:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8567,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "497:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "496:6:34"
            },
            "scope": 8598,
            "src": "428:75:34",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8581,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8577,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8572,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 8581,
                  "src": "529:13:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8571,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "529:7:34",
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
                  "id": 8574,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8581,
                  "src": "544:11:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8573,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "544:7:34",
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
                  "id": 8576,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8581,
                  "src": "557:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8575,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "557:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "528:44:34"
            },
            "payable": false,
            "returnParameters": {
              "id": 8580,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8579,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8581,
                  "src": "591:4:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8578,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "591:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "590:6:34"
            },
            "scope": 8598,
            "src": "507:90:34",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 8589,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 8588,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8583,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 8589,
                  "src": "616:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8582,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "616:7:34",
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
                  "id": 8585,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8589,
                  "src": "638:18:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8584,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "638:7:34",
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
                  "id": 8587,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8589,
                  "src": "658:13:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8586,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "658:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "615:57:34"
            },
            "src": "601:72:34"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 8597,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 8596,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8591,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 8597,
                  "src": "692:21:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8590,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "692:7:34",
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
                  "id": 8593,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 8597,
                  "src": "715:23:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8592,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "715:7:34",
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
                  "id": 8595,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 8597,
                  "src": "740:13:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8594,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "740:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "691:63:34"
            },
            "src": "677:78:34"
          }
        ],
        "scope": 8599,
        "src": "116:641:34"
      }
    ],
    "src": "0:758:34"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:16.360Z"
}