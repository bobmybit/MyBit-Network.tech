"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var OrderbookReserveInterface = exports.OrderbookReserveInterface = 
{
  "contractName": "OrderbookReserveInterface",
  "abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "init",
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
      "constant": true,
      "inputs": [],
      "name": "kncRateBlocksTrade",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
  "source": "pragma solidity 0.4.24;\n\n\nimport \"./OrderListFactoryInterface.sol\";\n\n\ninterface OrderbookReserveInterface {\n    function init() external returns(bool);\n    function kncRateBlocksTrade() external view returns(bool);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/OrderbookReserveInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/OrderbookReserveInterface.sol",
    "exportedSymbols": {
      "OrderbookReserveInterface": [
        19859
      ]
    },
    "id": 19860,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 19847,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:61"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/OrderListFactoryInterface.sol",
        "file": "./OrderListFactoryInterface.sol",
        "id": 19848,
        "nodeType": "ImportDirective",
        "scope": 19860,
        "sourceUnit": 16429,
        "src": "26:41:61",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 19859,
        "linearizedBaseContracts": [
          19859
        ],
        "name": "OrderbookReserveInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 19853,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "init",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19849,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "125:2:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 19852,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19851,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 19853,
                  "src": "145:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 19850,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "145:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "144:6:61"
            },
            "scope": 19859,
            "src": "112:39:61",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 19858,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "kncRateBlocksTrade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19854,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "183:2:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 19857,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19856,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 19858,
                  "src": "208:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 19855,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "208:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "207:6:61"
            },
            "scope": 19859,
            "src": "156:58:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 19860,
        "src": "70:146:61"
      }
    ],
    "src": "0:217:61"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/OrderbookReserveInterface.sol",
    "exportedSymbols": {
      "OrderbookReserveInterface": [
        19859
      ]
    },
    "id": 19860,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 19847,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:61"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/OrderListFactoryInterface.sol",
        "file": "./OrderListFactoryInterface.sol",
        "id": 19848,
        "nodeType": "ImportDirective",
        "scope": 19860,
        "sourceUnit": 16429,
        "src": "26:41:61",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 19859,
        "linearizedBaseContracts": [
          19859
        ],
        "name": "OrderbookReserveInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 19853,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "init",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19849,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "125:2:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 19852,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19851,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 19853,
                  "src": "145:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 19850,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "145:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "144:6:61"
            },
            "scope": 19859,
            "src": "112:39:61",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 19858,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "kncRateBlocksTrade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19854,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "183:2:61"
            },
            "payable": false,
            "returnParameters": {
              "id": 19857,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19856,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 19858,
                  "src": "208:4:61",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 19855,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "208:4:61",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "207:6:61"
            },
            "scope": 19859,
            "src": "156:58:61",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 19860,
        "src": "70:146:61"
      }
    ],
    "src": "0:217:61"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.708Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}