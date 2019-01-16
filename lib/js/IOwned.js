"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IOwned = exports.IOwned = 
{
  "contractName": "IOwned",
  "abi": [
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
      "name": "acceptOwnership",
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
  "source": "pragma solidity ^0.4.24;\n\n/*\n    Owned contract interface\n*/\ncontract IOwned {\n    // this function isn't abstract since the compiler emits automatically generated getter functions as external\n    function owner() public pure returns (address) {}\n\n    function transferOwnership(address _newOwner) public;\n    function acceptOwnership() public;\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IOwned.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IOwned.sol",
    "exportedSymbols": {
      "IOwned": [
        1167
      ]
    },
    "id": 1168,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1152,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:10"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 1167,
        "linearizedBaseContracts": [
          1167
        ],
        "name": "IOwned",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 1157,
              "nodeType": "Block",
              "src": "244:2:10",
              "statements": []
            },
            "documentation": null,
            "id": 1158,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "owner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1153,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "211:2:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1156,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1155,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1158,
                  "src": "235:7:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1154,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "235:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "234:9:10"
            },
            "scope": 1167,
            "src": "197:49:10",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1163,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1160,
                  "name": "_newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 1163,
                  "src": "279:17:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1159,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "279:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "278:19:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1162,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "304:0:10"
            },
            "scope": 1167,
            "src": "252:53:10",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1166,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "acceptOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1164,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "334:2:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1165,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "343:0:10"
            },
            "scope": 1167,
            "src": "310:34:10",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1168,
        "src": "61:285:10"
      }
    ],
    "src": "0:347:10"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IOwned.sol",
    "exportedSymbols": {
      "IOwned": [
        1167
      ]
    },
    "id": 1168,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1152,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:10"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 1167,
        "linearizedBaseContracts": [
          1167
        ],
        "name": "IOwned",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 1157,
              "nodeType": "Block",
              "src": "244:2:10",
              "statements": []
            },
            "documentation": null,
            "id": 1158,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "owner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1153,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "211:2:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1156,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1155,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1158,
                  "src": "235:7:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1154,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "235:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "234:9:10"
            },
            "scope": 1167,
            "src": "197:49:10",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1163,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1160,
                  "name": "_newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 1163,
                  "src": "279:17:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1159,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "279:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "278:19:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1162,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "304:0:10"
            },
            "scope": 1167,
            "src": "252:53:10",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1166,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "acceptOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1164,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "334:2:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 1165,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "343:0:10"
            },
            "scope": 1167,
            "src": "310:34:10",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1168,
        "src": "61:285:10"
      }
    ],
    "src": "0:347:10"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:15.967Z"
}