"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IEtherToken = exports.IEtherToken = 
{
  "contractName": "IEtherToken",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
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
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
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
      "stateMutability": "pure",
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
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_token",
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
      "name": "withdrawTokens",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
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
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "acceptOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
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
          "name": "success",
          "type": "bool"
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
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "deposit",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
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
      "name": "withdrawTo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\nimport './IERC20Token.sol';\nimport '../../utility/interfaces/ITokenHolder.sol';\n\n/*\n    Ether Token interface\n*/\ncontract IEtherToken is ITokenHolder, IERC20Token {\n    function deposit() public payable;\n    function withdraw(uint256 _amount) public;\n    function withdrawTo(address _to, uint256 _amount) public;\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IEtherToken.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IEtherToken.sol",
    "exportedSymbols": {
      "IEtherToken": [
        1122
      ]
    },
    "id": 1123,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1100,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:8"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "./IERC20Token.sol",
        "id": 1101,
        "nodeType": "ImportDirective",
        "scope": 1123,
        "sourceUnit": 1099,
        "src": "25:27:8",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/ITokenHolder.sol",
        "file": "../../utility/interfaces/ITokenHolder.sol",
        "id": 1102,
        "nodeType": "ImportDirective",
        "scope": 1123,
        "sourceUnit": 1184,
        "src": "53:51:8",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1103,
              "name": "ITokenHolder",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1183,
              "src": "162:12:8",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ITokenHolder_$1183",
                "typeString": "contract ITokenHolder"
              }
            },
            "id": 1104,
            "nodeType": "InheritanceSpecifier",
            "src": "162:12:8"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1105,
              "name": "IERC20Token",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1098,
              "src": "176:11:8",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20Token_$1098",
                "typeString": "contract IERC20Token"
              }
            },
            "id": 1106,
            "nodeType": "InheritanceSpecifier",
            "src": "176:11:8"
          }
        ],
        "contractDependencies": [
          1098,
          1167,
          1183
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 1122,
        "linearizedBaseContracts": [
          1122,
          1098,
          1183,
          1167
        ],
        "name": "IEtherToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 1109,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deposit",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1107,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "210:2:8"
            },
            "payable": true,
            "returnParameters": {
              "id": 1108,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "227:0:8"
            },
            "scope": 1122,
            "src": "194:34:8",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1114,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1112,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1111,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1114,
                  "src": "251:15:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1110,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "251:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "250:17:8"
            },
            "payable": false,
            "returnParameters": {
              "id": 1113,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "274:0:8"
            },
            "scope": 1122,
            "src": "233:42:8",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1121,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdrawTo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1119,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1116,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1121,
                  "src": "300:11:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1115,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "300:7:8",
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
                  "id": 1118,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1121,
                  "src": "313:15:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1117,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "313:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "299:30:8"
            },
            "payable": false,
            "returnParameters": {
              "id": 1120,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "336:0:8"
            },
            "scope": 1122,
            "src": "280:57:8",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1123,
        "src": "138:201:8"
      }
    ],
    "src": "0:340:8"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IEtherToken.sol",
    "exportedSymbols": {
      "IEtherToken": [
        1122
      ]
    },
    "id": 1123,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1100,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:8"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "./IERC20Token.sol",
        "id": 1101,
        "nodeType": "ImportDirective",
        "scope": 1123,
        "sourceUnit": 1099,
        "src": "25:27:8",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/ITokenHolder.sol",
        "file": "../../utility/interfaces/ITokenHolder.sol",
        "id": 1102,
        "nodeType": "ImportDirective",
        "scope": 1123,
        "sourceUnit": 1184,
        "src": "53:51:8",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1103,
              "name": "ITokenHolder",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1183,
              "src": "162:12:8",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ITokenHolder_$1183",
                "typeString": "contract ITokenHolder"
              }
            },
            "id": 1104,
            "nodeType": "InheritanceSpecifier",
            "src": "162:12:8"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1105,
              "name": "IERC20Token",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1098,
              "src": "176:11:8",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20Token_$1098",
                "typeString": "contract IERC20Token"
              }
            },
            "id": 1106,
            "nodeType": "InheritanceSpecifier",
            "src": "176:11:8"
          }
        ],
        "contractDependencies": [
          1098,
          1167,
          1183
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 1122,
        "linearizedBaseContracts": [
          1122,
          1098,
          1183,
          1167
        ],
        "name": "IEtherToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 1109,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deposit",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1107,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "210:2:8"
            },
            "payable": true,
            "returnParameters": {
              "id": 1108,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "227:0:8"
            },
            "scope": 1122,
            "src": "194:34:8",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1114,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1112,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1111,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1114,
                  "src": "251:15:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1110,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "251:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "250:17:8"
            },
            "payable": false,
            "returnParameters": {
              "id": 1113,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "274:0:8"
            },
            "scope": 1122,
            "src": "233:42:8",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1121,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdrawTo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1119,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1116,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1121,
                  "src": "300:11:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1115,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "300:7:8",
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
                  "id": 1118,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1121,
                  "src": "313:15:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1117,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "313:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "299:30:8"
            },
            "payable": false,
            "returnParameters": {
              "id": 1120,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "336:0:8"
            },
            "scope": 1122,
            "src": "280:57:8",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1123,
        "src": "138:201:8"
      }
    ],
    "src": "0:340:8"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:15.968Z"
}