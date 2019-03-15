"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var Withdrawable = exports.Withdrawable = 
{
  "contractName": "Withdrawable",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "alerter",
          "type": "address"
        }
      ],
      "name": "removeAlerter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "pendingAdmin",
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
      "name": "getOperators",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
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
          "name": "newAlerter",
          "type": "address"
        }
      ],
      "name": "addAlerter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "transferAdmin",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "claimAdmin",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "transferAdminQuickly",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAlerters",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
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
          "name": "newOperator",
          "type": "address"
        }
      ],
      "name": "addOperator",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "removeOperator",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "admin",
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "sendTo",
          "type": "address"
        }
      ],
      "name": "TokenWithdraw",
      "type": "event"
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
          "name": "sendTo",
          "type": "address"
        }
      ],
      "name": "EtherWithdraw",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "pendingAdmin",
          "type": "address"
        }
      ],
      "name": "TransferAdminPending",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "newAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "previousAdmin",
          "type": "address"
        }
      ],
      "name": "AdminClaimed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "newAlerter",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "isAdd",
          "type": "bool"
        }
      ],
      "name": "AlerterAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "newOperator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "isAdd",
          "type": "bool"
        }
      ],
      "name": "OperatorAdded",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "sendTo",
          "type": "address"
        }
      ],
      "name": "withdrawToken",
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
        },
        {
          "name": "sendTo",
          "type": "address"
        }
      ],
      "name": "withdrawEther",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405260008054600160a060020a03191633179055610c5a806100256000396000f3006080604052600436106100c45763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166301a12fd381146100c957806326782247146100ec57806327a099d81461011d5780633ccdbb2814610182578063408ee7fe146101ad57806375829def146101ce57806377f50f97146101ef5780637acc8678146102045780637c423f54146102255780639870d7fe1461023a578063ac8a584a1461025b578063ce56c4541461027c578063f851a440146102a0575b600080fd5b3480156100d557600080fd5b506100ea600160a060020a03600435166102b5565b005b3480156100f857600080fd5b5061010161041e565b60408051600160a060020a039092168252519081900360200190f35b34801561012957600080fd5b5061013261042d565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561016e578181015183820152602001610156565b505050509050019250505060405180910390f35b34801561018e57600080fd5b506100ea600160a060020a036004358116906024359060443516610490565b3480156101b957600080fd5b506100ea600160a060020a03600435166105a9565b3480156101da57600080fd5b506100ea600160a060020a036004351661069f565b3480156101fb57600080fd5b506100ea61072c565b34801561021057600080fd5b506100ea600160a060020a03600435166107b6565b34801561023157600080fd5b50610132610888565b34801561024657600080fd5b506100ea600160a060020a03600435166108e8565b34801561026757600080fd5b506100ea600160a060020a03600435166109de565b34801561028857600080fd5b506100ea600435600160a060020a0360243516610b43565b3480156102ac57600080fd5b50610101610bd8565b60008054600160a060020a031633146102cd57600080fd5b600160a060020a03821660009081526003602052604090205460ff1615156102f457600080fd5b50600160a060020a0381166000908152600360205260408120805460ff191690555b60055481101561041a5781600160a060020a031660058281548110151561033957fe5b600091825260209091200154600160a060020a031614156104125760058054600019810190811061036657fe5b60009182526020909120015460058054600160a060020a03909216918390811061038c57fe5b60009182526020909120018054600160a060020a031916600160a060020a039290921691909117905560058054906103c8906000198301610be7565b5060408051600160a060020a03841681526000602082015281517f5611bf3e417d124f97bf2c788843ea8bb502b66079fbee02158ef30b172cb762929181900390910190a161041a565b600101610316565b5050565b600154600160a060020a031681565b6060600480548060200260200160405190810160405280929190818152602001828054801561048557602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610467575b505050505090505b90565b600054600160a060020a031633146104a757600080fd5b82600160a060020a031663a9059cbb82846040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b15801561052357600080fd5b505af1158015610537573d6000803e3d6000fd5b505050506040513d602081101561054d57600080fd5b5051151561055a57600080fd5b60408051600160a060020a0380861682526020820185905283168183015290517f72cb8a894ddb372ceec3d2a7648d86f17d5a15caae0e986c53109b8a9a9385e69181900360600190a1505050565b600054600160a060020a031633146105c057600080fd5b600160a060020a03811660009081526003602052604090205460ff16156105e657600080fd5b6005546032116105f557600080fd5b60408051600160a060020a03831681526001602082015281517f5611bf3e417d124f97bf2c788843ea8bb502b66079fbee02158ef30b172cb762929181900390910190a1600160a060020a03166000818152600360205260408120805460ff191660019081179091556005805491820181559091527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0018054600160a060020a0319169091179055565b600054600160a060020a031633146106b657600080fd5b600160a060020a03811615156106cb57600080fd5b60015460408051600160a060020a039092168252517f3b81caf78fa51ecbc8acb482fd7012a277b428d9b80f9d156e8a54107496cc409181900360200190a160018054600160a060020a031916600160a060020a0392909216919091179055565b600154600160a060020a0316331461074357600080fd5b60015460005460408051600160a060020a03938416815292909116602083015280517f65da1cfc2c2e81576ad96afb24a581f8e109b7a403b35cbd3243a1c99efdb9ed9281900390910190a16001805460008054600160a060020a0319908116600160a060020a03841617909155169055565b600054600160a060020a031633146107cd57600080fd5b600160a060020a03811615156107e257600080fd5b60408051600160a060020a038316815290517f3b81caf78fa51ecbc8acb482fd7012a277b428d9b80f9d156e8a54107496cc409181900360200190a160005460408051600160a060020a038085168252909216602083015280517f65da1cfc2c2e81576ad96afb24a581f8e109b7a403b35cbd3243a1c99efdb9ed9281900390910190a160008054600160a060020a031916600160a060020a0392909216919091179055565b6060600580548060200260200160405190810160405280929190818152602001828054801561048557602002820191906000526020600020908154600160a060020a03168152600190910190602001808311610467575050505050905090565b600054600160a060020a031633146108ff57600080fd5b600160a060020a03811660009081526002602052604090205460ff161561092557600080fd5b60045460321161093457600080fd5b60408051600160a060020a03831681526001602082015281517f091a7a4b85135fdd7e8dbc18b12fabe5cc191ea867aa3c2e1a24a102af61d58b929181900390910190a1600160a060020a03166000818152600260205260408120805460ff191660019081179091556004805491820181559091527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b018054600160a060020a0319169091179055565b60008054600160a060020a031633146109f657600080fd5b600160a060020a03821660009081526002602052604090205460ff161515610a1d57600080fd5b50600160a060020a0381166000908152600260205260408120805460ff191690555b60045481101561041a5781600160a060020a0316600482815481101515610a6257fe5b600091825260209091200154600160a060020a03161415610b3b57600480546000198101908110610a8f57fe5b60009182526020909120015460048054600160a060020a039092169183908110610ab557fe5b60009182526020909120018054600160a060020a031916600160a060020a0392909216919091179055600480546000190190610af19082610be7565b5060408051600160a060020a03841681526000602082015281517f091a7a4b85135fdd7e8dbc18b12fabe5cc191ea867aa3c2e1a24a102af61d58b929181900390910190a161041a565b600101610a3f565b600054600160a060020a03163314610b5a57600080fd5b604051600160a060020a0382169083156108fc029084906000818181858888f19350505050158015610b90573d6000803e3d6000fd5b5060408051838152600160a060020a038316602082015281517fec47e7ed86c86774d1a72c19f35c639911393fe7c1a34031fdbd260890da90de929181900390910190a15050565b600054600160a060020a031681565b815481835581811115610c0b57600083815260209020610c0b918101908301610c10565b505050565b61048d91905b80821115610c2a5760008155600101610c16565b50905600a165627a7a723058208f3d7f160f240613974fa967bc8c0d9ae548284de103e9de67c48d6e884b1e4f0029",
  "deployedBytecode": "0x6080604052600436106100c45763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166301a12fd381146100c957806326782247146100ec57806327a099d81461011d5780633ccdbb2814610182578063408ee7fe146101ad57806375829def146101ce57806377f50f97146101ef5780637acc8678146102045780637c423f54146102255780639870d7fe1461023a578063ac8a584a1461025b578063ce56c4541461027c578063f851a440146102a0575b600080fd5b3480156100d557600080fd5b506100ea600160a060020a03600435166102b5565b005b3480156100f857600080fd5b5061010161041e565b60408051600160a060020a039092168252519081900360200190f35b34801561012957600080fd5b5061013261042d565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561016e578181015183820152602001610156565b505050509050019250505060405180910390f35b34801561018e57600080fd5b506100ea600160a060020a036004358116906024359060443516610490565b3480156101b957600080fd5b506100ea600160a060020a03600435166105a9565b3480156101da57600080fd5b506100ea600160a060020a036004351661069f565b3480156101fb57600080fd5b506100ea61072c565b34801561021057600080fd5b506100ea600160a060020a03600435166107b6565b34801561023157600080fd5b50610132610888565b34801561024657600080fd5b506100ea600160a060020a03600435166108e8565b34801561026757600080fd5b506100ea600160a060020a03600435166109de565b34801561028857600080fd5b506100ea600435600160a060020a0360243516610b43565b3480156102ac57600080fd5b50610101610bd8565b60008054600160a060020a031633146102cd57600080fd5b600160a060020a03821660009081526003602052604090205460ff1615156102f457600080fd5b50600160a060020a0381166000908152600360205260408120805460ff191690555b60055481101561041a5781600160a060020a031660058281548110151561033957fe5b600091825260209091200154600160a060020a031614156104125760058054600019810190811061036657fe5b60009182526020909120015460058054600160a060020a03909216918390811061038c57fe5b60009182526020909120018054600160a060020a031916600160a060020a039290921691909117905560058054906103c8906000198301610be7565b5060408051600160a060020a03841681526000602082015281517f5611bf3e417d124f97bf2c788843ea8bb502b66079fbee02158ef30b172cb762929181900390910190a161041a565b600101610316565b5050565b600154600160a060020a031681565b6060600480548060200260200160405190810160405280929190818152602001828054801561048557602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610467575b505050505090505b90565b600054600160a060020a031633146104a757600080fd5b82600160a060020a031663a9059cbb82846040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b15801561052357600080fd5b505af1158015610537573d6000803e3d6000fd5b505050506040513d602081101561054d57600080fd5b5051151561055a57600080fd5b60408051600160a060020a0380861682526020820185905283168183015290517f72cb8a894ddb372ceec3d2a7648d86f17d5a15caae0e986c53109b8a9a9385e69181900360600190a1505050565b600054600160a060020a031633146105c057600080fd5b600160a060020a03811660009081526003602052604090205460ff16156105e657600080fd5b6005546032116105f557600080fd5b60408051600160a060020a03831681526001602082015281517f5611bf3e417d124f97bf2c788843ea8bb502b66079fbee02158ef30b172cb762929181900390910190a1600160a060020a03166000818152600360205260408120805460ff191660019081179091556005805491820181559091527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0018054600160a060020a0319169091179055565b600054600160a060020a031633146106b657600080fd5b600160a060020a03811615156106cb57600080fd5b60015460408051600160a060020a039092168252517f3b81caf78fa51ecbc8acb482fd7012a277b428d9b80f9d156e8a54107496cc409181900360200190a160018054600160a060020a031916600160a060020a0392909216919091179055565b600154600160a060020a0316331461074357600080fd5b60015460005460408051600160a060020a03938416815292909116602083015280517f65da1cfc2c2e81576ad96afb24a581f8e109b7a403b35cbd3243a1c99efdb9ed9281900390910190a16001805460008054600160a060020a0319908116600160a060020a03841617909155169055565b600054600160a060020a031633146107cd57600080fd5b600160a060020a03811615156107e257600080fd5b60408051600160a060020a038316815290517f3b81caf78fa51ecbc8acb482fd7012a277b428d9b80f9d156e8a54107496cc409181900360200190a160005460408051600160a060020a038085168252909216602083015280517f65da1cfc2c2e81576ad96afb24a581f8e109b7a403b35cbd3243a1c99efdb9ed9281900390910190a160008054600160a060020a031916600160a060020a0392909216919091179055565b6060600580548060200260200160405190810160405280929190818152602001828054801561048557602002820191906000526020600020908154600160a060020a03168152600190910190602001808311610467575050505050905090565b600054600160a060020a031633146108ff57600080fd5b600160a060020a03811660009081526002602052604090205460ff161561092557600080fd5b60045460321161093457600080fd5b60408051600160a060020a03831681526001602082015281517f091a7a4b85135fdd7e8dbc18b12fabe5cc191ea867aa3c2e1a24a102af61d58b929181900390910190a1600160a060020a03166000818152600260205260408120805460ff191660019081179091556004805491820181559091527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b018054600160a060020a0319169091179055565b60008054600160a060020a031633146109f657600080fd5b600160a060020a03821660009081526002602052604090205460ff161515610a1d57600080fd5b50600160a060020a0381166000908152600260205260408120805460ff191690555b60045481101561041a5781600160a060020a0316600482815481101515610a6257fe5b600091825260209091200154600160a060020a03161415610b3b57600480546000198101908110610a8f57fe5b60009182526020909120015460048054600160a060020a039092169183908110610ab557fe5b60009182526020909120018054600160a060020a031916600160a060020a0392909216919091179055600480546000190190610af19082610be7565b5060408051600160a060020a03841681526000602082015281517f091a7a4b85135fdd7e8dbc18b12fabe5cc191ea867aa3c2e1a24a102af61d58b929181900390910190a161041a565b600101610a3f565b600054600160a060020a03163314610b5a57600080fd5b604051600160a060020a0382169083156108fc029084906000818181858888f19350505050158015610b90573d6000803e3d6000fd5b5060408051838152600160a060020a038316602082015281517fec47e7ed86c86774d1a72c19f35c639911393fe7c1a34031fdbd260890da90de929181900390910190a15050565b600054600160a060020a031681565b815481835581811115610c0b57600083815260209020610c0b918101908301610c10565b505050565b61048d91905b80821115610c2a5760008155600101610c16565b50905600a165627a7a723058208f3d7f160f240613974fa967bc8c0d9ae548284de103e9de67c48d6e884b1e4f0029",
  "sourceMap": "321:695:70:-;;;368:5:62;:18;;-1:-1:-1;;;;;;368:18:62;376:10;368:18;;;321:695:70;;;;;;",
  "deployedSourceMap": "321:695:70:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2392:456:62;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2392:456:62;-1:-1:-1;;;;;2392:456:62;;;;;;;85:27;;8:9:-1;5:2;;;30:1;27;20:12;5:2;85:27:62;;;;;;;;-1:-1:-1;;;;;85:27:62;;;;;;;;;;;;;;656:96;;8:9:-1;5:2;;;30:1;27;20:12;5:2;656:96:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;656:96:62;;;;;;;;;;;;;;;;;563:191:70;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;563:191:70;-1:-1:-1;;;;;563:191:70;;;;;;;;;;;;;2080:306:62;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2080:306:62;-1:-1:-1;;;;;2080:306:62;;;;;1060:188;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1060:188:62;-1:-1:-1;;;;;1060:188:62;;;;;1822:194;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1822:194:62;;;;1423:228;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1423:228:62;-1:-1:-1;;;;;1423:228:62;;;;;758:94;;8:9:-1;5:2;;;30:1;27;20:12;5:2;758:94:62;;;;2913:317;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2913:317:62;-1:-1:-1;;;;;2913:317:62;;;;;3236:474;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3236:474:62;-1:-1:-1;;;;;3236:474:62;;;;;859:155:70;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;859:155:70;;;-1:-1:-1;;;;;859:155:70;;;;;59:20:62;;8:9:-1;5:2;;;30:1;27;20:12;5:2;59:20:62;;;;2392:456;2537:6;452:5;;-1:-1:-1;;;;;452:5:62;438:10;:19;430:28;;;;;;-1:-1:-1;;;;;2468:17:62;;;;;;:8;:17;;;;;;;;2460:26;;;;;;;;-1:-1:-1;;;;;;2496:17:62;;2516:5;2496:17;;;:8;:17;;;;;:25;;-1:-1:-1;;2496:25:62;;;2532:310;2553:13;:20;2549:24;;2532:310;;;2618:7;-1:-1:-1;;;;;2598:27:62;:13;2612:1;2598:16;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2598:16:62;:27;2594:238;;;2664:13;2678:20;;-1:-1:-1;;2678:24:62;;;2664:39;;;;;;;;;;;;;;;;2645:13;:16;;-1:-1:-1;;;;;2664:39:62;;;;2659:1;;2645:16;;;;;;;;;;;;;;;:58;;-1:-1:-1;;;;;;2645:58:62;-1:-1:-1;;;;;2645:58:62;;;;;;;;;;2721:13;:22;;;;;-1:-1:-1;;2721:22:62;;;:::i;:::-;-1:-1:-1;2766:28:62;;;-1:-1:-1;;;;;2766:28:62;;;;2788:5;2766:28;;;;;;;;;;;;;;;;;2812:5;;2594:238;2575:3;;2532:310;;;2392:456;;:::o;85:27::-;;;-1:-1:-1;;;;;85:27:62;;:::o;656:96::-;703:9;731:14;724:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;724:21:62;;;;;;;;;;;;;;;;;;;;;;;656:96;;:::o;563:191:70:-;452:5:62;;-1:-1:-1;;;;;452:5:62;438:10;:19;430:28;;;;;;665:5:70;-1:-1:-1;;;;;665:14:70;;680:6;688;665:30;;;;;;;;;;;;;-1:-1:-1;;;;;665:30:70;-1:-1:-1;;;;;665:30:70;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;665:30:70;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;665:30:70;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;665:30:70;657:39;;;;;;;;711:36;;;-1:-1:-1;;;;;711:36:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;563:191;;;:::o;2080:306:62:-;452:5;;-1:-1:-1;;;;;452:5:62;438:10;:19;430:28;;;;;;-1:-1:-1;;;;;2156:20:62;;;;;;:8;:20;;;;;;;;2155:21;2147:30;;;;;;2218:13;:20;328:2;-1:-1:-1;2210:46:62;;;;;;2272:30;;;-1:-1:-1;;;;;2272:30:62;;;;2297:4;2272:30;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2312:20:62;;;;;:8;:20;;;;;:27;;-1:-1:-1;;2312:27:62;2335:4;2312:27;;;;;;2349:13;27:10:-1;;23:18;;;45:23;;2349:30:62;;;;;;;-1:-1:-1;;;;;;2349:30:62;;;;;;2080:306::o;1060:188::-;452:5;;-1:-1:-1;;;;;452:5:62;438:10;:19;430:28;;;;;;-1:-1:-1;;;;;1136:22:62;;;;1128:31;;;;;;1195:12;;1174:34;;;-1:-1:-1;;;;;1195:12:62;;;1174:34;;;;;;;;;;;;1218:12;:23;;-1:-1:-1;;;;;;1218:23:62;-1:-1:-1;;;;;1218:23:62;;;;;;;;;;1060:188::o;1822:194::-;1869:12;;-1:-1:-1;;;;;1869:12:62;1885:10;1869:26;1861:35;;;;;;1924:12;;;1938:5;1911:33;;;-1:-1:-1;;;;;1924:12:62;;;1911:33;;1938:5;;;;1911:33;;;;;;;;;;;;;;;;1962:12;;;;1954:20;;-1:-1:-1;;;;;;1954:20:62;;;-1:-1:-1;;;;;1962:12:62;;1954:20;;;;1984:25;;;1822:194::o;1423:228::-;452:5;;-1:-1:-1;;;;;452:5:62;438:10;:19;430:28;;;;;;-1:-1:-1;;;;;1506:22:62;;;;1498:31;;;;;;1544:30;;;-1:-1:-1;;;;;1544:30:62;;;;;;;;;;;;;;;1612:5;;1589:29;;;-1:-1:-1;;;;;1589:29:62;;;;;1612:5;;;1589:29;;;;;;;;;;;;;;;;1628:5;:16;;-1:-1:-1;;;;;;1628:16:62;-1:-1:-1;;;;;1628:16:62;;;;;;;;;;1423:228::o;758:94::-;804:9;832:13;825:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;825:20:62;;;;;;;;;;;;;;;;;;;;;;758:94;:::o;2913:317::-;452:5;;-1:-1:-1;;;;;452:5:62;438:10;:19;430:28;;;;;;-1:-1:-1;;;;;2991:22:62;;;;;;:9;:22;;;;;;;;2990:23;2982:32;;;;;;3055:14;:21;328:2;-1:-1:-1;3047:47:62;;;;;;3110:32;;;-1:-1:-1;;;;;3110:32:62;;;;3137:4;3110:32;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3152:22:62;;;;;:9;:22;;;;;:29;;-1:-1:-1;;3152:29:62;3177:4;3152:29;;;;;;3191:14;27:10:-1;;23:18;;;45:23;;3191:32:62;;;;;;;-1:-1:-1;;;;;;3191:32:62;;;;;;2913:317::o;3236:474::-;3387:6;452:5;;-1:-1:-1;;;;;452:5:62;438:10;:19;430:28;;;;;;-1:-1:-1;;;;;3314:19:62;;;;;;:9;:19;;;;;;;;3306:28;;;;;;;;-1:-1:-1;;;;;;3344:19:62;;3366:5;3344:19;;;:9;:19;;;;;:27;;-1:-1:-1;;3344:27:62;;;3382:322;3403:14;:21;3399:25;;3382:322;;;3470:8;-1:-1:-1;;;;;3449:29:62;:14;3464:1;3449:17;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3449:17:62;:29;3445:249;;;3518:14;3533:21;;-1:-1:-1;;3533:25:62;;;3518:41;;;;;;;;;;;;;;;;3498:14;:17;;-1:-1:-1;;;;;3518:41:62;;;;3513:1;;3498:17;;;;;;;;;;;;;;;:61;;-1:-1:-1;;;;;;3498:61:62;-1:-1:-1;;;;;3498:61:62;;;;;;;;;;3577:14;:26;;-1:-1:-1;;3577:26:62;;;;;;:::i;:::-;-1:-1:-1;3626:30:62;;;-1:-1:-1;;;;;3626:30:62;;;;3650:5;3626:30;;;;;;;;;;;;;;;;;3674:5;;3445:249;3426:3;;3382:322;;859:155:70;452:5:62;;-1:-1:-1;;;;;452:5:62;438:10;:19;430:28;;;;;;940:23:70;;-1:-1:-1;;;;;940:15:70;;;:23;;;;;956:6;;940:23;;;;956:6;940:15;:23;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;978:29:70;;;;;;-1:-1:-1;;;;;978:29:70;;;;;;;;;;;;;;;;;;;859:155;;:::o;59:20:62:-;;;-1:-1:-1;;;;;59:20:62;;:::o;321:695:70:-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../interfaces/ERC20.sol\";\nimport \"./PermissionGroups.sol\";\n\n\n/**\n * @title Contracts that should be able to recover tokens or ethers\n * @author Ilan Doron\n * @dev This allows to recover any tokens or Ethers received in a contract.\n * This will prevent any accidental loss of tokens.\n */\ncontract Withdrawable is PermissionGroups {\n\n    event TokenWithdraw(ERC20 token, uint amount, address sendTo);\n\n    /**\n     * @dev Withdraw all ERC20 compatible tokens\n     * @param token ERC20 The address of the token contract\n     */\n    function withdrawToken(ERC20 token, uint amount, address sendTo) external onlyAdmin {\n        require(token.transfer(sendTo, amount));\n        emit TokenWithdraw(token, amount, sendTo);\n    }\n\n    event EtherWithdraw(uint amount, address sendTo);\n\n    /**\n     * @dev Withdraw Ethers\n     */\n    function withdrawEther(uint amount, address sendTo) external onlyAdmin {\n        sendTo.transfer(amount);\n        emit EtherWithdraw(amount, sendTo);\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/Withdrawable.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/Withdrawable.sol",
    "exportedSymbols": {
      "Withdrawable": [
        21778
      ]
    },
    "id": 21779,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 21712,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:70"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 21713,
        "nodeType": "ImportDirective",
        "scope": 21779,
        "sourceUnit": 9534,
        "src": "26:33:70",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/PermissionGroups.sol",
        "file": "./PermissionGroups.sol",
        "id": 21714,
        "nodeType": "ImportDirective",
        "scope": 21779,
        "sourceUnit": 20248,
        "src": "60:32:70",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 21715,
              "name": "PermissionGroups",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 20247,
              "src": "346:16:70",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionGroups_$20247",
                "typeString": "contract PermissionGroups"
              }
            },
            "id": 21716,
            "nodeType": "InheritanceSpecifier",
            "src": "346:16:70"
          }
        ],
        "contractDependencies": [
          20247
        ],
        "contractKind": "contract",
        "documentation": "@title Contracts that should be able to recover tokens or ethers\n@author Ilan Doron\n@dev This allows to recover any tokens or Ethers received in a contract.\nThis will prevent any accidental loss of tokens.",
        "fullyImplemented": true,
        "id": 21778,
        "linearizedBaseContracts": [
          21778,
          20247
        ],
        "name": "Withdrawable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 21724,
            "name": "TokenWithdraw",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 21723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21718,
                  "indexed": false,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 21724,
                  "src": "390:11:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 21717,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "390:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21720,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 21724,
                  "src": "403:11:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21719,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "403:4:70",
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
                  "id": 21722,
                  "indexed": false,
                  "name": "sendTo",
                  "nodeType": "VariableDeclaration",
                  "scope": 21724,
                  "src": "416:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21721,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "416:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "389:42:70"
            },
            "src": "370:62:70"
          },
          {
            "body": {
              "id": 21749,
              "nodeType": "Block",
              "src": "647:107:70",
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
                            "id": 21738,
                            "name": "sendTo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21730,
                            "src": "680:6:70",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 21739,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21728,
                            "src": "688:6:70",
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
                            "id": 21736,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21726,
                            "src": "665:5:70",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$9533",
                              "typeString": "contract ERC20"
                            }
                          },
                          "id": 21737,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transfer",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9496,
                          "src": "665:14:70",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 21740,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "665:30:70",
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
                      "id": 21735,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "657:7:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21741,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "657:39:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21742,
                  "nodeType": "ExpressionStatement",
                  "src": "657:39:70"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 21744,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21726,
                        "src": "725:5:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$9533",
                          "typeString": "contract ERC20"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 21745,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21728,
                        "src": "732:6:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 21746,
                        "name": "sendTo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21730,
                        "src": "740:6:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_ERC20_$9533",
                          "typeString": "contract ERC20"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 21743,
                      "name": "TokenWithdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21724,
                      "src": "711:13:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_contract$_ERC20_$9533_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (contract ERC20,uint256,address)"
                      }
                    },
                    "id": 21747,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "711:36:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21748,
                  "nodeType": "EmitStatement",
                  "src": "706:41:70"
                }
              ]
            },
            "documentation": "@dev Withdraw all ERC20 compatible tokens\n@param token ERC20 The address of the token contract",
            "id": 21750,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 21733,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 21732,
                  "name": "onlyAdmin",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 19902,
                  "src": "637:9:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "637:9:70"
              }
            ],
            "name": "withdrawToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21731,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21726,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 21750,
                  "src": "586:11:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 21725,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "586:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21728,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 21750,
                  "src": "599:11:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21727,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "599:4:70",
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
                  "id": 21730,
                  "name": "sendTo",
                  "nodeType": "VariableDeclaration",
                  "scope": 21750,
                  "src": "612:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21729,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "612:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "585:42:70"
            },
            "payable": false,
            "returnParameters": {
              "id": 21734,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "647:0:70"
            },
            "scope": 21778,
            "src": "563:191:70",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 21756,
            "name": "EtherWithdraw",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 21755,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21752,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 21756,
                  "src": "780:11:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21751,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "780:4:70",
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
                  "id": 21754,
                  "indexed": false,
                  "name": "sendTo",
                  "nodeType": "VariableDeclaration",
                  "scope": 21756,
                  "src": "793:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21753,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "793:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "779:29:70"
            },
            "src": "760:49:70"
          },
          {
            "body": {
              "id": 21776,
              "nodeType": "Block",
              "src": "930:84:70",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 21768,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21758,
                        "src": "956:6:70",
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
                        "id": 21765,
                        "name": "sendTo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21760,
                        "src": "940:6:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 21767,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "940:15:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 21769,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "940:23:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21770,
                  "nodeType": "ExpressionStatement",
                  "src": "940:23:70"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 21772,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21758,
                        "src": "992:6:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 21773,
                        "name": "sendTo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21760,
                        "src": "1000:6:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                        }
                      ],
                      "id": 21771,
                      "name": "EtherWithdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21756,
                      "src": "978:13:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address)"
                      }
                    },
                    "id": 21774,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "978:29:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21775,
                  "nodeType": "EmitStatement",
                  "src": "973:34:70"
                }
              ]
            },
            "documentation": "@dev Withdraw Ethers",
            "id": 21777,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 21763,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 21762,
                  "name": "onlyAdmin",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 19902,
                  "src": "920:9:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "920:9:70"
              }
            ],
            "name": "withdrawEther",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21761,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21758,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 21777,
                  "src": "882:11:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21757,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "882:4:70",
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
                  "id": 21760,
                  "name": "sendTo",
                  "nodeType": "VariableDeclaration",
                  "scope": 21777,
                  "src": "895:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21759,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "895:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "881:29:70"
            },
            "payable": false,
            "returnParameters": {
              "id": 21764,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "930:0:70"
            },
            "scope": 21778,
            "src": "859:155:70",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 21779,
        "src": "321:695:70"
      }
    ],
    "src": "0:1017:70"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/Withdrawable.sol",
    "exportedSymbols": {
      "Withdrawable": [
        21778
      ]
    },
    "id": 21779,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 21712,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:70"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 21713,
        "nodeType": "ImportDirective",
        "scope": 21779,
        "sourceUnit": 9534,
        "src": "26:33:70",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/PermissionGroups.sol",
        "file": "./PermissionGroups.sol",
        "id": 21714,
        "nodeType": "ImportDirective",
        "scope": 21779,
        "sourceUnit": 20248,
        "src": "60:32:70",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 21715,
              "name": "PermissionGroups",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 20247,
              "src": "346:16:70",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionGroups_$20247",
                "typeString": "contract PermissionGroups"
              }
            },
            "id": 21716,
            "nodeType": "InheritanceSpecifier",
            "src": "346:16:70"
          }
        ],
        "contractDependencies": [
          20247
        ],
        "contractKind": "contract",
        "documentation": "@title Contracts that should be able to recover tokens or ethers\n@author Ilan Doron\n@dev This allows to recover any tokens or Ethers received in a contract.\nThis will prevent any accidental loss of tokens.",
        "fullyImplemented": true,
        "id": 21778,
        "linearizedBaseContracts": [
          21778,
          20247
        ],
        "name": "Withdrawable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 21724,
            "name": "TokenWithdraw",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 21723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21718,
                  "indexed": false,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 21724,
                  "src": "390:11:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 21717,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "390:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21720,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 21724,
                  "src": "403:11:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21719,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "403:4:70",
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
                  "id": 21722,
                  "indexed": false,
                  "name": "sendTo",
                  "nodeType": "VariableDeclaration",
                  "scope": 21724,
                  "src": "416:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21721,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "416:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "389:42:70"
            },
            "src": "370:62:70"
          },
          {
            "body": {
              "id": 21749,
              "nodeType": "Block",
              "src": "647:107:70",
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
                            "id": 21738,
                            "name": "sendTo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21730,
                            "src": "680:6:70",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 21739,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21728,
                            "src": "688:6:70",
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
                            "id": 21736,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21726,
                            "src": "665:5:70",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$9533",
                              "typeString": "contract ERC20"
                            }
                          },
                          "id": 21737,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transfer",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9496,
                          "src": "665:14:70",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 21740,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "665:30:70",
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
                      "id": 21735,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "657:7:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21741,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "657:39:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21742,
                  "nodeType": "ExpressionStatement",
                  "src": "657:39:70"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 21744,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21726,
                        "src": "725:5:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$9533",
                          "typeString": "contract ERC20"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 21745,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21728,
                        "src": "732:6:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 21746,
                        "name": "sendTo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21730,
                        "src": "740:6:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_ERC20_$9533",
                          "typeString": "contract ERC20"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 21743,
                      "name": "TokenWithdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21724,
                      "src": "711:13:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_contract$_ERC20_$9533_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (contract ERC20,uint256,address)"
                      }
                    },
                    "id": 21747,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "711:36:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21748,
                  "nodeType": "EmitStatement",
                  "src": "706:41:70"
                }
              ]
            },
            "documentation": "@dev Withdraw all ERC20 compatible tokens\n@param token ERC20 The address of the token contract",
            "id": 21750,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 21733,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 21732,
                  "name": "onlyAdmin",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 19902,
                  "src": "637:9:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "637:9:70"
              }
            ],
            "name": "withdrawToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21731,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21726,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 21750,
                  "src": "586:11:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 21725,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "586:5:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21728,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 21750,
                  "src": "599:11:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21727,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "599:4:70",
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
                  "id": 21730,
                  "name": "sendTo",
                  "nodeType": "VariableDeclaration",
                  "scope": 21750,
                  "src": "612:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21729,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "612:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "585:42:70"
            },
            "payable": false,
            "returnParameters": {
              "id": 21734,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "647:0:70"
            },
            "scope": 21778,
            "src": "563:191:70",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 21756,
            "name": "EtherWithdraw",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 21755,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21752,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 21756,
                  "src": "780:11:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21751,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "780:4:70",
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
                  "id": 21754,
                  "indexed": false,
                  "name": "sendTo",
                  "nodeType": "VariableDeclaration",
                  "scope": 21756,
                  "src": "793:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21753,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "793:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "779:29:70"
            },
            "src": "760:49:70"
          },
          {
            "body": {
              "id": 21776,
              "nodeType": "Block",
              "src": "930:84:70",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 21768,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21758,
                        "src": "956:6:70",
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
                        "id": 21765,
                        "name": "sendTo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21760,
                        "src": "940:6:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 21767,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "940:15:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 21769,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "940:23:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21770,
                  "nodeType": "ExpressionStatement",
                  "src": "940:23:70"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 21772,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21758,
                        "src": "992:6:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 21773,
                        "name": "sendTo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21760,
                        "src": "1000:6:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                        }
                      ],
                      "id": 21771,
                      "name": "EtherWithdraw",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21756,
                      "src": "978:13:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address)"
                      }
                    },
                    "id": 21774,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "978:29:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21775,
                  "nodeType": "EmitStatement",
                  "src": "973:34:70"
                }
              ]
            },
            "documentation": "@dev Withdraw Ethers",
            "id": 21777,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 21763,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 21762,
                  "name": "onlyAdmin",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 19902,
                  "src": "920:9:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "920:9:70"
              }
            ],
            "name": "withdrawEther",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21761,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21758,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 21777,
                  "src": "882:11:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21757,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "882:4:70",
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
                  "id": 21760,
                  "name": "sendTo",
                  "nodeType": "VariableDeclaration",
                  "scope": 21777,
                  "src": "895:14:70",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21759,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "895:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "881:29:70"
            },
            "payable": false,
            "returnParameters": {
              "id": 21764,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "930:0:70"
            },
            "scope": 21778,
            "src": "859:155:70",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 21779,
        "src": "321:695:70"
      }
    ],
    "src": "0:1017:70"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.721Z",
  "devdoc": {
    "author": "Ilan Doron",
    "methods": {
      "claimAdmin()": {
        "details": "Allows the pendingAdmin address to finalize the change admin process."
      },
      "transferAdmin(address)": {
        "details": "Allows the current admin to set the pendingAdmin address.",
        "params": {
          "newAdmin": "The address to transfer ownership to."
        }
      },
      "transferAdminQuickly(address)": {
        "details": "Allows the current admin to set the admin in one tx. Useful initial deployment.",
        "params": {
          "newAdmin": "The address to transfer ownership to."
        }
      },
      "withdrawEther(uint256,address)": {
        "details": "Withdraw Ethers"
      },
      "withdrawToken(address,uint256,address)": {
        "details": "Withdraw all ERC20 compatible tokens",
        "params": {
          "token": "ERC20 The address of the token contract"
        }
      }
    },
    "title": "Contracts that should be able to recover tokens or ethers"
  },
  "userdoc": {
    "methods": {}
  }
}