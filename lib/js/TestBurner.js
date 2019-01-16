"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var TestBurner = exports.TestBurner = 
{
  "contractName": "TestBurner",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "burner",
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
      "name": "database",
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
      "name": "amountBurnt",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_database",
          "type": "address"
        },
        {
          "name": "_burner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burnTokensManualFee",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "burnTokens",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getMethodID",
      "outputs": [
        {
          "name": "",
          "type": "bytes4"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060405160408061063383398101604052805160209091015160008054600160a060020a03928316600160a060020a031991821617909155600180549290931691161790556105cf806100646000396000f3006080604052600436106100775763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166308003f78811461007c57806327810b6e146100935780635935914b146100d157806366369c40146100e9578063713b563f146101305780639b51d0a914610145575b600080fd5b34801561008857600080fd5b5061009161016c565b005b34801561009f57600080fd5b506100a861040d565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100dd57600080fd5b50610091600435610429565b3480156100f557600080fd5b506100fe6104de565b604080517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff199092168252519081900360200190f35b34801561013c57600080fd5b506100a8610581565b34801561015157600080fd5b5061015a61059d565b60408051918252519081900360200190f35b60008060405160200180807f6275726e546f6b656e7328290000000000000000000000000000000000000000815250600c0190506040516020818303038152906040526040518082805190602001908083835b602083106101de5780518252601f1990920191602091820191016101bf565b51815160209384036101000a6000190180199092169116179052604080519290940182900382206001547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19821684840152306c0100000000000000000000000002602485015285518085036018018152603890940195869052835191995073ffffffffffffffffffffffffffffffffffffffff16965063a855d4ce9550919392508291908401908083835b602083106102a55780518252601f199092019160209182019101610286565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff88167c01000000000000000000000000000000000000000000000000000000000283526004830152925160248083019650939450929083900301905081600087803b15801561031f57600080fd5b505af1158015610333573d6000803e3d6000fd5b505050506040513d602081101561034957600080fd5b505160008054604080517f9dc29fac00000000000000000000000000000000000000000000000000000000815233600482015260248101859052905193945073ffffffffffffffffffffffffffffffffffffffff90911692639dc29fac92604480840193602093929083900390910190829087803b1580156103ca57600080fd5b505af11580156103de573d6000803e3d6000fd5b505050506040513d60208110156103f457600080fd5b5051151561040157600080fd5b60028054909101905550565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60008054604080517f9dc29fac00000000000000000000000000000000000000000000000000000000815233600482015260248101859052905173ffffffffffffffffffffffffffffffffffffffff90921692639dc29fac926044808401936020939083900390910190829087803b1580156104a457600080fd5b505af11580156104b8573d6000803e3d6000fd5b505050506040513d60208110156104ce57600080fd5b505115156104db57600080fd5b50565b600060405160200180807f6275726e546f6b656e7328290000000000000000000000000000000000000000815250600c0190506040516020818303038152906040526040518082805190602001908083835b6020831061054f5780518252601f199092019160209182019101610530565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020905090565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b600254815600a165627a7a723058206ce09a3dc728da85e63cbbc7bb5e5f434f0ae9252f2024e25585fb481e6e3b840029",
  "deployedBytecode": "0x6080604052600436106100775763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166308003f78811461007c57806327810b6e146100935780635935914b146100d157806366369c40146100e9578063713b563f146101305780639b51d0a914610145575b600080fd5b34801561008857600080fd5b5061009161016c565b005b34801561009f57600080fd5b506100a861040d565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100dd57600080fd5b50610091600435610429565b3480156100f557600080fd5b506100fe6104de565b604080517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff199092168252519081900360200190f35b34801561013c57600080fd5b506100a8610581565b34801561015157600080fd5b5061015a61059d565b60408051918252519081900360200190f35b60008060405160200180807f6275726e546f6b656e7328290000000000000000000000000000000000000000815250600c0190506040516020818303038152906040526040518082805190602001908083835b602083106101de5780518252601f1990920191602091820191016101bf565b51815160209384036101000a6000190180199092169116179052604080519290940182900382206001547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19821684840152306c0100000000000000000000000002602485015285518085036018018152603890940195869052835191995073ffffffffffffffffffffffffffffffffffffffff16965063a855d4ce9550919392508291908401908083835b602083106102a55780518252601f199092019160209182019101610286565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff88167c01000000000000000000000000000000000000000000000000000000000283526004830152925160248083019650939450929083900301905081600087803b15801561031f57600080fd5b505af1158015610333573d6000803e3d6000fd5b505050506040513d602081101561034957600080fd5b505160008054604080517f9dc29fac00000000000000000000000000000000000000000000000000000000815233600482015260248101859052905193945073ffffffffffffffffffffffffffffffffffffffff90911692639dc29fac92604480840193602093929083900390910190829087803b1580156103ca57600080fd5b505af11580156103de573d6000803e3d6000fd5b505050506040513d60208110156103f457600080fd5b5051151561040157600080fd5b60028054909101905550565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60008054604080517f9dc29fac00000000000000000000000000000000000000000000000000000000815233600482015260248101859052905173ffffffffffffffffffffffffffffffffffffffff90921692639dc29fac926044808401936020939083900390910190829087803b1580156104a457600080fd5b505af11580156104b8573d6000803e3d6000fd5b505050506040513d60208110156104ce57600080fd5b505115156104db57600080fd5b50565b600060405160200180807f6275726e546f6b656e7328290000000000000000000000000000000000000000815250600c0190506040516020818303038152906040526040518082805190602001908083835b6020831061054f5780518252601f199092019160209182019101610530565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020905090565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b600254815600a165627a7a723058206ce09a3dc728da85e63cbbc7bb5e5f434f0ae9252f2024e25585fb481e6e3b840029",
  "sourceMap": "98:831:60:-;;;209:133;8:9:-1;5:2;;;30:1;27;20:12;5:2;209:133:60;;;;;;;;;;;;;;;;;;;272:6;:29;;-1:-1:-1;;;;;272:29:60;;;-1:-1:-1;;;;;;272:29:60;;;;;;;;307:30;;;;;;;;;;;98:831;;;;;;",
  "deployedSourceMap": "98:831:60:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;495:298;;8:9:-1;5:2;;;30:1;27;20:12;5:2;495:298:60;;;;;;123:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;123:25:60;;;;;;;;;;;;;;;;;;;;;;;346:106;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;346:106:60;;;;;797:129;;8:9:-1;5:2;;;30:1;27;20:12;5:2;797:129:60;;;;;;;;-1:-1:-1;;797:129:60;;;;;;;;;;;;;;152:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;152:24:60;;;;181:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;181:23:60;;;;;;;;;;;;;;;;;;;;495:298;534:15;609:17;569:32;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;569:32:60;;;559:43;;;;;;;;;;;;;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;559:43:60;;;;;;;;;;;;274:1:-1;629:8:60;-1:-1:-1;;660:41:60;;;;;;695:4;660:41;;;;;;;;26:21:-1;;;22:32;;6:49;;660:41:60;;;;;;;;650:52;;559:43;;-1:-1:-1;629:8:60;;;-1:-1:-1;629:20:60;;-1:-1:-1;660:41:60;;;-1:-1:-1;660:41:60;;650:52;;;;;660:41;650:52;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;650:52:60;;;;;;;;;;;;629:74;;;;;;;;;;;;;;;;;;-1:-1:-1;263:2;;-1:-1;629:74:60;;;;;;;-1:-1:-1;629:74:60;-1:-1:-1;629:74:60;;;;5:2:-1;;;;30:1;27;20:12;5:2;629:74:60;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;629:74:60;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;629:74:60;717:6;;;:37;;;;;;729:10;717:37;;;;;;;;;;;;629:74;;-1:-1:-1;717:6:60;;;;;:11;;:37;;;;;629:74;;717:37;;;;;;;;;;;:6;:37;;;5:2:-1;;;;30:1;27;20:12;5:2;717:37:60;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;717:37:60;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;717:37:60;709:46;;;;;;;;761:11;:27;;;;;;;-1:-1:-1;495:298:60:o;123:25::-;;;;;;:::o;346:106::-;414:6;;;:32;;;;;;426:10;414:32;;;;;;;;;;;;:6;;;;;:11;;:32;;;;;;;;;;;;;;;;;:6;:32;;;5:2:-1;;;;30:1;27;20:12;5:2;414:32:60;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;414:32:60;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;414:32:60;406:41;;;;;;;;346:106;:::o;797:129::-;849:6;887:32;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;887:32:60;;;877:43;;;;;;;;;;;;;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;877:43:60;;;;;;;;;;;;;;;;863:58;;797:129;:::o;152:24::-;;;;;;:::o;181:23::-;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport '../access/ERC20Burner.sol';\nimport '../database/Database.sol';\n\ncontract TestBurner {\n\n  ERC20Burner public burner;\n  Database public database;\n\n  uint public amountBurnt;\n\n  constructor(address _database, address _burner)\n  public {\n    burner = ERC20Burner(_burner);\n    database = Database(_database);\n  }\n\n  function burnTokensManualFee(uint _amount)\n  external {\n    require(burner.burn(msg.sender, _amount));\n  }\n\n  // Must set fee in ERC20Burner first\n  function burnTokens()\n  external {\n    bytes4 methodID = bytes4(keccak256(abi.encodePacked(\"burnTokens()\")));\n    uint amountToBurn = database.uintStorage(keccak256(abi.encodePacked(methodID, address(this))));\n    require(burner.burn(msg.sender, amountToBurn));\n    amountBurnt += amountToBurn;\n  }\n\n  function getMethodID()\n  external\n  pure\n  returns (bytes4) {\n    return bytes4(keccak256(abi.encodePacked(\"burnTokens()\")));\n  }\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/TestBurner.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/TestBurner.sol",
    "exportedSymbols": {
      "TestBurner": [
        17001
      ]
    },
    "id": 17002,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16899,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:60"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/access/ERC20Burner.sol",
        "file": "../access/ERC20Burner.sol",
        "id": 16900,
        "nodeType": "ImportDirective",
        "scope": 17002,
        "sourceUnit": 739,
        "src": "26:35:60",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "../database/Database.sol",
        "id": 16901,
        "nodeType": "ImportDirective",
        "scope": 17002,
        "sourceUnit": 5848,
        "src": "62:34:60",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 17001,
        "linearizedBaseContracts": [
          17001
        ],
        "name": "TestBurner",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 16903,
            "name": "burner",
            "nodeType": "VariableDeclaration",
            "scope": 17001,
            "src": "123:25:60",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ERC20Burner_$738",
              "typeString": "contract ERC20Burner"
            },
            "typeName": {
              "contractScope": null,
              "id": 16902,
              "name": "ERC20Burner",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 738,
              "src": "123:11:60",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Burner_$738",
                "typeString": "contract ERC20Burner"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 16905,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 17001,
            "src": "152:24:60",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$5847",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 16904,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5847,
              "src": "152:8:60",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$5847",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 16907,
            "name": "amountBurnt",
            "nodeType": "VariableDeclaration",
            "scope": 17001,
            "src": "181:23:60",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 16906,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "181:4:60",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16926,
              "nodeType": "Block",
              "src": "266:76:60",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16918,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16914,
                      "name": "burner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16903,
                      "src": "272:6:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20Burner_$738",
                        "typeString": "contract ERC20Burner"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 16916,
                          "name": "_burner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16911,
                          "src": "293:7:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 16915,
                        "name": "ERC20Burner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 738,
                        "src": "281:11:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20Burner_$738_$",
                          "typeString": "type(contract ERC20Burner)"
                        }
                      },
                      "id": 16917,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "281:20:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20Burner_$738",
                        "typeString": "contract ERC20Burner"
                      }
                    },
                    "src": "272:29:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20Burner_$738",
                      "typeString": "contract ERC20Burner"
                    }
                  },
                  "id": 16919,
                  "nodeType": "ExpressionStatement",
                  "src": "272:29:60"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16924,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16920,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16905,
                      "src": "307:8:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$5847",
                        "typeString": "contract Database"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 16922,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16909,
                          "src": "327:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 16921,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5847,
                        "src": "318:8:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$5847_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 16923,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "318:19:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$5847",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "307:30:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$5847",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 16925,
                  "nodeType": "ExpressionStatement",
                  "src": "307:30:60"
                }
              ]
            },
            "documentation": null,
            "id": 16927,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16912,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16909,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 16927,
                  "src": "221:17:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16908,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "221:7:60",
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
                  "id": 16911,
                  "name": "_burner",
                  "nodeType": "VariableDeclaration",
                  "scope": 16927,
                  "src": "240:15:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16910,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "240:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "220:36:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16913,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "266:0:60"
            },
            "scope": 17001,
            "src": "209:133:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16941,
              "nodeType": "Block",
              "src": "400:52:60",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 16935,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20967,
                              "src": "426:3:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 16936,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "426:10:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 16937,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16929,
                            "src": "438:7:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 16933,
                            "name": "burner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16903,
                            "src": "414:6:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20Burner_$738",
                              "typeString": "contract ERC20Burner"
                            }
                          },
                          "id": 16934,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "burn",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 569,
                          "src": "414:11:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 16938,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "414:32:60",
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
                      "id": 16932,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "406:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 16939,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "406:41:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16940,
                  "nodeType": "ExpressionStatement",
                  "src": "406:41:60"
                }
              ]
            },
            "documentation": null,
            "id": 16942,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnTokensManualFee",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16930,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16929,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16942,
                  "src": "375:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16928,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "375:4:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "374:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16931,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "400:0:60"
            },
            "scope": 17001,
            "src": "346:106:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 16984,
              "nodeType": "Block",
              "src": "528:265:60",
              "statements": [
                {
                  "assignments": [
                    16946
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16946,
                      "name": "methodID",
                      "nodeType": "VariableDeclaration",
                      "scope": 16985,
                      "src": "534:15:60",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 16945,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "534:6:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 16955,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "6275726e546f6b656e732829",
                                "id": 16951,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "586:14:60",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                },
                                "value": "burnTokens()"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 16949,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "569:3:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 16950,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "569:16:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 16952,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "569:32:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 16948,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "559:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 16953,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "559:43:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 16947,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "552:6:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes4_$",
                        "typeString": "type(bytes4)"
                      },
                      "typeName": "bytes4"
                    },
                    "id": 16954,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "552:51:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "534:69:60"
                },
                {
                  "assignments": [
                    16957
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16957,
                      "name": "amountToBurn",
                      "nodeType": "VariableDeclaration",
                      "scope": 16985,
                      "src": "609:17:60",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16956,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "609:4:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 16970,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 16963,
                                "name": "methodID",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 16946,
                                "src": "677:8:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 16965,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 21172,
                                    "src": "695:4:60",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_TestBurner_$17001",
                                      "typeString": "contract TestBurner"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_TestBurner_$17001",
                                      "typeString": "contract TestBurner"
                                    }
                                  ],
                                  "id": 16964,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "687:7:60",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": "address"
                                },
                                "id": 16966,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "687:13:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 16961,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "660:3:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 16962,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "660:16:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 16967,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "660:41:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 16960,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "650:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 16968,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "650:52:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 16958,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16905,
                        "src": "629:8:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$5847",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 16959,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "uintStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5457,
                      "src": "629:20:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
                      }
                    },
                    "id": 16969,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "629:74:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "609:94:60"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 16974,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20967,
                              "src": "729:3:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 16975,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "729:10:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 16976,
                            "name": "amountToBurn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16957,
                            "src": "741:12:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 16972,
                            "name": "burner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16903,
                            "src": "717:6:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20Burner_$738",
                              "typeString": "contract ERC20Burner"
                            }
                          },
                          "id": 16973,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "burn",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 569,
                          "src": "717:11:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 16977,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "717:37:60",
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
                      "id": 16971,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "709:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 16978,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "709:46:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16979,
                  "nodeType": "ExpressionStatement",
                  "src": "709:46:60"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16982,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16980,
                      "name": "amountBurnt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16907,
                      "src": "761:11:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16981,
                      "name": "amountToBurn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16957,
                      "src": "776:12:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "761:27:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 16983,
                  "nodeType": "ExpressionStatement",
                  "src": "761:27:60"
                }
              ]
            },
            "documentation": null,
            "id": 16985,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16943,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "514:2:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16944,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "528:0:60"
            },
            "scope": 17001,
            "src": "495:298:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 16999,
              "nodeType": "Block",
              "src": "857:69:60",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "6275726e546f6b656e732829",
                                "id": 16994,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "904:14:60",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                },
                                "value": "burnTokens()"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 16992,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "887:3:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 16993,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "887:16:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 16995,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "887:32:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 16991,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "877:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 16996,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "877:43:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 16990,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "870:6:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes4_$",
                        "typeString": "type(bytes4)"
                      },
                      "typeName": "bytes4"
                    },
                    "id": 16997,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "870:51:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 16989,
                  "id": 16998,
                  "nodeType": "Return",
                  "src": "863:58:60"
                }
              ]
            },
            "documentation": null,
            "id": 17000,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMethodID",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16986,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "817:2:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16989,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16988,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17000,
                  "src": "849:6:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 16987,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "849:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "848:8:60"
            },
            "scope": 17001,
            "src": "797:129:60",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 17002,
        "src": "98:831:60"
      }
    ],
    "src": "0:930:60"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/test/TestBurner.sol",
    "exportedSymbols": {
      "TestBurner": [
        17001
      ]
    },
    "id": 17002,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16899,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:60"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/access/ERC20Burner.sol",
        "file": "../access/ERC20Burner.sol",
        "id": 16900,
        "nodeType": "ImportDirective",
        "scope": 17002,
        "sourceUnit": 739,
        "src": "26:35:60",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "../database/Database.sol",
        "id": 16901,
        "nodeType": "ImportDirective",
        "scope": 17002,
        "sourceUnit": 5848,
        "src": "62:34:60",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 17001,
        "linearizedBaseContracts": [
          17001
        ],
        "name": "TestBurner",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 16903,
            "name": "burner",
            "nodeType": "VariableDeclaration",
            "scope": 17001,
            "src": "123:25:60",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ERC20Burner_$738",
              "typeString": "contract ERC20Burner"
            },
            "typeName": {
              "contractScope": null,
              "id": 16902,
              "name": "ERC20Burner",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 738,
              "src": "123:11:60",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Burner_$738",
                "typeString": "contract ERC20Burner"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 16905,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 17001,
            "src": "152:24:60",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$5847",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 16904,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5847,
              "src": "152:8:60",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$5847",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 16907,
            "name": "amountBurnt",
            "nodeType": "VariableDeclaration",
            "scope": 17001,
            "src": "181:23:60",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 16906,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "181:4:60",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16926,
              "nodeType": "Block",
              "src": "266:76:60",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16918,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16914,
                      "name": "burner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16903,
                      "src": "272:6:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20Burner_$738",
                        "typeString": "contract ERC20Burner"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 16916,
                          "name": "_burner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16911,
                          "src": "293:7:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 16915,
                        "name": "ERC20Burner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 738,
                        "src": "281:11:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20Burner_$738_$",
                          "typeString": "type(contract ERC20Burner)"
                        }
                      },
                      "id": 16917,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "281:20:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20Burner_$738",
                        "typeString": "contract ERC20Burner"
                      }
                    },
                    "src": "272:29:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20Burner_$738",
                      "typeString": "contract ERC20Burner"
                    }
                  },
                  "id": 16919,
                  "nodeType": "ExpressionStatement",
                  "src": "272:29:60"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16924,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16920,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16905,
                      "src": "307:8:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$5847",
                        "typeString": "contract Database"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 16922,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 16909,
                          "src": "327:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 16921,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5847,
                        "src": "318:8:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$5847_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 16923,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "318:19:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$5847",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "307:30:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$5847",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 16925,
                  "nodeType": "ExpressionStatement",
                  "src": "307:30:60"
                }
              ]
            },
            "documentation": null,
            "id": 16927,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16912,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16909,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 16927,
                  "src": "221:17:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16908,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "221:7:60",
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
                  "id": 16911,
                  "name": "_burner",
                  "nodeType": "VariableDeclaration",
                  "scope": 16927,
                  "src": "240:15:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16910,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "240:7:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "220:36:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16913,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "266:0:60"
            },
            "scope": 17001,
            "src": "209:133:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 16941,
              "nodeType": "Block",
              "src": "400:52:60",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 16935,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20967,
                              "src": "426:3:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 16936,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "426:10:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 16937,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16929,
                            "src": "438:7:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 16933,
                            "name": "burner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16903,
                            "src": "414:6:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20Burner_$738",
                              "typeString": "contract ERC20Burner"
                            }
                          },
                          "id": 16934,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "burn",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 569,
                          "src": "414:11:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 16938,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "414:32:60",
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
                      "id": 16932,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "406:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 16939,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "406:41:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16940,
                  "nodeType": "ExpressionStatement",
                  "src": "406:41:60"
                }
              ]
            },
            "documentation": null,
            "id": 16942,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnTokensManualFee",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16930,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16929,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 16942,
                  "src": "375:12:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 16928,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "375:4:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "374:14:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16931,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "400:0:60"
            },
            "scope": 17001,
            "src": "346:106:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 16984,
              "nodeType": "Block",
              "src": "528:265:60",
              "statements": [
                {
                  "assignments": [
                    16946
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16946,
                      "name": "methodID",
                      "nodeType": "VariableDeclaration",
                      "scope": 16985,
                      "src": "534:15:60",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      },
                      "typeName": {
                        "id": 16945,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "534:6:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 16955,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "6275726e546f6b656e732829",
                                "id": 16951,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "586:14:60",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                },
                                "value": "burnTokens()"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 16949,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "569:3:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 16950,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "569:16:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 16952,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "569:32:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 16948,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "559:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 16953,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "559:43:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 16947,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "552:6:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes4_$",
                        "typeString": "type(bytes4)"
                      },
                      "typeName": "bytes4"
                    },
                    "id": 16954,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "552:51:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "534:69:60"
                },
                {
                  "assignments": [
                    16957
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 16957,
                      "name": "amountToBurn",
                      "nodeType": "VariableDeclaration",
                      "scope": 16985,
                      "src": "609:17:60",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 16956,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "609:4:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 16970,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 16963,
                                "name": "methodID",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 16946,
                                "src": "677:8:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 16965,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 21172,
                                    "src": "695:4:60",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_TestBurner_$17001",
                                      "typeString": "contract TestBurner"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_TestBurner_$17001",
                                      "typeString": "contract TestBurner"
                                    }
                                  ],
                                  "id": 16964,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "687:7:60",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": "address"
                                },
                                "id": 16966,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "687:13:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 16961,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "660:3:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 16962,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "660:16:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 16967,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "660:41:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 16960,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "650:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 16968,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "650:52:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 16958,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16905,
                        "src": "629:8:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$5847",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 16959,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "uintStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5457,
                      "src": "629:20:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
                      }
                    },
                    "id": 16969,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "629:74:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "609:94:60"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 16974,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20967,
                              "src": "729:3:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 16975,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "729:10:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 16976,
                            "name": "amountToBurn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16957,
                            "src": "741:12:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 16972,
                            "name": "burner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 16903,
                            "src": "717:6:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20Burner_$738",
                              "typeString": "contract ERC20Burner"
                            }
                          },
                          "id": 16973,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "burn",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 569,
                          "src": "717:11:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 16977,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "717:37:60",
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
                      "id": 16971,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "709:7:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 16978,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "709:46:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 16979,
                  "nodeType": "ExpressionStatement",
                  "src": "709:46:60"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 16982,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 16980,
                      "name": "amountBurnt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16907,
                      "src": "761:11:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 16981,
                      "name": "amountToBurn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16957,
                      "src": "776:12:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "761:27:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 16983,
                  "nodeType": "ExpressionStatement",
                  "src": "761:27:60"
                }
              ]
            },
            "documentation": null,
            "id": 16985,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16943,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "514:2:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16944,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "528:0:60"
            },
            "scope": 17001,
            "src": "495:298:60",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 16999,
              "nodeType": "Block",
              "src": "857:69:60",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "6275726e546f6b656e732829",
                                "id": 16994,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "904:14:60",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                },
                                "value": "burnTokens()"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_08003f7861c5d20078fcb3ff1f93e6a12e488ade80ad671025265fc141ca4542",
                                  "typeString": "literal_string \"burnTokens()\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 16992,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "887:3:60",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 16993,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "887:16:60",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 16995,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "887:32:60",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 16991,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "877:9:60",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 16996,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "877:43:60",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 16990,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "870:6:60",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes4_$",
                        "typeString": "type(bytes4)"
                      },
                      "typeName": "bytes4"
                    },
                    "id": 16997,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "870:51:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 16989,
                  "id": 16998,
                  "nodeType": "Return",
                  "src": "863:58:60"
                }
              ]
            },
            "documentation": null,
            "id": 17000,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMethodID",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16986,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "817:2:60"
            },
            "payable": false,
            "returnParameters": {
              "id": 16989,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16988,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17000,
                  "src": "849:6:60",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 16987,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "849:6:60",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "848:8:60"
            },
            "scope": 17001,
            "src": "797:129:60",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 17002,
        "src": "98:831:60"
      }
    ],
    "src": "0:930:60"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:16.793Z"
}