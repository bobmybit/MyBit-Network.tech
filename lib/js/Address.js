"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var Address = exports.Address = 
{
  "contractName": "Address",
  "abi": [],
  "bytecode": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820efc367f4cde7d964158890f93a608b2652b916bb94fde35c90c9b218c64bc5c50029",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820efc367f4cde7d964158890f93a608b2652b916bb94fde35c90c9b218c64bc5c50029",
  "sourceMap": "86:1004:21:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "86:1004:21:-;;;;;;;;",
  "source": "pragma solidity ^0.4.24;\n\n/**\n * Utility library of inline functions on addresses\n */\nlibrary Address {\n    /**\n     * Returns whether the target address is a contract\n     * @dev This function will return false if invoked during the constructor of a contract,\n     * as the code is not actually created until after the constructor finishes.\n     * @param account address of the account to check\n     * @return whether the target address is a contract\n     */\n    function isContract(address account) internal view returns (bool) {\n        uint256 size;\n        // XXX Currently there is no better way to check if there is a contract in an address\n        // than to check the size of the code at that address.\n        // See https://ethereum.stackexchange.com/a/14016/36603\n        // for more details about how this works.\n        // TODO Check this again before the Serenity release, because all addresses will be\n        // contracts then.\n        // solium-disable-next-line security/no-inline-assembly\n        assembly { size := extcodesize(account) }\n        return size > 0;\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/Address.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/Address.sol",
    "exportedSymbols": {
      "Address": [
        7369
      ]
    },
    "id": 7370,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7352,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:21"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "Utility library of inline functions on addresses",
        "fullyImplemented": true,
        "id": 7369,
        "linearizedBaseContracts": [
          7369
        ],
        "name": "Address",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 7367,
              "nodeType": "Block",
              "src": "530:558:21",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7360,
                      "name": "size",
                      "nodeType": "VariableDeclaration",
                      "scope": 7368,
                      "src": "540:12:21",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 7359,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "540:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7361,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "540:12:21"
                },
                {
                  "externalReferences": [
                    {
                      "size": {
                        "declaration": 7360,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1027:4:21",
                        "valueSize": 1
                      }
                    },
                    {
                      "account": {
                        "declaration": 7354,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1047:7:21",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 7362,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    size := extcodesize(account)\n}",
                  "src": "1016:56:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 7365,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 7363,
                      "name": "size",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7360,
                      "src": "1073:4:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 7364,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1080:1:21",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1073:8:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 7358,
                  "id": 7366,
                  "nodeType": "Return",
                  "src": "1066:15:21"
                }
              ]
            },
            "documentation": "Returns whether the target address is a contract\n@dev This function will return false if invoked during the constructor of a contract,\nas the code is not actually created until after the constructor finishes.\n@param account address of the account to check\n@return whether the target address is a contract",
            "id": 7368,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7355,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7354,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 7368,
                  "src": "484:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7353,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "484:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "483:17:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 7358,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7357,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7368,
                  "src": "524:4:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7356,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "524:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "523:6:21"
            },
            "scope": 7369,
            "src": "464:624:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 7370,
        "src": "86:1004:21"
      }
    ],
    "src": "0:1091:21"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/Address.sol",
    "exportedSymbols": {
      "Address": [
        7369
      ]
    },
    "id": 7370,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7352,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:21"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "Utility library of inline functions on addresses",
        "fullyImplemented": true,
        "id": 7369,
        "linearizedBaseContracts": [
          7369
        ],
        "name": "Address",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 7367,
              "nodeType": "Block",
              "src": "530:558:21",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7360,
                      "name": "size",
                      "nodeType": "VariableDeclaration",
                      "scope": 7368,
                      "src": "540:12:21",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 7359,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "540:7:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7361,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "540:12:21"
                },
                {
                  "externalReferences": [
                    {
                      "size": {
                        "declaration": 7360,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1027:4:21",
                        "valueSize": 1
                      }
                    },
                    {
                      "account": {
                        "declaration": 7354,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1047:7:21",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 7362,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    size := extcodesize(account)\n}",
                  "src": "1016:56:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 7365,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 7363,
                      "name": "size",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7360,
                      "src": "1073:4:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 7364,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1080:1:21",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1073:8:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 7358,
                  "id": 7366,
                  "nodeType": "Return",
                  "src": "1066:15:21"
                }
              ]
            },
            "documentation": "Returns whether the target address is a contract\n@dev This function will return false if invoked during the constructor of a contract,\nas the code is not actually created until after the constructor finishes.\n@param account address of the account to check\n@return whether the target address is a contract",
            "id": 7368,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7355,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7354,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 7368,
                  "src": "484:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7353,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "484:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "483:17:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 7358,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7357,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7368,
                  "src": "524:4:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7356,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "524:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "523:6:21"
            },
            "scope": 7369,
            "src": "464:624:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 7370,
        "src": "86:1004:21"
      }
    ],
    "src": "0:1091:21"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.572Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}