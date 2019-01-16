"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IERC20Token = exports.IERC20Token = 
{
  "contractName": "IERC20Token",
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
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\n/*\n    ERC20 Standard Token interface\n*/\ncontract IERC20Token {\n    // these functions aren't abstract since the compiler emits automatically generated getter functions as external\n    function name() public pure returns (string) {}\n    function symbol() public pure returns (string) {}\n    function decimals() public pure returns (uint8) {}\n    function totalSupply() public pure returns (uint256) {}\n    function balanceOf(address _owner) public pure returns (uint256) { _owner; }\n    function allowance(address _owner, address _spender) public pure returns (uint256) { _owner; _spender; }\n\n    function transfer(address _to, uint256 _value) public returns (bool success);\n    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success);\n    function approve(address _spender, uint256 _value) public returns (bool success);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
    "exportedSymbols": {
      "IERC20Token": [
        1098
      ]
    },
    "id": 1099,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1020,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:7"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 1098,
        "linearizedBaseContracts": [
          1098
        ],
        "name": "IERC20Token",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 1025,
              "nodeType": "Block",
              "src": "256:2:7",
              "statements": []
            },
            "documentation": null,
            "id": 1026,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "name",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1021,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "224:2:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1024,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1023,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1026,
                  "src": "248:6:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1022,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "248:6:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "247:8:7"
            },
            "scope": 1098,
            "src": "211:47:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1031,
              "nodeType": "Block",
              "src": "310:2:7",
              "statements": []
            },
            "documentation": null,
            "id": 1032,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "symbol",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1027,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "278:2:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1030,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1029,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1032,
                  "src": "302:6:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1028,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "302:6:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "301:8:7"
            },
            "scope": 1098,
            "src": "263:49:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1037,
              "nodeType": "Block",
              "src": "365:2:7",
              "statements": []
            },
            "documentation": null,
            "id": 1038,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "decimals",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1033,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "334:2:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1036,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1035,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1038,
                  "src": "358:5:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 1034,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "358:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "357:7:7"
            },
            "scope": 1098,
            "src": "317:50:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1043,
              "nodeType": "Block",
              "src": "425:2:7",
              "statements": []
            },
            "documentation": null,
            "id": 1044,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1039,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "392:2:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1042,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1041,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1044,
                  "src": "416:7:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1040,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "416:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "415:9:7"
            },
            "scope": 1098,
            "src": "372:55:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1053,
              "nodeType": "Block",
              "src": "497:11:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1051,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1046,
                    "src": "499:6:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1052,
                  "nodeType": "ExpressionStatement",
                  "src": "499:6:7"
                }
              ]
            },
            "documentation": null,
            "id": 1054,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1047,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1046,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 1054,
                  "src": "451:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1045,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "451:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "450:16:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1050,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1049,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1054,
                  "src": "488:7:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1048,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "488:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "487:9:7"
            },
            "scope": 1098,
            "src": "432:76:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1067,
              "nodeType": "Block",
              "src": "596:21:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1063,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1056,
                    "src": "598:6:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1064,
                  "nodeType": "ExpressionStatement",
                  "src": "598:6:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1065,
                    "name": "_spender",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1058,
                    "src": "606:8:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1066,
                  "nodeType": "ExpressionStatement",
                  "src": "606:8:7"
                }
              ]
            },
            "documentation": null,
            "id": 1068,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1059,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1056,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 1068,
                  "src": "532:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1055,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "532:7:7",
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
                  "id": 1058,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 1068,
                  "src": "548:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1057,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "531:34:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1062,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1061,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1068,
                  "src": "587:7:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1060,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "587:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "586:9:7"
            },
            "scope": 1098,
            "src": "513:104:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1077,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1073,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1070,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1077,
                  "src": "641:11:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1069,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "641:7:7",
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
                  "id": 1072,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 1077,
                  "src": "654:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1071,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "654:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "640:29:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1076,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1075,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 1077,
                  "src": "686:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1074,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "686:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "685:14:7"
            },
            "scope": 1098,
            "src": "623:77:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1088,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1084,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1079,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 1088,
                  "src": "727:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1078,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "727:7:7",
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
                  "id": 1081,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1088,
                  "src": "742:11:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1080,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "742:7:7",
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
                  "id": 1083,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 1088,
                  "src": "755:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1082,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "755:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "726:44:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1087,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1086,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 1088,
                  "src": "787:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1085,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "787:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "786:14:7"
            },
            "scope": 1098,
            "src": "705:96:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1097,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1093,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1090,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 1097,
                  "src": "823:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1089,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "823:7:7",
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
                  "id": 1092,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 1097,
                  "src": "841:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1091,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "841:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "822:34:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1096,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1095,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 1097,
                  "src": "873:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1094,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "873:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "872:14:7"
            },
            "scope": 1098,
            "src": "806:81:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1099,
        "src": "67:822:7"
      }
    ],
    "src": "0:890:7"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
    "exportedSymbols": {
      "IERC20Token": [
        1098
      ]
    },
    "id": 1099,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1020,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:7"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 1098,
        "linearizedBaseContracts": [
          1098
        ],
        "name": "IERC20Token",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 1025,
              "nodeType": "Block",
              "src": "256:2:7",
              "statements": []
            },
            "documentation": null,
            "id": 1026,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "name",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1021,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "224:2:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1024,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1023,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1026,
                  "src": "248:6:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1022,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "248:6:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "247:8:7"
            },
            "scope": 1098,
            "src": "211:47:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1031,
              "nodeType": "Block",
              "src": "310:2:7",
              "statements": []
            },
            "documentation": null,
            "id": 1032,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "symbol",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1027,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "278:2:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1030,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1029,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1032,
                  "src": "302:6:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1028,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "302:6:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "301:8:7"
            },
            "scope": 1098,
            "src": "263:49:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1037,
              "nodeType": "Block",
              "src": "365:2:7",
              "statements": []
            },
            "documentation": null,
            "id": 1038,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "decimals",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1033,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "334:2:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1036,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1035,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1038,
                  "src": "358:5:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 1034,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "358:5:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "357:7:7"
            },
            "scope": 1098,
            "src": "317:50:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1043,
              "nodeType": "Block",
              "src": "425:2:7",
              "statements": []
            },
            "documentation": null,
            "id": 1044,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1039,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "392:2:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1042,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1041,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1044,
                  "src": "416:7:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1040,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "416:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "415:9:7"
            },
            "scope": 1098,
            "src": "372:55:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1053,
              "nodeType": "Block",
              "src": "497:11:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1051,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1046,
                    "src": "499:6:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1052,
                  "nodeType": "ExpressionStatement",
                  "src": "499:6:7"
                }
              ]
            },
            "documentation": null,
            "id": 1054,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1047,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1046,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 1054,
                  "src": "451:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1045,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "451:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "450:16:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1050,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1049,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1054,
                  "src": "488:7:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1048,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "488:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "487:9:7"
            },
            "scope": 1098,
            "src": "432:76:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1067,
              "nodeType": "Block",
              "src": "596:21:7",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1063,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1056,
                    "src": "598:6:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1064,
                  "nodeType": "ExpressionStatement",
                  "src": "598:6:7"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1065,
                    "name": "_spender",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1058,
                    "src": "606:8:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1066,
                  "nodeType": "ExpressionStatement",
                  "src": "606:8:7"
                }
              ]
            },
            "documentation": null,
            "id": 1068,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1059,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1056,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 1068,
                  "src": "532:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1055,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "532:7:7",
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
                  "id": 1058,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 1068,
                  "src": "548:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1057,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "531:34:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1062,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1061,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1068,
                  "src": "587:7:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1060,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "587:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "586:9:7"
            },
            "scope": 1098,
            "src": "513:104:7",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1077,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1073,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1070,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1077,
                  "src": "641:11:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1069,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "641:7:7",
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
                  "id": 1072,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 1077,
                  "src": "654:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1071,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "654:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "640:29:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1076,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1075,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 1077,
                  "src": "686:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1074,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "686:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "685:14:7"
            },
            "scope": 1098,
            "src": "623:77:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1088,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1084,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1079,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 1088,
                  "src": "727:13:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1078,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "727:7:7",
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
                  "id": 1081,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1088,
                  "src": "742:11:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1080,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "742:7:7",
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
                  "id": 1083,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 1088,
                  "src": "755:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1082,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "755:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "726:44:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1087,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1086,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 1088,
                  "src": "787:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1085,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "787:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "786:14:7"
            },
            "scope": 1098,
            "src": "705:96:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1097,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1093,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1090,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 1097,
                  "src": "823:16:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1089,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "823:7:7",
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
                  "id": 1092,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 1097,
                  "src": "841:14:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1091,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "841:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "822:34:7"
            },
            "payable": false,
            "returnParameters": {
              "id": 1096,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1095,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 1097,
                  "src": "873:12:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1094,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "873:4:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "872:14:7"
            },
            "scope": 1098,
            "src": "806:81:7",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1099,
        "src": "67:822:7"
      }
    ],
    "src": "0:890:7"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:15.966Z"
}