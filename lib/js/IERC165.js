"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IERC165 = exports.IERC165 = 
{
  "contractName": "IERC165",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
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
  "source": "pragma solidity ^0.4.24;\n\n/**\n * @title IERC165\n * @dev https://github.com/ethereum/EIPs/blob/master/EIPS/eip-165.md\n */\ninterface IERC165 {\n    /**\n     * @notice Query if a contract implements an interface\n     * @param interfaceId The interface identifier, as specified in ERC-165\n     * @dev Interface identification is specified in ERC-165. This function\n     * uses less than 30,000 gas.\n     */\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/IERC165.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/IERC165.sol",
    "exportedSymbols": {
      "IERC165": [
        8725
      ]
    },
    "id": 8726,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8717,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:26"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title IERC165\n@dev https://github.com/ethereum/EIPs/blob/master/EIPS/eip-165.md",
        "fullyImplemented": false,
        "id": 8725,
        "linearizedBaseContracts": [
          8725
        ],
        "name": "IERC165",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "@notice Query if a contract implements an interface\n@param interfaceId The interface identifier, as specified in ERC-165\n@dev Interface identification is specified in ERC-165. This function\nuses less than 30,000 gas.",
            "id": 8724,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "supportsInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8720,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8719,
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8724,
                  "src": "433:18:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 8718,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "433:6:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "432:20:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 8723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8722,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8724,
                  "src": "476:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8721,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "476:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "475:6:26"
            },
            "scope": 8725,
            "src": "406:76:26",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 8726,
        "src": "121:363:26"
      }
    ],
    "src": "0:485:26"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/IERC165.sol",
    "exportedSymbols": {
      "IERC165": [
        8725
      ]
    },
    "id": 8726,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8717,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:26"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title IERC165\n@dev https://github.com/ethereum/EIPs/blob/master/EIPS/eip-165.md",
        "fullyImplemented": false,
        "id": 8725,
        "linearizedBaseContracts": [
          8725
        ],
        "name": "IERC165",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "@notice Query if a contract implements an interface\n@param interfaceId The interface identifier, as specified in ERC-165\n@dev Interface identification is specified in ERC-165. This function\nuses less than 30,000 gas.",
            "id": 8724,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "supportsInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8720,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8719,
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8724,
                  "src": "433:18:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 8718,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "433:6:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "432:20:26"
            },
            "payable": false,
            "returnParameters": {
              "id": 8723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8722,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8724,
                  "src": "476:4:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8721,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "476:4:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "475:6:26"
            },
            "scope": 8725,
            "src": "406:76:26",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 8726,
        "src": "121:363:26"
      }
    ],
    "src": "0:485:26"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.579Z",
  "devdoc": {
    "methods": {
      "supportsInterface(bytes4)": {
        "details": "Interface identification is specified in ERC-165. This function uses less than 30,000 gas.",
        "params": {
          "interfaceId": "The interface identifier, as specified in ERC-165"
        }
      }
    },
    "title": "IERC165"
  },
  "userdoc": {
    "methods": {
      "supportsInterface(bytes4)": {
        "notice": "Query if a contract implements an interface"
      }
    }
  }
}