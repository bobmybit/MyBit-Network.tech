"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ApproveAndCallFallBack = exports.ApproveAndCallFallBack = 
{
  "contractName": "ApproveAndCallFallBack",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "tokens",
          "type": "uint256"
        },
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "receiveApproval",
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
  "source": "pragma solidity ^0.4.24;\n\n// @notice Receive approval and then execute function\ninterface ApproveAndCallFallBack {\n    function receiveApproval(address from, uint tokens, address token, bytes data) external;\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ApproveAndCallFallback.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ApproveAndCallFallback.sol",
    "exportedSymbols": {
      "ApproveAndCallFallBack": [
        8145
      ]
    },
    "id": 8146,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8133,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:29"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8145,
        "linearizedBaseContracts": [
          8145
        ],
        "name": "ApproveAndCallFallBack",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8144,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receiveApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8135,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 8144,
                  "src": "144:12:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8134,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "144:7:29",
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
                  "id": 8137,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 8144,
                  "src": "158:11:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8136,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "158:4:29",
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
                  "id": 8139,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 8144,
                  "src": "171:13:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8138,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "171:7:29",
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
                  "id": 8141,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 8144,
                  "src": "186:10:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 8140,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "186:5:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "143:54:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8143,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "206:0:29"
            },
            "scope": 8145,
            "src": "119:88:29",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 8146,
        "src": "80:129:29"
      }
    ],
    "src": "0:210:29"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ApproveAndCallFallback.sol",
    "exportedSymbols": {
      "ApproveAndCallFallBack": [
        8145
      ]
    },
    "id": 8146,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8133,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:29"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8145,
        "linearizedBaseContracts": [
          8145
        ],
        "name": "ApproveAndCallFallBack",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8144,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receiveApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8135,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 8144,
                  "src": "144:12:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8134,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "144:7:29",
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
                  "id": 8137,
                  "name": "tokens",
                  "nodeType": "VariableDeclaration",
                  "scope": 8144,
                  "src": "158:11:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8136,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "158:4:29",
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
                  "id": 8139,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 8144,
                  "src": "171:13:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8138,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "171:7:29",
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
                  "id": 8141,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 8144,
                  "src": "186:10:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 8140,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "186:5:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "143:54:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8143,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "206:0:29"
            },
            "scope": 8145,
            "src": "119:88:29",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 8146,
        "src": "80:129:29"
      }
    ],
    "src": "0:210:29"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:16.330Z"
}