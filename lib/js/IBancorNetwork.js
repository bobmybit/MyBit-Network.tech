"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IBancorNetwork = exports.IBancorNetwork = 
{
  "contractName": "IBancorNetwork",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_path",
          "type": "address[]"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_minReturn",
          "type": "uint256"
        }
      ],
      "name": "convert",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_path",
          "type": "address[]"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_minReturn",
          "type": "uint256"
        },
        {
          "name": "_for",
          "type": "address"
        }
      ],
      "name": "convertFor",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_path",
          "type": "address[]"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_minReturn",
          "type": "uint256"
        },
        {
          "name": "_for",
          "type": "address"
        },
        {
          "name": "_block",
          "type": "uint256"
        },
        {
          "name": "_v",
          "type": "uint8"
        },
        {
          "name": "_r",
          "type": "bytes32"
        },
        {
          "name": "_s",
          "type": "bytes32"
        }
      ],
      "name": "convertForPrioritized2",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_path",
          "type": "address[]"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_minReturn",
          "type": "uint256"
        },
        {
          "name": "_for",
          "type": "address"
        },
        {
          "name": "_block",
          "type": "uint256"
        },
        {
          "name": "_nonce",
          "type": "uint256"
        },
        {
          "name": "_v",
          "type": "uint8"
        },
        {
          "name": "_r",
          "type": "bytes32"
        },
        {
          "name": "_s",
          "type": "bytes32"
        }
      ],
      "name": "convertForPrioritized",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\nimport './token/interfaces/IERC20Token.sol';\n\n/*\n    Bancor Network interface\n*/\ncontract IBancorNetwork {\n    function convert(IERC20Token[] _path, uint256 _amount, uint256 _minReturn) public payable returns (uint256);\n    function convertFor(IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for) public payable returns (uint256);\n    function convertForPrioritized2(\n        IERC20Token[] _path,\n        uint256 _amount,\n        uint256 _minReturn,\n        address _for,\n        uint256 _block,\n        uint8 _v,\n        bytes32 _r,\n        bytes32 _s)\n        public payable returns (uint256);\n\n    // deprecated, backward compatibility\n    function convertForPrioritized(\n        IERC20Token[] _path,\n        uint256 _amount,\n        uint256 _minReturn,\n        address _for,\n        uint256 _block,\n        uint256 _nonce,\n        uint8 _v,\n        bytes32 _r,\n        bytes32 _s)\n        public payable returns (uint256);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/IBancorNetwork.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/IBancorNetwork.sol",
    "exportedSymbols": {
      "IBancorNetwork": [
        1018
      ]
    },
    "id": 1019,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 944,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:6"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "./token/interfaces/IERC20Token.sol",
        "id": 945,
        "nodeType": "ImportDirective",
        "scope": 1019,
        "sourceUnit": 1099,
        "src": "25:44:6",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 1018,
        "linearizedBaseContracts": [
          1018
        ],
        "name": "IBancorNetwork",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 957,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convert",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 953,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 948,
                  "name": "_path",
                  "nodeType": "VariableDeclaration",
                  "scope": 957,
                  "src": "153:19:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_memory_ptr",
                    "typeString": "contract IERC20Token[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 946,
                      "name": "IERC20Token",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 1098,
                      "src": "153:11:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$1098",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "id": 947,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "153:13:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_storage_ptr",
                      "typeString": "contract IERC20Token[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 950,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 957,
                  "src": "174:15:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 949,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "174:7:6",
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
                  "id": 952,
                  "name": "_minReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 957,
                  "src": "191:18:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 951,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "191:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "152:58:6"
            },
            "payable": true,
            "returnParameters": {
              "id": 956,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 955,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 957,
                  "src": "235:7:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 954,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "235:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "234:9:6"
            },
            "scope": 1018,
            "src": "136:108:6",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 971,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convertFor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 967,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 960,
                  "name": "_path",
                  "nodeType": "VariableDeclaration",
                  "scope": 971,
                  "src": "269:19:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_memory_ptr",
                    "typeString": "contract IERC20Token[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 958,
                      "name": "IERC20Token",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 1098,
                      "src": "269:11:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$1098",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "id": 959,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "269:13:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_storage_ptr",
                      "typeString": "contract IERC20Token[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 962,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 971,
                  "src": "290:15:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 961,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "290:7:6",
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
                  "id": 964,
                  "name": "_minReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 971,
                  "src": "307:18:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 963,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "307:7:6",
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
                  "id": 966,
                  "name": "_for",
                  "nodeType": "VariableDeclaration",
                  "scope": 971,
                  "src": "327:12:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 965,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "327:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "268:72:6"
            },
            "payable": true,
            "returnParameters": {
              "id": 970,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 969,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 971,
                  "src": "365:7:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 968,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "365:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "364:9:6"
            },
            "scope": 1018,
            "src": "249:125:6",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 993,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convertForPrioritized2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 989,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 974,
                  "name": "_path",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "420:19:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_memory_ptr",
                    "typeString": "contract IERC20Token[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 972,
                      "name": "IERC20Token",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 1098,
                      "src": "420:11:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$1098",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "id": 973,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "420:13:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_storage_ptr",
                      "typeString": "contract IERC20Token[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 976,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "449:15:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 975,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "449:7:6",
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
                  "id": 978,
                  "name": "_minReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "474:18:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 977,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "474:7:6",
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
                  "id": 980,
                  "name": "_for",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "502:12:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 979,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "502:7:6",
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
                  "id": 982,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "524:14:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 981,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "524:7:6",
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
                  "id": 984,
                  "name": "_v",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "548:8:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 983,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:5:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 986,
                  "name": "_r",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "566:10:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 985,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "566:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 988,
                  "name": "_s",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "586:10:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 987,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "586:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "410:187:6"
            },
            "payable": true,
            "returnParameters": {
              "id": 992,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 991,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "630:7:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 990,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "630:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "629:9:6"
            },
            "scope": 1018,
            "src": "379:260:6",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1017,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convertForPrioritized",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1013,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 996,
                  "name": "_path",
                  "nodeType": "VariableDeclaration",
                  "scope": 1017,
                  "src": "727:19:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_memory_ptr",
                    "typeString": "contract IERC20Token[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 994,
                      "name": "IERC20Token",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 1098,
                      "src": "727:11:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$1098",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "id": 995,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "727:13:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_storage_ptr",
                      "typeString": "contract IERC20Token[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 998,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1017,
                  "src": "756:15:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 997,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "756:7:6",
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
                  "id": 1000,
                  "name": "_minReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 1017,
                  "src": "781:18:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 999,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "781:7:6",
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
                  "id": 1002,
                  "name": "_for",
                  "nodeType": "VariableDeclaration",
                  "scope": 1017,
                  "src": "809:12:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1001,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "809:7:6",
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
                  "id": 1004,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 1017,
                  "src": "831:14:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1003,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "831:7:6",
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
                  "id": 1006,
                  "name": "_nonce",
                  "nodeType": "VariableDeclaration",
                  "scope": 1017,
                  "src": "855:14:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1005,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "855:7:6",
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
                  "id": 1008,
                  "name": "_v",
                  "nodeType": "VariableDeclaration",
                  "scope": 1017,
                  "src": "879:8:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 1007,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "879:5:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1010,
                  "name": "_r",
                  "nodeType": "VariableDeclaration",
                  "scope": 1017,
                  "src": "897:10:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1009,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "897:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1012,
                  "name": "_s",
                  "nodeType": "VariableDeclaration",
                  "scope": 1017,
                  "src": "917:10:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1011,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "917:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "717:211:6"
            },
            "payable": true,
            "returnParameters": {
              "id": 1016,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1015,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1017,
                  "src": "961:7:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1014,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "961:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "960:9:6"
            },
            "scope": 1018,
            "src": "687:283:6",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1019,
        "src": "106:866:6"
      }
    ],
    "src": "0:973:6"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/IBancorNetwork.sol",
    "exportedSymbols": {
      "IBancorNetwork": [
        1018
      ]
    },
    "id": 1019,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 944,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:6"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "./token/interfaces/IERC20Token.sol",
        "id": 945,
        "nodeType": "ImportDirective",
        "scope": 1019,
        "sourceUnit": 1099,
        "src": "25:44:6",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 1018,
        "linearizedBaseContracts": [
          1018
        ],
        "name": "IBancorNetwork",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 957,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convert",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 953,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 948,
                  "name": "_path",
                  "nodeType": "VariableDeclaration",
                  "scope": 957,
                  "src": "153:19:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_memory_ptr",
                    "typeString": "contract IERC20Token[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 946,
                      "name": "IERC20Token",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 1098,
                      "src": "153:11:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$1098",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "id": 947,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "153:13:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_storage_ptr",
                      "typeString": "contract IERC20Token[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 950,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 957,
                  "src": "174:15:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 949,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "174:7:6",
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
                  "id": 952,
                  "name": "_minReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 957,
                  "src": "191:18:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 951,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "191:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "152:58:6"
            },
            "payable": true,
            "returnParameters": {
              "id": 956,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 955,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 957,
                  "src": "235:7:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 954,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "235:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "234:9:6"
            },
            "scope": 1018,
            "src": "136:108:6",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 971,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convertFor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 967,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 960,
                  "name": "_path",
                  "nodeType": "VariableDeclaration",
                  "scope": 971,
                  "src": "269:19:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_memory_ptr",
                    "typeString": "contract IERC20Token[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 958,
                      "name": "IERC20Token",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 1098,
                      "src": "269:11:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$1098",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "id": 959,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "269:13:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_storage_ptr",
                      "typeString": "contract IERC20Token[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 962,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 971,
                  "src": "290:15:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 961,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "290:7:6",
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
                  "id": 964,
                  "name": "_minReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 971,
                  "src": "307:18:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 963,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "307:7:6",
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
                  "id": 966,
                  "name": "_for",
                  "nodeType": "VariableDeclaration",
                  "scope": 971,
                  "src": "327:12:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 965,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "327:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "268:72:6"
            },
            "payable": true,
            "returnParameters": {
              "id": 970,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 969,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 971,
                  "src": "365:7:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 968,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "365:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "364:9:6"
            },
            "scope": 1018,
            "src": "249:125:6",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 993,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convertForPrioritized2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 989,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 974,
                  "name": "_path",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "420:19:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_memory_ptr",
                    "typeString": "contract IERC20Token[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 972,
                      "name": "IERC20Token",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 1098,
                      "src": "420:11:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$1098",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "id": 973,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "420:13:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_storage_ptr",
                      "typeString": "contract IERC20Token[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 976,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "449:15:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 975,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "449:7:6",
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
                  "id": 978,
                  "name": "_minReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "474:18:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 977,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "474:7:6",
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
                  "id": 980,
                  "name": "_for",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "502:12:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 979,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "502:7:6",
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
                  "id": 982,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "524:14:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 981,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "524:7:6",
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
                  "id": 984,
                  "name": "_v",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "548:8:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 983,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:5:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 986,
                  "name": "_r",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "566:10:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 985,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "566:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 988,
                  "name": "_s",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "586:10:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 987,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "586:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "410:187:6"
            },
            "payable": true,
            "returnParameters": {
              "id": 992,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 991,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 993,
                  "src": "630:7:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 990,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "630:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "629:9:6"
            },
            "scope": 1018,
            "src": "379:260:6",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1017,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "convertForPrioritized",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1013,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 996,
                  "name": "_path",
                  "nodeType": "VariableDeclaration",
                  "scope": 1017,
                  "src": "727:19:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_memory_ptr",
                    "typeString": "contract IERC20Token[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 994,
                      "name": "IERC20Token",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 1098,
                      "src": "727:11:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20Token_$1098",
                        "typeString": "contract IERC20Token"
                      }
                    },
                    "id": 995,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "727:13:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_IERC20Token_$1098_$dyn_storage_ptr",
                      "typeString": "contract IERC20Token[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 998,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1017,
                  "src": "756:15:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 997,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "756:7:6",
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
                  "id": 1000,
                  "name": "_minReturn",
                  "nodeType": "VariableDeclaration",
                  "scope": 1017,
                  "src": "781:18:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 999,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "781:7:6",
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
                  "id": 1002,
                  "name": "_for",
                  "nodeType": "VariableDeclaration",
                  "scope": 1017,
                  "src": "809:12:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1001,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "809:7:6",
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
                  "id": 1004,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 1017,
                  "src": "831:14:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1003,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "831:7:6",
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
                  "id": 1006,
                  "name": "_nonce",
                  "nodeType": "VariableDeclaration",
                  "scope": 1017,
                  "src": "855:14:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1005,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "855:7:6",
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
                  "id": 1008,
                  "name": "_v",
                  "nodeType": "VariableDeclaration",
                  "scope": 1017,
                  "src": "879:8:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 1007,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "879:5:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1010,
                  "name": "_r",
                  "nodeType": "VariableDeclaration",
                  "scope": 1017,
                  "src": "897:10:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1009,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "897:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1012,
                  "name": "_s",
                  "nodeType": "VariableDeclaration",
                  "scope": 1017,
                  "src": "917:10:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1011,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "917:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "717:211:6"
            },
            "payable": true,
            "returnParameters": {
              "id": 1016,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1015,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1017,
                  "src": "961:7:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1014,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "961:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "960:9:6"
            },
            "scope": 1018,
            "src": "687:283:6",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1019,
        "src": "106:866:6"
      }
    ],
    "src": "0:973:6"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:15.945Z"
}