"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ERC20DividendInterface = exports.ERC20DividendInterface = 
{
  "contractName": "ERC20DividendInterface",
  "abi": [
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
      "name": "mint",
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
      "name": "finishMinting",
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
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "issueDividends",
      "outputs": [],
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
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\ninterface ERC20DividendInterface{\n  // @dev Function to mint tokens\n  // @param _to The address that will receive the minted tokens.\n  // @param _amount The amount of tokens to mint.\n  function mint(address _to, uint256 _amount) external returns (bool);\n\n  // @dev Function to stop minting new tokens.\n  function finishMinting() external returns (bool);\n\n  function issueDividends(uint _amount) external;\n\n  // @dev Total number of tokens in existence\n  function totalSupply() external view returns (uint256);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20DividendInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20DividendInterface.sol",
    "exportedSymbols": {
      "ERC20DividendInterface": [
        8625
      ]
    },
    "id": 8626,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8600,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:35"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8625,
        "linearizedBaseContracts": [
          8625
        ],
        "name": "ERC20DividendInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8609,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8605,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8602,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8609,
                  "src": "225:11:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8601,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:7:35",
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
                  "id": 8604,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8609,
                  "src": "238:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8603,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "224:30:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 8608,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8607,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8609,
                  "src": "273:4:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8606,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "272:6:35"
            },
            "scope": 8625,
            "src": "211:68:35",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8614,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8610,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "352:2:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 8613,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8612,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8614,
                  "src": "373:4:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8611,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:6:35"
            },
            "scope": 8625,
            "src": "330:49:35",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8619,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8617,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8616,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8619,
                  "src": "407:12:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8615,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "406:14:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 8618,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "429:0:35"
            },
            "scope": 8625,
            "src": "383:47:35",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8624,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8620,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "500:2:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 8623,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8622,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8624,
                  "src": "526:7:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8621,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "526:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "525:9:35"
            },
            "scope": 8625,
            "src": "480:55:35",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 8626,
        "src": "26:511:35"
      }
    ],
    "src": "0:538:35"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20DividendInterface.sol",
    "exportedSymbols": {
      "ERC20DividendInterface": [
        8625
      ]
    },
    "id": 8626,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8600,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:35"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8625,
        "linearizedBaseContracts": [
          8625
        ],
        "name": "ERC20DividendInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8609,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8605,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8602,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8609,
                  "src": "225:11:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8601,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:7:35",
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
                  "id": 8604,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8609,
                  "src": "238:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8603,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "224:30:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 8608,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8607,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8609,
                  "src": "273:4:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8606,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "272:6:35"
            },
            "scope": 8625,
            "src": "211:68:35",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8614,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8610,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "352:2:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 8613,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8612,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8614,
                  "src": "373:4:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8611,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:6:35"
            },
            "scope": 8625,
            "src": "330:49:35",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8619,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8617,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8616,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8619,
                  "src": "407:12:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8615,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "406:14:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 8618,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "429:0:35"
            },
            "scope": 8625,
            "src": "383:47:35",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8624,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8620,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "500:2:35"
            },
            "payable": false,
            "returnParameters": {
              "id": 8623,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8622,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8624,
                  "src": "526:7:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8621,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "526:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "525:9:35"
            },
            "scope": 8625,
            "src": "480:55:35",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 8626,
        "src": "26:511:35"
      }
    ],
    "src": "0:538:35"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:16.364Z"
}