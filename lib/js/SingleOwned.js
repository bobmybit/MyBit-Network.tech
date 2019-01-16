"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var SingleOwned = exports.SingleOwned = 
{
  "contractName": "SingleOwned",
  "abi": [
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
      "name": "events",
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
          "name": "_database",
          "type": "address"
        },
        {
          "name": "_events",
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
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "changeOwner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "destroy",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060405160408061077283398101604052805160209091015160008054600160a060020a03938416600160a060020a0319918216179091556001805493909216921691909117905561070b806100676000396000f3006080604052600436106100485763ffffffff60e060020a600035041663713b563f811461004d57806383197ef01461007e578063a6f9dae114610095578063b5f8558c146100b6575b600080fd5b34801561005957600080fd5b506100626100cb565b60408051600160a060020a039092168252519081900360200190f35b34801561008a57600080fd5b506100936100da565b005b3480156100a157600080fd5b50610093600160a060020a03600435166102bd565b3480156100c257600080fd5b506100626106b0565b600054600160a060020a031681565b600054604080516000805160206106c08339815191526020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b6020831061015f5780518252601f199092019160209182019101610140565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156101c057600080fd5b505af11580156101d4573d6000803e3d6000fd5b505050506040513d60208110156101ea57600080fd5b505115156001146101fa57600080fd5b600154604080517f68b96270000000000000000000000000000000000000000000000000000000008152306024820181905233604483015231606482015260a06004820152601560a48201527f53696e676c654f776e65642064657374726f796564000000000000000000000060c48201529051600160a060020a03909216916368b962709160e48082019260009290919082900301818387803b1580156102a157600080fd5b505af11580156102b5573d6000803e3d6000fd5b503392505050ff5b600054604080516000805160206106c08339815191526020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b602083106103425780518252601f199092019160209182019101610323565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156103a357600080fd5b505af11580156103b7573d6000803e3d6000fd5b505050506040513d60208110156103cd57600080fd5b505115156001146103dd57600080fd5b600054604080516000805160206106c0833981519152602080830191909152600160a060020a038581166c0100000000000000000000000002602584015283518084036019018152603990930193849052825194169363abfdcced93918291908401908083835b602083106104635780518252601f199092019160209182019101610444565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a028252600482015260016024820152915160448084019550600094509092839003019050818387803b1580156104cf57600080fd5b505af11580156104e3573d6000803e3d6000fd5b5050600054604080516000805160206106c08339815191526020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a03909416955063abfdcced9450909282918401908083835b6020831061056c5780518252601f19909201916020918201910161054d565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a02825260048201526000602482018190529251604480830196509394509290839003019050818387803b1580156105d957600080fd5b505af11580156105ed573d6000803e3d6000fd5b5050600154604080517f68b96270000000000000000000000000000000000000000000000000000000008152336024820152600160a060020a03868116604483015260006064830181905260a06004840152601560a48401527f4f776e657273686970207472616e73666572726564000000000000000000000060c48401529251931694506368b96270935060e4808201939182900301818387803b15801561069557600080fd5b505af11580156106a9573d6000803e3d6000fd5b5050505050565b600154600160a060020a03168156006f776e6572000000000000000000000000000000000000000000000000000000a165627a7a72305820490a4cfab9baccb9c12e2c8ad8938662a389b9c6d0b29487495e583e04f7f4f20029",
  "deployedBytecode": "0x6080604052600436106100485763ffffffff60e060020a600035041663713b563f811461004d57806383197ef01461007e578063a6f9dae114610095578063b5f8558c146100b6575b600080fd5b34801561005957600080fd5b506100626100cb565b60408051600160a060020a039092168252519081900360200190f35b34801561008a57600080fd5b506100936100da565b005b3480156100a157600080fd5b50610093600160a060020a03600435166102bd565b3480156100c257600080fd5b506100626106b0565b600054600160a060020a031681565b600054604080516000805160206106c08339815191526020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b6020831061015f5780518252601f199092019160209182019101610140565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156101c057600080fd5b505af11580156101d4573d6000803e3d6000fd5b505050506040513d60208110156101ea57600080fd5b505115156001146101fa57600080fd5b600154604080517f68b96270000000000000000000000000000000000000000000000000000000008152306024820181905233604483015231606482015260a06004820152601560a48201527f53696e676c654f776e65642064657374726f796564000000000000000000000060c48201529051600160a060020a03909216916368b962709160e48082019260009290919082900301818387803b1580156102a157600080fd5b505af11580156102b5573d6000803e3d6000fd5b503392505050ff5b600054604080516000805160206106c08339815191526020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b602083106103425780518252601f199092019160209182019101610323565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156103a357600080fd5b505af11580156103b7573d6000803e3d6000fd5b505050506040513d60208110156103cd57600080fd5b505115156001146103dd57600080fd5b600054604080516000805160206106c0833981519152602080830191909152600160a060020a038581166c0100000000000000000000000002602584015283518084036019018152603990930193849052825194169363abfdcced93918291908401908083835b602083106104635780518252601f199092019160209182019101610444565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a028252600482015260016024820152915160448084019550600094509092839003019050818387803b1580156104cf57600080fd5b505af11580156104e3573d6000803e3d6000fd5b5050600054604080516000805160206106c08339815191526020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a03909416955063abfdcced9450909282918401908083835b6020831061056c5780518252601f19909201916020918201910161054d565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a02825260048201526000602482018190529251604480830196509394509290839003019050818387803b1580156105d957600080fd5b505af11580156105ed573d6000803e3d6000fd5b5050600154604080517f68b96270000000000000000000000000000000000000000000000000000000008152336024820152600160a060020a03868116604483015260006064830181905260a06004840152601560a48401527f4f776e657273686970207472616e73666572726564000000000000000000000060c48401529251931694506368b96270935060e4808201939182900301818387803b15801561069557600080fd5b505af11580156106a9573d6000803e3d6000fd5b5050505050565b600154600160a060020a03168156006f776e6572000000000000000000000000000000000000000000000000000000a165627a7a72305820490a4cfab9baccb9c12e2c8ad8938662a389b9c6d0b29487495e583e04f7f4f20029",
  "sourceMap": "253:1174:51:-;;;385:126;8:9:-1;5:2;;;30:1;27;20:12;5:2;385:126:51;;;;;;;;;;;;;;;;;;;446:8;:30;;-1:-1:-1;;;;;446:30:51;;;-1:-1:-1;;;;;;446:30:51;;;;;;;;482:24;;;;;;;;;;;;;;253:1174;;;;;;",
  "deployedSourceMap": "253:1174:51:-;;;;;;;;;-1:-1:-1;;;253:1174:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;279:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;279:24:51;;;;;;;;-1:-1:-1;;;;;279:24:51;;;;;;;;;;;;;;981:180;;8:9:-1;5:2;;;30:1;27;20:12;5:2;981:180:51;;;;;;565:357;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;565:357:51;-1:-1:-1;;;;;565:357:51;;;;;307:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;307:20:51;;;;279:24;;;-1:-1:-1;;;;;279:24:51;;:::o;981:180::-;1248:8;;1279:37;;;-1:-1:-1;;;;;;;;;;;1279:37:51;;;;;;;;;1305:10;1279:37;;;;;;;22:32:-1;26:21;;;22:32;6:49;;1279:37:51;;;;;;;;1269:48;;-1:-1:-1;;;;;1248:8:51;;;;:20;;1279:37;;;1269:48;;;;;1279:37;1269:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;1269:48:51;;;;;;;;;;;;1248:70;;;-1:-1:-1;;;1248:70:51;;;;;;;;;;;;;;-1:-1:-1;263:2;;-1:-1;1248:70:51;;;;;;;-1:-1:-1;1248:70:51;-1:-1:-1;1248:70:51;;;;5:2:-1;;;;30:1;27;20:12;5:2;1248:70:51;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1248:70:51;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1248:70:51;:78;;1322:4;1248:78;1240:87;;;;;;1029:6;;:97;;;;;;1081:4;1029:97;;;;;;1088:10;1029:97;;;;1100:21;1029:97;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1029:6:51;;;;:18;;:97;;;;;:6;;:97;;;;;;;;:6;;:97;;;5:2:-1;;;;30:1;27;20:12;5:2;1029:97:51;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;1145:10:51;;-1:-1:-1;;;1132:24:51;565:357;1248:8;;1279:37;;;-1:-1:-1;;;;;;;;;;;1279:37:51;;;;;;;;;1305:10;1279:37;;;;;;;22:32:-1;26:21;;;22:32;6:49;;1279:37:51;;;;;;;;1269:48;;-1:-1:-1;;;;;1248:8:51;;;;:20;;1279:37;;;1269:48;;;;;1279:37;1269:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;1269:48:51;;;;;;;;;;;;1248:70;;;-1:-1:-1;;;1248:70:51;;;;;;;;;;;;;;-1:-1:-1;263:2;;-1:-1;1248:70:51;;;;;;;-1:-1:-1;1248:70:51;-1:-1:-1;1248:70:51;;;;5:2:-1;;;;30:1;27;20:12;5:2;1248:70:51;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1248:70:51;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1248:70:51;:78;;1322:4;1248:78;1240:87;;;;;;632:8;;659:36;;;-1:-1:-1;;;;;;;;;;;659:36:51;;;;;;;;-1:-1:-1;;;;;659:36:51;;;;;;;;;;;26:21:-1;;;22:32;;6:49;;659:36:51;;;;;;;;649:47;;632:8;;;:16;;659:36;;;649:47;;;;;659:36;649:47;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;649:47:51;;;;;;;;;;;;632:71;;;-1:-1:-1;;;632:71:51;;;;;;;274:1:-1;632:71:51;;;;;;;;;;;-1:-1:-1;;;;632:71:51;;;;;;;-1:-1:-1;632:71:51;-1:-1:-1;632:71:51;;;;5:2:-1;;;;30:1;27;20:12;5:2;632:71:51;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;;709:8:51;;736:37;;;-1:-1:-1;;;;;;;;;;;736:37:51;;;;;;;;;762:10;736:37;;;;;;;22:32:-1;26:21;;;22:32;6:49;;736:37:51;;;;;;;;726:48;;-1:-1:-1;;;;;709:8:51;;;;-1:-1:-1;709:16:51;;-1:-1:-1;736:37:51;;;;726:48;;;;736:37;726:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;726:48:51;;;;;;;;;;;;709:73;;;-1:-1:-1;;;709:73:51;;;;;;;-1:-1:-1;709:73:51;;;;;;;;;;;;;-1:-1:-1;;;;709:73:51;;;;;;;-1:-1:-1;709:73:51;-1:-1:-1;709:73:51;;;;5:2:-1;;;;30:1;27;20:12;5:2;709:73:51;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;;788:6:51;;:73;;;;;;832:10;788:73;;;;-1:-1:-1;;;;;788:73:51;;;;;;;:6;:73;;;;;;;;;;;;;;;;;;;;;;;:6;;;-1:-1:-1;788:18:51;;-1:-1:-1;788:73:51;;;;;;;;;;;:6;;:73;;;5:2:-1;;;;30:1;27;20:12;5:2;788:73:51;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;788:73:51;;;;565:357;:::o;307:20::-;;;-1:-1:-1;;;;;307:20:51;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport '../database/Database.sol';\nimport '../database/Events.sol';\n\n// @title A contract for managing a single platform owner\n// @dev Single owned platforms store owner as an address\n// @author Kyle Dewhurst, MyBit Foundation\ncontract SingleOwned {\n\n  Database public database;\n  Events public events;\n\n  // @notice constructor: initiate database instance\n  constructor(address _database, address _events) public {\n    database = Database(_database);\n    events = Events(_events);\n  }\n\n  // @notice Transfer ownership to to a new owner\n  function changeOwner(address _newOwner)\n  public\n  onlyOwner {\n    database.setBool(keccak256(abi.encodePacked(\"owner\", _newOwner)), true);\n    database.setBool(keccak256(abi.encodePacked(\"owner\", msg.sender)), false);\n    events.transaction('Ownership transferred', msg.sender, _newOwner, 0, '');\n    //emit OwnershipTransferred(msg.sender, _newOwner);\n  }\n\n  // @notice platform owners can destroy contract here\n  function destroy()\n  onlyOwner\n  external {\n    events.transaction('SingleOwned destroyed', address(this), msg.sender, address(this).balance, '');\n    selfdestruct(msg.sender);\n  }\n\n  // @notice reverts if caller is not the owner\n  modifier onlyOwner() {\n    require(database.boolStorage(keccak256(abi.encodePacked(\"owner\", msg.sender))) == true);\n    _;\n  }\n\n  //event OwnershipTransferred(address indexed owner, address indexed pendingOwner);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ownership/SingleOwned.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ownership/SingleOwned.sol",
    "exportedSymbols": {
      "SingleOwned": [
        13185
      ]
    },
    "id": 13186,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 13065,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:51"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "../database/Database.sol",
        "id": 13066,
        "nodeType": "ImportDirective",
        "scope": 13186,
        "sourceUnit": 5848,
        "src": "26:34:51",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Events.sol",
        "file": "../database/Events.sol",
        "id": 13067,
        "nodeType": "ImportDirective",
        "scope": 13186,
        "sourceUnit": 6304,
        "src": "61:32:51",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 13185,
        "linearizedBaseContracts": [
          13185
        ],
        "name": "SingleOwned",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 13069,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 13185,
            "src": "279:24:51",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$5847",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 13068,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5847,
              "src": "279:8:51",
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
            "id": 13071,
            "name": "events",
            "nodeType": "VariableDeclaration",
            "scope": 13185,
            "src": "307:20:51",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Events_$6303",
              "typeString": "contract Events"
            },
            "typeName": {
              "contractScope": null,
              "id": 13070,
              "name": "Events",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6303,
              "src": "307:6:51",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Events_$6303",
                "typeString": "contract Events"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 13090,
              "nodeType": "Block",
              "src": "440:71:51",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 13082,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 13078,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13069,
                      "src": "446:8:51",
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
                          "id": 13080,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13073,
                          "src": "466:9:51",
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
                        "id": 13079,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5847,
                        "src": "457:8:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$5847_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 13081,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "457:19:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$5847",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "446:30:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$5847",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 13083,
                  "nodeType": "ExpressionStatement",
                  "src": "446:30:51"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 13088,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 13084,
                      "name": "events",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13071,
                      "src": "482:6:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$6303",
                        "typeString": "contract Events"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 13086,
                          "name": "_events",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13075,
                          "src": "498:7:51",
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
                        "id": 13085,
                        "name": "Events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6303,
                        "src": "491:6:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Events_$6303_$",
                          "typeString": "type(contract Events)"
                        }
                      },
                      "id": 13087,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "491:15:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$6303",
                        "typeString": "contract Events"
                      }
                    },
                    "src": "482:24:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Events_$6303",
                      "typeString": "contract Events"
                    }
                  },
                  "id": 13089,
                  "nodeType": "ExpressionStatement",
                  "src": "482:24:51"
                }
              ]
            },
            "documentation": null,
            "id": 13091,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 13076,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13073,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 13091,
                  "src": "397:17:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13072,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "397:7:51",
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
                  "id": 13075,
                  "name": "_events",
                  "nodeType": "VariableDeclaration",
                  "scope": 13091,
                  "src": "416:15:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13074,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "416:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "396:36:51"
            },
            "payable": false,
            "returnParameters": {
              "id": 13077,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "440:0:51"
            },
            "scope": 13185,
            "src": "385:126:51",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 13136,
              "nodeType": "Block",
              "src": "626:296:51",
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
                                "hexValue": "6f776e6572",
                                "id": 13104,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "676:7:51",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                  "typeString": "literal_string \"owner\""
                                },
                                "value": "owner"
                              },
                              {
                                "argumentTypes": null,
                                "id": 13105,
                                "name": "_newOwner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13093,
                                "src": "685:9:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                  "typeString": "literal_string \"owner\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 13102,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "659:3:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 13103,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "659:16:51",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 13106,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "659:36:51",
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
                          "id": 13101,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "649:9:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 13107,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "649:47:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 13108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "698:4:51",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 13098,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13069,
                        "src": "632:8:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$5847",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 13100,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5716,
                      "src": "632:16:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_bool_$returns$__$",
                        "typeString": "function (bytes32,bool) external"
                      }
                    },
                    "id": 13109,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "632:71:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13110,
                  "nodeType": "ExpressionStatement",
                  "src": "632:71:51"
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
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "6f776e6572",
                                "id": 13117,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "753:7:51",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                  "typeString": "literal_string \"owner\""
                                },
                                "value": "owner"
                              },
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 13118,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20967,
                                  "src": "762:3:51",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 13119,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "762:10:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                  "typeString": "literal_string \"owner\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 13115,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "736:3:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 13116,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "736:16:51",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 13120,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "736:37:51",
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
                          "id": 13114,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "726:9:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 13121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "726:48:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 13122,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "776:5:51",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 13111,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13069,
                        "src": "709:8:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$5847",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 13113,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5716,
                      "src": "709:16:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_bool_$returns$__$",
                        "typeString": "function (bytes32,bool) external"
                      }
                    },
                    "id": 13123,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "709:73:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13124,
                  "nodeType": "ExpressionStatement",
                  "src": "709:73:51"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "4f776e657273686970207472616e73666572726564",
                        "id": 13128,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "807:23:51",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_8940f43c52f616af0167de7832cdaa71b6666b5d6c199d6fb69a53a69f3ebd73",
                          "typeString": "literal_string \"Ownership transferred\""
                        },
                        "value": "Ownership transferred"
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 13129,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "832:3:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 13130,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "832:10:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 13131,
                        "name": "_newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13093,
                        "src": "844:9:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 13132,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "855:1:51",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 13133,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "858:2:51",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_8940f43c52f616af0167de7832cdaa71b6666b5d6c199d6fb69a53a69f3ebd73",
                          "typeString": "literal_string \"Ownership transferred\""
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 13125,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13071,
                        "src": "788:6:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$6303",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 13127,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5916,
                      "src": "788:18:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 13134,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "788:73:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13135,
                  "nodeType": "ExpressionStatement",
                  "src": "788:73:51"
                }
              ]
            },
            "documentation": null,
            "id": 13137,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 13096,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 13095,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 13184,
                  "src": "616:9:51",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "616:9:51"
              }
            ],
            "name": "changeOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 13094,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13093,
                  "name": "_newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 13137,
                  "src": "586:17:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13092,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "586:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "585:19:51"
            },
            "payable": false,
            "returnParameters": {
              "id": 13097,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "626:0:51"
            },
            "scope": 13185,
            "src": "565:357:51",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 13163,
              "nodeType": "Block",
              "src": "1023:138:51",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "53696e676c654f776e65642064657374726f796564",
                        "id": 13145,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1048:23:51",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_25df13e00bb2be118dc6b91cba513beb01029739a8877d3eb221ab467bad08d8",
                          "typeString": "literal_string \"SingleOwned destroyed\""
                        },
                        "value": "SingleOwned destroyed"
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 13147,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21138,
                            "src": "1081:4:51",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_SingleOwned_$13185",
                              "typeString": "contract SingleOwned"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_SingleOwned_$13185",
                              "typeString": "contract SingleOwned"
                            }
                          ],
                          "id": 13146,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1073:7:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 13148,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1073:13:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 13149,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "1088:3:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 13150,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1088:10:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 13152,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21138,
                              "src": "1108:4:51",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_SingleOwned_$13185",
                                "typeString": "contract SingleOwned"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_SingleOwned_$13185",
                                "typeString": "contract SingleOwned"
                              }
                            ],
                            "id": 13151,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1100:7:51",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 13153,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1100:13:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 13154,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1100:21:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 13155,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1123:2:51",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_25df13e00bb2be118dc6b91cba513beb01029739a8877d3eb221ab467bad08d8",
                          "typeString": "literal_string \"SingleOwned destroyed\""
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 13142,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13071,
                        "src": "1029:6:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$6303",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 13144,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5916,
                      "src": "1029:18:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 13156,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1029:97:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13157,
                  "nodeType": "ExpressionStatement",
                  "src": "1029:97:51"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 13159,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "1145:3:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 13160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1145:10:51",
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
                      "id": 13158,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20975,
                      "src": "1132:12:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 13161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1132:24:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13162,
                  "nodeType": "ExpressionStatement",
                  "src": "1132:24:51"
                }
              ]
            },
            "documentation": null,
            "id": 13164,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 13140,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 13139,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 13184,
                  "src": "1002:9:51",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1002:9:51"
              }
            ],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 13138,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "997:2:51"
            },
            "payable": false,
            "returnParameters": {
              "id": 13141,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1023:0:51"
            },
            "scope": 13185,
            "src": "981:180:51",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 13183,
              "nodeType": "Block",
              "src": "1234:105:51",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 13179,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
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
                                      "hexValue": "6f776e6572",
                                      "id": 13172,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "1296:7:51",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                        "typeString": "literal_string \"owner\""
                                      },
                                      "value": "owner"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 13173,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20967,
                                        "src": "1305:3:51",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 13174,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "1305:10:51",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                        "typeString": "literal_string \"owner\""
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 13170,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20954,
                                      "src": "1279:3:51",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 13171,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1279:16:51",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 13175,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1279:37:51",
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
                                "id": 13169,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20961,
                                "src": "1269:9:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 13176,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1269:48:51",
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
                              "id": 13167,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13069,
                              "src": "1248:8:51",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Database_$5847",
                                "typeString": "contract Database"
                              }
                            },
                            "id": 13168,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "boolStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 5477,
                            "src": "1248:20:51",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                              "typeString": "function (bytes32) view external returns (bool)"
                            }
                          },
                          "id": 13177,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1248:70:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 13178,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1322:4:51",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "1248:78:51",
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
                      "id": 13166,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "1240:7:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 13180,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1240:87:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13181,
                  "nodeType": "ExpressionStatement",
                  "src": "1240:87:51"
                },
                {
                  "id": 13182,
                  "nodeType": "PlaceholderStatement",
                  "src": "1333:1:51"
                }
              ]
            },
            "documentation": null,
            "id": 13184,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 13165,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1231:2:51"
            },
            "src": "1213:126:51",
            "visibility": "internal"
          }
        ],
        "scope": 13186,
        "src": "253:1174:51"
      }
    ],
    "src": "0:1428:51"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ownership/SingleOwned.sol",
    "exportedSymbols": {
      "SingleOwned": [
        13185
      ]
    },
    "id": 13186,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 13065,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:51"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "../database/Database.sol",
        "id": 13066,
        "nodeType": "ImportDirective",
        "scope": 13186,
        "sourceUnit": 5848,
        "src": "26:34:51",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Events.sol",
        "file": "../database/Events.sol",
        "id": 13067,
        "nodeType": "ImportDirective",
        "scope": 13186,
        "sourceUnit": 6304,
        "src": "61:32:51",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 13185,
        "linearizedBaseContracts": [
          13185
        ],
        "name": "SingleOwned",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 13069,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 13185,
            "src": "279:24:51",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$5847",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 13068,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5847,
              "src": "279:8:51",
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
            "id": 13071,
            "name": "events",
            "nodeType": "VariableDeclaration",
            "scope": 13185,
            "src": "307:20:51",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Events_$6303",
              "typeString": "contract Events"
            },
            "typeName": {
              "contractScope": null,
              "id": 13070,
              "name": "Events",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6303,
              "src": "307:6:51",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Events_$6303",
                "typeString": "contract Events"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 13090,
              "nodeType": "Block",
              "src": "440:71:51",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 13082,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 13078,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13069,
                      "src": "446:8:51",
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
                          "id": 13080,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13073,
                          "src": "466:9:51",
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
                        "id": 13079,
                        "name": "Database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5847,
                        "src": "457:8:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Database_$5847_$",
                          "typeString": "type(contract Database)"
                        }
                      },
                      "id": 13081,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "457:19:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Database_$5847",
                        "typeString": "contract Database"
                      }
                    },
                    "src": "446:30:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Database_$5847",
                      "typeString": "contract Database"
                    }
                  },
                  "id": 13083,
                  "nodeType": "ExpressionStatement",
                  "src": "446:30:51"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 13088,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 13084,
                      "name": "events",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13071,
                      "src": "482:6:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$6303",
                        "typeString": "contract Events"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 13086,
                          "name": "_events",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13075,
                          "src": "498:7:51",
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
                        "id": 13085,
                        "name": "Events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6303,
                        "src": "491:6:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Events_$6303_$",
                          "typeString": "type(contract Events)"
                        }
                      },
                      "id": 13087,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "491:15:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$6303",
                        "typeString": "contract Events"
                      }
                    },
                    "src": "482:24:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Events_$6303",
                      "typeString": "contract Events"
                    }
                  },
                  "id": 13089,
                  "nodeType": "ExpressionStatement",
                  "src": "482:24:51"
                }
              ]
            },
            "documentation": null,
            "id": 13091,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 13076,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13073,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 13091,
                  "src": "397:17:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13072,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "397:7:51",
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
                  "id": 13075,
                  "name": "_events",
                  "nodeType": "VariableDeclaration",
                  "scope": 13091,
                  "src": "416:15:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13074,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "416:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "396:36:51"
            },
            "payable": false,
            "returnParameters": {
              "id": 13077,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "440:0:51"
            },
            "scope": 13185,
            "src": "385:126:51",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 13136,
              "nodeType": "Block",
              "src": "626:296:51",
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
                                "hexValue": "6f776e6572",
                                "id": 13104,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "676:7:51",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                  "typeString": "literal_string \"owner\""
                                },
                                "value": "owner"
                              },
                              {
                                "argumentTypes": null,
                                "id": 13105,
                                "name": "_newOwner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13093,
                                "src": "685:9:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                  "typeString": "literal_string \"owner\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 13102,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "659:3:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 13103,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "659:16:51",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 13106,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "659:36:51",
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
                          "id": 13101,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "649:9:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 13107,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "649:47:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 13108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "698:4:51",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 13098,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13069,
                        "src": "632:8:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$5847",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 13100,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5716,
                      "src": "632:16:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_bool_$returns$__$",
                        "typeString": "function (bytes32,bool) external"
                      }
                    },
                    "id": 13109,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "632:71:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13110,
                  "nodeType": "ExpressionStatement",
                  "src": "632:71:51"
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
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "6f776e6572",
                                "id": 13117,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "753:7:51",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                  "typeString": "literal_string \"owner\""
                                },
                                "value": "owner"
                              },
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 13118,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20967,
                                  "src": "762:3:51",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 13119,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "762:10:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                  "typeString": "literal_string \"owner\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 13115,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "736:3:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 13116,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "736:16:51",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 13120,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "736:37:51",
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
                          "id": 13114,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "726:9:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 13121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "726:48:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 13122,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "776:5:51",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 13111,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13069,
                        "src": "709:8:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Database_$5847",
                          "typeString": "contract Database"
                        }
                      },
                      "id": 13113,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5716,
                      "src": "709:16:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_bool_$returns$__$",
                        "typeString": "function (bytes32,bool) external"
                      }
                    },
                    "id": 13123,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "709:73:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13124,
                  "nodeType": "ExpressionStatement",
                  "src": "709:73:51"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "4f776e657273686970207472616e73666572726564",
                        "id": 13128,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "807:23:51",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_8940f43c52f616af0167de7832cdaa71b6666b5d6c199d6fb69a53a69f3ebd73",
                          "typeString": "literal_string \"Ownership transferred\""
                        },
                        "value": "Ownership transferred"
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 13129,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "832:3:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 13130,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "832:10:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 13131,
                        "name": "_newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13093,
                        "src": "844:9:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 13132,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "855:1:51",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 13133,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "858:2:51",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_8940f43c52f616af0167de7832cdaa71b6666b5d6c199d6fb69a53a69f3ebd73",
                          "typeString": "literal_string \"Ownership transferred\""
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 13125,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13071,
                        "src": "788:6:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$6303",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 13127,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5916,
                      "src": "788:18:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 13134,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "788:73:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13135,
                  "nodeType": "ExpressionStatement",
                  "src": "788:73:51"
                }
              ]
            },
            "documentation": null,
            "id": 13137,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 13096,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 13095,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 13184,
                  "src": "616:9:51",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "616:9:51"
              }
            ],
            "name": "changeOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 13094,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13093,
                  "name": "_newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 13137,
                  "src": "586:17:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13092,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "586:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "585:19:51"
            },
            "payable": false,
            "returnParameters": {
              "id": 13097,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "626:0:51"
            },
            "scope": 13185,
            "src": "565:357:51",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 13163,
              "nodeType": "Block",
              "src": "1023:138:51",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "53696e676c654f776e65642064657374726f796564",
                        "id": 13145,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1048:23:51",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_25df13e00bb2be118dc6b91cba513beb01029739a8877d3eb221ab467bad08d8",
                          "typeString": "literal_string \"SingleOwned destroyed\""
                        },
                        "value": "SingleOwned destroyed"
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 13147,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21138,
                            "src": "1081:4:51",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_SingleOwned_$13185",
                              "typeString": "contract SingleOwned"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_SingleOwned_$13185",
                              "typeString": "contract SingleOwned"
                            }
                          ],
                          "id": 13146,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1073:7:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 13148,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1073:13:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 13149,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "1088:3:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 13150,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1088:10:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 13152,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21138,
                              "src": "1108:4:51",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_SingleOwned_$13185",
                                "typeString": "contract SingleOwned"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_SingleOwned_$13185",
                                "typeString": "contract SingleOwned"
                              }
                            ],
                            "id": 13151,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1100:7:51",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 13153,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1100:13:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 13154,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1100:21:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 13155,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1123:2:51",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_25df13e00bb2be118dc6b91cba513beb01029739a8877d3eb221ab467bad08d8",
                          "typeString": "literal_string \"SingleOwned destroyed\""
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 13142,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13071,
                        "src": "1029:6:51",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$6303",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 13144,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5916,
                      "src": "1029:18:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 13156,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1029:97:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13157,
                  "nodeType": "ExpressionStatement",
                  "src": "1029:97:51"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 13159,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "1145:3:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 13160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1145:10:51",
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
                      "id": 13158,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20975,
                      "src": "1132:12:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 13161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1132:24:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13162,
                  "nodeType": "ExpressionStatement",
                  "src": "1132:24:51"
                }
              ]
            },
            "documentation": null,
            "id": 13164,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 13140,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 13139,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 13184,
                  "src": "1002:9:51",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1002:9:51"
              }
            ],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 13138,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "997:2:51"
            },
            "payable": false,
            "returnParameters": {
              "id": 13141,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1023:0:51"
            },
            "scope": 13185,
            "src": "981:180:51",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 13183,
              "nodeType": "Block",
              "src": "1234:105:51",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 13179,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
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
                                      "hexValue": "6f776e6572",
                                      "id": 13172,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "1296:7:51",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                        "typeString": "literal_string \"owner\""
                                      },
                                      "value": "owner"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 13173,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20967,
                                        "src": "1305:3:51",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 13174,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "1305:10:51",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                        "typeString": "literal_string \"owner\""
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 13170,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20954,
                                      "src": "1279:3:51",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 13171,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1279:16:51",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 13175,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1279:37:51",
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
                                "id": 13169,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20961,
                                "src": "1269:9:51",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 13176,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1269:48:51",
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
                              "id": 13167,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13069,
                              "src": "1248:8:51",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Database_$5847",
                                "typeString": "contract Database"
                              }
                            },
                            "id": 13168,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "boolStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 5477,
                            "src": "1248:20:51",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                              "typeString": "function (bytes32) view external returns (bool)"
                            }
                          },
                          "id": 13177,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1248:70:51",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 13178,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1322:4:51",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "1248:78:51",
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
                      "id": 13166,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "1240:7:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 13180,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1240:87:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13181,
                  "nodeType": "ExpressionStatement",
                  "src": "1240:87:51"
                },
                {
                  "id": 13182,
                  "nodeType": "PlaceholderStatement",
                  "src": "1333:1:51"
                }
              ]
            },
            "documentation": null,
            "id": 13184,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 13165,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1231:2:51"
            },
            "src": "1213:126:51",
            "visibility": "internal"
          }
        ],
        "scope": 13186,
        "src": "253:1174:51"
      }
    ],
    "src": "0:1428:51"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:16.601Z"
}