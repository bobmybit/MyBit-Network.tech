"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var HashEncode = exports.HashEncode = 
{
  "contractName": "HashEncode",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_label",
          "type": "string"
        },
        {
          "name": "_arg1",
          "type": "bytes32"
        }
      ],
      "name": "encode",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
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
          "name": "_label",
          "type": "string"
        },
        {
          "name": "_arg1",
          "type": "bool"
        }
      ],
      "name": "encode",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
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
          "name": "_label",
          "type": "string"
        },
        {
          "name": "_arg1",
          "type": "uint256"
        }
      ],
      "name": "encode",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
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
          "name": "_label",
          "type": "string"
        },
        {
          "name": "_arg1",
          "type": "address"
        }
      ],
      "name": "encode",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
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
          "name": "_label",
          "type": "string"
        },
        {
          "name": "_arg1",
          "type": "bytes32"
        },
        {
          "name": "_arg2",
          "type": "bytes32"
        }
      ],
      "name": "encode",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
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
          "name": "_label",
          "type": "string"
        },
        {
          "name": "_arg1",
          "type": "bytes32"
        },
        {
          "name": "_arg2",
          "type": "uint256"
        }
      ],
      "name": "encode",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ],
  "bytecode": "0x610563610030600b82828239805160001a6073146000811461002057610022565bfe5b5030600052607381538281f300730000000000000000000000000000000000000000301460806040526004361061008e5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166304503ff481146100935780630a9320a0146100f35780633c1c8e4914610093578063af491f3014610143578063c42ff019146101a7578063efab5a5b146101a7575b600080fd5b6040805160206004803580820135601f81018490048402850184019095528484526100e194369492936024939284019190819084018382808284375094975050933594506101fc9350505050565b60408051918252519081900360200190f35b6040805160206004803580820135601f81018490048402850184019095528484526100e19436949293602493928401919081908401838280828437509497505050509135151592506102c5915050565b6040805160206004803580820135601f81018490048402850184019095528484526100e19436949293602493928401919081908401838280828437509497505050923573ffffffffffffffffffffffffffffffffffffffff16935061038a92505050565b6040805160206004803580820135601f81018490048402850184019095528484526100e19436949293602493928401919081908401838280828437509497505084359550505060209092013591506104649050565b600082826040516020018083805190602001908083835b602083106102325780518252601f199092019160209182019101610213565b51815160209384036101000a600019018019909216911617905292019384525060408051808503815293820190819052835193945092839250908401908083835b602083106102925780518252601f199092019160209182019101610273565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209695505050505050565b600082826040516020018083805190602001908083835b602083106102fb5780518252601f1990920191602091820191016102dc565b6001836020036101000a03801982511681845116808217855250505050505090500182151515157f010000000000000000000000000000000000000000000000000000000000000002815260010192505050604051602081830303815290604052604051808280519060200190808383602083106102925780518252601f199092019160209182019101610273565b600082826040516020018083805190602001908083835b602083106103c05780518252601f1990920191602091820191016103a1565b6001836020036101000a0380198251168184511680821785525050505050509050018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c0100000000000000000000000002815260140192505050604051602081830303815290604052604051808280519060200190808383602083106102925780518252601f199092019160209182019101610273565b60008383836040516020018084805190602001908083835b6020831061049b5780518252601f19909201916020918201910161047c565b51815160209384036101000a6000190180199092169116179052920194855250838101929092525060408051808403830181529281019081905282519293509182918401908083835b602083106105035780518252601f1990920191602091820191016104e4565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209796505050505050505600a165627a7a72305820c468f12b5b83fd404c9d70ac2a13c54460db4f450a65b9a0a7f3ca1f56e23e7c0029",
  "deployedBytecode": "0x730000000000000000000000000000000000000000301460806040526004361061008e5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166304503ff481146100935780630a9320a0146100f35780633c1c8e4914610093578063af491f3014610143578063c42ff019146101a7578063efab5a5b146101a7575b600080fd5b6040805160206004803580820135601f81018490048402850184019095528484526100e194369492936024939284019190819084018382808284375094975050933594506101fc9350505050565b60408051918252519081900360200190f35b6040805160206004803580820135601f81018490048402850184019095528484526100e19436949293602493928401919081908401838280828437509497505050509135151592506102c5915050565b6040805160206004803580820135601f81018490048402850184019095528484526100e19436949293602493928401919081908401838280828437509497505050923573ffffffffffffffffffffffffffffffffffffffff16935061038a92505050565b6040805160206004803580820135601f81018490048402850184019095528484526100e19436949293602493928401919081908401838280828437509497505084359550505060209092013591506104649050565b600082826040516020018083805190602001908083835b602083106102325780518252601f199092019160209182019101610213565b51815160209384036101000a600019018019909216911617905292019384525060408051808503815293820190819052835193945092839250908401908083835b602083106102925780518252601f199092019160209182019101610273565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209695505050505050565b600082826040516020018083805190602001908083835b602083106102fb5780518252601f1990920191602091820191016102dc565b6001836020036101000a03801982511681845116808217855250505050505090500182151515157f010000000000000000000000000000000000000000000000000000000000000002815260010192505050604051602081830303815290604052604051808280519060200190808383602083106102925780518252601f199092019160209182019101610273565b600082826040516020018083805190602001908083835b602083106103c05780518252601f1990920191602091820191016103a1565b6001836020036101000a0380198251168184511680821785525050505050509050018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c0100000000000000000000000002815260140192505050604051602081830303815290604052604051808280519060200190808383602083106102925780518252601f199092019160209182019101610273565b60008383836040516020018084805190602001908083835b6020831061049b5780518252601f19909201916020918201910161047c565b51815160209384036101000a6000190180199092169116179052920194855250838101929092525060408051808403830181529281019081905282519293509182918401908083835b602083106105035780518252601f1990920191602091820191016104e4565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209796505050505050505600a165627a7a72305820c468f12b5b83fd404c9d70ac2a13c54460db4f450a65b9a0a7f3ca1f56e23e7c0029",
  "sourceMap": "25:904:20:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "25:904:20:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;73:134;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;73:134:20;;-1:-1:-1;;73:134:20;;;-1:-1:-1;73:134:20;;-1:-1:-1;;;;73:134:20;;;;;;;;;;;;;;;;;796:131;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;796:131:20;;-1:-1:-1;;;;796:131:20;;;;;-1:-1:-1;796:131:20;;-1:-1:-1;;796:131:20;525:134;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;525:134:20;;-1:-1:-1;;;525:134:20;;;;;-1:-1:-1;525:134:20;;-1:-1:-1;;;525:134:20;210:156;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;210:156:20;;-1:-1:-1;;210:156:20;;;-1:-1:-1;;;210:156:20;;;;;;-1:-1:-1;210:156:20;;-1:-1:-1;210:156:20;73:134;139:7;187:6;195:5;170:31;;;;;;;;;;;;;;;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;170:31:20;;;;;-1:-1:-1;170:31:20;;;26:21:-1;;;6:49;;170:31:20;;;;;;;160:42;;170:31;;-1:-1:-1;170:31:20;;;-1:-1:-1;160:42:20;;;;;170:31;160:42;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;160:42:20;;;;;;;;;;;;-1:-1:-1;;;;;;73:134:20:o;796:131::-;859:7;907:6;915:5;890:31;;;;;;;;;;;;;;;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;890:31:20;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;890:31:20;;;880:42;;;;;;;;;;;;;66:2:-1;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;525:134:20;591:7;639:6;647:5;622:31;;;;;;;;;;;;;;;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;622:31:20;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;622:31:20;;;612:42;;;;;;;;;;;;;66:2:-1;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;210:156:20;291:7;339:6;347:5;354;322:38;;;;;;;;;;;;;;;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;322:38:20;;;;;-1:-1:-1;322:38:20;;;;;;;-1:-1:-1;322:38:20;;;26:21:-1;;;22:32;;6:49;;322:38:20;;;;;;;312:49;;322:38;;-1:-1:-1;322:38:20;;;312:49;;;;322:38;312:49;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;312:49:20;;;;;;;;;;;;-1:-1:-1;;;;;;;210:156:20:o",
  "source": "pragma solidity ^0.4.24;\nlibrary HashEncode {\n  //Overloaded functions\n  function encode(string _label, bytes32 _arg1) pure public returns(bytes32){\n    return keccak256(abi.encodePacked(_label, _arg1));\n  }\n  function encode(string _label, bytes32 _arg1, bytes32 _arg2) pure public returns(bytes32){\n    return keccak256(abi.encodePacked(_label, _arg1, _arg2));\n  }\n  function encode(string _label, bytes32 _arg1, uint _arg2) pure public returns(bytes32){\n    return keccak256(abi.encodePacked(_label, _arg1, _arg2));\n  }\n  function encode(string _label, address _arg1) pure public returns(bytes32){\n    return keccak256(abi.encodePacked(_label, _arg1));\n  }\n  function encode(string _label, uint _arg1) pure public returns(bytes32){\n    return keccak256(abi.encodePacked(_label, _arg1));\n  }\n  function encode(string _label, bool _arg1) pure public returns(bytes32){\n    return keccak256(abi.encodePacked(_label, _arg1));\n  }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/HashEncode.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/HashEncode.sol",
    "exportedSymbols": {
      "HashEncode": [
        6420
      ]
    },
    "id": 6421,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6305,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:20"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": null,
        "fullyImplemented": true,
        "id": 6420,
        "linearizedBaseContracts": [
          6420
        ],
        "name": "HashEncode",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 6322,
              "nodeType": "Block",
              "src": "147:60:20",
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
                            "id": 6317,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6307,
                            "src": "187:6:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 6318,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6309,
                            "src": "195:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 6315,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20954,
                            "src": "170:3:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 6316,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "170:16:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 6319,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "170:31:20",
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
                      "id": 6314,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20961,
                      "src": "160:9:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 6320,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "160:42:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 6313,
                  "id": 6321,
                  "nodeType": "Return",
                  "src": "153:49:20"
                }
              ]
            },
            "documentation": null,
            "id": 6323,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6310,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6307,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 6323,
                  "src": "89:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6306,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "89:6:20",
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
                  "id": 6309,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6323,
                  "src": "104:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6308,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "104:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "88:30:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6313,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6312,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6323,
                  "src": "139:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6311,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "139:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "138:9:20"
            },
            "scope": 6420,
            "src": "73:134:20",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6343,
              "nodeType": "Block",
              "src": "299:67:20",
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
                            "id": 6337,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6325,
                            "src": "339:6:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 6338,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6327,
                            "src": "347:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 6339,
                            "name": "_arg2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6329,
                            "src": "354:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 6335,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20954,
                            "src": "322:3:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 6336,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "322:16:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 6340,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "322:38:20",
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
                      "id": 6334,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20961,
                      "src": "312:9:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 6341,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "312:49:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 6333,
                  "id": 6342,
                  "nodeType": "Return",
                  "src": "305:56:20"
                }
              ]
            },
            "documentation": null,
            "id": 6344,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6330,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6325,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 6344,
                  "src": "226:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6324,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:6:20",
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
                  "id": 6327,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6344,
                  "src": "241:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6326,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "241:7:20",
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
                  "id": 6329,
                  "name": "_arg2",
                  "nodeType": "VariableDeclaration",
                  "scope": 6344,
                  "src": "256:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6328,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "256:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "225:45:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6333,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6332,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6344,
                  "src": "291:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6331,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "291:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "290:9:20"
            },
            "scope": 6420,
            "src": "210:156:20",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6364,
              "nodeType": "Block",
              "src": "455:67:20",
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
                            "id": 6358,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6346,
                            "src": "495:6:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 6359,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6348,
                            "src": "503:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 6360,
                            "name": "_arg2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6350,
                            "src": "510:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 6356,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20954,
                            "src": "478:3:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 6357,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "478:16:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 6361,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "478:38:20",
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
                      "id": 6355,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20961,
                      "src": "468:9:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 6362,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "468:49:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 6354,
                  "id": 6363,
                  "nodeType": "Return",
                  "src": "461:56:20"
                }
              ]
            },
            "documentation": null,
            "id": 6365,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6351,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6346,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 6365,
                  "src": "385:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6345,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "385:6:20",
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
                  "id": 6348,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6365,
                  "src": "400:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6347,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "400:7:20",
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
                  "id": 6350,
                  "name": "_arg2",
                  "nodeType": "VariableDeclaration",
                  "scope": 6365,
                  "src": "415:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6349,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "415:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "384:42:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6354,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6353,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6365,
                  "src": "447:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6352,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "446:9:20"
            },
            "scope": 6420,
            "src": "369:153:20",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6382,
              "nodeType": "Block",
              "src": "599:60:20",
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
                            "id": 6377,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6367,
                            "src": "639:6:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 6378,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6369,
                            "src": "647:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 6375,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20954,
                            "src": "622:3:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 6376,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "622:16:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 6379,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "622:31:20",
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
                      "id": 6374,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20961,
                      "src": "612:9:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 6380,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "612:42:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 6373,
                  "id": 6381,
                  "nodeType": "Return",
                  "src": "605:49:20"
                }
              ]
            },
            "documentation": null,
            "id": 6383,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6370,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6367,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 6383,
                  "src": "541:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6366,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "541:6:20",
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
                  "id": 6369,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6383,
                  "src": "556:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6368,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "556:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "540:30:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6373,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6372,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6383,
                  "src": "591:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6371,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "591:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "590:9:20"
            },
            "scope": 6420,
            "src": "525:134:20",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6400,
              "nodeType": "Block",
              "src": "733:60:20",
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
                            "id": 6395,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6385,
                            "src": "773:6:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 6396,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6387,
                            "src": "781:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 6393,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20954,
                            "src": "756:3:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 6394,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "756:16:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 6397,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "756:31:20",
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
                      "id": 6392,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20961,
                      "src": "746:9:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 6398,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "746:42:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 6391,
                  "id": 6399,
                  "nodeType": "Return",
                  "src": "739:49:20"
                }
              ]
            },
            "documentation": null,
            "id": 6401,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6388,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6385,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 6401,
                  "src": "678:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6384,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "678:6:20",
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
                  "id": 6387,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6401,
                  "src": "693:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6386,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "693:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "677:27:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6391,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6390,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6401,
                  "src": "725:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6389,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "725:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "724:9:20"
            },
            "scope": 6420,
            "src": "662:131:20",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6418,
              "nodeType": "Block",
              "src": "867:60:20",
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
                            "id": 6413,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6403,
                            "src": "907:6:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 6414,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6405,
                            "src": "915:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 6411,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20954,
                            "src": "890:3:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 6412,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "890:16:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 6415,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "890:31:20",
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
                      "id": 6410,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20961,
                      "src": "880:9:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 6416,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "880:42:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 6409,
                  "id": 6417,
                  "nodeType": "Return",
                  "src": "873:49:20"
                }
              ]
            },
            "documentation": null,
            "id": 6419,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6406,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6403,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 6419,
                  "src": "812:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6402,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "812:6:20",
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
                  "id": 6405,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6419,
                  "src": "827:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6404,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "827:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "811:27:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6409,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6408,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6419,
                  "src": "859:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6407,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "859:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "858:9:20"
            },
            "scope": 6420,
            "src": "796:131:20",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 6421,
        "src": "25:904:20"
      }
    ],
    "src": "0:930:20"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/HashEncode.sol",
    "exportedSymbols": {
      "HashEncode": [
        6420
      ]
    },
    "id": 6421,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6305,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:20"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": null,
        "fullyImplemented": true,
        "id": 6420,
        "linearizedBaseContracts": [
          6420
        ],
        "name": "HashEncode",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 6322,
              "nodeType": "Block",
              "src": "147:60:20",
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
                            "id": 6317,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6307,
                            "src": "187:6:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 6318,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6309,
                            "src": "195:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 6315,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20954,
                            "src": "170:3:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 6316,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "170:16:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 6319,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "170:31:20",
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
                      "id": 6314,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20961,
                      "src": "160:9:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 6320,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "160:42:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 6313,
                  "id": 6321,
                  "nodeType": "Return",
                  "src": "153:49:20"
                }
              ]
            },
            "documentation": null,
            "id": 6323,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6310,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6307,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 6323,
                  "src": "89:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6306,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "89:6:20",
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
                  "id": 6309,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6323,
                  "src": "104:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6308,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "104:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "88:30:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6313,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6312,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6323,
                  "src": "139:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6311,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "139:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "138:9:20"
            },
            "scope": 6420,
            "src": "73:134:20",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6343,
              "nodeType": "Block",
              "src": "299:67:20",
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
                            "id": 6337,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6325,
                            "src": "339:6:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 6338,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6327,
                            "src": "347:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 6339,
                            "name": "_arg2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6329,
                            "src": "354:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 6335,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20954,
                            "src": "322:3:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 6336,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "322:16:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 6340,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "322:38:20",
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
                      "id": 6334,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20961,
                      "src": "312:9:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 6341,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "312:49:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 6333,
                  "id": 6342,
                  "nodeType": "Return",
                  "src": "305:56:20"
                }
              ]
            },
            "documentation": null,
            "id": 6344,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6330,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6325,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 6344,
                  "src": "226:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6324,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:6:20",
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
                  "id": 6327,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6344,
                  "src": "241:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6326,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "241:7:20",
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
                  "id": 6329,
                  "name": "_arg2",
                  "nodeType": "VariableDeclaration",
                  "scope": 6344,
                  "src": "256:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6328,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "256:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "225:45:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6333,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6332,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6344,
                  "src": "291:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6331,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "291:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "290:9:20"
            },
            "scope": 6420,
            "src": "210:156:20",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6364,
              "nodeType": "Block",
              "src": "455:67:20",
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
                            "id": 6358,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6346,
                            "src": "495:6:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 6359,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6348,
                            "src": "503:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 6360,
                            "name": "_arg2",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6350,
                            "src": "510:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 6356,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20954,
                            "src": "478:3:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 6357,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "478:16:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 6361,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "478:38:20",
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
                      "id": 6355,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20961,
                      "src": "468:9:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 6362,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "468:49:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 6354,
                  "id": 6363,
                  "nodeType": "Return",
                  "src": "461:56:20"
                }
              ]
            },
            "documentation": null,
            "id": 6365,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6351,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6346,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 6365,
                  "src": "385:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6345,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "385:6:20",
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
                  "id": 6348,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6365,
                  "src": "400:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6347,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "400:7:20",
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
                  "id": 6350,
                  "name": "_arg2",
                  "nodeType": "VariableDeclaration",
                  "scope": 6365,
                  "src": "415:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6349,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "415:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "384:42:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6354,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6353,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6365,
                  "src": "447:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6352,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "446:9:20"
            },
            "scope": 6420,
            "src": "369:153:20",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6382,
              "nodeType": "Block",
              "src": "599:60:20",
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
                            "id": 6377,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6367,
                            "src": "639:6:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 6378,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6369,
                            "src": "647:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 6375,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20954,
                            "src": "622:3:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 6376,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "622:16:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 6379,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "622:31:20",
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
                      "id": 6374,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20961,
                      "src": "612:9:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 6380,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "612:42:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 6373,
                  "id": 6381,
                  "nodeType": "Return",
                  "src": "605:49:20"
                }
              ]
            },
            "documentation": null,
            "id": 6383,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6370,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6367,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 6383,
                  "src": "541:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6366,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "541:6:20",
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
                  "id": 6369,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6383,
                  "src": "556:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6368,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "556:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "540:30:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6373,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6372,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6383,
                  "src": "591:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6371,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "591:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "590:9:20"
            },
            "scope": 6420,
            "src": "525:134:20",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6400,
              "nodeType": "Block",
              "src": "733:60:20",
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
                            "id": 6395,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6385,
                            "src": "773:6:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 6396,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6387,
                            "src": "781:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 6393,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20954,
                            "src": "756:3:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 6394,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "756:16:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 6397,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "756:31:20",
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
                      "id": 6392,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20961,
                      "src": "746:9:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 6398,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "746:42:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 6391,
                  "id": 6399,
                  "nodeType": "Return",
                  "src": "739:49:20"
                }
              ]
            },
            "documentation": null,
            "id": 6401,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6388,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6385,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 6401,
                  "src": "678:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6384,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "678:6:20",
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
                  "id": 6387,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6401,
                  "src": "693:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6386,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "693:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "677:27:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6391,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6390,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6401,
                  "src": "725:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6389,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "725:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "724:9:20"
            },
            "scope": 6420,
            "src": "662:131:20",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6418,
              "nodeType": "Block",
              "src": "867:60:20",
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
                            "id": 6413,
                            "name": "_label",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6403,
                            "src": "907:6:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 6414,
                            "name": "_arg1",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6405,
                            "src": "915:5:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 6411,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20954,
                            "src": "890:3:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 6412,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "890:16:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 6415,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "890:31:20",
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
                      "id": 6410,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20961,
                      "src": "880:9:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                        "typeString": "function () pure returns (bytes32)"
                      }
                    },
                    "id": 6416,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "880:42:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 6409,
                  "id": 6417,
                  "nodeType": "Return",
                  "src": "873:49:20"
                }
              ]
            },
            "documentation": null,
            "id": 6419,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encode",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6406,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6403,
                  "name": "_label",
                  "nodeType": "VariableDeclaration",
                  "scope": 6419,
                  "src": "812:13:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6402,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "812:6:20",
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
                  "id": 6405,
                  "name": "_arg1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6419,
                  "src": "827:10:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6404,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "827:4:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "811:27:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 6409,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6408,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6419,
                  "src": "859:7:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6407,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "859:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "858:9:20"
            },
            "scope": 6420,
            "src": "796:131:20",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 6421,
        "src": "25:904:20"
      }
    ],
    "src": "0:930:20"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:16.306Z"
}