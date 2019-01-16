"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var GovToken = exports.GovToken = 
{
  "contractName": "GovToken",
  "abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
          "name": "_user",
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
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unlockTokens",
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
      "name": "lockTokens",
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
          "name": "_amount",
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
  "source": "pragma solidity ^0.4.24;\n\n\ninterface GovToken {\n\n  function totalSupply() external returns (uint);\n\n  function balanceOf(address _user) external returns (uint);\n\n  function unlockTokens() external returns (bool);\n\n  function lockTokens() external returns (bool);\n\n  function transfer(address _to, uint _amount) external returns (bool);\n\n  function transferFrom(address _from, address _to, uint _amount) external returns (bool);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/GovToken.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/GovToken.sol",
    "exportedSymbols": {
      "GovToken": [
        8695
      ]
    },
    "id": 8696,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8652,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:37"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8695,
        "linearizedBaseContracts": [
          8695
        ],
        "name": "GovToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8657,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8653,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "71:2:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 8656,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8655,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8657,
                  "src": "92:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8654,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "92:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "91:6:37"
            },
            "scope": 8695,
            "src": "51:47:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8664,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8660,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8659,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 8664,
                  "src": "121:13:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8658,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "121:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "120:15:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 8663,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8662,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8664,
                  "src": "154:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8661,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "154:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "153:6:37"
            },
            "scope": 8695,
            "src": "102:58:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8669,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "unlockTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8665,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "185:2:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 8668,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8667,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8669,
                  "src": "206:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8666,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "206:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "205:6:37"
            },
            "scope": 8695,
            "src": "164:48:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8674,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "lockTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8670,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "235:2:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 8673,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8672,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8674,
                  "src": "256:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8671,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "256:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "255:6:37"
            },
            "scope": 8695,
            "src": "216:46:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8683,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8676,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8683,
                  "src": "284:11:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8675,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "284:7:37",
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
                  "id": 8678,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8683,
                  "src": "297:12:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8677,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "283:27:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 8682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8681,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8683,
                  "src": "329:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8680,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "329:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "328:6:37"
            },
            "scope": 8695,
            "src": "266:69:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8694,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8690,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8685,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 8694,
                  "src": "361:13:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8684,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:7:37",
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
                  "id": 8687,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8694,
                  "src": "376:11:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8686,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "376:7:37",
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
                  "id": 8689,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8694,
                  "src": "389:12:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8688,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "389:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:42:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 8693,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8692,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8694,
                  "src": "421:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8691,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "421:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "420:6:37"
            },
            "scope": 8695,
            "src": "339:88:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 8696,
        "src": "27:403:37"
      }
    ],
    "src": "0:431:37"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/GovToken.sol",
    "exportedSymbols": {
      "GovToken": [
        8695
      ]
    },
    "id": 8696,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8652,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:37"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8695,
        "linearizedBaseContracts": [
          8695
        ],
        "name": "GovToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8657,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8653,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "71:2:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 8656,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8655,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8657,
                  "src": "92:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8654,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "92:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "91:6:37"
            },
            "scope": 8695,
            "src": "51:47:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8664,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8660,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8659,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 8664,
                  "src": "121:13:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8658,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "121:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "120:15:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 8663,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8662,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8664,
                  "src": "154:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8661,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "154:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "153:6:37"
            },
            "scope": 8695,
            "src": "102:58:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8669,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "unlockTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8665,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "185:2:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 8668,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8667,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8669,
                  "src": "206:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8666,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "206:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "205:6:37"
            },
            "scope": 8695,
            "src": "164:48:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8674,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "lockTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8670,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "235:2:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 8673,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8672,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8674,
                  "src": "256:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8671,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "256:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "255:6:37"
            },
            "scope": 8695,
            "src": "216:46:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8683,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8676,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8683,
                  "src": "284:11:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8675,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "284:7:37",
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
                  "id": 8678,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8683,
                  "src": "297:12:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8677,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "283:27:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 8682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8681,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8683,
                  "src": "329:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8680,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "329:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "328:6:37"
            },
            "scope": 8695,
            "src": "266:69:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8694,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8690,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8685,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 8694,
                  "src": "361:13:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8684,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:7:37",
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
                  "id": 8687,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8694,
                  "src": "376:11:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8686,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "376:7:37",
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
                  "id": 8689,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8694,
                  "src": "389:12:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8688,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "389:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:42:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 8693,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8692,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8694,
                  "src": "421:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8691,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "421:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "420:6:37"
            },
            "scope": 8695,
            "src": "339:88:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 8696,
        "src": "27:403:37"
      }
    ],
    "src": "0:431:37"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:16.363Z"
}