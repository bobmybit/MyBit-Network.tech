"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var MockDepositAddress = exports.MockDepositAddress = 
{
  "contractName": "MockDepositAddress",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "bank",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
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
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_bank",
          "type": "address"
        },
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "destianation",
          "type": "address"
        }
      ],
      "name": "Withdraw",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "tokenAmount",
          "type": "uint256"
        },
        {
          "name": "destination",
          "type": "address"
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "clearBalance",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getBalance",
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
  "source": "pragma solidity ^0.4.24;\n\nimport \"../interfaces/ERC20.sol\";\nimport \"./MockCentralBank.sol\";\n\n/// @title Mock Deposit Address\n/// @author Ilan Doron\n/// @dev a dummy contract that simulates a deposit address of a token on a specific exchange. allows reserve manager to deposit and withdraw\n\n\ncontract MockDepositAddress {\n\n    MockCentralBank public bank;\n    address public owner;\n\n    /// @dev Ctor of this\n    /// @param _bank bank address to work with for deposit and withdraw\n    /// @param _owner owner address for this contract.\n    constructor( MockCentralBank _bank, address _owner ) public {\n        owner = _owner;\n        bank = _bank;\n    }\n\n    modifier onlyOwner( )\n    {\n        require(msg.sender == owner);\n        _;\n    }\n\n    event Withdraw(uint amount , address destianation);\n\n    function withdraw(uint tokenAmount, address destination) public;\n\n    function clearBalance(uint amount) public;\n\n    function getBalance() public view returns (uint);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockDepositAddress.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockDepositAddress.sol",
    "exportedSymbols": {
      "MockDepositAddress": [
        15829
      ]
    },
    "id": 15830,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 15772,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:53"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 15773,
        "nodeType": "ImportDirective",
        "scope": 15830,
        "sourceUnit": 9534,
        "src": "26:33:53",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockCentralBank.sol",
        "file": "./MockCentralBank.sol",
        "id": 15774,
        "nodeType": "ImportDirective",
        "scope": 15830,
        "sourceUnit": 15771,
        "src": "60:31:53",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title Mock Deposit Address\n @author Ilan Doron\n @dev a dummy contract that simulates a deposit address of a token on a specific exchange. allows reserve manager to deposit and withdraw",
        "fullyImplemented": false,
        "id": 15829,
        "linearizedBaseContracts": [
          15829
        ],
        "name": "MockDepositAddress",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 15776,
            "name": "bank",
            "nodeType": "VariableDeclaration",
            "scope": 15829,
            "src": "326:27:53",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_MockCentralBank_$15770",
              "typeString": "contract MockCentralBank"
            },
            "typeName": {
              "contractScope": null,
              "id": 15775,
              "name": "MockCentralBank",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 15770,
              "src": "326:15:53",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                "typeString": "contract MockCentralBank"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 15778,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 15829,
            "src": "359:20:53",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 15777,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "359:7:53",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15793,
              "nodeType": "Block",
              "src": "599:53:53",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 15787,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 15785,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15778,
                      "src": "609:5:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 15786,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15782,
                      "src": "617:6:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "609:14:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 15788,
                  "nodeType": "ExpressionStatement",
                  "src": "609:14:53"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 15791,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 15789,
                      "name": "bank",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15776,
                      "src": "633:4:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                        "typeString": "contract MockCentralBank"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 15790,
                      "name": "_bank",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15780,
                      "src": "640:5:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                        "typeString": "contract MockCentralBank"
                      }
                    },
                    "src": "633:12:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                      "typeString": "contract MockCentralBank"
                    }
                  },
                  "id": 15792,
                  "nodeType": "ExpressionStatement",
                  "src": "633:12:53"
                }
              ]
            },
            "documentation": "@dev Ctor of this\n @param _bank bank address to work with for deposit and withdraw\n @param _owner owner address for this contract.",
            "id": 15794,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15783,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15780,
                  "name": "_bank",
                  "nodeType": "VariableDeclaration",
                  "scope": 15794,
                  "src": "552:21:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                    "typeString": "contract MockCentralBank"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 15779,
                    "name": "MockCentralBank",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 15770,
                    "src": "552:15:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                      "typeString": "contract MockCentralBank"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15782,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 15794,
                  "src": "575:14:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15781,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "575:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "550:41:53"
            },
            "payable": false,
            "returnParameters": {
              "id": 15784,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "599:0:53"
            },
            "scope": 15829,
            "src": "539:113:53",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15804,
              "nodeType": "Block",
              "src": "684:56:53",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 15800,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 15797,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34923,
                            "src": "702:3:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 15798,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "702:10:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 15799,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 15778,
                          "src": "716:5:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "702:19:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 15796,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "694:7:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 15801,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "694:28:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 15802,
                  "nodeType": "ExpressionStatement",
                  "src": "694:28:53"
                },
                {
                  "id": 15803,
                  "nodeType": "PlaceholderStatement",
                  "src": "732:1:53"
                }
              ]
            },
            "documentation": null,
            "id": 15805,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 15795,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "676:3:53"
            },
            "src": "658:82:53",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 15811,
            "name": "Withdraw",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 15810,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15807,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 15811,
                  "src": "761:11:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15806,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "761:4:53",
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
                  "id": 15809,
                  "indexed": false,
                  "name": "destianation",
                  "nodeType": "VariableDeclaration",
                  "scope": 15811,
                  "src": "775:20:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15808,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "775:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "760:36:53"
            },
            "src": "746:51:53"
          },
          {
            "body": null,
            "documentation": null,
            "id": 15818,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15816,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15813,
                  "name": "tokenAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 15818,
                  "src": "821:16:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15812,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "821:4:53",
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
                  "id": 15815,
                  "name": "destination",
                  "nodeType": "VariableDeclaration",
                  "scope": 15818,
                  "src": "839:19:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15814,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "839:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "820:39:53"
            },
            "payable": false,
            "returnParameters": {
              "id": 15817,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "866:0:53"
            },
            "scope": 15829,
            "src": "803:64:53",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 15823,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "clearBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15821,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15820,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 15823,
                  "src": "895:11:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15819,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "895:4:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "894:13:53"
            },
            "payable": false,
            "returnParameters": {
              "id": 15822,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "914:0:53"
            },
            "scope": 15829,
            "src": "873:42:53",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 15828,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15824,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "940:2:53"
            },
            "payable": false,
            "returnParameters": {
              "id": 15827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15826,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 15828,
                  "src": "964:4:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15825,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "964:4:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "963:6:53"
            },
            "scope": 15829,
            "src": "921:49:53",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 15830,
        "src": "291:681:53"
      }
    ],
    "src": "0:973:53"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockDepositAddress.sol",
    "exportedSymbols": {
      "MockDepositAddress": [
        15829
      ]
    },
    "id": 15830,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 15772,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:53"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 15773,
        "nodeType": "ImportDirective",
        "scope": 15830,
        "sourceUnit": 9534,
        "src": "26:33:53",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockCentralBank.sol",
        "file": "./MockCentralBank.sol",
        "id": 15774,
        "nodeType": "ImportDirective",
        "scope": 15830,
        "sourceUnit": 15771,
        "src": "60:31:53",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title Mock Deposit Address\n @author Ilan Doron\n @dev a dummy contract that simulates a deposit address of a token on a specific exchange. allows reserve manager to deposit and withdraw",
        "fullyImplemented": false,
        "id": 15829,
        "linearizedBaseContracts": [
          15829
        ],
        "name": "MockDepositAddress",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 15776,
            "name": "bank",
            "nodeType": "VariableDeclaration",
            "scope": 15829,
            "src": "326:27:53",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_MockCentralBank_$15770",
              "typeString": "contract MockCentralBank"
            },
            "typeName": {
              "contractScope": null,
              "id": 15775,
              "name": "MockCentralBank",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 15770,
              "src": "326:15:53",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                "typeString": "contract MockCentralBank"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 15778,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 15829,
            "src": "359:20:53",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 15777,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "359:7:53",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15793,
              "nodeType": "Block",
              "src": "599:53:53",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 15787,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 15785,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15778,
                      "src": "609:5:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 15786,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15782,
                      "src": "617:6:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "609:14:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 15788,
                  "nodeType": "ExpressionStatement",
                  "src": "609:14:53"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 15791,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 15789,
                      "name": "bank",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15776,
                      "src": "633:4:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                        "typeString": "contract MockCentralBank"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 15790,
                      "name": "_bank",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15780,
                      "src": "640:5:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                        "typeString": "contract MockCentralBank"
                      }
                    },
                    "src": "633:12:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                      "typeString": "contract MockCentralBank"
                    }
                  },
                  "id": 15792,
                  "nodeType": "ExpressionStatement",
                  "src": "633:12:53"
                }
              ]
            },
            "documentation": "@dev Ctor of this\n @param _bank bank address to work with for deposit and withdraw\n @param _owner owner address for this contract.",
            "id": 15794,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15783,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15780,
                  "name": "_bank",
                  "nodeType": "VariableDeclaration",
                  "scope": 15794,
                  "src": "552:21:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                    "typeString": "contract MockCentralBank"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 15779,
                    "name": "MockCentralBank",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 15770,
                    "src": "552:15:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                      "typeString": "contract MockCentralBank"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15782,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 15794,
                  "src": "575:14:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15781,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "575:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "550:41:53"
            },
            "payable": false,
            "returnParameters": {
              "id": 15784,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "599:0:53"
            },
            "scope": 15829,
            "src": "539:113:53",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15804,
              "nodeType": "Block",
              "src": "684:56:53",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 15800,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 15797,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34923,
                            "src": "702:3:53",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 15798,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "702:10:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 15799,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 15778,
                          "src": "716:5:53",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "702:19:53",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 15796,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "694:7:53",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 15801,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "694:28:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 15802,
                  "nodeType": "ExpressionStatement",
                  "src": "694:28:53"
                },
                {
                  "id": 15803,
                  "nodeType": "PlaceholderStatement",
                  "src": "732:1:53"
                }
              ]
            },
            "documentation": null,
            "id": 15805,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 15795,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "676:3:53"
            },
            "src": "658:82:53",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 15811,
            "name": "Withdraw",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 15810,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15807,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 15811,
                  "src": "761:11:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15806,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "761:4:53",
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
                  "id": 15809,
                  "indexed": false,
                  "name": "destianation",
                  "nodeType": "VariableDeclaration",
                  "scope": 15811,
                  "src": "775:20:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15808,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "775:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "760:36:53"
            },
            "src": "746:51:53"
          },
          {
            "body": null,
            "documentation": null,
            "id": 15818,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15816,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15813,
                  "name": "tokenAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 15818,
                  "src": "821:16:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15812,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "821:4:53",
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
                  "id": 15815,
                  "name": "destination",
                  "nodeType": "VariableDeclaration",
                  "scope": 15818,
                  "src": "839:19:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15814,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "839:7:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "820:39:53"
            },
            "payable": false,
            "returnParameters": {
              "id": 15817,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "866:0:53"
            },
            "scope": 15829,
            "src": "803:64:53",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 15823,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "clearBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15821,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15820,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 15823,
                  "src": "895:11:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15819,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "895:4:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "894:13:53"
            },
            "payable": false,
            "returnParameters": {
              "id": 15822,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "914:0:53"
            },
            "scope": 15829,
            "src": "873:42:53",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 15828,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15824,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "940:2:53"
            },
            "payable": false,
            "returnParameters": {
              "id": 15827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15826,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 15828,
                  "src": "964:4:53",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15825,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "964:4:53",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "963:6:53"
            },
            "scope": 15829,
            "src": "921:49:53",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 15830,
        "src": "291:681:53"
      }
    ],
    "src": "0:973:53"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.645Z",
  "devdoc": {
    "author": "Ilan Doron",
    "methods": {},
    "title": "Mock Deposit Address"
  },
  "userdoc": {
    "methods": {}
  }
}