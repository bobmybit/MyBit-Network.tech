"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var AccessHierarchy = exports.AccessHierarchy = 
{
  "contractName": "AccessHierarchy",
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
      "constant": true,
      "inputs": [],
      "name": "upperAccessLevel",
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_user",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_approvalLevel",
          "type": "uint256"
        }
      ],
      "name": "LogUserApproved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_user",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_accessLevel",
          "type": "uint256"
        }
      ],
      "name": "LogUserRemoved",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newUser",
          "type": "address"
        },
        {
          "name": "_accessLevel",
          "type": "uint256"
        }
      ],
      "name": "approveUser",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "removeUser",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newUpperLimit",
          "type": "uint8"
        }
      ],
      "name": "setUpperAccessLevel",
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
  "bytecode": "0x608060405234801561001057600080fd5b50604051604080610c4583398101604052805160209091015160008054600160a060020a03938416600160a060020a03199182161790915560018054939092169216919091179055610bde806100676000396000f3006080604052600436106100695763ffffffff60e060020a6000350416634248083b811461006e57806344190a87146100a6578063713b563f146100c357806383197ef0146100f45780639857518814610109578063b5f8558c1461012a578063df3928741461013f575b600080fd5b34801561007a57600080fd5b50610092600160a060020a036004351660243561016a565b604080519115158252519081900360200190f35b3480156100b257600080fd5b506100c160ff60043516610450565b005b3480156100cf57600080fd5b506100d86105d1565b60408051600160a060020a039092168252519081900360200190f35b34801561010057600080fd5b506100c16105e0565b34801561011557600080fd5b50610092600160a060020a03600435166107d2565b34801561013657600080fd5b506100d8610b82565b34801561014b57600080fd5b50610154610b91565b6040805160ff9092168252519081900360200190f35b60008054604080517f636f6e74726163740000000000000000000000000000000000000000000000006020808301919091526c01000000000000000000000000330260288301528251601c818403018152603c909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b602083106102025780518252601f1990920191602091820191016101e3565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561026357600080fd5b505af1158015610277573d6000803e3d6000fd5b505050506040513d602081101561028d57600080fd5b5051151561029a57600080fd5b82600160a060020a03811615156102b057600080fd5b60015474010000000000000000000000000000000000000000900460ff16831080156102db57508215155b15156102e657600080fd5b600054604080517f7573657241636365737300000000000000000000000000000000000000000000602080830191909152600160a060020a038881166c0100000000000000000000000002602a8401528351808403601e018152603e90930193849052825194169363e2a4853a93918291908401908083835b6020831061037e5780518252601f19909201916020918201910161035f565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a0282526004820152602481018a9052915160448084019550600094509092839003019050818387803b1580156103ea57600080fd5b505af11580156103fe573d6000803e3d6000fd5b505060408051600160a060020a03881681526020810187905281517fe8b0d2948bfc19ce9cb6dd3be73adffa387a1c6f662adc9c5b8ebeede21deb689450908190039091019150a15060019392505050565b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b602083106104e75780518252601f1990920191602091820191016104c8565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561054857600080fd5b505af115801561055c573d6000803e3d6000fd5b505050506040513d602081101561057257600080fd5b5051151561057f57600080fd5b600060ff82161161058f57600080fd5b6001805460ff909216740100000000000000000000000000000000000000000274ff000000000000000000000000000000000000000019909216919091179055565b600054600160a060020a031681565b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b602083106106775780518252601f199092019160209182019101610658565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156106d857600080fd5b505af11580156106ec573d6000803e3d6000fd5b505050506040513d602081101561070257600080fd5b5051151561070f57600080fd5b600154604080517f68b96270000000000000000000000000000000000000000000000000000000008152306024820181905233604483015231606482015260a06004820152601960a48201527f4163636573734869657261726368792064657374726f7965640000000000000060c48201529051600160a060020a03909216916368b962709160e48082019260009290919082900301818387803b1580156107b657600080fd5b505af11580156107ca573d6000803e3d6000fd5b503392505050ff5b60008054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c01000000000000000000000000330260258301528251601981840301815260399092019283905281518594600160a060020a031693633b7bfda09392909182918401908083835b6020831061086b5780518252601f19909201916020918201910161084c565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156108cc57600080fd5b505af11580156108e0573d6000803e3d6000fd5b505050506040513d60208110156108f657600080fd5b5051151561090357600080fd5b600054604080517f7573657241636365737300000000000000000000000000000000000000000000602080830191909152600160a060020a038781166c0100000000000000000000000002602a8401528351808403601e018152603e90930193849052825194169363a855d4ce93918291908401908083835b6020831061099b5780518252601f19909201916020918201910161097c565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156109fc57600080fd5b505af1158015610a10573d6000803e3d6000fd5b505050506040513d6020811015610a2657600080fd5b5051600054604080517f7573657241636365737300000000000000000000000000000000000000000000602080830191909152600160a060020a038881166c0100000000000000000000000002602a8401528351808403601e018152603e9093019384905282519596509093169363e2b202bf939192918291908401908083835b60208310610ac65780518252601f199092019160209182019101610aa7565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a0282526004820152915160248084019550600094509092839003019050818387803b158015610b2b57600080fd5b505af1158015610b3f573d6000803e3d6000fd5b5050604051839250600160a060020a03861691507fe8bca18329debfd209083cfd37b3dbfaa9318ae7bf4dcb40f63ca7be92c26acc90600090a350600192915050565b600154600160a060020a031681565b60015474010000000000000000000000000000000000000000900460ff16815600a165627a7a7230582001b3830c5c7855ef5673fc0680f92e5866331d7ea84e2807fe5e19a61d39b5c20029",
  "deployedBytecode": "0x6080604052600436106100695763ffffffff60e060020a6000350416634248083b811461006e57806344190a87146100a6578063713b563f146100c357806383197ef0146100f45780639857518814610109578063b5f8558c1461012a578063df3928741461013f575b600080fd5b34801561007a57600080fd5b50610092600160a060020a036004351660243561016a565b604080519115158252519081900360200190f35b3480156100b257600080fd5b506100c160ff60043516610450565b005b3480156100cf57600080fd5b506100d86105d1565b60408051600160a060020a039092168252519081900360200190f35b34801561010057600080fd5b506100c16105e0565b34801561011557600080fd5b50610092600160a060020a03600435166107d2565b34801561013657600080fd5b506100d8610b82565b34801561014b57600080fd5b50610154610b91565b6040805160ff9092168252519081900360200190f35b60008054604080517f636f6e74726163740000000000000000000000000000000000000000000000006020808301919091526c01000000000000000000000000330260288301528251601c818403018152603c909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b602083106102025780518252601f1990920191602091820191016101e3565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561026357600080fd5b505af1158015610277573d6000803e3d6000fd5b505050506040513d602081101561028d57600080fd5b5051151561029a57600080fd5b82600160a060020a03811615156102b057600080fd5b60015474010000000000000000000000000000000000000000900460ff16831080156102db57508215155b15156102e657600080fd5b600054604080517f7573657241636365737300000000000000000000000000000000000000000000602080830191909152600160a060020a038881166c0100000000000000000000000002602a8401528351808403601e018152603e90930193849052825194169363e2a4853a93918291908401908083835b6020831061037e5780518252601f19909201916020918201910161035f565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a0282526004820152602481018a9052915160448084019550600094509092839003019050818387803b1580156103ea57600080fd5b505af11580156103fe573d6000803e3d6000fd5b505060408051600160a060020a03881681526020810187905281517fe8b0d2948bfc19ce9cb6dd3be73adffa387a1c6f662adc9c5b8ebeede21deb689450908190039091019150a15060019392505050565b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b602083106104e75780518252601f1990920191602091820191016104c8565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561054857600080fd5b505af115801561055c573d6000803e3d6000fd5b505050506040513d602081101561057257600080fd5b5051151561057f57600080fd5b600060ff82161161058f57600080fd5b6001805460ff909216740100000000000000000000000000000000000000000274ff000000000000000000000000000000000000000019909216919091179055565b600054600160a060020a031681565b600054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c0100000000000000000000000033026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b602083106106775780518252601f199092019160209182019101610658565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156106d857600080fd5b505af11580156106ec573d6000803e3d6000fd5b505050506040513d602081101561070257600080fd5b5051151561070f57600080fd5b600154604080517f68b96270000000000000000000000000000000000000000000000000000000008152306024820181905233604483015231606482015260a06004820152601960a48201527f4163636573734869657261726368792064657374726f7965640000000000000060c48201529051600160a060020a03909216916368b962709160e48082019260009290919082900301818387803b1580156107b657600080fd5b505af11580156107ca573d6000803e3d6000fd5b503392505050ff5b60008054604080517f6f776e65720000000000000000000000000000000000000000000000000000006020808301919091526c01000000000000000000000000330260258301528251601981840301815260399092019283905281518594600160a060020a031693633b7bfda09392909182918401908083835b6020831061086b5780518252601f19909201916020918201910161084c565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156108cc57600080fd5b505af11580156108e0573d6000803e3d6000fd5b505050506040513d60208110156108f657600080fd5b5051151561090357600080fd5b600054604080517f7573657241636365737300000000000000000000000000000000000000000000602080830191909152600160a060020a038781166c0100000000000000000000000002602a8401528351808403601e018152603e90930193849052825194169363a855d4ce93918291908401908083835b6020831061099b5780518252601f19909201916020918201910161097c565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156109fc57600080fd5b505af1158015610a10573d6000803e3d6000fd5b505050506040513d6020811015610a2657600080fd5b5051600054604080517f7573657241636365737300000000000000000000000000000000000000000000602080830191909152600160a060020a038881166c0100000000000000000000000002602a8401528351808403601e018152603e9093019384905282519596509093169363e2b202bf939192918291908401908083835b60208310610ac65780518252601f199092019160209182019101610aa7565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a0282526004820152915160248084019550600094509092839003019050818387803b158015610b2b57600080fd5b505af1158015610b3f573d6000803e3d6000fd5b5050604051839250600160a060020a03861691507fe8bca18329debfd209083cfd37b3dbfaa9318ae7bf4dcb40f63ca7be92c26acc90600090a350600192915050565b600154600160a060020a031681565b60015474010000000000000000000000000000000000000000900460ff16815600a165627a7a7230582001b3830c5c7855ef5673fc0680f92e5866331d7ea84e2807fe5e19a61d39b5c20029",
  "sourceMap": "707:2671:1:-;;;864:123;8:9:-1;5:2;;;30:1;27;20:12;5:2;864:123:1;;;;;;;;;;;;;;;;;;;928:8;:24;;-1:-1:-1;;;;;928:24:1;;;-1:-1:-1;;;;;;928:24:1;;;;;;;;958;;;;;;;;;;;;;;707:2671;;;;;;",
  "deployedSourceMap": "707:2671:1:-;;;;;;;;;-1:-1:-1;;;707:2671:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1180:361;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1180:361:1;-1:-1:-1;;;;;1180:361:1;;;;;;;;;;;;;;;;;;;;;;;;;2075:156;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2075:156:1;;;;;;;;;737:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;737:18:1;;;;;;;;-1:-1:-1;;;;;737:18:1;;;;;;;;;;;;;;2290:184;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2290:184:1;;;;1623:310;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1623:310:1;-1:-1:-1;;;;;1623:310:1;;;;;759:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;759:20:1;;;;783:29;;8:9:-1;5:2;;;30:1;27;20:12;5:2;783:29:1;;;;;;;;;;;;;;;;;;;;;;;1180:361;1300:4;2865:8;;2896:40;;;;;;;;;;;;;2925:10;2896:40;;;;;;;22:32:-1;26:21;;;22:32;6:49;;2896:40:1;;;;;;;;2886:51;;-1:-1:-1;;;;;2865:8:1;;;;:20;;2896:40;;;2886:51;;;;;2896:40;2886:51;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;2886:51:1;;;;;;;;;;;;2865:73;;;-1:-1:-1;;;2865:73:1;;;;;;;;;;;;;;-1:-1:-1;263:2;;-1:-1;2865:73:1;;;;;;;-1:-1:-1;2865:73:1;-1:-1:-1;2865:73:1;;;;5:2:-1;;;;30:1;27;20:12;5:2;2865:73:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2865:73:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2865:73:1;2857:82;;;;;;;;1270:8;-1:-1:-1;;;;;2575:20:1;;;;2567:29;;;;;;1335:16;;;;;;;1320:31;;:59;;;;-1:-1:-1;1355:24:1;;;1320:59;1312:68;;;;;;;;1386:8;;1413:40;;;;;;;;;;;;-1:-1:-1;;;;;1413:40:1;;;;;;;;;;;26:21:-1;;;22:32;;6:49;;1413:40:1;;;;;;;;1403:51;;1386:8;;;:16;;1413:40;;;1403:51;;;;;1413:40;1403:51;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;1403:51:1;;;;;;;;;;;;1386:83;;;-1:-1:-1;;;1386:83:1;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;1386:83:1;;;;;;;-1:-1:-1;1386:83:1;-1:-1:-1;1386:83:1;;;;5:2:-1;;;;30:1;27;20:12;5:2;1386:83:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;;1480:39:1;;;-1:-1:-1;;;;;1480:39:1;;;;;;;;;;;;;;-1:-1:-1;1480:39:1;;;;;;;;-1:-1:-1;1480:39:1;-1:-1:-1;1532:4:1;;1180:361;-1:-1:-1;;;1180:361:1:o;2075:156::-;2688:8;;2719:37;;;;;;;;;;;;;2745:10;2719:37;;;;;;;22:32:-1;26:21;;;22:32;6:49;;2719:37:1;;;;;;;;2709:48;;-1:-1:-1;;;;;2688:8:1;;;;:20;;2719:37;;;2709:48;;;;;2719:37;2709:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;2709:48:1;;;;;;;;;;;;2688:70;;;-1:-1:-1;;;2688:70:1;;;;;;;;;;;;;;-1:-1:-1;263:2;;-1:-1;2688:70:1;;;;;;;-1:-1:-1;2688:70:1;-1:-1:-1;2688:70:1;;;;5:2:-1;;;;30:1;27;20:12;5:2;2688:70:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2688:70:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2688:70:1;2680:79;;;;;;;;2184:1;2161:25;;;;2153:34;;;;;;2193:16;:33;;;;;;;;-1:-1:-1;;2193:33:1;;;;;;;;;2075:156::o;737:18::-;;;-1:-1:-1;;;;;737:18:1;;:::o;2290:184::-;2688:8;;2719:37;;;;;;;;;;;;;2745:10;2719:37;;;;;;;22:32:-1;26:21;;;22:32;6:49;;2719:37:1;;;;;;;;2709:48;;-1:-1:-1;;;;;2688:8:1;;;;:20;;2719:37;;;2709:48;;;;;2719:37;2709:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;2709:48:1;;;;;;;;;;;;2688:70;;;-1:-1:-1;;;2688:70:1;;;;;;;;;;;;;;-1:-1:-1;263:2;;-1:-1;2688:70:1;;;;;;;-1:-1:-1;2688:70:1;-1:-1:-1;2688:70:1;;;;5:2:-1;;;;30:1;27;20:12;5:2;2688:70:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2688:70:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2688:70:1;2680:79;;;;;;;;2338:6;;:101;;;;;;2394:4;2338:101;;;;;;2401:10;2338:101;;;;2413:21;2338:101;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2338:6:1;;;;:18;;:101;;;;;:6;;:101;;;;;;;;:6;;:101;;;5:2:-1;;;;30:1;27;20:12;5:2;2338:101:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;2458:10:1;;-1:-1:-1;;;2445:24:1;1623:310;1690:4;2688:8;;2719:37;;;;;;;;;;;;;2745:10;2719:37;;;;;;;22:32:-1;26:21;;;22:32;6:49;;2719:37:1;;;;;;;;2709:48;;1690:4;;-1:-1:-1;;;;;2688:8:1;;:20;;2719:37;;;;;2709:48;;;;2719:37;2709:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;2709:48:1;;;;;;;;;;;;2688:70;;;-1:-1:-1;;;2688:70:1;;;;;;;;;;;;;;-1:-1:-1;263:2;;-1:-1;2688:70:1;;;;;;;-1:-1:-1;2688:70:1;-1:-1:-1;2688:70:1;;;;5:2:-1;;;;30:1;27;20:12;5:2;2688:70:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2688:70:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2688:70:1;2680:79;;;;;;;;1721:8;;1752:37;;;;;;;;;;;;-1:-1:-1;;;;;1752:37:1;;;;;;;;;;;26:21:-1;;;22:32;;6:49;;1752:37:1;;;;;;;;1742:48;;1721:8;;;:20;;1752:37;;;1742:48;;;;;1752:37;1742:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;1742:48:1;;;;;;;;;;;;1721:70;;;-1:-1:-1;;;1721:70:1;;;;;;;;;;;;;;-1:-1:-1;263:2;;-1:-1;1721:70:1;;;;;;;-1:-1:-1;1721:70:1;-1:-1:-1;1721:70:1;;;;5:2:-1;;;;30:1;27;20:12;5:2;1721:70:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1721:70:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1721:70:1;1797:8;;1827:37;;;;1721:70;1827:37;;;;;;;-1:-1:-1;;;;;1827:37:1;;;;;;;;;;;26:21:-1;;;22:32;;6:49;;1827:37:1;;;;;;;;1817:48;;1721:70;;-1:-1:-1;1797:8:1;;;;:19;;1827:37;;;;;1817:48;;;;;1827:37;1817:48;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;1817:48:1;;;;;;;;;;;;1797:69;;;-1:-1:-1;;;1797:69:1;;;;;;;;;;;;;;-1:-1:-1;;;;1797:69:1;;;;;;;-1:-1:-1;1797:69:1;-1:-1:-1;1797:69:1;;;;5:2:-1;;;;30:1;27;20:12;5:2;1797:69:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;;1877:34:1;;1899:11;;-1:-1:-1;;;;;;1877:34:1;;;-1:-1:-1;1877:34:1;;;;;-1:-1:-1;1924:4:1;;1623:310;-1:-1:-1;;1623:310:1:o;759:20::-;;;-1:-1:-1;;;;;759:20:1;;:::o;783:29::-;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\ninterface Events {  function transaction(string _message, address _from, address _to, uint _amount, bytes32 _id)  external; }\ninterface DB {\n  function uintStorage(bytes32 _key) external view returns (uint);\n  function boolStorage(bytes32 _key) external view returns (bool);\n  function setUint(bytes32 _key, uint _value) external;\n  function setBool(bytes32 _key, bool _value) external;\n  function deleteUint(bytes32 _key) external;\n  function deleteBool(bytes32 _key) external;\n}\n\n// @title A contract for granting and revoking access levels to different users\n// @author Kyle Dewhurst, MyBit Foundation\n// @notice Made for platforms that require hierarchical access restrictions\ncontract AccessHierarchy {\n\n  DB public database;\n  Events public events;\n  uint8 public upperAccessLevel;\n\n  // @notice Constructor: Inititalize Database\n  constructor(address _database, address _events)\n  public  {\n    database = DB(_database);\n    events = Events(_events);\n  }\n\n  // @notice Owner can manually grant access to a user here. WIll be used for KYC approval\n  // @param Address of new user.\n  // @param The level of access granted by owner/burningcontract\n  function approveUser(address _newUser, uint _accessLevel)\n  onlyPlatform\n  noEmptyAddress(_newUser)\n  public\n  returns (bool) {\n    require(_accessLevel < upperAccessLevel && _accessLevel != uint8(0));\n    database.setUint(keccak256(abi.encodePacked(\"userAccess\", _newUser)), _accessLevel);\n    emit LogUserApproved(_newUser, _accessLevel);\n    return true;\n  }\n\n  // @notice Owner can remove access for users\n  // @param User to be removed\n  function removeUser(address _user)\n  onlyOwner\n  public\n  returns (bool) {\n    uint accessLevel = database.uintStorage(keccak256(abi.encodePacked(\"userAccess\", _user)));\n    database.deleteUint(keccak256(abi.encodePacked(\"userAccess\", _user)));\n    emit LogUserRemoved(_user, accessLevel);\n    return true;\n  }\n\n  // @notice Owner can set the upper bound on access levels\n  // @param (uint8) _newUpperLimit = The highest access level on the platform\n  function setUpperAccessLevel(uint8 _newUpperLimit)\n  public\n  onlyOwner {\n    require(_newUpperLimit > uint8(0));\n    upperAccessLevel = _newUpperLimit;\n  }\n\n  // @notice platform owners can destroy contract here\n  function destroy()\n  onlyOwner\n  external {\n    events.transaction('AccessHierarchy destroyed', address(this), msg.sender, address(this).balance, '');\n    selfdestruct(msg.sender);\n  }\n\n  // @notice Deny empty address parameters\n  modifier noEmptyAddress(address _param) {\n    require(_param != address(0));\n    _;\n  }\n\n  // @notice Deny all callers except owner\n  modifier onlyOwner {\n    require(database.boolStorage(keccak256(abi.encodePacked(\"owner\", msg.sender))));\n    _;\n  }\n\n  // @notice only contracts on the platform can call.\n  modifier onlyPlatform {\n    require(database.boolStorage(keccak256(abi.encodePacked(\"contract\", msg.sender))));\n    _;\n  }\n\n  //------------------------------------------------------------------------------------------------------------------\n  //                                        Events\n  //------------------------------------------------------------------------------------------------------------------\n  event LogUserApproved(address _user, uint _approvalLevel);\n  event LogUserRemoved(address indexed _user, uint indexed _accessLevel);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/access/AccessHierarchy.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/access/AccessHierarchy.sol",
    "exportedSymbols": {
      "AccessHierarchy": [
        336
      ],
      "DB": [
        111
      ],
      "Events": [
        72
      ]
    },
    "id": 337,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 72,
        "linearizedBaseContracts": [
          72
        ],
        "name": "Events",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 71,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transaction",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 69,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60,
                  "name": "_message",
                  "nodeType": "VariableDeclaration",
                  "scope": 71,
                  "src": "67:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 59,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "67:6:1",
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
                  "id": 62,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 71,
                  "src": "84:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "84:7:1",
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
                  "id": 64,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 71,
                  "src": "99:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "99:7:1",
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
                  "id": 66,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 71,
                  "src": "112:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 65,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "112:4:1",
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
                  "id": 68,
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "scope": 71,
                  "src": "126:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 67,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "126:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "66:72:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 70,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "148:0:1"
            },
            "scope": 72,
            "src": "46:103:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 337,
        "src": "26:125:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 111,
        "linearizedBaseContracts": [
          111
        ],
        "name": "DB",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 79,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "uintStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 75,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 74,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 79,
                  "src": "190:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 73,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "190:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "189:14:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 78,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 77,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 79,
                  "src": "227:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 76,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "227:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "226:6:1"
            },
            "scope": 111,
            "src": "169:64:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 86,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "boolStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 82,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 81,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "257:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 80,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "257:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "256:14:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 85,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 84,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "294:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 83,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "294:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "293:6:1"
            },
            "scope": 111,
            "src": "236:64:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 93,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 91,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 88,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 93,
                  "src": "320:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 87,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "320:7:1",
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
                  "id": 90,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 93,
                  "src": "334:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "334:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "319:27:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "355:0:1"
            },
            "scope": 111,
            "src": "303:53:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 100,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 98,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 95,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 100,
                  "src": "376:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 94,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "376:7:1",
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
                  "id": 97,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 100,
                  "src": "390:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 96,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "390:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "375:27:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 99,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "411:0:1"
            },
            "scope": 111,
            "src": "359:53:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 105,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 103,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 102,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 105,
                  "src": "435:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 101,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "435:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "434:14:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 104,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "457:0:1"
            },
            "scope": 111,
            "src": "415:43:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 110,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 108,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 107,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 110,
                  "src": "481:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 106,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "481:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "480:14:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 109,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "503:0:1"
            },
            "scope": 111,
            "src": "461:43:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 337,
        "src": "152:354:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 336,
        "linearizedBaseContracts": [
          336
        ],
        "name": "AccessHierarchy",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 113,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 336,
            "src": "737:18:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DB_$111",
              "typeString": "contract DB"
            },
            "typeName": {
              "contractScope": null,
              "id": 112,
              "name": "DB",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 111,
              "src": "737:2:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DB_$111",
                "typeString": "contract DB"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 115,
            "name": "events",
            "nodeType": "VariableDeclaration",
            "scope": 336,
            "src": "759:20:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Events_$72",
              "typeString": "contract Events"
            },
            "typeName": {
              "contractScope": null,
              "id": 114,
              "name": "Events",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 72,
              "src": "759:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Events_$72",
                "typeString": "contract Events"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 117,
            "name": "upperAccessLevel",
            "nodeType": "VariableDeclaration",
            "scope": 336,
            "src": "783:29:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 116,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "783:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 136,
              "nodeType": "Block",
              "src": "922:65:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 128,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 124,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "928:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DB_$111",
                        "typeString": "contract DB"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 126,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 119,
                          "src": "942:9:1",
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
                        "id": 125,
                        "name": "DB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 111,
                        "src": "939:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DB_$111_$",
                          "typeString": "type(contract DB)"
                        }
                      },
                      "id": 127,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "939:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DB_$111",
                        "typeString": "contract DB"
                      }
                    },
                    "src": "928:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DB_$111",
                      "typeString": "contract DB"
                    }
                  },
                  "id": 129,
                  "nodeType": "ExpressionStatement",
                  "src": "928:24:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 134,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 130,
                      "name": "events",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 115,
                      "src": "958:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$72",
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
                          "id": 132,
                          "name": "_events",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121,
                          "src": "974:7:1",
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
                        "id": 131,
                        "name": "Events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 72,
                        "src": "967:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Events_$72_$",
                          "typeString": "type(contract Events)"
                        }
                      },
                      "id": 133,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "967:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$72",
                        "typeString": "contract Events"
                      }
                    },
                    "src": "958:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Events_$72",
                      "typeString": "contract Events"
                    }
                  },
                  "id": 135,
                  "nodeType": "ExpressionStatement",
                  "src": "958:24:1"
                }
              ]
            },
            "documentation": null,
            "id": 137,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 122,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 119,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 137,
                  "src": "876:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 118,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "876:7:1",
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
                  "id": 121,
                  "name": "_events",
                  "nodeType": "VariableDeclaration",
                  "scope": 137,
                  "src": "895:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 120,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "895:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "875:36:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 123,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "922:0:1"
            },
            "scope": 336,
            "src": "864:123:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 183,
              "nodeType": "Block",
              "src": "1306:235:1",
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
                        "id": 160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 154,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 152,
                            "name": "_accessLevel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 141,
                            "src": "1320:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 153,
                            "name": "upperAccessLevel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 117,
                            "src": "1335:16:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "1320:31:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 159,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 155,
                            "name": "_accessLevel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 141,
                            "src": "1355:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 157,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1377:1:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 156,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1371:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint8_$",
                                "typeString": "type(uint8)"
                              },
                              "typeName": "uint8"
                            },
                            "id": 158,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1371:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "1355:24:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1320:59:1",
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
                      "id": 151,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "1312:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1312:68:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 162,
                  "nodeType": "ExpressionStatement",
                  "src": "1312:68:1"
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
                                "hexValue": "75736572416363657373",
                                "id": 169,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1430:12:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                "value": "userAccess"
                              },
                              {
                                "argumentTypes": null,
                                "id": 170,
                                "name": "_newUser",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 139,
                                "src": "1444:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 167,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "1413:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 168,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1413:16:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 171,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1413:40:1",
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
                          "id": 166,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "1403:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 172,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1403:51:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 173,
                        "name": "_accessLevel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 141,
                        "src": "1456:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
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
                        "id": 163,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 113,
                        "src": "1386:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$111",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 165,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 93,
                      "src": "1386:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256) external"
                      }
                    },
                    "id": 174,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1386:83:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 175,
                  "nodeType": "ExpressionStatement",
                  "src": "1386:83:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 177,
                        "name": "_newUser",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 139,
                        "src": "1496:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 178,
                        "name": "_accessLevel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 141,
                        "src": "1506:12:1",
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
                      "id": 176,
                      "name": "LogUserApproved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 329,
                      "src": "1480:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 179,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1480:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 180,
                  "nodeType": "EmitStatement",
                  "src": "1475:44:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1532:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 150,
                  "id": 182,
                  "nodeType": "Return",
                  "src": "1525:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 184,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 144,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 143,
                  "name": "onlyPlatform",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 323,
                  "src": "1240:12:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1240:12:1"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 146,
                    "name": "_newUser",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 139,
                    "src": "1270:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 147,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 145,
                  "name": "noEmptyAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 287,
                  "src": "1255:14:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1255:24:1"
              }
            ],
            "name": "approveUser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 139,
                  "name": "_newUser",
                  "nodeType": "VariableDeclaration",
                  "scope": 184,
                  "src": "1201:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 138,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1201:7:1",
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
                  "id": 141,
                  "name": "_accessLevel",
                  "nodeType": "VariableDeclaration",
                  "scope": 184,
                  "src": "1219:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 140,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1219:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1200:37:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 150,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 149,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 184,
                  "src": "1300:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 148,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1300:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1299:6:1"
            },
            "scope": 336,
            "src": "1180:361:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 225,
              "nodeType": "Block",
              "src": "1696:237:1",
              "statements": [
                {
                  "assignments": [
                    194
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 194,
                      "name": "accessLevel",
                      "nodeType": "VariableDeclaration",
                      "scope": 226,
                      "src": "1702:16:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 193,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1702:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 205,
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
                                "hexValue": "75736572416363657373",
                                "id": 200,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1769:12:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                "value": "userAccess"
                              },
                              {
                                "argumentTypes": null,
                                "id": 201,
                                "name": "_user",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 186,
                                "src": "1783:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 198,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "1752:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 199,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1752:16:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 202,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1752:37:1",
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
                          "id": 197,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "1742:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 203,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1742:48:1",
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
                        "id": 195,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 113,
                        "src": "1721:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$111",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 196,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "uintStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 79,
                      "src": "1721:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
                      }
                    },
                    "id": 204,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1721:70:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1702:89:1"
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
                                "hexValue": "75736572416363657373",
                                "id": 212,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1844:12:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                "value": "userAccess"
                              },
                              {
                                "argumentTypes": null,
                                "id": 213,
                                "name": "_user",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 186,
                                "src": "1858:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 210,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "1827:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 211,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1827:16:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 214,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1827:37:1",
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
                          "id": 209,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "1817:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 215,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1817:48:1",
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
                        "id": 206,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 113,
                        "src": "1797:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$111",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 208,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deleteUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 105,
                      "src": "1797:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) external"
                      }
                    },
                    "id": 216,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1797:69:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 217,
                  "nodeType": "ExpressionStatement",
                  "src": "1797:69:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 219,
                        "name": "_user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 186,
                        "src": "1892:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 220,
                        "name": "accessLevel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 194,
                        "src": "1899:11:1",
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
                      "id": 218,
                      "name": "LogUserRemoved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 335,
                      "src": "1877:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 221,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1877:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 222,
                  "nodeType": "EmitStatement",
                  "src": "1872:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 223,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1924:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 192,
                  "id": 224,
                  "nodeType": "Return",
                  "src": "1917:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 226,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 189,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 188,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 305,
                  "src": "1660:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1660:9:1"
              }
            ],
            "name": "removeUser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 186,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 226,
                  "src": "1643:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 185,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1643:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1642:15:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 192,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 191,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 226,
                  "src": "1690:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 190,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1690:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1689:6:1"
            },
            "scope": 336,
            "src": "1623:310:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 245,
              "nodeType": "Block",
              "src": "2147:84:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "id": 238,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 234,
                          "name": "_newUpperLimit",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 228,
                          "src": "2161:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 236,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2184:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 235,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2178:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint8_$",
                              "typeString": "type(uint8)"
                            },
                            "typeName": "uint8"
                          },
                          "id": 237,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2178:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "2161:25:1",
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
                      "id": 233,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "2153:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 239,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2153:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 240,
                  "nodeType": "ExpressionStatement",
                  "src": "2153:34:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 243,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 241,
                      "name": "upperAccessLevel",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 117,
                      "src": "2193:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 242,
                      "name": "_newUpperLimit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 228,
                      "src": "2212:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "2193:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 244,
                  "nodeType": "ExpressionStatement",
                  "src": "2193:33:1"
                }
              ]
            },
            "documentation": null,
            "id": 246,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 231,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 230,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 305,
                  "src": "2137:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2137:9:1"
              }
            ],
            "name": "setUpperAccessLevel",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 229,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 228,
                  "name": "_newUpperLimit",
                  "nodeType": "VariableDeclaration",
                  "scope": 246,
                  "src": "2104:20:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 227,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "2104:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2103:22:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 232,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2147:0:1"
            },
            "scope": 336,
            "src": "2075:156:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 272,
              "nodeType": "Block",
              "src": "2332:142:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "4163636573734869657261726368792064657374726f796564",
                        "id": 254,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2357:27:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_d9e92aaa6a4efd30f624e6972423201974beee67c4a0694edd028908c898aad2",
                          "typeString": "literal_string \"AccessHierarchy destroyed\""
                        },
                        "value": "AccessHierarchy destroyed"
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 256,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20986,
                            "src": "2394:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_AccessHierarchy_$336",
                              "typeString": "contract AccessHierarchy"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_AccessHierarchy_$336",
                              "typeString": "contract AccessHierarchy"
                            }
                          ],
                          "id": 255,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2386:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 257,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2386:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 258,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "2401:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 259,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2401:10:1",
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
                              "id": 261,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20986,
                              "src": "2421:4:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AccessHierarchy_$336",
                                "typeString": "contract AccessHierarchy"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_AccessHierarchy_$336",
                                "typeString": "contract AccessHierarchy"
                              }
                            ],
                            "id": 260,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2413:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 262,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2413:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 263,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2413:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 264,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2436:2:1",
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
                          "typeIdentifier": "t_stringliteral_d9e92aaa6a4efd30f624e6972423201974beee67c4a0694edd028908c898aad2",
                          "typeString": "literal_string \"AccessHierarchy destroyed\""
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
                        "id": 251,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 115,
                        "src": "2338:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$72",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 253,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 71,
                      "src": "2338:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 265,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2338:101:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 266,
                  "nodeType": "ExpressionStatement",
                  "src": "2338:101:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 268,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "2458:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 269,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2458:10:1",
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
                      "id": 267,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20975,
                      "src": "2445:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 270,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2445:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 271,
                  "nodeType": "ExpressionStatement",
                  "src": "2445:24:1"
                }
              ]
            },
            "documentation": null,
            "id": 273,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 249,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 248,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 305,
                  "src": "2311:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2311:9:1"
              }
            ],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 247,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2306:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 250,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2332:0:1"
            },
            "scope": 336,
            "src": "2290:184:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 286,
              "nodeType": "Block",
              "src": "2561:47:1",
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
                        "id": 282,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 278,
                          "name": "_param",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 275,
                          "src": "2575:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 280,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2593:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 279,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2585:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 281,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2585:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2575:20:1",
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
                      "id": 277,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "2567:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 283,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2567:29:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 284,
                  "nodeType": "ExpressionStatement",
                  "src": "2567:29:1"
                },
                {
                  "id": 285,
                  "nodeType": "PlaceholderStatement",
                  "src": "2602:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 287,
            "name": "noEmptyAddress",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 276,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 275,
                  "name": "_param",
                  "nodeType": "VariableDeclaration",
                  "scope": 287,
                  "src": "2545:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 274,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2545:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2544:16:1"
            },
            "src": "2521:87:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 304,
              "nodeType": "Block",
              "src": "2674:97:1",
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
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "6f776e6572",
                                    "id": 295,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2736:7:1",
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
                                      "id": 296,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20967,
                                      "src": "2745:3:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 297,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2745:10:1",
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
                                    "id": 293,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20954,
                                    "src": "2719:3:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 294,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2719:16:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 298,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2719:37:1",
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
                              "id": 292,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20961,
                              "src": "2709:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 299,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2709:48:1",
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
                            "id": 290,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 113,
                            "src": "2688:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DB_$111",
                              "typeString": "contract DB"
                            }
                          },
                          "id": 291,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 86,
                          "src": "2688:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 300,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2688:70:1",
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
                      "id": 289,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "2680:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 301,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2680:79:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 302,
                  "nodeType": "ExpressionStatement",
                  "src": "2680:79:1"
                },
                {
                  "id": 303,
                  "nodeType": "PlaceholderStatement",
                  "src": "2765:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 305,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 288,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2674:0:1"
            },
            "src": "2655:116:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 322,
              "nodeType": "Block",
              "src": "2851:100:1",
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
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "636f6e7472616374",
                                    "id": 313,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2913:10:1",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                      "typeString": "literal_string \"contract\""
                                    },
                                    "value": "contract"
                                  },
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 314,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20967,
                                      "src": "2925:3:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 315,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2925:10:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                      "typeString": "literal_string \"contract\""
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 311,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20954,
                                    "src": "2896:3:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 312,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2896:16:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 316,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2896:40:1",
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
                              "id": 310,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20961,
                              "src": "2886:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 317,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2886:51:1",
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
                            "id": 308,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 113,
                            "src": "2865:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DB_$111",
                              "typeString": "contract DB"
                            }
                          },
                          "id": 309,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 86,
                          "src": "2865:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 318,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2865:73:1",
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
                      "id": 307,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "2857:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 319,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2857:82:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 320,
                  "nodeType": "ExpressionStatement",
                  "src": "2857:82:1"
                },
                {
                  "id": 321,
                  "nodeType": "PlaceholderStatement",
                  "src": "2945:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 323,
            "name": "onlyPlatform",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 306,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2851:0:1"
            },
            "src": "2829:122:1",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 329,
            "name": "LogUserApproved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 328,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 325,
                  "indexed": false,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 329,
                  "src": "3266:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 324,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3266:7:1",
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
                  "id": 327,
                  "indexed": false,
                  "name": "_approvalLevel",
                  "nodeType": "VariableDeclaration",
                  "scope": 329,
                  "src": "3281:19:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 326,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3281:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3265:36:1"
            },
            "src": "3244:58:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 335,
            "name": "LogUserRemoved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 334,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 331,
                  "indexed": true,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 335,
                  "src": "3326:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 330,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3326:7:1",
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
                  "id": 333,
                  "indexed": true,
                  "name": "_accessLevel",
                  "nodeType": "VariableDeclaration",
                  "scope": 335,
                  "src": "3349:25:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 332,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3349:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3325:50:1"
            },
            "src": "3305:71:1"
          }
        ],
        "scope": 337,
        "src": "707:2671:1"
      }
    ],
    "src": "0:3379:1"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/access/AccessHierarchy.sol",
    "exportedSymbols": {
      "AccessHierarchy": [
        336
      ],
      "DB": [
        111
      ],
      "Events": [
        72
      ]
    },
    "id": 337,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 72,
        "linearizedBaseContracts": [
          72
        ],
        "name": "Events",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 71,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transaction",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 69,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60,
                  "name": "_message",
                  "nodeType": "VariableDeclaration",
                  "scope": 71,
                  "src": "67:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 59,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "67:6:1",
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
                  "id": 62,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 71,
                  "src": "84:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "84:7:1",
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
                  "id": 64,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 71,
                  "src": "99:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 63,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "99:7:1",
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
                  "id": 66,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 71,
                  "src": "112:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 65,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "112:4:1",
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
                  "id": 68,
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "scope": 71,
                  "src": "126:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 67,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "126:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "66:72:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 70,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "148:0:1"
            },
            "scope": 72,
            "src": "46:103:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 337,
        "src": "26:125:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 111,
        "linearizedBaseContracts": [
          111
        ],
        "name": "DB",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 79,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "uintStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 75,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 74,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 79,
                  "src": "190:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 73,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "190:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "189:14:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 78,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 77,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 79,
                  "src": "227:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 76,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "227:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "226:6:1"
            },
            "scope": 111,
            "src": "169:64:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 86,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "boolStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 82,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 81,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "257:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 80,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "257:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "256:14:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 85,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 84,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "294:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 83,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "294:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "293:6:1"
            },
            "scope": 111,
            "src": "236:64:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 93,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 91,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 88,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 93,
                  "src": "320:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 87,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "320:7:1",
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
                  "id": 90,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 93,
                  "src": "334:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "334:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "319:27:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "355:0:1"
            },
            "scope": 111,
            "src": "303:53:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 100,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 98,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 95,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 100,
                  "src": "376:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 94,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "376:7:1",
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
                  "id": 97,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 100,
                  "src": "390:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 96,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "390:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "375:27:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 99,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "411:0:1"
            },
            "scope": 111,
            "src": "359:53:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 105,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 103,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 102,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 105,
                  "src": "435:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 101,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "435:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "434:14:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 104,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "457:0:1"
            },
            "scope": 111,
            "src": "415:43:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 110,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 108,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 107,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 110,
                  "src": "481:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 106,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "481:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "480:14:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 109,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "503:0:1"
            },
            "scope": 111,
            "src": "461:43:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 337,
        "src": "152:354:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 336,
        "linearizedBaseContracts": [
          336
        ],
        "name": "AccessHierarchy",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 113,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 336,
            "src": "737:18:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DB_$111",
              "typeString": "contract DB"
            },
            "typeName": {
              "contractScope": null,
              "id": 112,
              "name": "DB",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 111,
              "src": "737:2:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DB_$111",
                "typeString": "contract DB"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 115,
            "name": "events",
            "nodeType": "VariableDeclaration",
            "scope": 336,
            "src": "759:20:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Events_$72",
              "typeString": "contract Events"
            },
            "typeName": {
              "contractScope": null,
              "id": 114,
              "name": "Events",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 72,
              "src": "759:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Events_$72",
                "typeString": "contract Events"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 117,
            "name": "upperAccessLevel",
            "nodeType": "VariableDeclaration",
            "scope": 336,
            "src": "783:29:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 116,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "783:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 136,
              "nodeType": "Block",
              "src": "922:65:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 128,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 124,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "928:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DB_$111",
                        "typeString": "contract DB"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 126,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 119,
                          "src": "942:9:1",
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
                        "id": 125,
                        "name": "DB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 111,
                        "src": "939:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DB_$111_$",
                          "typeString": "type(contract DB)"
                        }
                      },
                      "id": 127,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "939:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DB_$111",
                        "typeString": "contract DB"
                      }
                    },
                    "src": "928:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DB_$111",
                      "typeString": "contract DB"
                    }
                  },
                  "id": 129,
                  "nodeType": "ExpressionStatement",
                  "src": "928:24:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 134,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 130,
                      "name": "events",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 115,
                      "src": "958:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$72",
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
                          "id": 132,
                          "name": "_events",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 121,
                          "src": "974:7:1",
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
                        "id": 131,
                        "name": "Events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 72,
                        "src": "967:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Events_$72_$",
                          "typeString": "type(contract Events)"
                        }
                      },
                      "id": 133,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "967:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$72",
                        "typeString": "contract Events"
                      }
                    },
                    "src": "958:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Events_$72",
                      "typeString": "contract Events"
                    }
                  },
                  "id": 135,
                  "nodeType": "ExpressionStatement",
                  "src": "958:24:1"
                }
              ]
            },
            "documentation": null,
            "id": 137,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 122,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 119,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 137,
                  "src": "876:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 118,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "876:7:1",
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
                  "id": 121,
                  "name": "_events",
                  "nodeType": "VariableDeclaration",
                  "scope": 137,
                  "src": "895:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 120,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "895:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "875:36:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 123,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "922:0:1"
            },
            "scope": 336,
            "src": "864:123:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 183,
              "nodeType": "Block",
              "src": "1306:235:1",
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
                        "id": 160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 154,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 152,
                            "name": "_accessLevel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 141,
                            "src": "1320:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 153,
                            "name": "upperAccessLevel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 117,
                            "src": "1335:16:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "1320:31:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 159,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 155,
                            "name": "_accessLevel",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 141,
                            "src": "1355:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "30",
                                "id": 157,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1377:1:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 156,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1371:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint8_$",
                                "typeString": "type(uint8)"
                              },
                              "typeName": "uint8"
                            },
                            "id": 158,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1371:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "1355:24:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1320:59:1",
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
                      "id": 151,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "1312:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1312:68:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 162,
                  "nodeType": "ExpressionStatement",
                  "src": "1312:68:1"
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
                                "hexValue": "75736572416363657373",
                                "id": 169,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1430:12:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                "value": "userAccess"
                              },
                              {
                                "argumentTypes": null,
                                "id": 170,
                                "name": "_newUser",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 139,
                                "src": "1444:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 167,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "1413:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 168,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1413:16:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 171,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1413:40:1",
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
                          "id": 166,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "1403:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 172,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1403:51:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 173,
                        "name": "_accessLevel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 141,
                        "src": "1456:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
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
                        "id": 163,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 113,
                        "src": "1386:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$111",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 165,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 93,
                      "src": "1386:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256) external"
                      }
                    },
                    "id": 174,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1386:83:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 175,
                  "nodeType": "ExpressionStatement",
                  "src": "1386:83:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 177,
                        "name": "_newUser",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 139,
                        "src": "1496:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 178,
                        "name": "_accessLevel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 141,
                        "src": "1506:12:1",
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
                      "id": 176,
                      "name": "LogUserApproved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 329,
                      "src": "1480:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 179,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1480:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 180,
                  "nodeType": "EmitStatement",
                  "src": "1475:44:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1532:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 150,
                  "id": 182,
                  "nodeType": "Return",
                  "src": "1525:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 184,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 144,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 143,
                  "name": "onlyPlatform",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 323,
                  "src": "1240:12:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1240:12:1"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 146,
                    "name": "_newUser",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 139,
                    "src": "1270:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 147,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 145,
                  "name": "noEmptyAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 287,
                  "src": "1255:14:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1255:24:1"
              }
            ],
            "name": "approveUser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 139,
                  "name": "_newUser",
                  "nodeType": "VariableDeclaration",
                  "scope": 184,
                  "src": "1201:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 138,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1201:7:1",
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
                  "id": 141,
                  "name": "_accessLevel",
                  "nodeType": "VariableDeclaration",
                  "scope": 184,
                  "src": "1219:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 140,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1219:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1200:37:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 150,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 149,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 184,
                  "src": "1300:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 148,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1300:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1299:6:1"
            },
            "scope": 336,
            "src": "1180:361:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 225,
              "nodeType": "Block",
              "src": "1696:237:1",
              "statements": [
                {
                  "assignments": [
                    194
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 194,
                      "name": "accessLevel",
                      "nodeType": "VariableDeclaration",
                      "scope": 226,
                      "src": "1702:16:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 193,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1702:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 205,
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
                                "hexValue": "75736572416363657373",
                                "id": 200,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1769:12:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                "value": "userAccess"
                              },
                              {
                                "argumentTypes": null,
                                "id": 201,
                                "name": "_user",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 186,
                                "src": "1783:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 198,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "1752:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 199,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1752:16:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 202,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1752:37:1",
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
                          "id": 197,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "1742:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 203,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1742:48:1",
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
                        "id": 195,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 113,
                        "src": "1721:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$111",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 196,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "uintStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 79,
                      "src": "1721:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
                      }
                    },
                    "id": 204,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1721:70:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1702:89:1"
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
                                "hexValue": "75736572416363657373",
                                "id": 212,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1844:12:1",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                "value": "userAccess"
                              },
                              {
                                "argumentTypes": null,
                                "id": 213,
                                "name": "_user",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 186,
                                "src": "1858:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_5982a0170e6890c218e5e8564dd9853a9e737f14cd5226f0102da8897b40b09e",
                                  "typeString": "literal_string \"userAccess\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 210,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "1827:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 211,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1827:16:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 214,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1827:37:1",
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
                          "id": 209,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "1817:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 215,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1817:48:1",
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
                        "id": 206,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 113,
                        "src": "1797:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$111",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 208,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deleteUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 105,
                      "src": "1797:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) external"
                      }
                    },
                    "id": 216,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1797:69:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 217,
                  "nodeType": "ExpressionStatement",
                  "src": "1797:69:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 219,
                        "name": "_user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 186,
                        "src": "1892:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 220,
                        "name": "accessLevel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 194,
                        "src": "1899:11:1",
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
                      "id": 218,
                      "name": "LogUserRemoved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 335,
                      "src": "1877:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 221,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1877:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 222,
                  "nodeType": "EmitStatement",
                  "src": "1872:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 223,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1924:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 192,
                  "id": 224,
                  "nodeType": "Return",
                  "src": "1917:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 226,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 189,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 188,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 305,
                  "src": "1660:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1660:9:1"
              }
            ],
            "name": "removeUser",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 186,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 226,
                  "src": "1643:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 185,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1643:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1642:15:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 192,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 191,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 226,
                  "src": "1690:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 190,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1690:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1689:6:1"
            },
            "scope": 336,
            "src": "1623:310:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 245,
              "nodeType": "Block",
              "src": "2147:84:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "id": 238,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 234,
                          "name": "_newUpperLimit",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 228,
                          "src": "2161:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 236,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2184:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 235,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2178:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint8_$",
                              "typeString": "type(uint8)"
                            },
                            "typeName": "uint8"
                          },
                          "id": 237,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2178:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "2161:25:1",
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
                      "id": 233,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "2153:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 239,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2153:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 240,
                  "nodeType": "ExpressionStatement",
                  "src": "2153:34:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 243,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 241,
                      "name": "upperAccessLevel",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 117,
                      "src": "2193:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 242,
                      "name": "_newUpperLimit",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 228,
                      "src": "2212:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "2193:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 244,
                  "nodeType": "ExpressionStatement",
                  "src": "2193:33:1"
                }
              ]
            },
            "documentation": null,
            "id": 246,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 231,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 230,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 305,
                  "src": "2137:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2137:9:1"
              }
            ],
            "name": "setUpperAccessLevel",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 229,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 228,
                  "name": "_newUpperLimit",
                  "nodeType": "VariableDeclaration",
                  "scope": 246,
                  "src": "2104:20:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 227,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "2104:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2103:22:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 232,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2147:0:1"
            },
            "scope": 336,
            "src": "2075:156:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 272,
              "nodeType": "Block",
              "src": "2332:142:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "4163636573734869657261726368792064657374726f796564",
                        "id": 254,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2357:27:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_d9e92aaa6a4efd30f624e6972423201974beee67c4a0694edd028908c898aad2",
                          "typeString": "literal_string \"AccessHierarchy destroyed\""
                        },
                        "value": "AccessHierarchy destroyed"
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 256,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20986,
                            "src": "2394:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_AccessHierarchy_$336",
                              "typeString": "contract AccessHierarchy"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_AccessHierarchy_$336",
                              "typeString": "contract AccessHierarchy"
                            }
                          ],
                          "id": 255,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2386:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 257,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2386:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 258,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "2401:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 259,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2401:10:1",
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
                              "id": 261,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20986,
                              "src": "2421:4:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AccessHierarchy_$336",
                                "typeString": "contract AccessHierarchy"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_AccessHierarchy_$336",
                                "typeString": "contract AccessHierarchy"
                              }
                            ],
                            "id": 260,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2413:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 262,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2413:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 263,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2413:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 264,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2436:2:1",
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
                          "typeIdentifier": "t_stringliteral_d9e92aaa6a4efd30f624e6972423201974beee67c4a0694edd028908c898aad2",
                          "typeString": "literal_string \"AccessHierarchy destroyed\""
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
                        "id": 251,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 115,
                        "src": "2338:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$72",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 253,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 71,
                      "src": "2338:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 265,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2338:101:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 266,
                  "nodeType": "ExpressionStatement",
                  "src": "2338:101:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 268,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "2458:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 269,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2458:10:1",
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
                      "id": 267,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20975,
                      "src": "2445:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 270,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2445:24:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 271,
                  "nodeType": "ExpressionStatement",
                  "src": "2445:24:1"
                }
              ]
            },
            "documentation": null,
            "id": 273,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 249,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 248,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 305,
                  "src": "2311:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2311:9:1"
              }
            ],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 247,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2306:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 250,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2332:0:1"
            },
            "scope": 336,
            "src": "2290:184:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 286,
              "nodeType": "Block",
              "src": "2561:47:1",
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
                        "id": 282,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 278,
                          "name": "_param",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 275,
                          "src": "2575:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 280,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2593:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 279,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2585:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 281,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2585:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2575:20:1",
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
                      "id": 277,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "2567:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 283,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2567:29:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 284,
                  "nodeType": "ExpressionStatement",
                  "src": "2567:29:1"
                },
                {
                  "id": 285,
                  "nodeType": "PlaceholderStatement",
                  "src": "2602:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 287,
            "name": "noEmptyAddress",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 276,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 275,
                  "name": "_param",
                  "nodeType": "VariableDeclaration",
                  "scope": 287,
                  "src": "2545:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 274,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2545:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2544:16:1"
            },
            "src": "2521:87:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 304,
              "nodeType": "Block",
              "src": "2674:97:1",
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
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "6f776e6572",
                                    "id": 295,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2736:7:1",
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
                                      "id": 296,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20967,
                                      "src": "2745:3:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 297,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2745:10:1",
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
                                    "id": 293,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20954,
                                    "src": "2719:3:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 294,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2719:16:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 298,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2719:37:1",
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
                              "id": 292,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20961,
                              "src": "2709:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 299,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2709:48:1",
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
                            "id": 290,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 113,
                            "src": "2688:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DB_$111",
                              "typeString": "contract DB"
                            }
                          },
                          "id": 291,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 86,
                          "src": "2688:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 300,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2688:70:1",
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
                      "id": 289,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "2680:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 301,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2680:79:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 302,
                  "nodeType": "ExpressionStatement",
                  "src": "2680:79:1"
                },
                {
                  "id": 303,
                  "nodeType": "PlaceholderStatement",
                  "src": "2765:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 305,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 288,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2674:0:1"
            },
            "src": "2655:116:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 322,
              "nodeType": "Block",
              "src": "2851:100:1",
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
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "636f6e7472616374",
                                    "id": 313,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2913:10:1",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                      "typeString": "literal_string \"contract\""
                                    },
                                    "value": "contract"
                                  },
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 314,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20967,
                                      "src": "2925:3:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 315,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2925:10:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                      "typeString": "literal_string \"contract\""
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 311,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20954,
                                    "src": "2896:3:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 312,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2896:16:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 316,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2896:40:1",
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
                              "id": 310,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20961,
                              "src": "2886:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 317,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2886:51:1",
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
                            "id": 308,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 113,
                            "src": "2865:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DB_$111",
                              "typeString": "contract DB"
                            }
                          },
                          "id": 309,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 86,
                          "src": "2865:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 318,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2865:73:1",
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
                      "id": 307,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "2857:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 319,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2857:82:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 320,
                  "nodeType": "ExpressionStatement",
                  "src": "2857:82:1"
                },
                {
                  "id": 321,
                  "nodeType": "PlaceholderStatement",
                  "src": "2945:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 323,
            "name": "onlyPlatform",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 306,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2851:0:1"
            },
            "src": "2829:122:1",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 329,
            "name": "LogUserApproved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 328,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 325,
                  "indexed": false,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 329,
                  "src": "3266:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 324,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3266:7:1",
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
                  "id": 327,
                  "indexed": false,
                  "name": "_approvalLevel",
                  "nodeType": "VariableDeclaration",
                  "scope": 329,
                  "src": "3281:19:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 326,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3281:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3265:36:1"
            },
            "src": "3244:58:1"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 335,
            "name": "LogUserRemoved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 334,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 331,
                  "indexed": true,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 335,
                  "src": "3326:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 330,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3326:7:1",
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
                  "id": 333,
                  "indexed": true,
                  "name": "_accessLevel",
                  "nodeType": "VariableDeclaration",
                  "scope": 335,
                  "src": "3349:25:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 332,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3349:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3325:50:1"
            },
            "src": "3305:71:1"
          }
        ],
        "scope": 337,
        "src": "707:2671:1"
      }
    ],
    "src": "0:3379:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:15.870Z"
}