"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var TokenFactoryInterface = exports.TokenFactoryInterface = 
{
  "contractName": "TokenFactoryInterface",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenURI",
          "type": "string"
        }
      ],
      "name": "createEtherDividend",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
          "name": "_tokenURI",
          "type": "string"
        },
        {
          "name": "_erc20Address",
          "type": "address"
        }
      ],
      "name": "createERC20Dividend",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
  "source": "pragma solidity ^0.4.24;\n\ninterface TokenFactoryInterface{\n\n  function createEtherDividend(string _tokenURI) external returns (address);\n\n  function createERC20Dividend(string _tokenURI, address _erc20Address) external returns (address);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/TokenFactoryInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/TokenFactoryInterface.sol",
    "exportedSymbols": {
      "TokenFactoryInterface": [
        8722
      ]
    },
    "id": 8723,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8705,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:39"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8722,
        "linearizedBaseContracts": [
          8722
        ],
        "name": "TokenFactoryInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8712,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createEtherDividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8708,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8707,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 8712,
                  "src": "91:16:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8706,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "91:6:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "90:18:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 8711,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8710,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8712,
                  "src": "127:7:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8709,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "127:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "126:9:39"
            },
            "scope": 8722,
            "src": "62:74:39",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8721,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createERC20Dividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8717,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8714,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 8721,
                  "src": "169:16:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8713,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "169:6:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8716,
                  "name": "_erc20Address",
                  "nodeType": "VariableDeclaration",
                  "scope": 8721,
                  "src": "187:21:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8715,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "187:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "168:41:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 8720,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8719,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8721,
                  "src": "228:7:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8718,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "228:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "227:9:39"
            },
            "scope": 8722,
            "src": "140:97:39",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 8723,
        "src": "26:214:39"
      }
    ],
    "src": "0:241:39"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/TokenFactoryInterface.sol",
    "exportedSymbols": {
      "TokenFactoryInterface": [
        8722
      ]
    },
    "id": 8723,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8705,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:39"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8722,
        "linearizedBaseContracts": [
          8722
        ],
        "name": "TokenFactoryInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8712,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createEtherDividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8708,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8707,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 8712,
                  "src": "91:16:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8706,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "91:6:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "90:18:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 8711,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8710,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8712,
                  "src": "127:7:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8709,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "127:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "126:9:39"
            },
            "scope": 8722,
            "src": "62:74:39",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8721,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "createERC20Dividend",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8717,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8714,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 8721,
                  "src": "169:16:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 8713,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "169:6:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8716,
                  "name": "_erc20Address",
                  "nodeType": "VariableDeclaration",
                  "scope": 8721,
                  "src": "187:21:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8715,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "187:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "168:41:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 8720,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8719,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8721,
                  "src": "228:7:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8718,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "228:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "227:9:39"
            },
            "scope": 8722,
            "src": "140:97:39",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 8723,
        "src": "26:214:39"
      }
    ],
    "src": "0:241:39"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:16.365Z"
}