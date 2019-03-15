"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IERC721Enumerable = exports.IERC721Enumerable = 
{
  "contractName": "IERC721Enumerable",
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
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "operator",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "operator",
          "type": "address"
        },
        {
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
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
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
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
  "source": "pragma solidity ^0.4.24;\n\nimport \"./IERC721.sol\";\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract IERC721Enumerable is IERC721 {\n    function totalSupply() public view returns (uint256);\n    function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256 tokenId);\n\n    function tokenByIndex(uint256 index) public view returns (uint256);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721Enumerable.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721Enumerable.sol",
    "exportedSymbols": {
      "IERC721Enumerable": [
        34857
      ]
    },
    "id": 34858,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34832,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:115"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721.sol",
        "file": "./IERC721.sol",
        "id": 34833,
        "nodeType": "ImportDirective",
        "scope": 34858,
        "sourceUnit": 34831,
        "src": "26:23:115",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34834,
              "name": "IERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34830,
              "src": "240:7:115",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721_$34830",
                "typeString": "contract IERC721"
              }
            },
            "id": 34835,
            "nodeType": "InheritanceSpecifier",
            "src": "240:7:115"
          }
        ],
        "contractDependencies": [
          8725,
          34830
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 34857,
        "linearizedBaseContracts": [
          34857,
          34830,
          8725
        ],
        "name": "IERC721Enumerable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 34840,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34836,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "274:2:115"
            },
            "payable": false,
            "returnParameters": {
              "id": 34839,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34838,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34840,
                  "src": "298:7:115",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34837,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "298:7:115",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "297:9:115"
            },
            "scope": 34857,
            "src": "254:53:115",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34849,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenOfOwnerByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34842,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 34849,
                  "src": "341:13:115",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34841,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "341:7:115",
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
                  "id": 34844,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 34849,
                  "src": "356:13:115",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34843,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "356:7:115",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "340:30:115"
            },
            "payable": false,
            "returnParameters": {
              "id": 34848,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34847,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34849,
                  "src": "392:15:115",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34846,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "392:7:115",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "391:17:115"
            },
            "scope": 34857,
            "src": "312:97:115",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34856,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34852,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34851,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 34856,
                  "src": "437:13:115",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34850,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "437:7:115",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "436:15:115"
            },
            "payable": false,
            "returnParameters": {
              "id": 34855,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34854,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34856,
                  "src": "473:7:115",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34853,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "473:7:115",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "472:9:115"
            },
            "scope": 34857,
            "src": "415:67:115",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 34858,
        "src": "210:274:115"
      }
    ],
    "src": "0:485:115"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721Enumerable.sol",
    "exportedSymbols": {
      "IERC721Enumerable": [
        34857
      ]
    },
    "id": 34858,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34832,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:115"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721.sol",
        "file": "./IERC721.sol",
        "id": 34833,
        "nodeType": "ImportDirective",
        "scope": 34858,
        "sourceUnit": 34831,
        "src": "26:23:115",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34834,
              "name": "IERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34830,
              "src": "240:7:115",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721_$34830",
                "typeString": "contract IERC721"
              }
            },
            "id": 34835,
            "nodeType": "InheritanceSpecifier",
            "src": "240:7:115"
          }
        ],
        "contractDependencies": [
          8725,
          34830
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 34857,
        "linearizedBaseContracts": [
          34857,
          34830,
          8725
        ],
        "name": "IERC721Enumerable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 34840,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34836,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "274:2:115"
            },
            "payable": false,
            "returnParameters": {
              "id": 34839,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34838,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34840,
                  "src": "298:7:115",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34837,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "298:7:115",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "297:9:115"
            },
            "scope": 34857,
            "src": "254:53:115",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34849,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenOfOwnerByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34842,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 34849,
                  "src": "341:13:115",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34841,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "341:7:115",
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
                  "id": 34844,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 34849,
                  "src": "356:13:115",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34843,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "356:7:115",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "340:30:115"
            },
            "payable": false,
            "returnParameters": {
              "id": 34848,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34847,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34849,
                  "src": "392:15:115",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34846,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "392:7:115",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "391:17:115"
            },
            "scope": 34857,
            "src": "312:97:115",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34856,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34852,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34851,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 34856,
                  "src": "437:13:115",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34850,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "437:7:115",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "436:15:115"
            },
            "payable": false,
            "returnParameters": {
              "id": 34855,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34854,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34856,
                  "src": "473:7:115",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34853,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "473:7:115",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "472:9:115"
            },
            "scope": 34857,
            "src": "415:67:115",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 34858,
        "src": "210:274:115"
      }
    ],
    "src": "0:485:115"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.876Z",
  "devdoc": {
    "methods": {
      "supportsInterface(bytes4)": {
        "details": "Interface identification is specified in ERC-165. This function uses less than 30,000 gas.",
        "params": {
          "interfaceId": "The interface identifier, as specified in ERC-165"
        }
      }
    },
    "title": "ERC-721 Non-Fungible Token Standard, optional enumeration extension"
  },
  "userdoc": {
    "methods": {
      "supportsInterface(bytes4)": {
        "notice": "Query if a contract implements an interface"
      }
    }
  }
}