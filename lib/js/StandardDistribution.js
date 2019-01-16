"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var StandardDistribution = exports.StandardDistribution = 
{
  "contractName": "StandardDistribution",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "supply",
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
      "name": "assetIncome",
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
      "name": "tokenURI",
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
      "inputs": [],
      "name": "valuePerToken",
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
          "name": "",
          "type": "address"
        }
      ],
      "name": "claimableIncome",
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
          "name": "",
          "type": "address"
        }
      ],
      "name": "previousValuePerToken",
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
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_sender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_paymentAmount",
          "type": "uint256"
        }
      ],
      "name": "LogIncomeReceived",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_block",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_address",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "LogIncomeCollected",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "issueDividends",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getTokenValue",
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
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getUnclaimedAmount",
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
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506106aa806100206000396000f3006080604052600436106100b95763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663047fc9aa811461014e57806318160ddd146101755780632ba1b3a11461018a5780633c130d901461019f5780633ccfd60b1461022957806370a082311461023e578063a8fa8e521461025f578063b815239514610274578063eba74e5c14610295578063ec8593be1461029f578063efcb5dea146102c0578063f1c5d6c2146102e1575b6000546100fd906100ee906100e2346d04ee2d6d415b85acef810000000063ffffffff61030216565b9063ffffffff61033816565b6004549063ffffffff61034d16565b600455600354610113903463ffffffff61034d16565b60035560408051348152905133917fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe919081900360200190a2005b34801561015a57600080fd5b5061016361035c565b60408051918252519081900360200190f35b34801561018157600080fd5b50610163610362565b34801561019657600080fd5b50610163610368565b3480156101ab57600080fd5b506101b461036e565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101ee5781810151838201526020016101d6565b50505050905090810190601f16801561021b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561023557600080fd5b506101636103f9565b34801561024a57600080fd5b50610163600160a060020a03600435166104ff565b34801561026b57600080fd5b5061016361051a565b34801561028057600080fd5b50610163600160a060020a0360043516610520565b61029d61056c565b005b3480156102ab57600080fd5b50610163600160a060020a03600435166105e6565b3480156102cc57600080fd5b50610163600160a060020a03600435166105f8565b3480156102ed57600080fd5b50610163600160a060020a036004351661060a565b6000808315156103155760009150610331565b5082820282848281151561032557fe5b041461032d57fe5b8091505b5092915050565b6000818381151561034557fe5b049392505050565b60008282018381101561032d57fe5b60005481565b60005490565b60035481565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156103f15780601f106103c6576101008083540402835291602001916103f1565b820191906000526020600020905b8154815290600101906020018083116103d457829003601f168201915b505050505081565b60003361042d6104088261060a565b600160a060020a0383166000908152600560205260409020549063ffffffff61034d16565b600160a060020a038216600090815260056020818152604080842094909455600454600682528484205533835252205461047b906d04ee2d6d415b85acef810000000063ffffffff61033816565b3360008181526005602052604080822082905551929450909184156108fc0291859190818181858888f193505050501580156104bb573d6000803e3d6000fd5b506040805142815233602082015280820184905290517f10db2ba5699bf5dbd1070a0c0b207f229dc1ecb78bbe555b84cab3db9576ac429181900360600190a15090565b600160a060020a031660009081526001602052604090205490565b60045481565b600160a060020a038116600090815260056020526040812054610566906d04ee2d6d415b85acef8100000000906100e29061055a8661060a565b9063ffffffff61034d16565b92915050565b600054610595906100ee906100e2346d04ee2d6d415b85acef810000000063ffffffff61030216565b6004556003546105ab903463ffffffff61034d16565b60035560408051348152905133917fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe919081900360200190a2565b60056020526000908152604090205481565b60066020526000908152604090205481565b600160a060020a0381166000908152600660205260408120546004548291610638919063ffffffff61066c16565b600160a060020a03841660009081526001602052604090205490915061066590829063ffffffff61030216565b9392505050565b60008282111561067857fe5b509003905600a165627a7a7230582015c1e2e36e7872fbad9fac6126f9df0c364099dbfce3389e878a7ff0958f25860029",
  "deployedBytecode": "0x6080604052600436106100b95763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663047fc9aa811461014e57806318160ddd146101755780632ba1b3a11461018a5780633c130d901461019f5780633ccfd60b1461022957806370a082311461023e578063a8fa8e521461025f578063b815239514610274578063eba74e5c14610295578063ec8593be1461029f578063efcb5dea146102c0578063f1c5d6c2146102e1575b6000546100fd906100ee906100e2346d04ee2d6d415b85acef810000000063ffffffff61030216565b9063ffffffff61033816565b6004549063ffffffff61034d16565b600455600354610113903463ffffffff61034d16565b60035560408051348152905133917fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe919081900360200190a2005b34801561015a57600080fd5b5061016361035c565b60408051918252519081900360200190f35b34801561018157600080fd5b50610163610362565b34801561019657600080fd5b50610163610368565b3480156101ab57600080fd5b506101b461036e565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101ee5781810151838201526020016101d6565b50505050905090810190601f16801561021b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561023557600080fd5b506101636103f9565b34801561024a57600080fd5b50610163600160a060020a03600435166104ff565b34801561026b57600080fd5b5061016361051a565b34801561028057600080fd5b50610163600160a060020a0360043516610520565b61029d61056c565b005b3480156102ab57600080fd5b50610163600160a060020a03600435166105e6565b3480156102cc57600080fd5b50610163600160a060020a03600435166105f8565b3480156102ed57600080fd5b50610163600160a060020a036004351661060a565b6000808315156103155760009150610331565b5082820282848281151561032557fe5b041461032d57fe5b8091505b5092915050565b6000818381151561034557fe5b049392505050565b60008282018381101561032d57fe5b60005481565b60005490565b60035481565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156103f15780601f106103c6576101008083540402835291602001916103f1565b820191906000526020600020905b8154815290600101906020018083116103d457829003601f168201915b505050505081565b60003361042d6104088261060a565b600160a060020a0383166000908152600560205260409020549063ffffffff61034d16565b600160a060020a038216600090815260056020818152604080842094909455600454600682528484205533835252205461047b906d04ee2d6d415b85acef810000000063ffffffff61033816565b3360008181526005602052604080822082905551929450909184156108fc0291859190818181858888f193505050501580156104bb573d6000803e3d6000fd5b506040805142815233602082015280820184905290517f10db2ba5699bf5dbd1070a0c0b207f229dc1ecb78bbe555b84cab3db9576ac429181900360600190a15090565b600160a060020a031660009081526001602052604090205490565b60045481565b600160a060020a038116600090815260056020526040812054610566906d04ee2d6d415b85acef8100000000906100e29061055a8661060a565b9063ffffffff61034d16565b92915050565b600054610595906100ee906100e2346d04ee2d6d415b85acef810000000063ffffffff61030216565b6004556003546105ab903463ffffffff61034d16565b60035560408051348152905133917fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe919081900360200190a2565b60056020526000908152604090205481565b60066020526000908152604090205481565b600160a060020a0381166000908152600660205260408120546004548291610638919063ffffffff61066c16565b600160a060020a03841660009081526001602052604090205490915061066590829063ffffffff61030216565b9392505050565b60008282111561067857fe5b509003905600a165627a7a7230582015c1e2e36e7872fbad9fac6126f9df0c364099dbfce3389e878a7ff0958f25860029",
  "sourceMap": "490:3793:65:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;490:3793:65;;;;;;;",
  "deployedSourceMap": "490:3793:65:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2221:6;;2170:59;;2188:40;;:28;:9;795:4;2188:28;:13;:28;:::i;:::-;:32;:40;:32;:40;:::i;:::-;2170:13;;;:59;:17;:59;:::i;:::-;2154:13;:75;2251:11;;:26;;2267:9;2251:26;:15;:26;:::i;:::-;2237:11;:40;2290;;;2320:9;2290:40;;;;2308:10;;2290:40;;;;;;;;;;490:3793;552:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;552:18:65;;;;;;;;;;;;;;;;;;;;3134:77;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3134:77:65;;;;803:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;803:23:65;;;;622:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;622:22:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;622:22:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1044:294;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1044:294:65;;;;3215:99;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3215:99:65;-1:-1:-1;;;;;3215:99:65;;;;;830:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;830:25:65;;;;2965:165;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2965:165:65;-1:-1:-1;;;;;2965:165:65;;;;;1795:234;;;;;;860:48;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;860:48:65;-1:-1:-1;;;;;860:48:65;;;;;912:54;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;912:54:65;-1:-1:-1;;;;;912:54:65;;;;;2649:221;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2649:221:65;-1:-1:-1;;;;;2649:221:65;;;;;311:173:42;369:7;;388:6;;384:35;;;411:1;404:8;;;;384:35;-1:-1:-1;436:5:42;;;440:1;436;:5;454;;;;;;;;:10;447:18;;;;478:1;471:8;;311:173;;;;;;:::o;559:272::-;617:7;825:1;821;:5;;;;;;;;;559:272;-1:-1:-1;;;559:272:42:o;1101:129::-;1159:7;1186:5;;;1204:6;;;;1197:14;;;552:18:65;;;;:::o;3134:77::-;3178:7;3200:6;3134:77;:::o;803:23::-;;;;:::o;622:22::-;;;;;;;;;;;;;;-1:-1:-1;;622:22:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1044:294::-;1120:12;1097:10;3765:48;3792:20;3806:5;3792:13;:20::i;:::-;-1:-1:-1;;;;;3765:22:65;;;;;;:15;:22;;;;;;;:48;:26;:48;:::i;:::-;-1:-1:-1;;;;;3740:22:65;;;;;;:15;:22;;;;;;;;:73;;;;3852:13;;3821:21;:28;;;;;:44;1168:10;1152:27;;;;;:46;;795:4;1152:46;:31;:46;:::i;:::-;1229:10;1213:27;;;;:15;:27;;;;;;1206:34;;;1248:28;1142:56;;-1:-1:-1;1229:10:65;;1248:28;;;;;1142:56;;1248:28;;1213:27;1248:28;1142:56;1229:10;1248:28;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;1289:44:65;;;1308:3;1289:44;;1313:10;1289:44;;;;;;;;;;;;;;;;;;;;;1044:294;;:::o;3215:99::-;-1:-1:-1;;;;;3293:16:65;3271:7;3293:16;;;:8;:16;;;;;;;3215:99::o;830:25::-;;;;:::o;2965:165::-;-1:-1:-1;;;;;3082:22:65;;3035:4;3082:22;;;:15;:22;;;;;;3057:67;;795:4;;3057:48;;:20;3098:5;3057:13;:20::i;:::-;:24;:48;:24;:48;:::i;:67::-;3049:76;2965:165;-1:-1:-1;;2965:165:65:o;1795:234::-;1915:6;;1864:59;;1882:40;;:28;:9;795:4;1882:28;:13;:28;:::i;1864:59::-;1848:13;:75;1945:11;;:26;;1961:9;1945:26;:15;:26;:::i;:::-;1931:11;:40;1984;;;2014:9;1984:40;;;;2002:10;;1984:40;;;;;;;;;;1795:234::o;860:48::-;;;;;;;;;;;;;:::o;912:54::-;;;;;;;;;;;;;:::o;2649:221::-;-1:-1:-1;;;;;2777:28:65;;2714:4;2777:28;;;:21;:28;;;;;;2759:13;;2714:4;;2759:47;;:13;:47;:17;:47;:::i;:::-;-1:-1:-1;;;;;2849:15:65;;;;;;:8;:15;;;;;;2728:78;;-1:-1:-1;2821:44:65;;2728:78;;2821:44;:27;:44;:::i;:::-;2814:51;2649:221;-1:-1:-1;;;2649:221:65:o;936:110:42:-;994:7;1016:6;;;;1009:14;;;;-1:-1:-1;1036:5:42;;;936:110::o",
  "source": "pragma solidity ^0.4.24;\n\nimport '../../math/SafeMath.sol';\nimport '../../interfaces/PullPayment.sol';\n\n\n// @title Non-Transferable ERC20 token contract with shared revenue distribution functionality.\n// @notice This token contract can receive payments in the fallback function and token owners can withdraw their share\n// @author Kyle Dewhurst, MyBitFoundation\n// Credit goes to Nick Johnson for the dividend token https://medium.com/@weka/dividend-bearing-tokens-on-ethereum-42d01c710657\ncontract StandardDistribution{\n  using SafeMath for uint;\n\n\n  uint public supply;\n  mapping (address => uint) internal balances;\n\n  string public tokenURI;                 // A reference to a URI containing further token information\n\n\n  // @notice Token Income Information\n  uint constant scalingFactor = 1e32;\n  uint public assetIncome;\n  uint public valuePerToken;\n\n  mapping (address => uint) public claimableIncome;\n  mapping (address => uint) public previousValuePerToken;\n\n\n  // @notice Updates claimableIncome, sends all wei to the token holder\n  function withdraw()\n  public\n  updateclaimableIncome(msg.sender)\n  returns (uint _amount) {\n      _amount = claimableIncome[msg.sender].div(scalingFactor);\n      delete claimableIncome[msg.sender];\n      msg.sender.transfer(_amount);\n      emit LogIncomeCollected(now, msg.sender, _amount);\n  }\n/*\n  // @notice allows beneficiaries to withdraw from contracts at different locations to be re-distributed here\n  // @dev can call withdraw() on any address if there are no parameters required. Fallback function will be triggered\n  // @param (address) _contractAddress = The address to call withdraw() on.\n  function getFunds(address _contractAddress)\n  external\n  returns (bool) {\n    PullPayment(_contractAddress).withdraw();\n    return true;\n  }\n\n*/\n  function issueDividends()\n  payable\n  public {\n      valuePerToken = valuePerToken.add(msg.value.mul(scalingFactor).div(supply));\n      assetIncome = assetIncome.add(msg.value);\n      emit LogIncomeReceived(msg.sender, msg.value);\n  }\n\n    // Fallback function: Accepts Ether and updates ledger (issues dividends)\n  function ()\n    payable\n    public {\n      valuePerToken = valuePerToken.add(msg.value.mul(scalingFactor).div(supply));\n      assetIncome = assetIncome.add(msg.value);\n      emit LogIncomeReceived(msg.sender, msg.value);\n  }\n\n  // ------------------------------------------------------------------------------------------------\n  //                                   View Functions\n  // ------------------------------------------------------------------------------------------------\n\n  // @notice Calculates how much value _user holds\n  function getTokenValue(address _user)\n  public\n  view\n  returns (uint) {\n      uint valuePerTokenDifference = valuePerToken.sub(previousValuePerToken[_user]);\n      return valuePerTokenDifference.mul(balances[_user]);\n  }\n\n  // @notice Calculates how much wei user is owed. (new income + claimableIncome) / 10**32\n  function getUnclaimedAmount(address _user)\n  public\n  view\n  returns (uint) {\n      return (getTokenValue(_user).add(claimableIncome[_user]).div(scalingFactor));\n  }\n\n  function totalSupply() public view returns (uint256) {\n    return supply;\n  }\n\n  function balanceOf(address _owner) public view returns (uint256) {\n    return balances[_owner];\n  }\n\n  // ------------------------------------------------------------------------------------------------\n  //                                   Modifiers\n  // ------------------------------------------------------------------------------------------------\n\n  // Updates the amount owed to user while holding tokenSupply\n  // @dev must be called before transfering tokens\n  modifier updateclaimableIncome(address _user) {\n      claimableIncome[_user] = claimableIncome[_user].add(getTokenValue(_user));\n      previousValuePerToken[_user] = valuePerToken;\n      _;\n  }\n\n\n  // ------------------------------------------------------------------------------------------------\n  //                                     Events\n  // ------------------------------------------------------------------------------------------------\n\n  event LogIncomeReceived(address indexed _sender, uint _paymentAmount);\n  event LogIncomeCollected(uint _block, address _address, uint _amount);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/StandardDistribution.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/StandardDistribution.sol",
    "exportedSymbols": {
      "StandardDistribution": [
        17682
      ]
    },
    "id": 17683,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17442,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:65"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 17443,
        "nodeType": "ImportDirective",
        "scope": 17683,
        "sourceUnit": 8864,
        "src": "26:33:65",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/PullPayment.sol",
        "file": "../../interfaces/PullPayment.sol",
        "id": 17444,
        "nodeType": "ImportDirective",
        "scope": 17683,
        "sourceUnit": 8704,
        "src": "60:42:65",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 17682,
        "linearizedBaseContracts": [
          17682
        ],
        "name": "StandardDistribution",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 17447,
            "libraryName": {
              "contractScope": null,
              "id": 17445,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8863,
              "src": "529:8:65",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$8863",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "523:24:65",
            "typeName": {
              "id": 17446,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "542:4:65",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 17449,
            "name": "supply",
            "nodeType": "VariableDeclaration",
            "scope": 17682,
            "src": "552:18:65",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 17448,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "552:4:65",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 17453,
            "name": "balances",
            "nodeType": "VariableDeclaration",
            "scope": 17682,
            "src": "574:43:65",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 17452,
              "keyType": {
                "id": 17450,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "583:7:65",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "574:25:65",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 17451,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "594:4:65",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 17455,
            "name": "tokenURI",
            "nodeType": "VariableDeclaration",
            "scope": 17682,
            "src": "622:22:65",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 17454,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "622:6:65",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 17458,
            "name": "scalingFactor",
            "nodeType": "VariableDeclaration",
            "scope": 17682,
            "src": "765:34:65",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 17456,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "765:4:65",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31653332",
              "id": 17457,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "795:4:65",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100000000000000000000000000000000_by_1",
                "typeString": "int_const 1000...(25 digits omitted)...0000"
              },
              "value": "1e32"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 17460,
            "name": "assetIncome",
            "nodeType": "VariableDeclaration",
            "scope": 17682,
            "src": "803:23:65",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 17459,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "803:4:65",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 17462,
            "name": "valuePerToken",
            "nodeType": "VariableDeclaration",
            "scope": 17682,
            "src": "830:25:65",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 17461,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "830:4:65",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 17466,
            "name": "claimableIncome",
            "nodeType": "VariableDeclaration",
            "scope": 17682,
            "src": "860:48:65",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 17465,
              "keyType": {
                "id": 17463,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "869:7:65",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "860:25:65",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 17464,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "880:4:65",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 17470,
            "name": "previousValuePerToken",
            "nodeType": "VariableDeclaration",
            "scope": 17682,
            "src": "912:54:65",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 17469,
              "keyType": {
                "id": 17467,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "921:7:65",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "912:25:65",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 17468,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "932:4:65",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17510,
              "nodeType": "Block",
              "src": "1134:204:65",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17487,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 17479,
                      "name": "_amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17477,
                      "src": "1142:7:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 17485,
                          "name": "scalingFactor",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17458,
                          "src": "1184:13:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 17480,
                            "name": "claimableIncome",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17466,
                            "src": "1152:15:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 17483,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 17481,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20967,
                              "src": "1168:3:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 17482,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1168:10:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1152:27:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17484,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "div",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8800,
                        "src": "1152:31:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17486,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1152:46:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1142:56:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17488,
                  "nodeType": "ExpressionStatement",
                  "src": "1142:56:65"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17493,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "1206:34:65",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 17489,
                        "name": "claimableIncome",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17466,
                        "src": "1213:15:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 17492,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17490,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "1229:3:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17491,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1229:10:65",
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
                      "src": "1213:27:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17494,
                  "nodeType": "ExpressionStatement",
                  "src": "1206:34:65"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 17500,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17477,
                        "src": "1268:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17495,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "1248:3:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17498,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1248:10:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 17499,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1248:19:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 17501,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1248:28:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17502,
                  "nodeType": "ExpressionStatement",
                  "src": "1248:28:65"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 17504,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20969,
                        "src": "1308:3:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17505,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "1313:3:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17506,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1313:10:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 17507,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17477,
                        "src": "1325:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 17503,
                      "name": "LogIncomeCollected",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17681,
                      "src": "1289:18:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,address,uint256)"
                      }
                    },
                    "id": 17508,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1289:44:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17509,
                  "nodeType": "EmitStatement",
                  "src": "1284:49:65"
                }
              ]
            },
            "documentation": null,
            "id": 17511,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 17473,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20967,
                      "src": "1097:3:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 17474,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1097:10:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 17475,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 17472,
                  "name": "updateclaimableIncome",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 17667,
                  "src": "1075:21:65",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1075:33:65"
              }
            ],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17471,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1061:2:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17478,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17477,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17511,
                  "src": "1120:12:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17476,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1120:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1119:14:65"
            },
            "scope": 17682,
            "src": "1044:294:65",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17543,
              "nodeType": "Block",
              "src": "1840:189:65",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17526,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 17514,
                      "name": "valuePerToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17462,
                      "src": "1848:13:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 17523,
                              "name": "supply",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17449,
                              "src": "1915:6:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 17520,
                                  "name": "scalingFactor",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 17458,
                                  "src": "1896:13:65",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 17517,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20967,
                                    "src": "1882:3:65",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 17518,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1882:9:65",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 17519,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "mul",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8786,
                                "src": "1882:13:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 17521,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1882:28:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 17522,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "div",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8800,
                            "src": "1882:32:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 17524,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1882:40:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 17515,
                          "name": "valuePerToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17462,
                          "src": "1864:13:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17516,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8844,
                        "src": "1864:17:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17525,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1864:59:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1848:75:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17527,
                  "nodeType": "ExpressionStatement",
                  "src": "1848:75:65"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17534,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 17528,
                      "name": "assetIncome",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17460,
                      "src": "1931:11:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 17531,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20967,
                            "src": "1961:3:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 17532,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1961:9:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 17529,
                          "name": "assetIncome",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17460,
                          "src": "1945:11:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17530,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8844,
                        "src": "1945:15:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17533,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1945:26:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1931:40:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17535,
                  "nodeType": "ExpressionStatement",
                  "src": "1931:40:65"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17537,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "2002:3:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17538,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2002:10:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17539,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "2014:3:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17540,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2014:9:65",
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
                      "id": 17536,
                      "name": "LogIncomeReceived",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17673,
                      "src": "1984:17:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 17541,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1984:40:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17542,
                  "nodeType": "EmitStatement",
                  "src": "1979:45:65"
                }
              ]
            },
            "documentation": null,
            "id": 17544,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17512,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1818:2:65"
            },
            "payable": true,
            "returnParameters": {
              "id": 17513,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1840:0:65"
            },
            "scope": 17682,
            "src": "1795:234:65",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17576,
              "nodeType": "Block",
              "src": "2146:189:65",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17559,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 17547,
                      "name": "valuePerToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17462,
                      "src": "2154:13:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 17556,
                              "name": "supply",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17449,
                              "src": "2221:6:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 17553,
                                  "name": "scalingFactor",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 17458,
                                  "src": "2202:13:65",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 17550,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20967,
                                    "src": "2188:3:65",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 17551,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2188:9:65",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 17552,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "mul",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8786,
                                "src": "2188:13:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 17554,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2188:28:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 17555,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "div",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8800,
                            "src": "2188:32:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 17557,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2188:40:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 17548,
                          "name": "valuePerToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17462,
                          "src": "2170:13:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17549,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8844,
                        "src": "2170:17:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17558,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2170:59:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2154:75:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17560,
                  "nodeType": "ExpressionStatement",
                  "src": "2154:75:65"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17567,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 17561,
                      "name": "assetIncome",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17460,
                      "src": "2237:11:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 17564,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20967,
                            "src": "2267:3:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 17565,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2267:9:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 17562,
                          "name": "assetIncome",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17460,
                          "src": "2251:11:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17563,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8844,
                        "src": "2251:15:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17566,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2251:26:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2237:40:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17568,
                  "nodeType": "ExpressionStatement",
                  "src": "2237:40:65"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17570,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "2308:3:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17571,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2308:10:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17572,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "2320:3:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17573,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2320:9:65",
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
                      "id": 17569,
                      "name": "LogIncomeReceived",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17673,
                      "src": "2290:17:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 17574,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2290:40:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17575,
                  "nodeType": "EmitStatement",
                  "src": "2285:45:65"
                }
              ]
            },
            "documentation": null,
            "id": 17577,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17545,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2120:2:65"
            },
            "payable": true,
            "returnParameters": {
              "id": 17546,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2146:0:65"
            },
            "scope": 17682,
            "src": "2111:224:65",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17600,
              "nodeType": "Block",
              "src": "2720:150:65",
              "statements": [
                {
                  "assignments": [
                    17585
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17585,
                      "name": "valuePerTokenDifference",
                      "nodeType": "VariableDeclaration",
                      "scope": 17601,
                      "src": "2728:28:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 17584,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2728:4:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 17592,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 17588,
                          "name": "previousValuePerToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17470,
                          "src": "2777:21:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 17590,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 17589,
                          "name": "_user",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17579,
                          "src": "2799:5:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2777:28:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 17586,
                        "name": "valuePerToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17462,
                        "src": "2759:13:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 17587,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8820,
                      "src": "2759:17:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 17591,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2759:47:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2728:78:65"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 17595,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17453,
                          "src": "2849:8:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 17597,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 17596,
                          "name": "_user",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17579,
                          "src": "2858:5:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2849:15:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 17593,
                        "name": "valuePerTokenDifference",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17585,
                        "src": "2821:23:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 17594,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8786,
                      "src": "2821:27:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 17598,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2821:44:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 17583,
                  "id": 17599,
                  "nodeType": "Return",
                  "src": "2814:51:65"
                }
              ]
            },
            "documentation": null,
            "id": 17601,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTokenValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17580,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17579,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 17601,
                  "src": "2672:13:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17578,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2672:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2671:15:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17583,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17582,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17601,
                  "src": "2714:4:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17581,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2714:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2713:6:65"
            },
            "scope": 17682,
            "src": "2649:221:65",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17621,
              "nodeType": "Block",
              "src": "3041:89:65",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 17617,
                            "name": "scalingFactor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17458,
                            "src": "3110:13:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 17612,
                                  "name": "claimableIncome",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 17466,
                                  "src": "3082:15:65",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 17614,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 17613,
                                  "name": "_user",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 17603,
                                  "src": "3098:5:65",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "3082:22:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 17609,
                                    "name": "_user",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 17603,
                                    "src": "3071:5:65",
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
                                  "id": 17608,
                                  "name": "getTokenValue",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 17601,
                                  "src": "3057:13:65",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                                    "typeString": "function (address) view returns (uint256)"
                                  }
                                },
                                "id": 17610,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3057:20:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 17611,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8844,
                              "src": "3057:24:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 17615,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3057:48:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 17616,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "div",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8800,
                          "src": "3057:52:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 17618,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3057:67:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 17619,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "3056:69:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 17607,
                  "id": 17620,
                  "nodeType": "Return",
                  "src": "3049:76:65"
                }
              ]
            },
            "documentation": null,
            "id": 17622,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUnclaimedAmount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17604,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17603,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 17622,
                  "src": "2993:13:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17602,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2993:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2992:15:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17607,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17606,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17622,
                  "src": "3035:4:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17605,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3035:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3034:6:65"
            },
            "scope": 17682,
            "src": "2965:165:65",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17629,
              "nodeType": "Block",
              "src": "3187:24:65",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17627,
                    "name": "supply",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 17449,
                    "src": "3200:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 17626,
                  "id": 17628,
                  "nodeType": "Return",
                  "src": "3193:13:65"
                }
              ]
            },
            "documentation": null,
            "id": 17630,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17623,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3154:2:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17626,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17625,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17630,
                  "src": "3178:7:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17624,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3178:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3177:9:65"
            },
            "scope": 17682,
            "src": "3134:77:65",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17641,
              "nodeType": "Block",
              "src": "3280:34:65",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 17637,
                      "name": "balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17453,
                      "src": "3293:8:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 17639,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 17638,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17632,
                      "src": "3302:6:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3293:16:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 17636,
                  "id": 17640,
                  "nodeType": "Return",
                  "src": "3286:23:65"
                }
              ]
            },
            "documentation": null,
            "id": 17642,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17632,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 17642,
                  "src": "3234:14:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17631,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3234:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3233:16:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17636,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17635,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17642,
                  "src": "3271:7:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17634,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3271:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3270:9:65"
            },
            "scope": 17682,
            "src": "3215:99:65",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17666,
              "nodeType": "Block",
              "src": "3732:147:65",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17657,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 17646,
                        "name": "claimableIncome",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17466,
                        "src": "3740:15:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 17648,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 17647,
                        "name": "_user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17644,
                        "src": "3756:5:65",
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
                      "src": "3740:22:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 17654,
                              "name": "_user",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17644,
                              "src": "3806:5:65",
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
                            "id": 17653,
                            "name": "getTokenValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17601,
                            "src": "3792:13:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 17655,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3792:20:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 17649,
                            "name": "claimableIncome",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17466,
                            "src": "3765:15:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 17651,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 17650,
                            "name": "_user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17644,
                            "src": "3781:5:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3765:22:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17652,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8844,
                        "src": "3765:26:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17656,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3765:48:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3740:73:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17658,
                  "nodeType": "ExpressionStatement",
                  "src": "3740:73:65"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17663,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 17659,
                        "name": "previousValuePerToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17470,
                        "src": "3821:21:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 17661,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 17660,
                        "name": "_user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17644,
                        "src": "3843:5:65",
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
                      "src": "3821:28:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 17662,
                      "name": "valuePerToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17462,
                      "src": "3852:13:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3821:44:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17664,
                  "nodeType": "ExpressionStatement",
                  "src": "3821:44:65"
                },
                {
                  "id": 17665,
                  "nodeType": "PlaceholderStatement",
                  "src": "3873:1:65"
                }
              ]
            },
            "documentation": null,
            "id": 17667,
            "name": "updateclaimableIncome",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 17645,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17644,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 17667,
                  "src": "3717:13:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17643,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3717:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3716:15:65"
            },
            "src": "3686:193:65",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 17673,
            "name": "LogIncomeReceived",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 17672,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17669,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 17673,
                  "src": "4161:23:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17668,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4161:7:65",
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
                  "id": 17671,
                  "indexed": false,
                  "name": "_paymentAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17673,
                  "src": "4186:19:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17670,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4186:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4160:46:65"
            },
            "src": "4137:70:65"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 17681,
            "name": "LogIncomeCollected",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 17680,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17675,
                  "indexed": false,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 17681,
                  "src": "4235:11:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17674,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4235:4:65",
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
                  "id": 17677,
                  "indexed": false,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 17681,
                  "src": "4248:16:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17676,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4248:7:65",
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
                  "id": 17679,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17681,
                  "src": "4266:12:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17678,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4266:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4234:45:65"
            },
            "src": "4210:70:65"
          }
        ],
        "scope": 17683,
        "src": "490:3793:65"
      }
    ],
    "src": "0:4284:65"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/StandardDistribution.sol",
    "exportedSymbols": {
      "StandardDistribution": [
        17682
      ]
    },
    "id": 17683,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 17442,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:65"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 17443,
        "nodeType": "ImportDirective",
        "scope": 17683,
        "sourceUnit": 8864,
        "src": "26:33:65",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/PullPayment.sol",
        "file": "../../interfaces/PullPayment.sol",
        "id": 17444,
        "nodeType": "ImportDirective",
        "scope": 17683,
        "sourceUnit": 8704,
        "src": "60:42:65",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 17682,
        "linearizedBaseContracts": [
          17682
        ],
        "name": "StandardDistribution",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 17447,
            "libraryName": {
              "contractScope": null,
              "id": 17445,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8863,
              "src": "529:8:65",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$8863",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "523:24:65",
            "typeName": {
              "id": 17446,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "542:4:65",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 17449,
            "name": "supply",
            "nodeType": "VariableDeclaration",
            "scope": 17682,
            "src": "552:18:65",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 17448,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "552:4:65",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 17453,
            "name": "balances",
            "nodeType": "VariableDeclaration",
            "scope": 17682,
            "src": "574:43:65",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 17452,
              "keyType": {
                "id": 17450,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "583:7:65",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "574:25:65",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 17451,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "594:4:65",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 17455,
            "name": "tokenURI",
            "nodeType": "VariableDeclaration",
            "scope": 17682,
            "src": "622:22:65",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 17454,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "622:6:65",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 17458,
            "name": "scalingFactor",
            "nodeType": "VariableDeclaration",
            "scope": 17682,
            "src": "765:34:65",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 17456,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "765:4:65",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31653332",
              "id": 17457,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "795:4:65",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100000000000000000000000000000000_by_1",
                "typeString": "int_const 1000...(25 digits omitted)...0000"
              },
              "value": "1e32"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 17460,
            "name": "assetIncome",
            "nodeType": "VariableDeclaration",
            "scope": 17682,
            "src": "803:23:65",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 17459,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "803:4:65",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 17462,
            "name": "valuePerToken",
            "nodeType": "VariableDeclaration",
            "scope": 17682,
            "src": "830:25:65",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 17461,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "830:4:65",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 17466,
            "name": "claimableIncome",
            "nodeType": "VariableDeclaration",
            "scope": 17682,
            "src": "860:48:65",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 17465,
              "keyType": {
                "id": 17463,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "869:7:65",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "860:25:65",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 17464,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "880:4:65",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 17470,
            "name": "previousValuePerToken",
            "nodeType": "VariableDeclaration",
            "scope": 17682,
            "src": "912:54:65",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 17469,
              "keyType": {
                "id": 17467,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "921:7:65",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "912:25:65",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 17468,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "932:4:65",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17510,
              "nodeType": "Block",
              "src": "1134:204:65",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17487,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 17479,
                      "name": "_amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17477,
                      "src": "1142:7:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 17485,
                          "name": "scalingFactor",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17458,
                          "src": "1184:13:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 17480,
                            "name": "claimableIncome",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17466,
                            "src": "1152:15:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 17483,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 17481,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20967,
                              "src": "1168:3:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 17482,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1168:10:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1152:27:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17484,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "div",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8800,
                        "src": "1152:31:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17486,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1152:46:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1142:56:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17488,
                  "nodeType": "ExpressionStatement",
                  "src": "1142:56:65"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17493,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "1206:34:65",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 17489,
                        "name": "claimableIncome",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17466,
                        "src": "1213:15:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 17492,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17490,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "1229:3:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17491,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1229:10:65",
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
                      "src": "1213:27:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17494,
                  "nodeType": "ExpressionStatement",
                  "src": "1206:34:65"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 17500,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17477,
                        "src": "1268:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17495,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "1248:3:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17498,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1248:10:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 17499,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1248:19:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 17501,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1248:28:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17502,
                  "nodeType": "ExpressionStatement",
                  "src": "1248:28:65"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 17504,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20969,
                        "src": "1308:3:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17505,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "1313:3:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17506,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1313:10:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 17507,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17477,
                        "src": "1325:7:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 17503,
                      "name": "LogIncomeCollected",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17681,
                      "src": "1289:18:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,address,uint256)"
                      }
                    },
                    "id": 17508,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1289:44:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17509,
                  "nodeType": "EmitStatement",
                  "src": "1284:49:65"
                }
              ]
            },
            "documentation": null,
            "id": 17511,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 17473,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20967,
                      "src": "1097:3:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 17474,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1097:10:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 17475,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 17472,
                  "name": "updateclaimableIncome",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 17667,
                  "src": "1075:21:65",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1075:33:65"
              }
            ],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17471,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1061:2:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17478,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17477,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17511,
                  "src": "1120:12:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17476,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1120:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1119:14:65"
            },
            "scope": 17682,
            "src": "1044:294:65",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17543,
              "nodeType": "Block",
              "src": "1840:189:65",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17526,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 17514,
                      "name": "valuePerToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17462,
                      "src": "1848:13:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 17523,
                              "name": "supply",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17449,
                              "src": "1915:6:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 17520,
                                  "name": "scalingFactor",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 17458,
                                  "src": "1896:13:65",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 17517,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20967,
                                    "src": "1882:3:65",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 17518,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1882:9:65",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 17519,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "mul",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8786,
                                "src": "1882:13:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 17521,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1882:28:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 17522,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "div",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8800,
                            "src": "1882:32:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 17524,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1882:40:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 17515,
                          "name": "valuePerToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17462,
                          "src": "1864:13:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17516,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8844,
                        "src": "1864:17:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17525,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1864:59:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1848:75:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17527,
                  "nodeType": "ExpressionStatement",
                  "src": "1848:75:65"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17534,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 17528,
                      "name": "assetIncome",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17460,
                      "src": "1931:11:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 17531,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20967,
                            "src": "1961:3:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 17532,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1961:9:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 17529,
                          "name": "assetIncome",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17460,
                          "src": "1945:11:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17530,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8844,
                        "src": "1945:15:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17533,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1945:26:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1931:40:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17535,
                  "nodeType": "ExpressionStatement",
                  "src": "1931:40:65"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17537,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "2002:3:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17538,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2002:10:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17539,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "2014:3:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17540,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2014:9:65",
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
                      "id": 17536,
                      "name": "LogIncomeReceived",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17673,
                      "src": "1984:17:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 17541,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1984:40:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17542,
                  "nodeType": "EmitStatement",
                  "src": "1979:45:65"
                }
              ]
            },
            "documentation": null,
            "id": 17544,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17512,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1818:2:65"
            },
            "payable": true,
            "returnParameters": {
              "id": 17513,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1840:0:65"
            },
            "scope": 17682,
            "src": "1795:234:65",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17576,
              "nodeType": "Block",
              "src": "2146:189:65",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17559,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 17547,
                      "name": "valuePerToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17462,
                      "src": "2154:13:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 17556,
                              "name": "supply",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17449,
                              "src": "2221:6:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 17553,
                                  "name": "scalingFactor",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 17458,
                                  "src": "2202:13:65",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 17550,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20967,
                                    "src": "2188:3:65",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 17551,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2188:9:65",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 17552,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "mul",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8786,
                                "src": "2188:13:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 17554,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2188:28:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 17555,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "div",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8800,
                            "src": "2188:32:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 17557,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2188:40:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 17548,
                          "name": "valuePerToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17462,
                          "src": "2170:13:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17549,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8844,
                        "src": "2170:17:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17558,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2170:59:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2154:75:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17560,
                  "nodeType": "ExpressionStatement",
                  "src": "2154:75:65"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17567,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 17561,
                      "name": "assetIncome",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17460,
                      "src": "2237:11:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 17564,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20967,
                            "src": "2267:3:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 17565,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2267:9:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 17562,
                          "name": "assetIncome",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17460,
                          "src": "2251:11:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17563,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8844,
                        "src": "2251:15:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17566,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2251:26:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2237:40:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17568,
                  "nodeType": "ExpressionStatement",
                  "src": "2237:40:65"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17570,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "2308:3:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17571,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2308:10:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 17572,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "2320:3:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17573,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2320:9:65",
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
                      "id": 17569,
                      "name": "LogIncomeReceived",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17673,
                      "src": "2290:17:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 17574,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2290:40:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 17575,
                  "nodeType": "EmitStatement",
                  "src": "2285:45:65"
                }
              ]
            },
            "documentation": null,
            "id": 17577,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17545,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2120:2:65"
            },
            "payable": true,
            "returnParameters": {
              "id": 17546,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2146:0:65"
            },
            "scope": 17682,
            "src": "2111:224:65",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17600,
              "nodeType": "Block",
              "src": "2720:150:65",
              "statements": [
                {
                  "assignments": [
                    17585
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 17585,
                      "name": "valuePerTokenDifference",
                      "nodeType": "VariableDeclaration",
                      "scope": 17601,
                      "src": "2728:28:65",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 17584,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2728:4:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 17592,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 17588,
                          "name": "previousValuePerToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17470,
                          "src": "2777:21:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 17590,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 17589,
                          "name": "_user",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17579,
                          "src": "2799:5:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2777:28:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 17586,
                        "name": "valuePerToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17462,
                        "src": "2759:13:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 17587,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8820,
                      "src": "2759:17:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 17591,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2759:47:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2728:78:65"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 17595,
                          "name": "balances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17453,
                          "src": "2849:8:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 17597,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 17596,
                          "name": "_user",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17579,
                          "src": "2858:5:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2849:15:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 17593,
                        "name": "valuePerTokenDifference",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17585,
                        "src": "2821:23:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 17594,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mul",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8786,
                      "src": "2821:27:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 17598,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2821:44:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 17583,
                  "id": 17599,
                  "nodeType": "Return",
                  "src": "2814:51:65"
                }
              ]
            },
            "documentation": null,
            "id": 17601,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTokenValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17580,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17579,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 17601,
                  "src": "2672:13:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17578,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2672:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2671:15:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17583,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17582,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17601,
                  "src": "2714:4:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17581,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2714:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2713:6:65"
            },
            "scope": 17682,
            "src": "2649:221:65",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17621,
              "nodeType": "Block",
              "src": "3041:89:65",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 17617,
                            "name": "scalingFactor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17458,
                            "src": "3110:13:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 17612,
                                  "name": "claimableIncome",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 17466,
                                  "src": "3082:15:65",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                  }
                                },
                                "id": 17614,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 17613,
                                  "name": "_user",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 17603,
                                  "src": "3098:5:65",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "3082:22:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 17609,
                                    "name": "_user",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 17603,
                                    "src": "3071:5:65",
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
                                  "id": 17608,
                                  "name": "getTokenValue",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 17601,
                                  "src": "3057:13:65",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                                    "typeString": "function (address) view returns (uint256)"
                                  }
                                },
                                "id": 17610,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3057:20:65",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 17611,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8844,
                              "src": "3057:24:65",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 17615,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3057:48:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 17616,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "div",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8800,
                          "src": "3057:52:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 17618,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3057:67:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 17619,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "3056:69:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 17607,
                  "id": 17620,
                  "nodeType": "Return",
                  "src": "3049:76:65"
                }
              ]
            },
            "documentation": null,
            "id": 17622,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUnclaimedAmount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17604,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17603,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 17622,
                  "src": "2993:13:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17602,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2993:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2992:15:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17607,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17606,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17622,
                  "src": "3035:4:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17605,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3035:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3034:6:65"
            },
            "scope": 17682,
            "src": "2965:165:65",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17629,
              "nodeType": "Block",
              "src": "3187:24:65",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17627,
                    "name": "supply",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 17449,
                    "src": "3200:6:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 17626,
                  "id": 17628,
                  "nodeType": "Return",
                  "src": "3193:13:65"
                }
              ]
            },
            "documentation": null,
            "id": 17630,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17623,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3154:2:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17626,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17625,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17630,
                  "src": "3178:7:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17624,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3178:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3177:9:65"
            },
            "scope": 17682,
            "src": "3134:77:65",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17641,
              "nodeType": "Block",
              "src": "3280:34:65",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 17637,
                      "name": "balances",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17453,
                      "src": "3293:8:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 17639,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 17638,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17632,
                      "src": "3302:6:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3293:16:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 17636,
                  "id": 17640,
                  "nodeType": "Return",
                  "src": "3286:23:65"
                }
              ]
            },
            "documentation": null,
            "id": 17642,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17632,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 17642,
                  "src": "3234:14:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17631,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3234:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3233:16:65"
            },
            "payable": false,
            "returnParameters": {
              "id": 17636,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17635,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 17642,
                  "src": "3271:7:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17634,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3271:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3270:9:65"
            },
            "scope": 17682,
            "src": "3215:99:65",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 17666,
              "nodeType": "Block",
              "src": "3732:147:65",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17657,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 17646,
                        "name": "claimableIncome",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17466,
                        "src": "3740:15:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 17648,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 17647,
                        "name": "_user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17644,
                        "src": "3756:5:65",
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
                      "src": "3740:22:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 17654,
                              "name": "_user",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17644,
                              "src": "3806:5:65",
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
                            "id": 17653,
                            "name": "getTokenValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17601,
                            "src": "3792:13:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view returns (uint256)"
                            }
                          },
                          "id": 17655,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3792:20:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 17649,
                            "name": "claimableIncome",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17466,
                            "src": "3765:15:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 17651,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 17650,
                            "name": "_user",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17644,
                            "src": "3781:5:65",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3765:22:65",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 17652,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8844,
                        "src": "3765:26:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 17656,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3765:48:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3740:73:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17658,
                  "nodeType": "ExpressionStatement",
                  "src": "3740:73:65"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 17663,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 17659,
                        "name": "previousValuePerToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17470,
                        "src": "3821:21:65",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 17661,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 17660,
                        "name": "_user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17644,
                        "src": "3843:5:65",
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
                      "src": "3821:28:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 17662,
                      "name": "valuePerToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17462,
                      "src": "3852:13:65",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3821:44:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 17664,
                  "nodeType": "ExpressionStatement",
                  "src": "3821:44:65"
                },
                {
                  "id": 17665,
                  "nodeType": "PlaceholderStatement",
                  "src": "3873:1:65"
                }
              ]
            },
            "documentation": null,
            "id": 17667,
            "name": "updateclaimableIncome",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 17645,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17644,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 17667,
                  "src": "3717:13:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17643,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3717:7:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3716:15:65"
            },
            "src": "3686:193:65",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 17673,
            "name": "LogIncomeReceived",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 17672,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17669,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 17673,
                  "src": "4161:23:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17668,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4161:7:65",
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
                  "id": 17671,
                  "indexed": false,
                  "name": "_paymentAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17673,
                  "src": "4186:19:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17670,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4186:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4160:46:65"
            },
            "src": "4137:70:65"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 17681,
            "name": "LogIncomeCollected",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 17680,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17675,
                  "indexed": false,
                  "name": "_block",
                  "nodeType": "VariableDeclaration",
                  "scope": 17681,
                  "src": "4235:11:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17674,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4235:4:65",
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
                  "id": 17677,
                  "indexed": false,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 17681,
                  "src": "4248:16:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 17676,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4248:7:65",
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
                  "id": 17679,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 17681,
                  "src": "4266:12:65",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17678,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4266:4:65",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4234:45:65"
            },
            "src": "4210:70:65"
          }
        ],
        "scope": 17683,
        "src": "490:3793:65"
      }
    ],
    "src": "0:4284:65"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:16.827Z"
}