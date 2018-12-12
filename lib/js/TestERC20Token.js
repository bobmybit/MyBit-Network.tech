"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var TestERC20Token = exports.TestERC20Token = 
{
  "contractName": "TestERC20Token",
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
      "stateMutability": "view",
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
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "standard",
      "outputs": [
        {
          "name": "",
          "type": "string"
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
          "name": "",
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
      "stateMutability": "view",
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
      "stateMutability": "view",
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
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
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
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_symbol",
          "type": "string"
        },
        {
          "name": "_supply",
          "type": "uint256"
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
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
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
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    }
  ],
  "bytecode": "0x60c0604052600960808190527f546f6b656e20302e31000000000000000000000000000000000000000000000060a090815261003e9160009190610141565b5060408051602081019182905260009081905261005d91600191610141565b5060408051602081019182905260009081905261007c91600291610141565b506003805460ff19169055600060045534801561009857600080fd5b506040516108d83803806108d8833981016040908152815160208301519183015190830180519093929092019183908390600090811080156100db575060008251115b15156100e657600080fd5b82516100f9906001906020860190610141565b50815161010d906002906020850190610141565b506003805460ff191660ff929092169190911790555050600481905533600090815260056020526040902055506101dc9050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061018257805160ff19168380011785556101af565b828001600101855582156101af579182015b828111156101af578251825591602001919060010190610194565b506101bb9291506101bf565b5090565b6101d991905b808211156101bb57600081556001016101c5565b90565b6106ed806101eb6000396000f3006080604052600436106100a35763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100a8578063095ea7b31461013257806318160ddd1461016a57806323b872dd14610191578063313ce567146101bb5780635a3b7e42146101e657806370a08231146101fb57806395d89b411461021c578063a9059cbb14610231578063dd62ed3e14610255575b600080fd5b3480156100b457600080fd5b506100bd61027c565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100f75781810151838201526020016100df565b50505050905090810190601f1680156101245780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561013e57600080fd5b50610156600160a060020a0360043516602435610309565b604080519115158252519081900360200190f35b34801561017657600080fd5b5061017f6103c2565b60408051918252519081900360200190f35b34801561019d57600080fd5b50610156600160a060020a03600435811690602435166044356103c8565b3480156101c757600080fd5b506101d06104f1565b6040805160ff9092168252519081900360200190f35b3480156101f257600080fd5b506100bd6104fa565b34801561020757600080fd5b5061017f600160a060020a0360043516610555565b34801561022857600080fd5b506100bd610567565b34801561023d57600080fd5b50610156600160a060020a03600435166024356105bf565b34801561026157600080fd5b5061017f600160a060020a036004358116906024351661067c565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103015780601f106102d657610100808354040283529160200191610301565b820191906000526020600020905b8154815290600101906020018083116102e457829003601f168201915b505050505081565b600082600160a060020a038116151561032157600080fd5b82158061034f5750336000908152600660209081526040808320600160a060020a0388168452909152902054155b151561035a57600080fd5b336000818152600660209081526040808320600160a060020a03891680855290835292819020879055805187815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b60045481565b600083600160a060020a03811615156103e057600080fd5b83600160a060020a03811615156103f657600080fd5b600160a060020a03861660009081526006602090815260408083203384529091529020546104249085610699565b600160a060020a03871660008181526006602090815260408083203384528252808320949094559181526005909152205461045f9085610699565b600160a060020a03808816600090815260056020526040808220939093559087168152205461048e90856106ab565b600160a060020a0380871660008181526005602090815260409182902094909455805188815290519193928a16927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a350600195945050505050565b60035460ff1681565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103015780601f106102d657610100808354040283529160200191610301565b60056020526000908152604090205481565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156103015780601f106102d657610100808354040283529160200191610301565b600082600160a060020a03811615156105d757600080fd5b336000908152600560205260409020546105f19084610699565b3360009081526005602052604080822092909255600160a060020a0386168152205461061d90846106ab565b600160a060020a0385166000818152600560209081526040918290209390935580518681529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35060019392505050565b600660209081526000928352604080842090915290825290205481565b6000818310156106a557fe5b50900390565b6000828201838110156106ba57fe5b93925050505600a165627a7a7230582022151f75904d0c7e8d14504b6537cdd7455a68afc8993c58106d8e0604bd39e70029",
  "deployedBytecode": "0x6080604052600436106100a35763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100a8578063095ea7b31461013257806318160ddd1461016a57806323b872dd14610191578063313ce567146101bb5780635a3b7e42146101e657806370a08231146101fb57806395d89b411461021c578063a9059cbb14610231578063dd62ed3e14610255575b600080fd5b3480156100b457600080fd5b506100bd61027c565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100f75781810151838201526020016100df565b50505050905090810190601f1680156101245780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561013e57600080fd5b50610156600160a060020a0360043516602435610309565b604080519115158252519081900360200190f35b34801561017657600080fd5b5061017f6103c2565b60408051918252519081900360200190f35b34801561019d57600080fd5b50610156600160a060020a03600435811690602435166044356103c8565b3480156101c757600080fd5b506101d06104f1565b6040805160ff9092168252519081900360200190f35b3480156101f257600080fd5b506100bd6104fa565b34801561020757600080fd5b5061017f600160a060020a0360043516610555565b34801561022857600080fd5b506100bd610567565b34801561023d57600080fd5b50610156600160a060020a03600435166024356105bf565b34801561026157600080fd5b5061017f600160a060020a036004358116906024351661067c565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103015780601f106102d657610100808354040283529160200191610301565b820191906000526020600020905b8154815290600101906020018083116102e457829003601f168201915b505050505081565b600082600160a060020a038116151561032157600080fd5b82158061034f5750336000908152600660209081526040808320600160a060020a0388168452909152902054155b151561035a57600080fd5b336000818152600660209081526040808320600160a060020a03891680855290835292819020879055805187815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b60045481565b600083600160a060020a03811615156103e057600080fd5b83600160a060020a03811615156103f657600080fd5b600160a060020a03861660009081526006602090815260408083203384529091529020546104249085610699565b600160a060020a03871660008181526006602090815260408083203384528252808320949094559181526005909152205461045f9085610699565b600160a060020a03808816600090815260056020526040808220939093559087168152205461048e90856106ab565b600160a060020a0380871660008181526005602090815260409182902094909455805188815290519193928a16927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a350600195945050505050565b60035460ff1681565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103015780601f106102d657610100808354040283529160200191610301565b60056020526000908152604090205481565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156103015780601f106102d657610100808354040283529160200191610301565b600082600160a060020a03811615156105d757600080fd5b336000908152600560205260409020546105f19084610699565b3360009081526005602052604080822092909255600160a060020a0386168152205461061d90846106ab565b600160a060020a0385166000818152600560209081526040918290209390935580518681529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35060019392505050565b600660209081526000928352604080842090915290825290205481565b6000818310156106a557fe5b50900390565b6000828201838110156106ba57fe5b93925050505600a165627a7a7230582022151f75904d0c7e8d14504b6537cdd7455a68afc8993c58106d8e0604bd39e70029",
  "sourceMap": "191:36:25:-;104:241:21;191:36:25;;104:241:21;191:36:25;;;;;;;;;;-1:-1:-1;;191:36:25;;:::i;:::-;-1:-1:-1;233:23:25;;;;;;;;;;-1:-1:-1;233:23:25;;;;;;;;;:::i;:::-;-1:-1:-1;262:25:25;;;;;;;;;;-1:-1:-1;262:25:25;;;;;;;;;:::i;:::-;-1:-1:-1;293:25:25;;;-1:-1:-1;;293:25:25;;;317:1;324:30;;148:195:21;5:2:-1;;;;30:1;27;20:12;5:2;148:195:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;921:19:25;;148:195:21;;;;;;;;;;;257:1;;921:23:25;-1:-1:-1;921:52:25;;;;;972:1;954:7;948:21;:25;921:52;913:61;;;;;;;;1003:12;;;;:4;;:12;;;;;:::i;:::-;-1:-1:-1;1025:16:25;;;;:6;;:16;;;;;:::i;:::-;-1:-1:-1;1051:8:25;:20;;-1:-1:-1;;1051:20:25;;;;;;;;;;;;-1:-1:-1;;274:11:21;:21;;;315:10;-1:-1:-1;305:21:21;;;:9;:21;;;;;:31;-1:-1:-1;104:241:21;;-1:-1:-1;104:241:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;104:241:21;;;-1:-1:-1;104:241:21;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "104:241:21:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;233:23:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;233:23:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;233:23:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3162:459;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3162:459:25;-1:-1:-1;;;;;3162:459:25;;;;;;;;;;;;;;;;;;;;;;;;;324:30;;8:9:-1;5:2;;;30:1;27;20:12;5:2;324:30:25;;;;;;;;;;;;;;;;;;;;2045:447;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2045:447:25;-1:-1:-1;;;;;2045:447:25;;;;;;;;;;;;293:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;293:25:25;;;;;;;;;;;;;;;;;;;;;;;191:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;191:36:25;;;;360:45;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;360:45:25;-1:-1:-1;;;;;360:45:25;;;;;262:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;262:25:25;;;;1360:329;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1360:329:25;-1:-1:-1;;;;;1360:329:25;;;;;;;411:66;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;411:66:25;-1:-1:-1;;;;;411:66:25;;;;;;;;;;233:23;;;;;;;;;;;;;;;-1:-1:-1;;233:23:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3162:459::-;3276:12;3249:8;-1:-1:-1;;;;;432:22:37;;;;424:31;;;;;;3437:11:25;;;:51;;-1:-1:-1;3462:10:25;3452:21;;;;:9;:21;;;;;;;;-1:-1:-1;;;;;3452:31:25;;;;;;;;;;:36;3437:51;3429:60;;;;;;;;3510:10;3500:21;;;;:9;:21;;;;;;;;-1:-1:-1;;;;;3500:31:25;;;;;;;;;;;;:40;;;3555:38;;;;;;;3500:31;;3510:10;3555:38;;;;;;;;;;;-1:-1:-1;3610:4:25;;3162:459;-1:-1:-1;;;3162:459:25:o;324:30::-;;;;:::o;2045:447::-;2197:12;2147:5;-1:-1:-1;;;;;432:22:37;;;;424:31;;;;;;2175:3:25;-1:-1:-1;;;;;432:22:37;;;;424:31;;;;;;-1:-1:-1;;;;;2264:16:25;;;;;;:9;:16;;;;;;;;2281:10;2264:28;;;;;;;;2256:45;;2294:6;2256:7;:45::i;:::-;-1:-1:-1;;;;;2225:16:25;;;;;;:9;:16;;;;;;;;2242:10;2225:28;;;;;;;:76;;;;2338:16;;;:9;:16;;;;;2330:33;;2356:6;2330:7;:33::i;:::-;-1:-1:-1;;;;;2311:16:25;;;;;;;:9;:16;;;;;;:52;;;;2398:14;;;;;;;2390:31;;2414:6;2390:7;:31::i;:::-;-1:-1:-1;;;;;2373:14:25;;;;;;;:9;:14;;;;;;;;;:48;;;;2436:28;;;;;;;2373:14;;2436:28;;;;;;;;;;;;;-1:-1:-1;2481:4:25;;2045:447;-1:-1:-1;;;;;2045:447:25:o;293:25::-;;;;;;:::o;191:36::-;;;;;;;;;;;;;;;-1:-1:-1;;191:36:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;360:45;;;;;;;;;;;;;:::o;262:25::-;;;;;;;;;;;;;;-1:-1:-1;;262:25:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1360:329;1465:12;1443:3;-1:-1:-1;;;;;432:22:37;;;;424:31;;;;;;1535:10:25;1525:21;;;;:9;:21;;;;;;1517:38;;1548:6;1517:7;:38::i;:::-;1503:10;1493:21;;;;:9;:21;;;;;;:62;;;;-1:-1:-1;;;;;1590:14:25;;;;;;1582:31;;1606:6;1582:7;:31::i;:::-;-1:-1:-1;;;;;1565:14:25;;;;;;:9;:14;;;;;;;;;:48;;;;1628:33;;;;;;;1565:14;;1637:10;;1628:33;;;;;;;;;;-1:-1:-1;1678:4:25;;1360:329;-1:-1:-1;;;1360:329:25:o;411:66::-;;;;;;;;;;;;;;;;;;;;;;;;:::o;1239:130:37:-;1303:7;1329:8;;;;1322:16;;;;-1:-1:-1;1355:7:37;;;1239:130::o;870:152::-;934:7;965;;;989;;;;982:15;;;;1014:1;870:152;-1:-1:-1;;;870:152:37:o",
  "source": "pragma solidity ^0.4.24;\nimport '../token/ERC20Token.sol';\n\n/*\n    Test token with predefined supply\n*/\ncontract TestERC20Token is ERC20Token {\n    constructor(string _name, string _symbol, uint256 _supply)\n        public\n        ERC20Token(_name, _symbol, 0)\n    {\n        totalSupply = _supply;\n        balanceOf[msg.sender] = _supply;\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/helpers/TestERC20Token.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/helpers/TestERC20Token.sol",
    "exportedSymbols": {
      "TestERC20Token": [
        7877
      ]
    },
    "id": 7878,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7847,
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
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/ERC20Token.sol",
        "file": "../token/ERC20Token.sol",
        "id": 7848,
        "nodeType": "ImportDirective",
        "scope": 7878,
        "sourceUnit": 8311,
        "src": "25:33:21",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7849,
              "name": "ERC20Token",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8310,
              "src": "131:10:21",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Token_$8310",
                "typeString": "contract ERC20Token"
              }
            },
            "id": 7850,
            "nodeType": "InheritanceSpecifier",
            "src": "131:10:21"
          }
        ],
        "contractDependencies": [
          8310,
          8901,
          9681
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 7877,
        "linearizedBaseContracts": [
          7877,
          8310,
          9681,
          8901
        ],
        "name": "TestERC20Token",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 7875,
              "nodeType": "Block",
              "src": "264:79:21",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7866,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7864,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        8088
                      ],
                      "referencedDeclaration": 8088,
                      "src": "274:11:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7865,
                      "name": "_supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7856,
                      "src": "288:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "274:21:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 7867,
                  "nodeType": "ExpressionStatement",
                  "src": "274:21:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7873,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 7868,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          8092
                        ],
                        "referencedDeclaration": 8092,
                        "src": "305:9:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 7871,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 7869,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "315:3:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 7870,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "315:10:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "305:21:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7872,
                      "name": "_supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7856,
                      "src": "329:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "305:31:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 7874,
                  "nodeType": "ExpressionStatement",
                  "src": "305:31:21"
                }
              ]
            },
            "documentation": null,
            "id": 7876,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 7859,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7852,
                    "src": "241:5:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 7860,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7854,
                    "src": "248:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 7861,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "257:1:21",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  }
                ],
                "id": 7862,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 7858,
                  "name": "ERC20Token",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 8310,
                  "src": "230:10:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20Token_$8310_$",
                    "typeString": "type(contract ERC20Token)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "230:29:21"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7857,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7852,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 7876,
                  "src": "160:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7851,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "160:6:21",
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
                  "id": 7854,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 7876,
                  "src": "174:14:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7853,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "174:6:21",
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
                  "id": 7856,
                  "name": "_supply",
                  "nodeType": "VariableDeclaration",
                  "scope": 7876,
                  "src": "190:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7855,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "190:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "159:47:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 7863,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "264:0:21"
            },
            "scope": 7877,
            "src": "148:195:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 7878,
        "src": "104:241:21"
      }
    ],
    "src": "0:346:21"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/helpers/TestERC20Token.sol",
    "exportedSymbols": {
      "TestERC20Token": [
        7877
      ]
    },
    "id": 7878,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7847,
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
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/ERC20Token.sol",
        "file": "../token/ERC20Token.sol",
        "id": 7848,
        "nodeType": "ImportDirective",
        "scope": 7878,
        "sourceUnit": 8311,
        "src": "25:33:21",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7849,
              "name": "ERC20Token",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8310,
              "src": "131:10:21",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Token_$8310",
                "typeString": "contract ERC20Token"
              }
            },
            "id": 7850,
            "nodeType": "InheritanceSpecifier",
            "src": "131:10:21"
          }
        ],
        "contractDependencies": [
          8310,
          8901,
          9681
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 7877,
        "linearizedBaseContracts": [
          7877,
          8310,
          9681,
          8901
        ],
        "name": "TestERC20Token",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 7875,
              "nodeType": "Block",
              "src": "264:79:21",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7866,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7864,
                      "name": "totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        8088
                      ],
                      "referencedDeclaration": 8088,
                      "src": "274:11:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7865,
                      "name": "_supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7856,
                      "src": "288:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "274:21:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 7867,
                  "nodeType": "ExpressionStatement",
                  "src": "274:21:21"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7873,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 7868,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          8092
                        ],
                        "referencedDeclaration": 8092,
                        "src": "305:9:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 7871,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 7869,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "315:3:21",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 7870,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "315:10:21",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "305:21:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7872,
                      "name": "_supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7856,
                      "src": "329:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "305:31:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 7874,
                  "nodeType": "ExpressionStatement",
                  "src": "305:31:21"
                }
              ]
            },
            "documentation": null,
            "id": 7876,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 7859,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7852,
                    "src": "241:5:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 7860,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7854,
                    "src": "248:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 7861,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "257:1:21",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  }
                ],
                "id": 7862,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 7858,
                  "name": "ERC20Token",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 8310,
                  "src": "230:10:21",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20Token_$8310_$",
                    "typeString": "type(contract ERC20Token)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "230:29:21"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7857,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7852,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 7876,
                  "src": "160:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7851,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "160:6:21",
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
                  "id": 7854,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 7876,
                  "src": "174:14:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 7853,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "174:6:21",
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
                  "id": 7856,
                  "name": "_supply",
                  "nodeType": "VariableDeclaration",
                  "scope": 7876,
                  "src": "190:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7855,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "190:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "159:47:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 7863,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "264:0:21"
            },
            "scope": 7877,
            "src": "148:195:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 7878,
        "src": "104:241:21"
      }
    ],
    "src": "0:346:21"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.506Z"
}