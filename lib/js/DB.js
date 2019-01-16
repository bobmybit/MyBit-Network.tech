"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var DB = exports.DB = 
{
  "contractName": "DB",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "addressStorage",
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
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "uintStorage",
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
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "deleteUint",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        },
        {
          "name": "_value",
          "type": "bool"
        }
      ],
      "name": "setBool",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_key",
          "type": "bytes32"
        }
      ],
      "name": "boolStorage",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
  "source": "pragma solidity ^0.4.24;\n\nimport \"../math/SafeMath.sol\";\nimport \"../interfaces/ERC20.sol\";\nimport \"../interfaces/EtherDividendInterface.sol\";\n// import \"../access/ERC20Burner.sol\";\n\ninterface Events {  function transaction(string _message, address _from, address _to, uint _amount, bytes32 _id)  external; }\ninterface DB {\n  function addressStorage(bytes32 _key) external view returns (address);\n  function uintStorage(bytes32 _key) external view returns (uint);\n  function deleteUint(bytes32 _key) external;\n  function setBool(bytes32 _key, bool _value) external;\n  function boolStorage(bytes32 _key) external view returns (bool);\n}\n\n// @title An asset crowdsale contract, which accepts Ether for funding.\n// @author Kyle Dewhurst & Peter Phillips, MyBit Foundation\n// @notice Starts a new crowdsale and returns asset dividend tokens for Wei received.\n// @dev The AssetManager\ncontract CrowdsaleETH {\n    using SafeMath for uint256;\n\n    DB public database;\n    Events public events;\n    // ERC20Burner public burner;\n\n    // @notice Constructor: Initiates the database\n    // @param: The address for the database contract\n    constructor(address _database, address _events)\n    public {\n        database = DB(_database);\n        events = Events(_events);\n        // burner = ERC20Burner(database.addressStorage(keccak256(abi.encodePacked(\"contract\", \"ERC20Burner\"))));\n    }\n\n\n    // @notice Investors can send Ether here to fund asset, receiving an equivalent number of asset-tokens.\n    // @param (bytes32) _assetAddress = The address of the asset which completed the crowdsale\n    function buyAssetOrderETH(address _assetAddress, address _investor)\n    external\n    payable\n    requiresEther\n    validAsset(_assetAddress)\n    betweenDeadlines(_assetAddress)\n    notFinalized(_assetAddress)\n    // burnRequired\n    returns (bool) {\n      require(msg.sender == _investor || database.boolStorage(keccak256(abi.encodePacked(\"approval\", _investor, msg.sender, address(this), msg.sig))));\n      EtherDividendInterface assetToken = EtherDividendInterface(_assetAddress);\n      uint amountToRaise = database.uintStorage(keccak256(abi.encodePacked(\"crowdsale.goal\", _assetAddress)));\n      uint tokensRemaining = amountToRaise.sub(assetToken.totalSupply());\n      if (msg.value >= tokensRemaining) {\n        // Give assetManager his portion of tokens\n        require(assetToken.mint(database.addressStorage(keccak256(abi.encodePacked(\"contract\", \"AssetManagerFunds\"))), database.uintStorage(keccak256(abi.encodePacked(\"asset.managerFee\", _assetAddress)))), \"Manager minting failed\");\n        require(finalizeCrowdsale(_assetAddress));    // delete unnecessary variables\n        require(assetToken.mint(_investor, tokensRemaining), \"Investor minting failed\");   // Send remaining asset tokens\n        require(assetToken.finishMinting(), \"Minting not finished\");\n        require(payoutETH(_assetAddress, amountToRaise), \"Payout failed\");          // 1 token = 1 wei\n        msg.sender.transfer(msg.value.sub(tokensRemaining));     // Return leftover WEI after cost of tokens calculated and subtracted from msg.value to msg.sender *NOT _investor\n      }\n      else {\n        require(assetToken.mint(_investor, msg.value), \"Investor minting failed\");\n      }\n      events.transaction('Asset purchased', _investor, _assetAddress, msg.value, '');\n      return true;\n    }\n\n\n    // @notice Contributors can retrieve their funds here if crowdsale has paased deadline and not reached its goal\n    // @param (bytes32) _assetAddress = The address of the asset which completed the crowdsale\n    function refund(address _assetAddress)\n    external\n    whenNotPaused\n    validAsset(_assetAddress)\n    afterDeadline(_assetAddress)\n    notFinalized(_assetAddress)\n    returns (bool) {\n      require(database.uintStorage(keccak256(abi.encodePacked(\"crowdsale.deadline\", _assetAddress))) != 0);\n      database.deleteUint(keccak256(abi.encodePacked(\"crowdsale.deadline\", _assetAddress)));\n      EtherDividendInterface assetToken = EtherDividendInterface(_assetAddress);\n      uint refundValue = assetToken.totalSupply(); //token=wei\n      assetToken.issueDividends.value(refundValue)();\n      return true;\n    }\n\n    // @notice platform owners can recover tokens here\n    function recoverTokens(address _erc20Token)\n    onlyOwner\n    external {\n      ERC20 thisToken = ERC20(_erc20Token);\n      uint contractBalance = thisToken.balanceOf(address(this));\n      thisToken.transfer(msg.sender, contractBalance);\n    }\n\n    // @notice platform owners can destroy contract here\n    function destroy()\n    onlyOwner\n    external {\n      events.transaction('CrowdsaleETH destroyed', address(this), msg.sender, address(this).balance, '');\n      selfdestruct(msg.sender);\n    }\n\n    // @notice fallback function: reject ether\n    function ()\n    public\n    payable {\n      revert();\n    }\n\n    //------------------------------------------------------------------------------------------------------------------\n    //                                            Internal Functions\n    //------------------------------------------------------------------------------------------------------------------\n\n    // @notice This is called once funding has succeeded. Sends Ether to a distribution contract where operator & assetManager can withdraw\n    // @dev The contract manager needs to know  the address PlatformDistribution contract\n    // @param (bytes32) _assetAddress = The address of the asset which completed the crowdsale\n    // @param (uint) _amount = The amount of WEI to be sent to the platform + the operator\n    function payoutETH(address _assetAddress, uint _amount)\n    internal\n    returns (bool) {\n      address operator = database.addressStorage(keccak256(abi.encodePacked(\"asset.operator\", _assetAddress)));\n      address platformWallet = database.addressStorage(keccak256(abi.encodePacked(\"platform.wallet\")));\n      require(operator != address(0) && platformWallet != address(0), \"Operator or platform wallet not set\");\n      uint operatorPortion = _amount.mul(99).div(100);\n      uint platformPortion = _amount.sub(operatorPortion);\n      platformWallet.transfer(platformPortion);\n      operator.transfer(operatorPortion);\n      events.transaction('Asset payout', _assetAddress, operator, _amount, '');\n      return true;\n    }\n\n    // @notice internal function for freeing up storage after crowdsale finishes\n    // @param the ID of this asset.\n    function finalizeCrowdsale(address _assetAddress)\n    internal\n    returns (bool) {\n        database.setBool(keccak256(abi.encodePacked(\"crowdsale.finalized\", _assetAddress)), true);\n        database.deleteUint(keccak256(abi.encodePacked(\"crowdsale.goal\", _assetAddress)));     // This is now represented as totalSupply in the asset-token\n        database.deleteUint(keccak256(abi.encodePacked(\"asset.managerFee\", _assetAddress)));   // This is now represented as tokens in AssetManagerFunds.sol\n        return true;\n    }\n\n\n    //------------------------------------------------------------------------------------------------------------------\n    //                                            Modifiers\n    //------------------------------------------------------------------------------------------------------------------\n\n\n    // @notice Requires that Ether is sent with the transaction\n    modifier requiresEther() {\n      require(msg.value > 0);\n      _;\n    }\n\n    // @notice Sender must be a registered owner\n    modifier onlyOwner {\n      require(database.boolStorage(keccak256(abi.encodePacked(\"owner\", msg.sender))), \"Not owner\");\n      _;\n    }\n\n    // // @notice reverts if investor hasn't approved burner to burn platform token\n    // modifier burnRequired {\n    //   require(burner.burn(msg.sender, database.uintStorage(keccak256(abi.encodePacked(msg.sig, address(this))))), \"Burn failed\");\n    //   _;\n    // }\n\n    // @notice function won't run if owners have paused this contract\n    modifier whenNotPaused {\n      require(!database.boolStorage(keccak256(abi.encodePacked(\"paused\", address(this)))), \"Contract paused\");\n      _;\n    }\n\n    // @notice reverts if the asset does not have a token address set in the database\n    modifier validAsset(address _assetAddress) {\n      require(database.addressStorage(keccak256(abi.encodePacked(\"asset.manager\", _assetAddress))) != address(0), \"Invalid asset\");\n      _;\n    }\n\n    // @notice reverts if the funding deadline has already past\n    modifier betweenDeadlines(address _assetAddress) {\n      require(now <= database.uintStorage(keccak256(abi.encodePacked(\"crowdsale.deadline\", _assetAddress))), \"Past deadline\");\n      require(now >= database.uintStorage(keccak256(abi.encodePacked(\"crowdsale.start\", _assetAddress))), \"Before start time\");\n      _;\n    }\n\n    // @notice reverts if the funding deadline has already past\n    modifier afterDeadline(address _assetAddress) {\n      require(now > database.uintStorage(keccak256(abi.encodePacked(\"crowdsale.deadline\", _assetAddress))), \"Before deadline\");\n      _;\n    }\n\n    // @notice returns true if crowdsale is not finshed\n    modifier notFinalized(address _assetAddress) {\n      require( !database.boolStorage(keccak256(abi.encodePacked(\"crowdsale.finalized\", _assetAddress))), \"Crowdsale finalized\");\n      _;\n    }\n\n  }\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/crowdsale/CrowdsaleETH.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/crowdsale/CrowdsaleETH.sol",
    "exportedSymbols": {
      "CrowdsaleETH": [
        2605
      ],
      "DB": [
        1976
      ],
      "Events": [
        1942
      ]
    },
    "id": 2606,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1925,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:13"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../math/SafeMath.sol",
        "id": 1926,
        "nodeType": "ImportDirective",
        "scope": 2606,
        "sourceUnit": 8864,
        "src": "26:30:13",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 1927,
        "nodeType": "ImportDirective",
        "scope": 2606,
        "sourceUnit": 8599,
        "src": "57:33:13",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/EtherDividendInterface.sol",
        "file": "../interfaces/EtherDividendInterface.sol",
        "id": 1928,
        "nodeType": "ImportDirective",
        "scope": 2606,
        "sourceUnit": 8651,
        "src": "91:50:13",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 1942,
        "linearizedBaseContracts": [
          1942
        ],
        "name": "Events",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 1941,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transaction",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1939,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1930,
                  "name": "_message",
                  "nodeType": "VariableDeclaration",
                  "scope": 1941,
                  "src": "223:15:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1929,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "223:6:13",
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
                  "id": 1932,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 1941,
                  "src": "240:13:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1931,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "240:7:13",
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
                  "id": 1934,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1941,
                  "src": "255:11:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1933,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "255:7:13",
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
                  "id": 1936,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1941,
                  "src": "268:12:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1935,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "268:4:13",
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
                  "id": 1938,
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "scope": 1941,
                  "src": "282:11:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1937,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "282:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "222:72:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 1940,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "304:0:13"
            },
            "scope": 1942,
            "src": "202:103:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2606,
        "src": "182:125:13"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 1976,
        "linearizedBaseContracts": [
          1976
        ],
        "name": "DB",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 1949,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addressStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1945,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1944,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 1949,
                  "src": "349:12:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1943,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "349:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "348:14:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 1948,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1947,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1949,
                  "src": "386:7:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1946,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "386:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "385:9:13"
            },
            "scope": 1976,
            "src": "325:70:13",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1956,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "uintStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1952,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1951,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 1956,
                  "src": "419:12:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1950,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "419:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "418:14:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 1955,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1954,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1956,
                  "src": "456:4:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1953,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "456:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "455:6:13"
            },
            "scope": 1976,
            "src": "398:64:13",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1961,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1959,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1958,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 1961,
                  "src": "485:12:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1957,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "485:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "484:14:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 1960,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "507:0:13"
            },
            "scope": 1976,
            "src": "465:43:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1968,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1966,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1963,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 1968,
                  "src": "528:12:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1962,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "528:7:13",
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
                  "id": 1965,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 1968,
                  "src": "542:11:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1964,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "542:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "527:27:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 1967,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "563:0:13"
            },
            "scope": 1976,
            "src": "511:53:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1975,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "boolStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1971,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1970,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 1975,
                  "src": "588:12:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1969,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "588:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "587:14:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 1974,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1973,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1975,
                  "src": "625:4:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1972,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "625:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "624:6:13"
            },
            "scope": 1976,
            "src": "567:64:13",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2606,
        "src": "308:325:13"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 2605,
        "linearizedBaseContracts": [
          2605
        ],
        "name": "CrowdsaleETH",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1979,
            "libraryName": {
              "contractScope": null,
              "id": 1977,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8863,
              "src": "912:8:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$8863",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "906:27:13",
            "typeName": {
              "id": 1978,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "925:7:13",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 1981,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 2605,
            "src": "939:18:13",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DB_$1976",
              "typeString": "contract DB"
            },
            "typeName": {
              "contractScope": null,
              "id": 1980,
              "name": "DB",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1976,
              "src": "939:2:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DB_$1976",
                "typeString": "contract DB"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1983,
            "name": "events",
            "nodeType": "VariableDeclaration",
            "scope": 2605,
            "src": "963:20:13",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Events_$1942",
              "typeString": "contract Events"
            },
            "typeName": {
              "contractScope": null,
              "id": 1982,
              "name": "Events",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1942,
              "src": "963:6:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Events_$1942",
                "typeString": "contract Events"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2002,
              "nodeType": "Block",
              "src": "1187:189:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1994,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1990,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1981,
                      "src": "1197:8:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DB_$1976",
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
                          "id": 1992,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1985,
                          "src": "1211:9:13",
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
                        "id": 1991,
                        "name": "DB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1976,
                        "src": "1208:2:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DB_$1976_$",
                          "typeString": "type(contract DB)"
                        }
                      },
                      "id": 1993,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1208:13:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DB_$1976",
                        "typeString": "contract DB"
                      }
                    },
                    "src": "1197:24:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DB_$1976",
                      "typeString": "contract DB"
                    }
                  },
                  "id": 1995,
                  "nodeType": "ExpressionStatement",
                  "src": "1197:24:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2000,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1996,
                      "name": "events",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1983,
                      "src": "1231:6:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$1942",
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
                          "id": 1998,
                          "name": "_events",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1987,
                          "src": "1247:7:13",
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
                        "id": 1997,
                        "name": "Events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1942,
                        "src": "1240:6:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Events_$1942_$",
                          "typeString": "type(contract Events)"
                        }
                      },
                      "id": 1999,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1240:15:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$1942",
                        "typeString": "contract Events"
                      }
                    },
                    "src": "1231:24:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Events_$1942",
                      "typeString": "contract Events"
                    }
                  },
                  "id": 2001,
                  "nodeType": "ExpressionStatement",
                  "src": "1231:24:13"
                }
              ]
            },
            "documentation": null,
            "id": 2003,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1988,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1985,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 2003,
                  "src": "1140:17:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1984,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1140:7:13",
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
                  "id": 1987,
                  "name": "_events",
                  "nodeType": "VariableDeclaration",
                  "scope": 2003,
                  "src": "1159:15:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1986,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1159:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1139:36:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 1989,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1187:0:13"
            },
            "scope": 2605,
            "src": "1128:248:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2175,
              "nodeType": "Block",
              "src": "1834:1527:13",
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
                        "id": 2045,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 2027,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 2024,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20967,
                              "src": "1850:3:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 2025,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1850:10:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 2026,
                            "name": "_investor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2007,
                            "src": "1864:9:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1850:23:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
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
                                      "hexValue": "617070726f76616c",
                                      "id": 2033,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "1925:10:13",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_f1dd521ebebaf5ba3d6127465ff9c4a71139a515dba59a79359c5c15f6766594",
                                        "typeString": "literal_string \"approval\""
                                      },
                                      "value": "approval"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 2034,
                                      "name": "_investor",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 2007,
                                      "src": "1937:9:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 2035,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20967,
                                        "src": "1948:3:13",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 2036,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "1948:10:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "id": 2038,
                                          "name": "this",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 21036,
                                          "src": "1968:4:13",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_CrowdsaleETH_$2605",
                                            "typeString": "contract CrowdsaleETH"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_contract$_CrowdsaleETH_$2605",
                                            "typeString": "contract CrowdsaleETH"
                                          }
                                        ],
                                        "id": 2037,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "1960:7:13",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_address_$",
                                          "typeString": "type(address)"
                                        },
                                        "typeName": "address"
                                      },
                                      "id": 2039,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "1960:13:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 2040,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20967,
                                        "src": "1975:3:13",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 2041,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sig",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "1975:7:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_f1dd521ebebaf5ba3d6127465ff9c4a71139a515dba59a79359c5c15f6766594",
                                        "typeString": "literal_string \"approval\""
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
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 2031,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20954,
                                      "src": "1908:3:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 2032,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1908:16:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 2042,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1908:75:13",
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
                                "id": 2030,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20961,
                                "src": "1898:9:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 2043,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1898:86:13",
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
                              "id": 2028,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1981,
                              "src": "1877:8:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$1976",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 2029,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "boolStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1975,
                            "src": "1877:20:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                              "typeString": "function (bytes32) view external returns (bool)"
                            }
                          },
                          "id": 2044,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1877:108:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1850:135:13",
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
                      "id": 2023,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "1842:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2046,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1842:144:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2047,
                  "nodeType": "ExpressionStatement",
                  "src": "1842:144:13"
                },
                {
                  "assignments": [
                    2049
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2049,
                      "name": "assetToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 2176,
                      "src": "1994:33:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                        "typeString": "contract EtherDividendInterface"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 2048,
                        "name": "EtherDividendInterface",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 8650,
                        "src": "1994:22:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                          "typeString": "contract EtherDividendInterface"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2053,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2051,
                        "name": "_assetAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2005,
                        "src": "2053:13:13",
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
                      "id": 2050,
                      "name": "EtherDividendInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8650,
                      "src": "2030:22:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_EtherDividendInterface_$8650_$",
                        "typeString": "type(contract EtherDividendInterface)"
                      }
                    },
                    "id": 2052,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2030:37:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                      "typeString": "contract EtherDividendInterface"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1994:73:13"
                },
                {
                  "assignments": [
                    2055
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2055,
                      "name": "amountToRaise",
                      "nodeType": "VariableDeclaration",
                      "scope": 2176,
                      "src": "2075:18:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2054,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2075:4:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2066,
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
                                "hexValue": "63726f776473616c652e676f616c",
                                "id": 2061,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2144:16:13",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_045c9598f5cff548bbf5830749370eab2aded0c210192a78c3be7c20556f2247",
                                  "typeString": "literal_string \"crowdsale.goal\""
                                },
                                "value": "crowdsale.goal"
                              },
                              {
                                "argumentTypes": null,
                                "id": 2062,
                                "name": "_assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2005,
                                "src": "2162:13:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_045c9598f5cff548bbf5830749370eab2aded0c210192a78c3be7c20556f2247",
                                  "typeString": "literal_string \"crowdsale.goal\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 2059,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "2127:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 2060,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2127:16:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 2063,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2127:49:13",
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
                          "id": 2058,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "2117:9:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 2064,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2117:60:13",
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
                        "id": 2056,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1981,
                        "src": "2096:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$1976",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 2057,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "uintStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1956,
                      "src": "2096:20:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
                      }
                    },
                    "id": 2065,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2096:82:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2075:103:13"
                },
                {
                  "assignments": [
                    2068
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2068,
                      "name": "tokensRemaining",
                      "nodeType": "VariableDeclaration",
                      "scope": 2176,
                      "src": "2186:20:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2067,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2186:4:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2075,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "argumentTypes": null,
                            "id": 2071,
                            "name": "assetToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2049,
                            "src": "2227:10:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                              "typeString": "contract EtherDividendInterface"
                            }
                          },
                          "id": 2072,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "totalSupply",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8649,
                          "src": "2227:22:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                            "typeString": "function () view external returns (uint256)"
                          }
                        },
                        "id": 2073,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2227:24:13",
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
                        "id": 2069,
                        "name": "amountToRaise",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2055,
                        "src": "2209:13:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 2070,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8820,
                      "src": "2209:17:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 2074,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2209:43:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2186:66:13"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2079,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 2076,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20967,
                        "src": "2264:3:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 2077,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2264:9:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 2078,
                      "name": "tokensRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2068,
                      "src": "2277:15:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2264:28:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 2160,
                    "nodeType": "Block",
                    "src": "3158:92:13",
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
                                  "id": 2153,
                                  "name": "_investor",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2007,
                                  "src": "3192:9:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 2154,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20967,
                                    "src": "3203:3:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 2155,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3203:9:13",
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
                                  "id": 2151,
                                  "name": "assetToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2049,
                                  "src": "3176:10:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                                    "typeString": "contract EtherDividendInterface"
                                  }
                                },
                                "id": 2152,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "mint",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8636,
                                "src": "3176:15:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                  "typeString": "function (address,uint256) external returns (bool)"
                                }
                              },
                              "id": 2156,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3176:37:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "496e766573746f72206d696e74696e67206661696c6564",
                              "id": 2157,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3215:25:13",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d6b15665da079b00069a419a622b7b0ea642ea90435ff15757cba9ce2cba8dff",
                                "typeString": "literal_string \"Investor minting failed\""
                              },
                              "value": "Investor minting failed"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_d6b15665da079b00069a419a622b7b0ea642ea90435ff15757cba9ce2cba8dff",
                                "typeString": "literal_string \"Investor minting failed\""
                              }
                            ],
                            "id": 2150,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              20970,
                              20971
                            ],
                            "referencedDeclaration": 20971,
                            "src": "3168:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 2158,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3168:73:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2159,
                        "nodeType": "ExpressionStatement",
                        "src": "3168:73:13"
                      }
                    ]
                  },
                  "id": 2161,
                  "nodeType": "IfStatement",
                  "src": "2260:990:13",
                  "trueBody": {
                    "id": 2149,
                    "nodeType": "Block",
                    "src": "2294:852:13",
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
                                          "arguments": [
                                            {
                                              "argumentTypes": null,
                                              "hexValue": "636f6e7472616374",
                                              "id": 2088,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "kind": "string",
                                              "lValueRequested": false,
                                              "nodeType": "Literal",
                                              "src": "2430:10:13",
                                              "subdenomination": null,
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                                "typeString": "literal_string \"contract\""
                                              },
                                              "value": "contract"
                                            },
                                            {
                                              "argumentTypes": null,
                                              "hexValue": "41737365744d616e6167657246756e6473",
                                              "id": 2089,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "kind": "string",
                                              "lValueRequested": false,
                                              "nodeType": "Literal",
                                              "src": "2442:19:13",
                                              "subdenomination": null,
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_stringliteral_6abfc2d822ab26b1a4bcfe48dbb950be4a5a7226f722976ba70e5a9526cf844b",
                                                "typeString": "literal_string \"AssetManagerFunds\""
                                              },
                                              "value": "AssetManagerFunds"
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                                "typeString": "literal_string \"contract\""
                                              },
                                              {
                                                "typeIdentifier": "t_stringliteral_6abfc2d822ab26b1a4bcfe48dbb950be4a5a7226f722976ba70e5a9526cf844b",
                                                "typeString": "literal_string \"AssetManagerFunds\""
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": null,
                                              "id": 2086,
                                              "name": "abi",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 20954,
                                              "src": "2413:3:13",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_magic_abi",
                                                "typeString": "abi"
                                              }
                                            },
                                            "id": 2087,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberName": "encodePacked",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2413:16:13",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                              "typeString": "function () pure returns (bytes memory)"
                                            }
                                          },
                                          "id": 2090,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "functionCall",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "2413:49:13",
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
                                        "id": 2085,
                                        "name": "keccak256",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20961,
                                        "src": "2403:9:13",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                          "typeString": "function () pure returns (bytes32)"
                                        }
                                      },
                                      "id": 2091,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "2403:60:13",
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
                                      "id": 2083,
                                      "name": "database",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 1981,
                                      "src": "2379:8:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_DB_$1976",
                                        "typeString": "contract DB"
                                      }
                                    },
                                    "id": 2084,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "addressStorage",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 1949,
                                    "src": "2379:23:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                                      "typeString": "function (bytes32) view external returns (address)"
                                    }
                                  },
                                  "id": 2092,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2379:85:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
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
                                              "hexValue": "61737365742e6d616e61676572466565",
                                              "id": 2098,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "kind": "string",
                                              "lValueRequested": false,
                                              "nodeType": "Literal",
                                              "src": "2514:18:13",
                                              "subdenomination": null,
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_stringliteral_0a4a83d415c855c53faa95933c5f8f9d6fcb5eeb285cedb5527063dac2ccbd3b",
                                                "typeString": "literal_string \"asset.managerFee\""
                                              },
                                              "value": "asset.managerFee"
                                            },
                                            {
                                              "argumentTypes": null,
                                              "id": 2099,
                                              "name": "_assetAddress",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 2005,
                                              "src": "2534:13:13",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                              }
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_stringliteral_0a4a83d415c855c53faa95933c5f8f9d6fcb5eeb285cedb5527063dac2ccbd3b",
                                                "typeString": "literal_string \"asset.managerFee\""
                                              },
                                              {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": null,
                                              "id": 2096,
                                              "name": "abi",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 20954,
                                              "src": "2497:3:13",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_magic_abi",
                                                "typeString": "abi"
                                              }
                                            },
                                            "id": 2097,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberName": "encodePacked",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2497:16:13",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                              "typeString": "function () pure returns (bytes memory)"
                                            }
                                          },
                                          "id": 2100,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "functionCall",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "2497:51:13",
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
                                        "id": 2095,
                                        "name": "keccak256",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20961,
                                        "src": "2487:9:13",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                          "typeString": "function () pure returns (bytes32)"
                                        }
                                      },
                                      "id": 2101,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "2487:62:13",
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
                                      "id": 2093,
                                      "name": "database",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 1981,
                                      "src": "2466:8:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_DB_$1976",
                                        "typeString": "contract DB"
                                      }
                                    },
                                    "id": 2094,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "uintStorage",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 1956,
                                    "src": "2466:20:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                                      "typeString": "function (bytes32) view external returns (uint256)"
                                    }
                                  },
                                  "id": 2102,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2466:84:13",
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
                                  "id": 2081,
                                  "name": "assetToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2049,
                                  "src": "2363:10:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                                    "typeString": "contract EtherDividendInterface"
                                  }
                                },
                                "id": 2082,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "mint",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8636,
                                "src": "2363:15:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                  "typeString": "function (address,uint256) external returns (bool)"
                                }
                              },
                              "id": 2103,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2363:188:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "4d616e61676572206d696e74696e67206661696c6564",
                              "id": 2104,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2553:24:13",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_9e44f09f473fd1e909f68f3462e8e59f42a8020fc6a34f89ae7bac2cd6105514",
                                "typeString": "literal_string \"Manager minting failed\""
                              },
                              "value": "Manager minting failed"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_9e44f09f473fd1e909f68f3462e8e59f42a8020fc6a34f89ae7bac2cd6105514",
                                "typeString": "literal_string \"Manager minting failed\""
                              }
                            ],
                            "id": 2080,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              20970,
                              20971
                            ],
                            "referencedDeclaration": 20971,
                            "src": "2355:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 2105,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2355:223:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2106,
                        "nodeType": "ExpressionStatement",
                        "src": "2355:223:13"
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
                                  "id": 2109,
                                  "name": "_assetAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2005,
                                  "src": "2614:13:13",
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
                                "id": 2108,
                                "name": "finalizeCrowdsale",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2448,
                                "src": "2596:17:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (address) returns (bool)"
                                }
                              },
                              "id": 2110,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2596:32:13",
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
                            "id": 2107,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              20970,
                              20971
                            ],
                            "referencedDeclaration": 20970,
                            "src": "2588:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 2111,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2588:41:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2112,
                        "nodeType": "ExpressionStatement",
                        "src": "2588:41:13"
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
                                  "id": 2116,
                                  "name": "_investor",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2007,
                                  "src": "2698:9:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 2117,
                                  "name": "tokensRemaining",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2068,
                                  "src": "2709:15:13",
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
                                  "id": 2114,
                                  "name": "assetToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2049,
                                  "src": "2682:10:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                                    "typeString": "contract EtherDividendInterface"
                                  }
                                },
                                "id": 2115,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "mint",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8636,
                                "src": "2682:15:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                  "typeString": "function (address,uint256) external returns (bool)"
                                }
                              },
                              "id": 2118,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2682:43:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "496e766573746f72206d696e74696e67206661696c6564",
                              "id": 2119,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2727:25:13",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d6b15665da079b00069a419a622b7b0ea642ea90435ff15757cba9ce2cba8dff",
                                "typeString": "literal_string \"Investor minting failed\""
                              },
                              "value": "Investor minting failed"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_d6b15665da079b00069a419a622b7b0ea642ea90435ff15757cba9ce2cba8dff",
                                "typeString": "literal_string \"Investor minting failed\""
                              }
                            ],
                            "id": 2113,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              20970,
                              20971
                            ],
                            "referencedDeclaration": 20971,
                            "src": "2674:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 2120,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2674:79:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2121,
                        "nodeType": "ExpressionStatement",
                        "src": "2674:79:13"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 2123,
                                  "name": "assetToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2049,
                                  "src": "2804:10:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                                    "typeString": "contract EtherDividendInterface"
                                  }
                                },
                                "id": 2124,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "finishMinting",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8641,
                                "src": "2804:24:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_nonpayable$__$returns$_t_bool_$",
                                  "typeString": "function () external returns (bool)"
                                }
                              },
                              "id": 2125,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2804:26:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "4d696e74696e67206e6f742066696e6973686564",
                              "id": 2126,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2832:22:13",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_ca445638ea26359e2e8b16c1e6982c296d84c8ece6dafc29b483303df0247a46",
                                "typeString": "literal_string \"Minting not finished\""
                              },
                              "value": "Minting not finished"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_ca445638ea26359e2e8b16c1e6982c296d84c8ece6dafc29b483303df0247a46",
                                "typeString": "literal_string \"Minting not finished\""
                              }
                            ],
                            "id": 2122,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              20970,
                              20971
                            ],
                            "referencedDeclaration": 20971,
                            "src": "2796:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 2127,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2796:59:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2128,
                        "nodeType": "ExpressionStatement",
                        "src": "2796:59:13"
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
                                  "id": 2131,
                                  "name": "_assetAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2005,
                                  "src": "2883:13:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 2132,
                                  "name": "amountToRaise",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2055,
                                  "src": "2898:13:13",
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
                                "id": 2130,
                                "name": "payoutETH",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2401,
                                "src": "2873:9:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                  "typeString": "function (address,uint256) returns (bool)"
                                }
                              },
                              "id": 2133,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2873:39:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "5061796f7574206661696c6564",
                              "id": 2134,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2914:15:13",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_42d486eee70463b52369225e27fce2709665a17be45e65becee48f6af14cf90b",
                                "typeString": "literal_string \"Payout failed\""
                              },
                              "value": "Payout failed"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_42d486eee70463b52369225e27fce2709665a17be45e65becee48f6af14cf90b",
                                "typeString": "literal_string \"Payout failed\""
                              }
                            ],
                            "id": 2129,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              20970,
                              20971
                            ],
                            "referencedDeclaration": 20971,
                            "src": "2865:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 2135,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2865:65:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2136,
                        "nodeType": "ExpressionStatement",
                        "src": "2865:65:13"
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
                                  "id": 2145,
                                  "name": "tokensRemaining",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2068,
                                  "src": "3002:15:13",
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
                                    "id": 2142,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20967,
                                    "src": "2988:3:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 2143,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2988:9:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 2144,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sub",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8820,
                                "src": "2988:13:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 2146,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2988:30:13",
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
                                "id": 2137,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20967,
                                "src": "2968:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 2140,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2968:10:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 2141,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2968:19:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 2147,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2968:51:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2148,
                        "nodeType": "ExpressionStatement",
                        "src": "2968:51:13"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "417373657420707572636861736564",
                        "id": 2165,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3276:17:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a00df6de6fb21706a673ec0927e4c1572daa77d87f8ad9532576c0b41a65743e",
                          "typeString": "literal_string \"Asset purchased\""
                        },
                        "value": "Asset purchased"
                      },
                      {
                        "argumentTypes": null,
                        "id": 2166,
                        "name": "_investor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2007,
                        "src": "3295:9:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2167,
                        "name": "_assetAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2005,
                        "src": "3306:13:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 2168,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "3321:3:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2169,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3321:9:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 2170,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3332:2:13",
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
                          "typeIdentifier": "t_stringliteral_a00df6de6fb21706a673ec0927e4c1572daa77d87f8ad9532576c0b41a65743e",
                          "typeString": "literal_string \"Asset purchased\""
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
                        "id": 2162,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1983,
                        "src": "3257:6:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$1942",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 2164,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1941,
                      "src": "3257:18:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 2171,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3257:78:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2172,
                  "nodeType": "ExpressionStatement",
                  "src": "3257:78:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 2173,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3350:4:13",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 2022,
                  "id": 2174,
                  "nodeType": "Return",
                  "src": "3343:11:13"
                }
              ]
            },
            "documentation": null,
            "id": 2176,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2010,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2009,
                  "name": "requiresEther",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2459,
                  "src": "1683:13:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1683:13:13"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 2012,
                    "name": "_assetAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2005,
                    "src": "1712:13:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 2013,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2011,
                  "name": "validAsset",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2523,
                  "src": "1701:10:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1701:25:13"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 2015,
                    "name": "_assetAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2005,
                    "src": "1748:13:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 2016,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2014,
                  "name": "betweenDeadlines",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2561,
                  "src": "1731:16:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1731:31:13"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 2018,
                    "name": "_assetAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2005,
                    "src": "1780:13:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 2019,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2017,
                  "name": "notFinalized",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2604,
                  "src": "1767:12:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1767:27:13"
              }
            ],
            "name": "buyAssetOrderETH",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2008,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2005,
                  "name": "_assetAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2176,
                  "src": "1612:21:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2004,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1612:7:13",
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
                  "id": 2007,
                  "name": "_investor",
                  "nodeType": "VariableDeclaration",
                  "scope": 2176,
                  "src": "1635:17:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2006,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1635:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1611:42:13"
            },
            "payable": true,
            "returnParameters": {
              "id": 2022,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2021,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2176,
                  "src": "1828:4:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2020,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1828:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1827:6:13"
            },
            "scope": 2605,
            "src": "1586:1775:13",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 2244,
              "nodeType": "Block",
              "src": "3763:425:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2206,
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
                                      "hexValue": "63726f776473616c652e646561646c696e65",
                                      "id": 2200,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3827:20:13",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_c5e60127e04b658a1e76a44b60aa4343ed732c83881e29ad6808d263771afcb1",
                                        "typeString": "literal_string \"crowdsale.deadline\""
                                      },
                                      "value": "crowdsale.deadline"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 2201,
                                      "name": "_assetAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 2178,
                                      "src": "3849:13:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_c5e60127e04b658a1e76a44b60aa4343ed732c83881e29ad6808d263771afcb1",
                                        "typeString": "literal_string \"crowdsale.deadline\""
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 2198,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20954,
                                      "src": "3810:3:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 2199,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "3810:16:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 2202,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3810:53:13",
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
                                "id": 2197,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20961,
                                "src": "3800:9:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 2203,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3800:64:13",
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
                              "id": 2195,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1981,
                              "src": "3779:8:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$1976",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 2196,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "uintStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1956,
                            "src": "3779:20:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                              "typeString": "function (bytes32) view external returns (uint256)"
                            }
                          },
                          "id": 2204,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3779:86:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 2205,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3869:1:13",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3779:91:13",
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
                      "id": 2194,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "3771:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2207,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3771:100:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2208,
                  "nodeType": "ExpressionStatement",
                  "src": "3771:100:13"
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
                                "hexValue": "63726f776473616c652e646561646c696e65",
                                "id": 2215,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3926:20:13",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_c5e60127e04b658a1e76a44b60aa4343ed732c83881e29ad6808d263771afcb1",
                                  "typeString": "literal_string \"crowdsale.deadline\""
                                },
                                "value": "crowdsale.deadline"
                              },
                              {
                                "argumentTypes": null,
                                "id": 2216,
                                "name": "_assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2178,
                                "src": "3948:13:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_c5e60127e04b658a1e76a44b60aa4343ed732c83881e29ad6808d263771afcb1",
                                  "typeString": "literal_string \"crowdsale.deadline\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 2213,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "3909:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 2214,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3909:16:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 2217,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3909:53:13",
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
                          "id": 2212,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "3899:9:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 2218,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3899:64:13",
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
                        "id": 2209,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1981,
                        "src": "3879:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$1976",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 2211,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deleteUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1961,
                      "src": "3879:19:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) external"
                      }
                    },
                    "id": 2219,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3879:85:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2220,
                  "nodeType": "ExpressionStatement",
                  "src": "3879:85:13"
                },
                {
                  "assignments": [
                    2222
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2222,
                      "name": "assetToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 2245,
                      "src": "3972:33:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                        "typeString": "contract EtherDividendInterface"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 2221,
                        "name": "EtherDividendInterface",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 8650,
                        "src": "3972:22:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                          "typeString": "contract EtherDividendInterface"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2226,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2224,
                        "name": "_assetAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2178,
                        "src": "4031:13:13",
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
                      "id": 2223,
                      "name": "EtherDividendInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8650,
                      "src": "4008:22:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_EtherDividendInterface_$8650_$",
                        "typeString": "type(contract EtherDividendInterface)"
                      }
                    },
                    "id": 2225,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4008:37:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                      "typeString": "contract EtherDividendInterface"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3972:73:13"
                },
                {
                  "assignments": [
                    2228
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2228,
                      "name": "refundValue",
                      "nodeType": "VariableDeclaration",
                      "scope": 2245,
                      "src": "4053:16:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2227,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "4053:4:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2232,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 2229,
                        "name": "assetToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2222,
                        "src": "4072:10:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                          "typeString": "contract EtherDividendInterface"
                        }
                      },
                      "id": 2230,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "totalSupply",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8649,
                      "src": "4072:22:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                        "typeString": "function () view external returns (uint256)"
                      }
                    },
                    "id": 2231,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4072:24:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4053:43:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 2238,
                          "name": "refundValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2228,
                          "src": "4148:11:13",
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
                            "id": 2233,
                            "name": "assetToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2222,
                            "src": "4116:10:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                              "typeString": "contract EtherDividendInterface"
                            }
                          },
                          "id": 2236,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "issueDividends",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8644,
                          "src": "4116:25:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_payable$__$returns$__$",
                            "typeString": "function () payable external"
                          }
                        },
                        "id": 2237,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4116:31:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_setvalue_nonpayable$_t_uint256_$returns$_t_function_external_payable$__$returns$__$value_$",
                          "typeString": "function (uint256) returns (function () payable external)"
                        }
                      },
                      "id": 2239,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4116:44:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$__$returns$__$value",
                        "typeString": "function () payable external"
                      }
                    },
                    "id": 2240,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4116:46:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2241,
                  "nodeType": "ExpressionStatement",
                  "src": "4116:46:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 2242,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4177:4:13",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 2193,
                  "id": 2243,
                  "nodeType": "Return",
                  "src": "4170:11:13"
                }
              ]
            },
            "documentation": null,
            "id": 2245,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2181,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2180,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2499,
                  "src": "3635:13:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3635:13:13"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 2183,
                    "name": "_assetAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2178,
                    "src": "3664:13:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 2184,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2182,
                  "name": "validAsset",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2523,
                  "src": "3653:10:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3653:25:13"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 2186,
                    "name": "_assetAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2178,
                    "src": "3697:13:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 2187,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2185,
                  "name": "afterDeadline",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2583,
                  "src": "3683:13:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3683:28:13"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 2189,
                    "name": "_assetAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2178,
                    "src": "3729:13:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 2190,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2188,
                  "name": "notFinalized",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2604,
                  "src": "3716:12:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3716:27:13"
              }
            ],
            "name": "refund",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2179,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2178,
                  "name": "_assetAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2245,
                  "src": "3595:21:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2177,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3595:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3594:23:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 2193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2192,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2245,
                  "src": "3757:4:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2191,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3757:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3756:6:13"
            },
            "scope": 2605,
            "src": "3579:609:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 2275,
              "nodeType": "Block",
              "src": "4320:171:13",
              "statements": [
                {
                  "assignments": [
                    2253
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2253,
                      "name": "thisToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 2276,
                      "src": "4328:15:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20_$8598",
                        "typeString": "contract ERC20"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 2252,
                        "name": "ERC20",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 8598,
                        "src": "4328:5:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$8598",
                          "typeString": "contract ERC20"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2257,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2255,
                        "name": "_erc20Token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2247,
                        "src": "4352:11:13",
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
                      "id": 2254,
                      "name": "ERC20",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8598,
                      "src": "4346:5:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_ERC20_$8598_$",
                        "typeString": "type(contract ERC20)"
                      }
                    },
                    "id": 2256,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4346:18:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$8598",
                      "typeString": "contract ERC20"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4328:36:13"
                },
                {
                  "assignments": [
                    2259
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2259,
                      "name": "contractBalance",
                      "nodeType": "VariableDeclaration",
                      "scope": 2276,
                      "src": "4372:20:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2258,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "4372:4:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2266,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 2263,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21036,
                            "src": "4423:4:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_CrowdsaleETH_$2605",
                              "typeString": "contract CrowdsaleETH"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_CrowdsaleETH_$2605",
                              "typeString": "contract CrowdsaleETH"
                            }
                          ],
                          "id": 2262,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4415:7:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 2264,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4415:13:13",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 2260,
                        "name": "thisToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2253,
                        "src": "4395:9:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$8598",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 2261,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8543,
                      "src": "4395:19:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 2265,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4395:34:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4372:57:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 2270,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "4456:3:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2271,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4456:10:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2272,
                        "name": "contractBalance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2259,
                        "src": "4468:15:13",
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
                        "id": 2267,
                        "name": "thisToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2253,
                        "src": "4437:9:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$8598",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 2269,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8561,
                      "src": "4437:18:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 2273,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4437:47:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2274,
                  "nodeType": "ExpressionStatement",
                  "src": "4437:47:13"
                }
              ]
            },
            "documentation": null,
            "id": 2276,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2250,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2249,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2478,
                  "src": "4297:9:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4297:9:13"
              }
            ],
            "name": "recoverTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2248,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2247,
                  "name": "_erc20Token",
                  "nodeType": "VariableDeclaration",
                  "scope": 2276,
                  "src": "4272:19:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2246,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4272:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4271:21:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 2251,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4320:0:13"
            },
            "scope": 2605,
            "src": "4249:242:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 2302,
              "nodeType": "Block",
              "src": "4600:145:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "43726f776473616c654554482064657374726f796564",
                        "id": 2284,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4627:24:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_4b7c1762ba2158744af3b000e9caaf10b081f487d1d89f215dda6f1457c4985b",
                          "typeString": "literal_string \"CrowdsaleETH destroyed\""
                        },
                        "value": "CrowdsaleETH destroyed"
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 2286,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21036,
                            "src": "4661:4:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_CrowdsaleETH_$2605",
                              "typeString": "contract CrowdsaleETH"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_CrowdsaleETH_$2605",
                              "typeString": "contract CrowdsaleETH"
                            }
                          ],
                          "id": 2285,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4653:7:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 2287,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4653:13:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 2288,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "4668:3:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2289,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4668:10:13",
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
                              "id": 2291,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21036,
                              "src": "4688:4:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_CrowdsaleETH_$2605",
                                "typeString": "contract CrowdsaleETH"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_CrowdsaleETH_$2605",
                                "typeString": "contract CrowdsaleETH"
                              }
                            ],
                            "id": 2290,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "4680:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 2292,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4680:13:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 2293,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4680:21:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 2294,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4703:2:13",
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
                          "typeIdentifier": "t_stringliteral_4b7c1762ba2158744af3b000e9caaf10b081f487d1d89f215dda6f1457c4985b",
                          "typeString": "literal_string \"CrowdsaleETH destroyed\""
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
                        "id": 2281,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1983,
                        "src": "4608:6:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$1942",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 2283,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1941,
                      "src": "4608:18:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 2295,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4608:98:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2296,
                  "nodeType": "ExpressionStatement",
                  "src": "4608:98:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 2298,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "4727:3:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2299,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4727:10:13",
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
                      "id": 2297,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20975,
                      "src": "4714:12:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 2300,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4714:24:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2301,
                  "nodeType": "ExpressionStatement",
                  "src": "4714:24:13"
                }
              ]
            },
            "documentation": null,
            "id": 2303,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2279,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2278,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2478,
                  "src": "4577:9:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4577:9:13"
              }
            ],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2277,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4570:2:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 2280,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4600:0:13"
            },
            "scope": 2605,
            "src": "4554:191:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 2309,
              "nodeType": "Block",
              "src": "4833:23:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 2306,
                      "name": "revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20972,
                        20973
                      ],
                      "referencedDeclaration": 20972,
                      "src": "4841:6:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 2307,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4841:8:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2308,
                  "nodeType": "ExpressionStatement",
                  "src": "4841:8:13"
                }
              ]
            },
            "documentation": null,
            "id": 2310,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2304,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4807:2:13"
            },
            "payable": true,
            "returnParameters": {
              "id": 2305,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4833:0:13"
            },
            "scope": 2605,
            "src": "4798:58:13",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2400,
              "nodeType": "Block",
              "src": "5678:636:13",
              "statements": [
                {
                  "assignments": [
                    2320
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2320,
                      "name": "operator",
                      "nodeType": "VariableDeclaration",
                      "scope": 2401,
                      "src": "5686:16:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 2319,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5686:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2331,
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
                                "hexValue": "61737365742e6f70657261746f72",
                                "id": 2326,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5756:16:13",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_4716d66186f568e75f8d8be5f2ef98464c9608a0255abf6763d5a8b4badea669",
                                  "typeString": "literal_string \"asset.operator\""
                                },
                                "value": "asset.operator"
                              },
                              {
                                "argumentTypes": null,
                                "id": 2327,
                                "name": "_assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2312,
                                "src": "5774:13:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_4716d66186f568e75f8d8be5f2ef98464c9608a0255abf6763d5a8b4badea669",
                                  "typeString": "literal_string \"asset.operator\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 2324,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "5739:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 2325,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "5739:16:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 2328,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5739:49:13",
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
                          "id": 2323,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "5729:9:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 2329,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5729:60:13",
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
                        "id": 2321,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1981,
                        "src": "5705:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$1976",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 2322,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "addressStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1949,
                      "src": "5705:23:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view external returns (address)"
                      }
                    },
                    "id": 2330,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5705:85:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5686:104:13"
                },
                {
                  "assignments": [
                    2333
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2333,
                      "name": "platformWallet",
                      "nodeType": "VariableDeclaration",
                      "scope": 2401,
                      "src": "5798:22:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 2332,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5798:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2343,
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
                                "hexValue": "706c6174666f726d2e77616c6c6574",
                                "id": 2339,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5874:17:13",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_6df6ec6ae25a02a38b0a383a08b15f97b0d1cb899196a50df56a88bcc48925f2",
                                  "typeString": "literal_string \"platform.wallet\""
                                },
                                "value": "platform.wallet"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_6df6ec6ae25a02a38b0a383a08b15f97b0d1cb899196a50df56a88bcc48925f2",
                                  "typeString": "literal_string \"platform.wallet\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 2337,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "5857:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 2338,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "5857:16:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 2340,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5857:35:13",
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
                          "id": 2336,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "5847:9:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 2341,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5847:46:13",
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
                        "id": 2334,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1981,
                        "src": "5823:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$1976",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 2335,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "addressStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1949,
                      "src": "5823:23:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view external returns (address)"
                      }
                    },
                    "id": 2342,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5823:71:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5798:96:13"
                },
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
                        "id": 2355,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 2349,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 2345,
                            "name": "operator",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2320,
                            "src": "5910:8:13",
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
                                "id": 2347,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5930:1:13",
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
                              "id": 2346,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "5922:7:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 2348,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5922:10:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "5910:22:13",
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
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 2354,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 2350,
                            "name": "platformWallet",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2333,
                            "src": "5936:14:13",
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
                                "id": 2352,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5962:1:13",
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
                              "id": 2351,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "5954:7:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 2353,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5954:10:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "5936:28:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "5910:54:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4f70657261746f72206f7220706c6174666f726d2077616c6c6574206e6f7420736574",
                        "id": 2356,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5966:37:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ef1fd3a3928c915d1b00402c28ebdbd0807c6ed69ffeef185e3df9166fa9fbd7",
                          "typeString": "literal_string \"Operator or platform wallet not set\""
                        },
                        "value": "Operator or platform wallet not set"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_ef1fd3a3928c915d1b00402c28ebdbd0807c6ed69ffeef185e3df9166fa9fbd7",
                          "typeString": "literal_string \"Operator or platform wallet not set\""
                        }
                      ],
                      "id": 2344,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20971,
                      "src": "5902:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5902:102:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2358,
                  "nodeType": "ExpressionStatement",
                  "src": "5902:102:13"
                },
                {
                  "assignments": [
                    2360
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2360,
                      "name": "operatorPortion",
                      "nodeType": "VariableDeclaration",
                      "scope": 2401,
                      "src": "6012:20:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2359,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "6012:4:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2368,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "313030",
                        "id": 2366,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6055:3:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        },
                        "value": "100"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "3939",
                            "id": 2363,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6047:2:13",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_99_by_1",
                              "typeString": "int_const 99"
                            },
                            "value": "99"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_99_by_1",
                              "typeString": "int_const 99"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 2361,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2314,
                            "src": "6035:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 2362,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8786,
                          "src": "6035:11:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 2364,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6035:15:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 2365,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8800,
                      "src": "6035:19:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 2367,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6035:24:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6012:47:13"
                },
                {
                  "assignments": [
                    2370
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2370,
                      "name": "platformPortion",
                      "nodeType": "VariableDeclaration",
                      "scope": 2401,
                      "src": "6067:20:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2369,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "6067:4:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2375,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2373,
                        "name": "operatorPortion",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2360,
                        "src": "6102:15:13",
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
                        "id": 2371,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2314,
                        "src": "6090:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 2372,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8820,
                      "src": "6090:11:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 2374,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6090:28:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6067:51:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2379,
                        "name": "platformPortion",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2370,
                        "src": "6150:15:13",
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
                        "id": 2376,
                        "name": "platformWallet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2333,
                        "src": "6126:14:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 2378,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "6126:23:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 2380,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6126:40:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2381,
                  "nodeType": "ExpressionStatement",
                  "src": "6126:40:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2385,
                        "name": "operatorPortion",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2360,
                        "src": "6192:15:13",
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
                        "id": 2382,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2320,
                        "src": "6174:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 2384,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "6174:17:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 2386,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6174:34:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2387,
                  "nodeType": "ExpressionStatement",
                  "src": "6174:34:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "4173736574207061796f7574",
                        "id": 2391,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6235:14:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_86cdd4af8de775d906a1fba477eaf38ec8f85c8ca89a1ce3d688ffc88a65d5d9",
                          "typeString": "literal_string \"Asset payout\""
                        },
                        "value": "Asset payout"
                      },
                      {
                        "argumentTypes": null,
                        "id": 2392,
                        "name": "_assetAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2312,
                        "src": "6251:13:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2393,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2320,
                        "src": "6266:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2394,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2314,
                        "src": "6276:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 2395,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6285:2:13",
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
                          "typeIdentifier": "t_stringliteral_86cdd4af8de775d906a1fba477eaf38ec8f85c8ca89a1ce3d688ffc88a65d5d9",
                          "typeString": "literal_string \"Asset payout\""
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
                        "id": 2388,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1983,
                        "src": "6216:6:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$1942",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 2390,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1941,
                      "src": "6216:18:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 2396,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6216:72:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2397,
                  "nodeType": "ExpressionStatement",
                  "src": "6216:72:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 2398,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "6303:4:13",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 2318,
                  "id": 2399,
                  "nodeType": "Return",
                  "src": "6296:11:13"
                }
              ]
            },
            "documentation": null,
            "id": 2401,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "payoutETH",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2315,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2312,
                  "name": "_assetAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2401,
                  "src": "5609:21:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2311,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5609:7:13",
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
                  "id": 2314,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 2401,
                  "src": "5632:12:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2313,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5632:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5608:37:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 2318,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2317,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2401,
                  "src": "5672:4:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2316,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5672:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5671:6:13"
            },
            "scope": 2605,
            "src": "5590:724:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2447,
              "nodeType": "Block",
              "src": "6519:440:13",
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
                                "hexValue": "63726f776473616c652e66696e616c697a6564",
                                "id": 2414,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6573:21:13",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_722b895a93b43851ba32be101c0d959c7d88657997dbce0fa087bee777576b55",
                                  "typeString": "literal_string \"crowdsale.finalized\""
                                },
                                "value": "crowdsale.finalized"
                              },
                              {
                                "argumentTypes": null,
                                "id": 2415,
                                "name": "_assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2403,
                                "src": "6596:13:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_722b895a93b43851ba32be101c0d959c7d88657997dbce0fa087bee777576b55",
                                  "typeString": "literal_string \"crowdsale.finalized\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 2412,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "6556:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 2413,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "6556:16:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 2416,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6556:54:13",
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
                          "id": 2411,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "6546:9:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 2417,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6546:65:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 2418,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6613:4:13",
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
                        "id": 2408,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1981,
                        "src": "6529:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$1976",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 2410,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1968,
                      "src": "6529:16:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_bool_$returns$__$",
                        "typeString": "function (bytes32,bool) external"
                      }
                    },
                    "id": 2419,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6529:89:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2420,
                  "nodeType": "ExpressionStatement",
                  "src": "6529:89:13"
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
                                "hexValue": "63726f776473616c652e676f616c",
                                "id": 2427,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6675:16:13",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_045c9598f5cff548bbf5830749370eab2aded0c210192a78c3be7c20556f2247",
                                  "typeString": "literal_string \"crowdsale.goal\""
                                },
                                "value": "crowdsale.goal"
                              },
                              {
                                "argumentTypes": null,
                                "id": 2428,
                                "name": "_assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2403,
                                "src": "6693:13:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_045c9598f5cff548bbf5830749370eab2aded0c210192a78c3be7c20556f2247",
                                  "typeString": "literal_string \"crowdsale.goal\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 2425,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "6658:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 2426,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "6658:16:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 2429,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6658:49:13",
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
                          "id": 2424,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "6648:9:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 2430,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6648:60:13",
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
                        "id": 2421,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1981,
                        "src": "6628:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$1976",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 2423,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deleteUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1961,
                      "src": "6628:19:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) external"
                      }
                    },
                    "id": 2431,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6628:81:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2432,
                  "nodeType": "ExpressionStatement",
                  "src": "6628:81:13"
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
                                "hexValue": "61737365742e6d616e61676572466565",
                                "id": 2439,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6831:18:13",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_0a4a83d415c855c53faa95933c5f8f9d6fcb5eeb285cedb5527063dac2ccbd3b",
                                  "typeString": "literal_string \"asset.managerFee\""
                                },
                                "value": "asset.managerFee"
                              },
                              {
                                "argumentTypes": null,
                                "id": 2440,
                                "name": "_assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2403,
                                "src": "6851:13:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_0a4a83d415c855c53faa95933c5f8f9d6fcb5eeb285cedb5527063dac2ccbd3b",
                                  "typeString": "literal_string \"asset.managerFee\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 2437,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "6814:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 2438,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "6814:16:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 2441,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6814:51:13",
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
                          "id": 2436,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "6804:9:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 2442,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6804:62:13",
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
                        "id": 2433,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1981,
                        "src": "6784:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$1976",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 2435,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deleteUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1961,
                      "src": "6784:19:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) external"
                      }
                    },
                    "id": 2443,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6784:83:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2444,
                  "nodeType": "ExpressionStatement",
                  "src": "6784:83:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 2445,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "6948:4:13",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 2407,
                  "id": 2446,
                  "nodeType": "Return",
                  "src": "6941:11:13"
                }
              ]
            },
            "documentation": null,
            "id": 2448,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finalizeCrowdsale",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2404,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2403,
                  "name": "_assetAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2448,
                  "src": "6464:21:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2402,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6464:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6463:23:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 2407,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2406,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2448,
                  "src": "6513:4:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2405,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6513:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6512:6:13"
            },
            "scope": 2605,
            "src": "6437:522:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2458,
              "nodeType": "Block",
              "src": "7359:46:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2454,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 2451,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20967,
                            "src": "7375:3:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 2452,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "7375:9:13",
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
                          "id": 2453,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7387:1:13",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "7375:13:13",
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
                      "id": 2450,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "7367:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2455,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7367:22:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2456,
                  "nodeType": "ExpressionStatement",
                  "src": "7367:22:13"
                },
                {
                  "id": 2457,
                  "nodeType": "PlaceholderStatement",
                  "src": "7397:1:13"
                }
              ]
            },
            "documentation": null,
            "id": 2459,
            "name": "requiresEther",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2449,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7356:2:13"
            },
            "src": "7334:71:13",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2477,
              "nodeType": "Block",
              "src": "7479:116:13",
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
                                    "id": 2467,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "7543:7:13",
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
                                      "id": 2468,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20967,
                                      "src": "7552:3:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 2469,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "7552:10:13",
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
                                    "id": 2465,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20954,
                                    "src": "7526:3:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 2466,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "7526:16:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 2470,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7526:37:13",
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
                              "id": 2464,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20961,
                              "src": "7516:9:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 2471,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7516:48:13",
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
                            "id": 2462,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1981,
                            "src": "7495:8:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DB_$1976",
                              "typeString": "contract DB"
                            }
                          },
                          "id": 2463,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1975,
                          "src": "7495:20:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 2472,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7495:70:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4e6f74206f776e6572",
                        "id": 2473,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7567:11:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c266efca4f4ed37612271196433531dcbb4fca89a694d568d1e290e32feb1682",
                          "typeString": "literal_string \"Not owner\""
                        },
                        "value": "Not owner"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c266efca4f4ed37612271196433531dcbb4fca89a694d568d1e290e32feb1682",
                          "typeString": "literal_string \"Not owner\""
                        }
                      ],
                      "id": 2461,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20971,
                      "src": "7487:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2474,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7487:92:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2475,
                  "nodeType": "ExpressionStatement",
                  "src": "7487:92:13"
                },
                {
                  "id": 2476,
                  "nodeType": "PlaceholderStatement",
                  "src": "7587:1:13"
                }
              ]
            },
            "documentation": null,
            "id": 2478,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2460,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7479:0:13"
            },
            "src": "7460:135:13",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2498,
              "nodeType": "Block",
              "src": "7964:127:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2493,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "7980:75:13",
                        "subExpression": {
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
                                      "hexValue": "706175736564",
                                      "id": 2486,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "8029:8:13",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_ee35723ac350a69d2a92d3703f17439cbaadf2f093a21ba5bf5f1a53eb2a14d9",
                                        "typeString": "literal_string \"paused\""
                                      },
                                      "value": "paused"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "id": 2488,
                                          "name": "this",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 21036,
                                          "src": "8047:4:13",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_CrowdsaleETH_$2605",
                                            "typeString": "contract CrowdsaleETH"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_contract$_CrowdsaleETH_$2605",
                                            "typeString": "contract CrowdsaleETH"
                                          }
                                        ],
                                        "id": 2487,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "8039:7:13",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_address_$",
                                          "typeString": "type(address)"
                                        },
                                        "typeName": "address"
                                      },
                                      "id": 2489,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "8039:13:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_ee35723ac350a69d2a92d3703f17439cbaadf2f093a21ba5bf5f1a53eb2a14d9",
                                        "typeString": "literal_string \"paused\""
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 2484,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20954,
                                      "src": "8012:3:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 2485,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "8012:16:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 2490,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "8012:41:13",
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
                                "id": 2483,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20961,
                                "src": "8002:9:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 2491,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8002:52:13",
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
                              "id": 2481,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1981,
                              "src": "7981:8:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$1976",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 2482,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "boolStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1975,
                            "src": "7981:20:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                              "typeString": "function (bytes32) view external returns (bool)"
                            }
                          },
                          "id": 2492,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7981:74:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "436f6e747261637420706175736564",
                        "id": 2494,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8057:17:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_3050dffacb9368cabd9386d9e9f4fef5deb3cfb41011f6d6a59caa1f97c9cb15",
                          "typeString": "literal_string \"Contract paused\""
                        },
                        "value": "Contract paused"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_3050dffacb9368cabd9386d9e9f4fef5deb3cfb41011f6d6a59caa1f97c9cb15",
                          "typeString": "literal_string \"Contract paused\""
                        }
                      ],
                      "id": 2480,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20971,
                      "src": "7972:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2495,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7972:103:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2496,
                  "nodeType": "ExpressionStatement",
                  "src": "7972:103:13"
                },
                {
                  "id": 2497,
                  "nodeType": "PlaceholderStatement",
                  "src": "8083:1:13"
                }
              ]
            },
            "documentation": null,
            "id": 2499,
            "name": "whenNotPaused",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2479,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7964:0:13"
            },
            "src": "7941:150:13",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2522,
              "nodeType": "Block",
              "src": "8226:148:13",
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
                        "id": 2517,
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
                                      "hexValue": "61737365742e6d616e61676572",
                                      "id": 2509,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "8293:15:13",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_c2b25eef4340162b026d227f7a9ebe7bae98953eff48283607445f4b250b0cbc",
                                        "typeString": "literal_string \"asset.manager\""
                                      },
                                      "value": "asset.manager"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 2510,
                                      "name": "_assetAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 2501,
                                      "src": "8310:13:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_c2b25eef4340162b026d227f7a9ebe7bae98953eff48283607445f4b250b0cbc",
                                        "typeString": "literal_string \"asset.manager\""
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 2507,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20954,
                                      "src": "8276:3:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 2508,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "8276:16:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 2511,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "8276:48:13",
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
                                "id": 2506,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20961,
                                "src": "8266:9:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 2512,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8266:59:13",
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
                              "id": 2504,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1981,
                              "src": "8242:8:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$1976",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 2505,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "addressStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1949,
                            "src": "8242:23:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                              "typeString": "function (bytes32) view external returns (address)"
                            }
                          },
                          "id": 2513,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8242:84:13",
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
                              "id": 2515,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8338:1:13",
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
                            "id": 2514,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8330:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 2516,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8330:10:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "8242:98:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "496e76616c6964206173736574",
                        "id": 2518,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8342:15:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_13e63822319f457869f7e39533cb3e11d411566d67610a8db149f751583d3789",
                          "typeString": "literal_string \"Invalid asset\""
                        },
                        "value": "Invalid asset"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_13e63822319f457869f7e39533cb3e11d411566d67610a8db149f751583d3789",
                          "typeString": "literal_string \"Invalid asset\""
                        }
                      ],
                      "id": 2503,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20971,
                      "src": "8234:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2519,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8234:124:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2520,
                  "nodeType": "ExpressionStatement",
                  "src": "8234:124:13"
                },
                {
                  "id": 2521,
                  "nodeType": "PlaceholderStatement",
                  "src": "8366:1:13"
                }
              ]
            },
            "documentation": null,
            "id": 2523,
            "name": "validAsset",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2502,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2501,
                  "name": "_assetAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2523,
                  "src": "8203:21:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2500,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8203:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8202:23:13"
            },
            "src": "8183:191:13",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2560,
              "nodeType": "Block",
              "src": "8493:271:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2539,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2528,
                          "name": "now",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20969,
                          "src": "8509:3:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
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
                                      "hexValue": "63726f776473616c652e646561646c696e65",
                                      "id": 2534,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "8564:20:13",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_c5e60127e04b658a1e76a44b60aa4343ed732c83881e29ad6808d263771afcb1",
                                        "typeString": "literal_string \"crowdsale.deadline\""
                                      },
                                      "value": "crowdsale.deadline"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 2535,
                                      "name": "_assetAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 2525,
                                      "src": "8586:13:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_c5e60127e04b658a1e76a44b60aa4343ed732c83881e29ad6808d263771afcb1",
                                        "typeString": "literal_string \"crowdsale.deadline\""
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 2532,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20954,
                                      "src": "8547:3:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 2533,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "8547:16:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 2536,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "8547:53:13",
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
                                "id": 2531,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20961,
                                "src": "8537:9:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 2537,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8537:64:13",
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
                              "id": 2529,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1981,
                              "src": "8516:8:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$1976",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 2530,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "uintStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1956,
                            "src": "8516:20:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                              "typeString": "function (bytes32) view external returns (uint256)"
                            }
                          },
                          "id": 2538,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8516:86:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "8509:93:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "5061737420646561646c696e65",
                        "id": 2540,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8604:15:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e841f7af748f554af4bccaca1a3c04467c2f7b94efd83f3977633bf3f89802f2",
                          "typeString": "literal_string \"Past deadline\""
                        },
                        "value": "Past deadline"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_e841f7af748f554af4bccaca1a3c04467c2f7b94efd83f3977633bf3f89802f2",
                          "typeString": "literal_string \"Past deadline\""
                        }
                      ],
                      "id": 2527,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20971,
                      "src": "8501:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2541,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8501:119:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2542,
                  "nodeType": "ExpressionStatement",
                  "src": "8501:119:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2555,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2544,
                          "name": "now",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20969,
                          "src": "8636:3:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
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
                                      "hexValue": "63726f776473616c652e7374617274",
                                      "id": 2550,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "8691:17:13",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_1f60ac00b77a0109f8df6c5adee6dbd5eb34aede6439c0e3c2a90432d9ac0436",
                                        "typeString": "literal_string \"crowdsale.start\""
                                      },
                                      "value": "crowdsale.start"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 2551,
                                      "name": "_assetAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 2525,
                                      "src": "8710:13:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_1f60ac00b77a0109f8df6c5adee6dbd5eb34aede6439c0e3c2a90432d9ac0436",
                                        "typeString": "literal_string \"crowdsale.start\""
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 2548,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20954,
                                      "src": "8674:3:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 2549,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "8674:16:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 2552,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "8674:50:13",
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
                                "id": 2547,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20961,
                                "src": "8664:9:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 2553,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8664:61:13",
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
                              "id": 2545,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1981,
                              "src": "8643:8:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$1976",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 2546,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "uintStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1956,
                            "src": "8643:20:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                              "typeString": "function (bytes32) view external returns (uint256)"
                            }
                          },
                          "id": 2554,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8643:83:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "8636:90:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4265666f72652073746172742074696d65",
                        "id": 2556,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8728:19:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c752952f67eccad5a7218ca778a4209c452d47b287fe1cb0e54c7add8c274921",
                          "typeString": "literal_string \"Before start time\""
                        },
                        "value": "Before start time"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c752952f67eccad5a7218ca778a4209c452d47b287fe1cb0e54c7add8c274921",
                          "typeString": "literal_string \"Before start time\""
                        }
                      ],
                      "id": 2543,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20971,
                      "src": "8628:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2557,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8628:120:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2558,
                  "nodeType": "ExpressionStatement",
                  "src": "8628:120:13"
                },
                {
                  "id": 2559,
                  "nodeType": "PlaceholderStatement",
                  "src": "8756:1:13"
                }
              ]
            },
            "documentation": null,
            "id": 2561,
            "name": "betweenDeadlines",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2526,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2525,
                  "name": "_assetAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2561,
                  "src": "8470:21:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2524,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8470:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8469:23:13"
            },
            "src": "8444:320:13",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2582,
              "nodeType": "Block",
              "src": "8880:144:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2577,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2566,
                          "name": "now",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20969,
                          "src": "8896:3:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
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
                                      "hexValue": "63726f776473616c652e646561646c696e65",
                                      "id": 2572,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "8950:20:13",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_c5e60127e04b658a1e76a44b60aa4343ed732c83881e29ad6808d263771afcb1",
                                        "typeString": "literal_string \"crowdsale.deadline\""
                                      },
                                      "value": "crowdsale.deadline"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 2573,
                                      "name": "_assetAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 2563,
                                      "src": "8972:13:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_c5e60127e04b658a1e76a44b60aa4343ed732c83881e29ad6808d263771afcb1",
                                        "typeString": "literal_string \"crowdsale.deadline\""
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 2570,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20954,
                                      "src": "8933:3:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 2571,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "8933:16:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 2574,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "8933:53:13",
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
                                "id": 2569,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20961,
                                "src": "8923:9:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 2575,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8923:64:13",
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
                              "id": 2567,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1981,
                              "src": "8902:8:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$1976",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 2568,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "uintStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1956,
                            "src": "8902:20:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                              "typeString": "function (bytes32) view external returns (uint256)"
                            }
                          },
                          "id": 2576,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8902:86:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "8896:92:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4265666f726520646561646c696e65",
                        "id": 2578,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8990:17:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_6c976861ba8e4bd475cb6b0b6ac131763c58b006e23a5323f49dbd283aa401ba",
                          "typeString": "literal_string \"Before deadline\""
                        },
                        "value": "Before deadline"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_6c976861ba8e4bd475cb6b0b6ac131763c58b006e23a5323f49dbd283aa401ba",
                          "typeString": "literal_string \"Before deadline\""
                        }
                      ],
                      "id": 2565,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20971,
                      "src": "8888:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2579,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8888:120:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2580,
                  "nodeType": "ExpressionStatement",
                  "src": "8888:120:13"
                },
                {
                  "id": 2581,
                  "nodeType": "PlaceholderStatement",
                  "src": "9016:1:13"
                }
              ]
            },
            "documentation": null,
            "id": 2583,
            "name": "afterDeadline",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2564,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2563,
                  "name": "_assetAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2583,
                  "src": "8857:21:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2562,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8857:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8856:23:13"
            },
            "src": "8834:190:13",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2603,
              "nodeType": "Block",
              "src": "9131:145:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2598,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "9148:88:13",
                        "subExpression": {
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
                                      "hexValue": "63726f776473616c652e66696e616c697a6564",
                                      "id": 2593,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "9197:21:13",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_722b895a93b43851ba32be101c0d959c7d88657997dbce0fa087bee777576b55",
                                        "typeString": "literal_string \"crowdsale.finalized\""
                                      },
                                      "value": "crowdsale.finalized"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 2594,
                                      "name": "_assetAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 2585,
                                      "src": "9220:13:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_722b895a93b43851ba32be101c0d959c7d88657997dbce0fa087bee777576b55",
                                        "typeString": "literal_string \"crowdsale.finalized\""
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 2591,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20954,
                                      "src": "9180:3:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 2592,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "9180:16:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 2595,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "9180:54:13",
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
                                "id": 2590,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20961,
                                "src": "9170:9:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 2596,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9170:65:13",
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
                              "id": 2588,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1981,
                              "src": "9149:8:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$1976",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 2589,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "boolStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1975,
                            "src": "9149:20:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                              "typeString": "function (bytes32) view external returns (bool)"
                            }
                          },
                          "id": 2597,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9149:87:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "43726f776473616c652066696e616c697a6564",
                        "id": 2599,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9238:21:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a6503060f8af80871d445a4769bf588434f89ca1172969ca665cd09e5241ab24",
                          "typeString": "literal_string \"Crowdsale finalized\""
                        },
                        "value": "Crowdsale finalized"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a6503060f8af80871d445a4769bf588434f89ca1172969ca665cd09e5241ab24",
                          "typeString": "literal_string \"Crowdsale finalized\""
                        }
                      ],
                      "id": 2587,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20971,
                      "src": "9139:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2600,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9139:121:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2601,
                  "nodeType": "ExpressionStatement",
                  "src": "9139:121:13"
                },
                {
                  "id": 2602,
                  "nodeType": "PlaceholderStatement",
                  "src": "9268:1:13"
                }
              ]
            },
            "documentation": null,
            "id": 2604,
            "name": "notFinalized",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2586,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2585,
                  "name": "_assetAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2604,
                  "src": "9108:21:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2584,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9108:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9107:23:13"
            },
            "src": "9086:190:13",
            "visibility": "internal"
          }
        ],
        "scope": 2606,
        "src": "878:8403:13"
      }
    ],
    "src": "0:9282:13"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/crowdsale/CrowdsaleETH.sol",
    "exportedSymbols": {
      "CrowdsaleETH": [
        2605
      ],
      "DB": [
        1976
      ],
      "Events": [
        1942
      ]
    },
    "id": 2606,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1925,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:13"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../math/SafeMath.sol",
        "id": 1926,
        "nodeType": "ImportDirective",
        "scope": 2606,
        "sourceUnit": 8864,
        "src": "26:30:13",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 1927,
        "nodeType": "ImportDirective",
        "scope": 2606,
        "sourceUnit": 8599,
        "src": "57:33:13",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/EtherDividendInterface.sol",
        "file": "../interfaces/EtherDividendInterface.sol",
        "id": 1928,
        "nodeType": "ImportDirective",
        "scope": 2606,
        "sourceUnit": 8651,
        "src": "91:50:13",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 1942,
        "linearizedBaseContracts": [
          1942
        ],
        "name": "Events",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 1941,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transaction",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1939,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1930,
                  "name": "_message",
                  "nodeType": "VariableDeclaration",
                  "scope": 1941,
                  "src": "223:15:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1929,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "223:6:13",
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
                  "id": 1932,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 1941,
                  "src": "240:13:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1931,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "240:7:13",
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
                  "id": 1934,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1941,
                  "src": "255:11:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1933,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "255:7:13",
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
                  "id": 1936,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1941,
                  "src": "268:12:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1935,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "268:4:13",
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
                  "id": 1938,
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "scope": 1941,
                  "src": "282:11:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1937,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "282:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "222:72:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 1940,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "304:0:13"
            },
            "scope": 1942,
            "src": "202:103:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2606,
        "src": "182:125:13"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 1976,
        "linearizedBaseContracts": [
          1976
        ],
        "name": "DB",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 1949,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addressStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1945,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1944,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 1949,
                  "src": "349:12:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1943,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "349:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "348:14:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 1948,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1947,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1949,
                  "src": "386:7:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1946,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "386:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "385:9:13"
            },
            "scope": 1976,
            "src": "325:70:13",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1956,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "uintStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1952,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1951,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 1956,
                  "src": "419:12:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1950,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "419:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "418:14:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 1955,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1954,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1956,
                  "src": "456:4:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1953,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "456:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "455:6:13"
            },
            "scope": 1976,
            "src": "398:64:13",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1961,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "deleteUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1959,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1958,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 1961,
                  "src": "485:12:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1957,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "485:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "484:14:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 1960,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "507:0:13"
            },
            "scope": 1976,
            "src": "465:43:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1968,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setBool",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1966,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1963,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 1968,
                  "src": "528:12:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1962,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "528:7:13",
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
                  "id": 1965,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 1968,
                  "src": "542:11:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1964,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "542:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "527:27:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 1967,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "563:0:13"
            },
            "scope": 1976,
            "src": "511:53:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 1975,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "boolStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1971,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1970,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 1975,
                  "src": "588:12:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1969,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "588:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "587:14:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 1974,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1973,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1975,
                  "src": "625:4:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1972,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "625:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "624:6:13"
            },
            "scope": 1976,
            "src": "567:64:13",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2606,
        "src": "308:325:13"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 2605,
        "linearizedBaseContracts": [
          2605
        ],
        "name": "CrowdsaleETH",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1979,
            "libraryName": {
              "contractScope": null,
              "id": 1977,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8863,
              "src": "912:8:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$8863",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "906:27:13",
            "typeName": {
              "id": 1978,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "925:7:13",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 1981,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 2605,
            "src": "939:18:13",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DB_$1976",
              "typeString": "contract DB"
            },
            "typeName": {
              "contractScope": null,
              "id": 1980,
              "name": "DB",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1976,
              "src": "939:2:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DB_$1976",
                "typeString": "contract DB"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1983,
            "name": "events",
            "nodeType": "VariableDeclaration",
            "scope": 2605,
            "src": "963:20:13",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Events_$1942",
              "typeString": "contract Events"
            },
            "typeName": {
              "contractScope": null,
              "id": 1982,
              "name": "Events",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1942,
              "src": "963:6:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Events_$1942",
                "typeString": "contract Events"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2002,
              "nodeType": "Block",
              "src": "1187:189:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1994,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1990,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1981,
                      "src": "1197:8:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DB_$1976",
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
                          "id": 1992,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1985,
                          "src": "1211:9:13",
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
                        "id": 1991,
                        "name": "DB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1976,
                        "src": "1208:2:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DB_$1976_$",
                          "typeString": "type(contract DB)"
                        }
                      },
                      "id": 1993,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1208:13:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DB_$1976",
                        "typeString": "contract DB"
                      }
                    },
                    "src": "1197:24:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DB_$1976",
                      "typeString": "contract DB"
                    }
                  },
                  "id": 1995,
                  "nodeType": "ExpressionStatement",
                  "src": "1197:24:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2000,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1996,
                      "name": "events",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1983,
                      "src": "1231:6:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$1942",
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
                          "id": 1998,
                          "name": "_events",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1987,
                          "src": "1247:7:13",
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
                        "id": 1997,
                        "name": "Events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1942,
                        "src": "1240:6:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Events_$1942_$",
                          "typeString": "type(contract Events)"
                        }
                      },
                      "id": 1999,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1240:15:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Events_$1942",
                        "typeString": "contract Events"
                      }
                    },
                    "src": "1231:24:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Events_$1942",
                      "typeString": "contract Events"
                    }
                  },
                  "id": 2001,
                  "nodeType": "ExpressionStatement",
                  "src": "1231:24:13"
                }
              ]
            },
            "documentation": null,
            "id": 2003,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1988,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1985,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 2003,
                  "src": "1140:17:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1984,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1140:7:13",
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
                  "id": 1987,
                  "name": "_events",
                  "nodeType": "VariableDeclaration",
                  "scope": 2003,
                  "src": "1159:15:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1986,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1159:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1139:36:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 1989,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1187:0:13"
            },
            "scope": 2605,
            "src": "1128:248:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2175,
              "nodeType": "Block",
              "src": "1834:1527:13",
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
                        "id": 2045,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 2027,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 2024,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20967,
                              "src": "1850:3:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 2025,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1850:10:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 2026,
                            "name": "_investor",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2007,
                            "src": "1864:9:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1850:23:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
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
                                      "hexValue": "617070726f76616c",
                                      "id": 2033,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "1925:10:13",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_f1dd521ebebaf5ba3d6127465ff9c4a71139a515dba59a79359c5c15f6766594",
                                        "typeString": "literal_string \"approval\""
                                      },
                                      "value": "approval"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 2034,
                                      "name": "_investor",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 2007,
                                      "src": "1937:9:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 2035,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20967,
                                        "src": "1948:3:13",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 2036,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "1948:10:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "id": 2038,
                                          "name": "this",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 21036,
                                          "src": "1968:4:13",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_CrowdsaleETH_$2605",
                                            "typeString": "contract CrowdsaleETH"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_contract$_CrowdsaleETH_$2605",
                                            "typeString": "contract CrowdsaleETH"
                                          }
                                        ],
                                        "id": 2037,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "1960:7:13",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_address_$",
                                          "typeString": "type(address)"
                                        },
                                        "typeName": "address"
                                      },
                                      "id": 2039,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "1960:13:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 2040,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20967,
                                        "src": "1975:3:13",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 2041,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sig",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "1975:7:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_f1dd521ebebaf5ba3d6127465ff9c4a71139a515dba59a79359c5c15f6766594",
                                        "typeString": "literal_string \"approval\""
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
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 2031,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20954,
                                      "src": "1908:3:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 2032,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1908:16:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 2042,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1908:75:13",
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
                                "id": 2030,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20961,
                                "src": "1898:9:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 2043,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1898:86:13",
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
                              "id": 2028,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1981,
                              "src": "1877:8:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$1976",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 2029,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "boolStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1975,
                            "src": "1877:20:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                              "typeString": "function (bytes32) view external returns (bool)"
                            }
                          },
                          "id": 2044,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1877:108:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1850:135:13",
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
                      "id": 2023,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "1842:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2046,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1842:144:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2047,
                  "nodeType": "ExpressionStatement",
                  "src": "1842:144:13"
                },
                {
                  "assignments": [
                    2049
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2049,
                      "name": "assetToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 2176,
                      "src": "1994:33:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                        "typeString": "contract EtherDividendInterface"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 2048,
                        "name": "EtherDividendInterface",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 8650,
                        "src": "1994:22:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                          "typeString": "contract EtherDividendInterface"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2053,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2051,
                        "name": "_assetAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2005,
                        "src": "2053:13:13",
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
                      "id": 2050,
                      "name": "EtherDividendInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8650,
                      "src": "2030:22:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_EtherDividendInterface_$8650_$",
                        "typeString": "type(contract EtherDividendInterface)"
                      }
                    },
                    "id": 2052,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2030:37:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                      "typeString": "contract EtherDividendInterface"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1994:73:13"
                },
                {
                  "assignments": [
                    2055
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2055,
                      "name": "amountToRaise",
                      "nodeType": "VariableDeclaration",
                      "scope": 2176,
                      "src": "2075:18:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2054,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2075:4:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2066,
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
                                "hexValue": "63726f776473616c652e676f616c",
                                "id": 2061,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2144:16:13",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_045c9598f5cff548bbf5830749370eab2aded0c210192a78c3be7c20556f2247",
                                  "typeString": "literal_string \"crowdsale.goal\""
                                },
                                "value": "crowdsale.goal"
                              },
                              {
                                "argumentTypes": null,
                                "id": 2062,
                                "name": "_assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2005,
                                "src": "2162:13:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_045c9598f5cff548bbf5830749370eab2aded0c210192a78c3be7c20556f2247",
                                  "typeString": "literal_string \"crowdsale.goal\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 2059,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "2127:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 2060,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2127:16:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 2063,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2127:49:13",
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
                          "id": 2058,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "2117:9:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 2064,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2117:60:13",
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
                        "id": 2056,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1981,
                        "src": "2096:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$1976",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 2057,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "uintStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1956,
                      "src": "2096:20:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) view external returns (uint256)"
                      }
                    },
                    "id": 2065,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2096:82:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2075:103:13"
                },
                {
                  "assignments": [
                    2068
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2068,
                      "name": "tokensRemaining",
                      "nodeType": "VariableDeclaration",
                      "scope": 2176,
                      "src": "2186:20:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2067,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2186:4:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2075,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "argumentTypes": null,
                            "id": 2071,
                            "name": "assetToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2049,
                            "src": "2227:10:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                              "typeString": "contract EtherDividendInterface"
                            }
                          },
                          "id": 2072,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "totalSupply",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8649,
                          "src": "2227:22:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                            "typeString": "function () view external returns (uint256)"
                          }
                        },
                        "id": 2073,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2227:24:13",
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
                        "id": 2069,
                        "name": "amountToRaise",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2055,
                        "src": "2209:13:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 2070,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8820,
                      "src": "2209:17:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 2074,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2209:43:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2186:66:13"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2079,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 2076,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20967,
                        "src": "2264:3:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 2077,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2264:9:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 2078,
                      "name": "tokensRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2068,
                      "src": "2277:15:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2264:28:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 2160,
                    "nodeType": "Block",
                    "src": "3158:92:13",
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
                                  "id": 2153,
                                  "name": "_investor",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2007,
                                  "src": "3192:9:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 2154,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20967,
                                    "src": "3203:3:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 2155,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3203:9:13",
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
                                  "id": 2151,
                                  "name": "assetToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2049,
                                  "src": "3176:10:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                                    "typeString": "contract EtherDividendInterface"
                                  }
                                },
                                "id": 2152,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "mint",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8636,
                                "src": "3176:15:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                  "typeString": "function (address,uint256) external returns (bool)"
                                }
                              },
                              "id": 2156,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3176:37:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "496e766573746f72206d696e74696e67206661696c6564",
                              "id": 2157,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3215:25:13",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d6b15665da079b00069a419a622b7b0ea642ea90435ff15757cba9ce2cba8dff",
                                "typeString": "literal_string \"Investor minting failed\""
                              },
                              "value": "Investor minting failed"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_d6b15665da079b00069a419a622b7b0ea642ea90435ff15757cba9ce2cba8dff",
                                "typeString": "literal_string \"Investor minting failed\""
                              }
                            ],
                            "id": 2150,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              20970,
                              20971
                            ],
                            "referencedDeclaration": 20971,
                            "src": "3168:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 2158,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3168:73:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2159,
                        "nodeType": "ExpressionStatement",
                        "src": "3168:73:13"
                      }
                    ]
                  },
                  "id": 2161,
                  "nodeType": "IfStatement",
                  "src": "2260:990:13",
                  "trueBody": {
                    "id": 2149,
                    "nodeType": "Block",
                    "src": "2294:852:13",
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
                                          "arguments": [
                                            {
                                              "argumentTypes": null,
                                              "hexValue": "636f6e7472616374",
                                              "id": 2088,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "kind": "string",
                                              "lValueRequested": false,
                                              "nodeType": "Literal",
                                              "src": "2430:10:13",
                                              "subdenomination": null,
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                                "typeString": "literal_string \"contract\""
                                              },
                                              "value": "contract"
                                            },
                                            {
                                              "argumentTypes": null,
                                              "hexValue": "41737365744d616e6167657246756e6473",
                                              "id": 2089,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "kind": "string",
                                              "lValueRequested": false,
                                              "nodeType": "Literal",
                                              "src": "2442:19:13",
                                              "subdenomination": null,
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_stringliteral_6abfc2d822ab26b1a4bcfe48dbb950be4a5a7226f722976ba70e5a9526cf844b",
                                                "typeString": "literal_string \"AssetManagerFunds\""
                                              },
                                              "value": "AssetManagerFunds"
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                                "typeString": "literal_string \"contract\""
                                              },
                                              {
                                                "typeIdentifier": "t_stringliteral_6abfc2d822ab26b1a4bcfe48dbb950be4a5a7226f722976ba70e5a9526cf844b",
                                                "typeString": "literal_string \"AssetManagerFunds\""
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": null,
                                              "id": 2086,
                                              "name": "abi",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 20954,
                                              "src": "2413:3:13",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_magic_abi",
                                                "typeString": "abi"
                                              }
                                            },
                                            "id": 2087,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberName": "encodePacked",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2413:16:13",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                              "typeString": "function () pure returns (bytes memory)"
                                            }
                                          },
                                          "id": 2090,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "functionCall",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "2413:49:13",
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
                                        "id": 2085,
                                        "name": "keccak256",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20961,
                                        "src": "2403:9:13",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                          "typeString": "function () pure returns (bytes32)"
                                        }
                                      },
                                      "id": 2091,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "2403:60:13",
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
                                      "id": 2083,
                                      "name": "database",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 1981,
                                      "src": "2379:8:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_DB_$1976",
                                        "typeString": "contract DB"
                                      }
                                    },
                                    "id": 2084,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "addressStorage",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 1949,
                                    "src": "2379:23:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                                      "typeString": "function (bytes32) view external returns (address)"
                                    }
                                  },
                                  "id": 2092,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2379:85:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
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
                                              "hexValue": "61737365742e6d616e61676572466565",
                                              "id": 2098,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "kind": "string",
                                              "lValueRequested": false,
                                              "nodeType": "Literal",
                                              "src": "2514:18:13",
                                              "subdenomination": null,
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_stringliteral_0a4a83d415c855c53faa95933c5f8f9d6fcb5eeb285cedb5527063dac2ccbd3b",
                                                "typeString": "literal_string \"asset.managerFee\""
                                              },
                                              "value": "asset.managerFee"
                                            },
                                            {
                                              "argumentTypes": null,
                                              "id": 2099,
                                              "name": "_assetAddress",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 2005,
                                              "src": "2534:13:13",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                              }
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_stringliteral_0a4a83d415c855c53faa95933c5f8f9d6fcb5eeb285cedb5527063dac2ccbd3b",
                                                "typeString": "literal_string \"asset.managerFee\""
                                              },
                                              {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": null,
                                              "id": 2096,
                                              "name": "abi",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 20954,
                                              "src": "2497:3:13",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_magic_abi",
                                                "typeString": "abi"
                                              }
                                            },
                                            "id": 2097,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberName": "encodePacked",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "2497:16:13",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                              "typeString": "function () pure returns (bytes memory)"
                                            }
                                          },
                                          "id": 2100,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "functionCall",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "2497:51:13",
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
                                        "id": 2095,
                                        "name": "keccak256",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20961,
                                        "src": "2487:9:13",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                          "typeString": "function () pure returns (bytes32)"
                                        }
                                      },
                                      "id": 2101,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "2487:62:13",
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
                                      "id": 2093,
                                      "name": "database",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 1981,
                                      "src": "2466:8:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_DB_$1976",
                                        "typeString": "contract DB"
                                      }
                                    },
                                    "id": 2094,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "uintStorage",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 1956,
                                    "src": "2466:20:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                                      "typeString": "function (bytes32) view external returns (uint256)"
                                    }
                                  },
                                  "id": 2102,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2466:84:13",
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
                                  "id": 2081,
                                  "name": "assetToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2049,
                                  "src": "2363:10:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                                    "typeString": "contract EtherDividendInterface"
                                  }
                                },
                                "id": 2082,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "mint",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8636,
                                "src": "2363:15:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                  "typeString": "function (address,uint256) external returns (bool)"
                                }
                              },
                              "id": 2103,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2363:188:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "4d616e61676572206d696e74696e67206661696c6564",
                              "id": 2104,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2553:24:13",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_9e44f09f473fd1e909f68f3462e8e59f42a8020fc6a34f89ae7bac2cd6105514",
                                "typeString": "literal_string \"Manager minting failed\""
                              },
                              "value": "Manager minting failed"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_9e44f09f473fd1e909f68f3462e8e59f42a8020fc6a34f89ae7bac2cd6105514",
                                "typeString": "literal_string \"Manager minting failed\""
                              }
                            ],
                            "id": 2080,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              20970,
                              20971
                            ],
                            "referencedDeclaration": 20971,
                            "src": "2355:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 2105,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2355:223:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2106,
                        "nodeType": "ExpressionStatement",
                        "src": "2355:223:13"
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
                                  "id": 2109,
                                  "name": "_assetAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2005,
                                  "src": "2614:13:13",
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
                                "id": 2108,
                                "name": "finalizeCrowdsale",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2448,
                                "src": "2596:17:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                                  "typeString": "function (address) returns (bool)"
                                }
                              },
                              "id": 2110,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2596:32:13",
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
                            "id": 2107,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              20970,
                              20971
                            ],
                            "referencedDeclaration": 20970,
                            "src": "2588:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 2111,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2588:41:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2112,
                        "nodeType": "ExpressionStatement",
                        "src": "2588:41:13"
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
                                  "id": 2116,
                                  "name": "_investor",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2007,
                                  "src": "2698:9:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 2117,
                                  "name": "tokensRemaining",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2068,
                                  "src": "2709:15:13",
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
                                  "id": 2114,
                                  "name": "assetToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2049,
                                  "src": "2682:10:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                                    "typeString": "contract EtherDividendInterface"
                                  }
                                },
                                "id": 2115,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "mint",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8636,
                                "src": "2682:15:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                  "typeString": "function (address,uint256) external returns (bool)"
                                }
                              },
                              "id": 2118,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2682:43:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "496e766573746f72206d696e74696e67206661696c6564",
                              "id": 2119,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2727:25:13",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d6b15665da079b00069a419a622b7b0ea642ea90435ff15757cba9ce2cba8dff",
                                "typeString": "literal_string \"Investor minting failed\""
                              },
                              "value": "Investor minting failed"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_d6b15665da079b00069a419a622b7b0ea642ea90435ff15757cba9ce2cba8dff",
                                "typeString": "literal_string \"Investor minting failed\""
                              }
                            ],
                            "id": 2113,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              20970,
                              20971
                            ],
                            "referencedDeclaration": 20971,
                            "src": "2674:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 2120,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2674:79:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2121,
                        "nodeType": "ExpressionStatement",
                        "src": "2674:79:13"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 2123,
                                  "name": "assetToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2049,
                                  "src": "2804:10:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                                    "typeString": "contract EtherDividendInterface"
                                  }
                                },
                                "id": 2124,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "finishMinting",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8641,
                                "src": "2804:24:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_nonpayable$__$returns$_t_bool_$",
                                  "typeString": "function () external returns (bool)"
                                }
                              },
                              "id": 2125,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2804:26:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "4d696e74696e67206e6f742066696e6973686564",
                              "id": 2126,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2832:22:13",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_ca445638ea26359e2e8b16c1e6982c296d84c8ece6dafc29b483303df0247a46",
                                "typeString": "literal_string \"Minting not finished\""
                              },
                              "value": "Minting not finished"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_ca445638ea26359e2e8b16c1e6982c296d84c8ece6dafc29b483303df0247a46",
                                "typeString": "literal_string \"Minting not finished\""
                              }
                            ],
                            "id": 2122,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              20970,
                              20971
                            ],
                            "referencedDeclaration": 20971,
                            "src": "2796:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 2127,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2796:59:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2128,
                        "nodeType": "ExpressionStatement",
                        "src": "2796:59:13"
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
                                  "id": 2131,
                                  "name": "_assetAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2005,
                                  "src": "2883:13:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 2132,
                                  "name": "amountToRaise",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2055,
                                  "src": "2898:13:13",
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
                                "id": 2130,
                                "name": "payoutETH",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2401,
                                "src": "2873:9:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                  "typeString": "function (address,uint256) returns (bool)"
                                }
                              },
                              "id": 2133,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2873:39:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "5061796f7574206661696c6564",
                              "id": 2134,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2914:15:13",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_42d486eee70463b52369225e27fce2709665a17be45e65becee48f6af14cf90b",
                                "typeString": "literal_string \"Payout failed\""
                              },
                              "value": "Payout failed"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_42d486eee70463b52369225e27fce2709665a17be45e65becee48f6af14cf90b",
                                "typeString": "literal_string \"Payout failed\""
                              }
                            ],
                            "id": 2129,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              20970,
                              20971
                            ],
                            "referencedDeclaration": 20971,
                            "src": "2865:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 2135,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2865:65:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2136,
                        "nodeType": "ExpressionStatement",
                        "src": "2865:65:13"
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
                                  "id": 2145,
                                  "name": "tokensRemaining",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2068,
                                  "src": "3002:15:13",
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
                                    "id": 2142,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20967,
                                    "src": "2988:3:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 2143,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2988:9:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 2144,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sub",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 8820,
                                "src": "2988:13:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 2146,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2988:30:13",
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
                                "id": 2137,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20967,
                                "src": "2968:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 2140,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2968:10:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 2141,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2968:19:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 2147,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2968:51:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2148,
                        "nodeType": "ExpressionStatement",
                        "src": "2968:51:13"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "417373657420707572636861736564",
                        "id": 2165,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3276:17:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a00df6de6fb21706a673ec0927e4c1572daa77d87f8ad9532576c0b41a65743e",
                          "typeString": "literal_string \"Asset purchased\""
                        },
                        "value": "Asset purchased"
                      },
                      {
                        "argumentTypes": null,
                        "id": 2166,
                        "name": "_investor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2007,
                        "src": "3295:9:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2167,
                        "name": "_assetAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2005,
                        "src": "3306:13:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 2168,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "3321:3:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2169,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3321:9:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 2170,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3332:2:13",
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
                          "typeIdentifier": "t_stringliteral_a00df6de6fb21706a673ec0927e4c1572daa77d87f8ad9532576c0b41a65743e",
                          "typeString": "literal_string \"Asset purchased\""
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
                        "id": 2162,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1983,
                        "src": "3257:6:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$1942",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 2164,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1941,
                      "src": "3257:18:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 2171,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3257:78:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2172,
                  "nodeType": "ExpressionStatement",
                  "src": "3257:78:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 2173,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3350:4:13",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 2022,
                  "id": 2174,
                  "nodeType": "Return",
                  "src": "3343:11:13"
                }
              ]
            },
            "documentation": null,
            "id": 2176,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2010,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2009,
                  "name": "requiresEther",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2459,
                  "src": "1683:13:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1683:13:13"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 2012,
                    "name": "_assetAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2005,
                    "src": "1712:13:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 2013,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2011,
                  "name": "validAsset",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2523,
                  "src": "1701:10:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1701:25:13"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 2015,
                    "name": "_assetAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2005,
                    "src": "1748:13:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 2016,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2014,
                  "name": "betweenDeadlines",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2561,
                  "src": "1731:16:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1731:31:13"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 2018,
                    "name": "_assetAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2005,
                    "src": "1780:13:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 2019,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2017,
                  "name": "notFinalized",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2604,
                  "src": "1767:12:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1767:27:13"
              }
            ],
            "name": "buyAssetOrderETH",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2008,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2005,
                  "name": "_assetAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2176,
                  "src": "1612:21:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2004,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1612:7:13",
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
                  "id": 2007,
                  "name": "_investor",
                  "nodeType": "VariableDeclaration",
                  "scope": 2176,
                  "src": "1635:17:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2006,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1635:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1611:42:13"
            },
            "payable": true,
            "returnParameters": {
              "id": 2022,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2021,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2176,
                  "src": "1828:4:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2020,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1828:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1827:6:13"
            },
            "scope": 2605,
            "src": "1586:1775:13",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 2244,
              "nodeType": "Block",
              "src": "3763:425:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2206,
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
                                      "hexValue": "63726f776473616c652e646561646c696e65",
                                      "id": 2200,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3827:20:13",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_c5e60127e04b658a1e76a44b60aa4343ed732c83881e29ad6808d263771afcb1",
                                        "typeString": "literal_string \"crowdsale.deadline\""
                                      },
                                      "value": "crowdsale.deadline"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 2201,
                                      "name": "_assetAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 2178,
                                      "src": "3849:13:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_c5e60127e04b658a1e76a44b60aa4343ed732c83881e29ad6808d263771afcb1",
                                        "typeString": "literal_string \"crowdsale.deadline\""
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 2198,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20954,
                                      "src": "3810:3:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 2199,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "3810:16:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 2202,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3810:53:13",
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
                                "id": 2197,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20961,
                                "src": "3800:9:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 2203,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3800:64:13",
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
                              "id": 2195,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1981,
                              "src": "3779:8:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$1976",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 2196,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "uintStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1956,
                            "src": "3779:20:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                              "typeString": "function (bytes32) view external returns (uint256)"
                            }
                          },
                          "id": 2204,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3779:86:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 2205,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3869:1:13",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3779:91:13",
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
                      "id": 2194,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "3771:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2207,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3771:100:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2208,
                  "nodeType": "ExpressionStatement",
                  "src": "3771:100:13"
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
                                "hexValue": "63726f776473616c652e646561646c696e65",
                                "id": 2215,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3926:20:13",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_c5e60127e04b658a1e76a44b60aa4343ed732c83881e29ad6808d263771afcb1",
                                  "typeString": "literal_string \"crowdsale.deadline\""
                                },
                                "value": "crowdsale.deadline"
                              },
                              {
                                "argumentTypes": null,
                                "id": 2216,
                                "name": "_assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2178,
                                "src": "3948:13:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_c5e60127e04b658a1e76a44b60aa4343ed732c83881e29ad6808d263771afcb1",
                                  "typeString": "literal_string \"crowdsale.deadline\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 2213,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "3909:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 2214,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3909:16:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 2217,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3909:53:13",
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
                          "id": 2212,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "3899:9:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 2218,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3899:64:13",
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
                        "id": 2209,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1981,
                        "src": "3879:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$1976",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 2211,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deleteUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1961,
                      "src": "3879:19:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) external"
                      }
                    },
                    "id": 2219,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3879:85:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2220,
                  "nodeType": "ExpressionStatement",
                  "src": "3879:85:13"
                },
                {
                  "assignments": [
                    2222
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2222,
                      "name": "assetToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 2245,
                      "src": "3972:33:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                        "typeString": "contract EtherDividendInterface"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 2221,
                        "name": "EtherDividendInterface",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 8650,
                        "src": "3972:22:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                          "typeString": "contract EtherDividendInterface"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2226,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2224,
                        "name": "_assetAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2178,
                        "src": "4031:13:13",
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
                      "id": 2223,
                      "name": "EtherDividendInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8650,
                      "src": "4008:22:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_EtherDividendInterface_$8650_$",
                        "typeString": "type(contract EtherDividendInterface)"
                      }
                    },
                    "id": 2225,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4008:37:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                      "typeString": "contract EtherDividendInterface"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3972:73:13"
                },
                {
                  "assignments": [
                    2228
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2228,
                      "name": "refundValue",
                      "nodeType": "VariableDeclaration",
                      "scope": 2245,
                      "src": "4053:16:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2227,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "4053:4:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2232,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 2229,
                        "name": "assetToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2222,
                        "src": "4072:10:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                          "typeString": "contract EtherDividendInterface"
                        }
                      },
                      "id": 2230,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "totalSupply",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8649,
                      "src": "4072:22:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                        "typeString": "function () view external returns (uint256)"
                      }
                    },
                    "id": 2231,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4072:24:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4053:43:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 2238,
                          "name": "refundValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2228,
                          "src": "4148:11:13",
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
                            "id": 2233,
                            "name": "assetToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2222,
                            "src": "4116:10:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_EtherDividendInterface_$8650",
                              "typeString": "contract EtherDividendInterface"
                            }
                          },
                          "id": 2236,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "issueDividends",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8644,
                          "src": "4116:25:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_payable$__$returns$__$",
                            "typeString": "function () payable external"
                          }
                        },
                        "id": 2237,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4116:31:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_setvalue_nonpayable$_t_uint256_$returns$_t_function_external_payable$__$returns$__$value_$",
                          "typeString": "function (uint256) returns (function () payable external)"
                        }
                      },
                      "id": 2239,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4116:44:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$__$returns$__$value",
                        "typeString": "function () payable external"
                      }
                    },
                    "id": 2240,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4116:46:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2241,
                  "nodeType": "ExpressionStatement",
                  "src": "4116:46:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 2242,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4177:4:13",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 2193,
                  "id": 2243,
                  "nodeType": "Return",
                  "src": "4170:11:13"
                }
              ]
            },
            "documentation": null,
            "id": 2245,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2181,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2180,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2499,
                  "src": "3635:13:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3635:13:13"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 2183,
                    "name": "_assetAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2178,
                    "src": "3664:13:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 2184,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2182,
                  "name": "validAsset",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2523,
                  "src": "3653:10:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3653:25:13"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 2186,
                    "name": "_assetAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2178,
                    "src": "3697:13:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 2187,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2185,
                  "name": "afterDeadline",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2583,
                  "src": "3683:13:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3683:28:13"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 2189,
                    "name": "_assetAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2178,
                    "src": "3729:13:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 2190,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2188,
                  "name": "notFinalized",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2604,
                  "src": "3716:12:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3716:27:13"
              }
            ],
            "name": "refund",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2179,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2178,
                  "name": "_assetAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2245,
                  "src": "3595:21:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2177,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3595:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3594:23:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 2193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2192,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2245,
                  "src": "3757:4:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2191,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3757:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3756:6:13"
            },
            "scope": 2605,
            "src": "3579:609:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 2275,
              "nodeType": "Block",
              "src": "4320:171:13",
              "statements": [
                {
                  "assignments": [
                    2253
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2253,
                      "name": "thisToken",
                      "nodeType": "VariableDeclaration",
                      "scope": 2276,
                      "src": "4328:15:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20_$8598",
                        "typeString": "contract ERC20"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 2252,
                        "name": "ERC20",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 8598,
                        "src": "4328:5:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$8598",
                          "typeString": "contract ERC20"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2257,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2255,
                        "name": "_erc20Token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2247,
                        "src": "4352:11:13",
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
                      "id": 2254,
                      "name": "ERC20",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8598,
                      "src": "4346:5:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_ERC20_$8598_$",
                        "typeString": "type(contract ERC20)"
                      }
                    },
                    "id": 2256,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4346:18:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$8598",
                      "typeString": "contract ERC20"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4328:36:13"
                },
                {
                  "assignments": [
                    2259
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2259,
                      "name": "contractBalance",
                      "nodeType": "VariableDeclaration",
                      "scope": 2276,
                      "src": "4372:20:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2258,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "4372:4:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2266,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 2263,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21036,
                            "src": "4423:4:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_CrowdsaleETH_$2605",
                              "typeString": "contract CrowdsaleETH"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_CrowdsaleETH_$2605",
                              "typeString": "contract CrowdsaleETH"
                            }
                          ],
                          "id": 2262,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4415:7:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 2264,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4415:13:13",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 2260,
                        "name": "thisToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2253,
                        "src": "4395:9:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$8598",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 2261,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8543,
                      "src": "4395:19:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 2265,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4395:34:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4372:57:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 2270,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "4456:3:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2271,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4456:10:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2272,
                        "name": "contractBalance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2259,
                        "src": "4468:15:13",
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
                        "id": 2267,
                        "name": "thisToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2253,
                        "src": "4437:9:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$8598",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 2269,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8561,
                      "src": "4437:18:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 2273,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4437:47:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2274,
                  "nodeType": "ExpressionStatement",
                  "src": "4437:47:13"
                }
              ]
            },
            "documentation": null,
            "id": 2276,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2250,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2249,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2478,
                  "src": "4297:9:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4297:9:13"
              }
            ],
            "name": "recoverTokens",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2248,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2247,
                  "name": "_erc20Token",
                  "nodeType": "VariableDeclaration",
                  "scope": 2276,
                  "src": "4272:19:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2246,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4272:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4271:21:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 2251,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4320:0:13"
            },
            "scope": 2605,
            "src": "4249:242:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 2302,
              "nodeType": "Block",
              "src": "4600:145:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "43726f776473616c654554482064657374726f796564",
                        "id": 2284,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4627:24:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_4b7c1762ba2158744af3b000e9caaf10b081f487d1d89f215dda6f1457c4985b",
                          "typeString": "literal_string \"CrowdsaleETH destroyed\""
                        },
                        "value": "CrowdsaleETH destroyed"
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 2286,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21036,
                            "src": "4661:4:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_CrowdsaleETH_$2605",
                              "typeString": "contract CrowdsaleETH"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_CrowdsaleETH_$2605",
                              "typeString": "contract CrowdsaleETH"
                            }
                          ],
                          "id": 2285,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4653:7:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 2287,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4653:13:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 2288,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "4668:3:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2289,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4668:10:13",
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
                              "id": 2291,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21036,
                              "src": "4688:4:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_CrowdsaleETH_$2605",
                                "typeString": "contract CrowdsaleETH"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_CrowdsaleETH_$2605",
                                "typeString": "contract CrowdsaleETH"
                              }
                            ],
                            "id": 2290,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "4680:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 2292,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4680:13:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 2293,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4680:21:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 2294,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4703:2:13",
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
                          "typeIdentifier": "t_stringliteral_4b7c1762ba2158744af3b000e9caaf10b081f487d1d89f215dda6f1457c4985b",
                          "typeString": "literal_string \"CrowdsaleETH destroyed\""
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
                        "id": 2281,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1983,
                        "src": "4608:6:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$1942",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 2283,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1941,
                      "src": "4608:18:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 2295,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4608:98:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2296,
                  "nodeType": "ExpressionStatement",
                  "src": "4608:98:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 2298,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20967,
                          "src": "4727:3:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2299,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4727:10:13",
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
                      "id": 2297,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20975,
                      "src": "4714:12:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 2300,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4714:24:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2301,
                  "nodeType": "ExpressionStatement",
                  "src": "4714:24:13"
                }
              ]
            },
            "documentation": null,
            "id": 2303,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 2279,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2278,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2478,
                  "src": "4577:9:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4577:9:13"
              }
            ],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2277,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4570:2:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 2280,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4600:0:13"
            },
            "scope": 2605,
            "src": "4554:191:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 2309,
              "nodeType": "Block",
              "src": "4833:23:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 2306,
                      "name": "revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20972,
                        20973
                      ],
                      "referencedDeclaration": 20972,
                      "src": "4841:6:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 2307,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4841:8:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2308,
                  "nodeType": "ExpressionStatement",
                  "src": "4841:8:13"
                }
              ]
            },
            "documentation": null,
            "id": 2310,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2304,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4807:2:13"
            },
            "payable": true,
            "returnParameters": {
              "id": 2305,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4833:0:13"
            },
            "scope": 2605,
            "src": "4798:58:13",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2400,
              "nodeType": "Block",
              "src": "5678:636:13",
              "statements": [
                {
                  "assignments": [
                    2320
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2320,
                      "name": "operator",
                      "nodeType": "VariableDeclaration",
                      "scope": 2401,
                      "src": "5686:16:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 2319,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5686:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2331,
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
                                "hexValue": "61737365742e6f70657261746f72",
                                "id": 2326,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5756:16:13",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_4716d66186f568e75f8d8be5f2ef98464c9608a0255abf6763d5a8b4badea669",
                                  "typeString": "literal_string \"asset.operator\""
                                },
                                "value": "asset.operator"
                              },
                              {
                                "argumentTypes": null,
                                "id": 2327,
                                "name": "_assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2312,
                                "src": "5774:13:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_4716d66186f568e75f8d8be5f2ef98464c9608a0255abf6763d5a8b4badea669",
                                  "typeString": "literal_string \"asset.operator\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 2324,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "5739:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 2325,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "5739:16:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 2328,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5739:49:13",
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
                          "id": 2323,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "5729:9:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 2329,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5729:60:13",
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
                        "id": 2321,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1981,
                        "src": "5705:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$1976",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 2322,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "addressStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1949,
                      "src": "5705:23:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view external returns (address)"
                      }
                    },
                    "id": 2330,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5705:85:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5686:104:13"
                },
                {
                  "assignments": [
                    2333
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2333,
                      "name": "platformWallet",
                      "nodeType": "VariableDeclaration",
                      "scope": 2401,
                      "src": "5798:22:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 2332,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "5798:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2343,
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
                                "hexValue": "706c6174666f726d2e77616c6c6574",
                                "id": 2339,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5874:17:13",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_6df6ec6ae25a02a38b0a383a08b15f97b0d1cb899196a50df56a88bcc48925f2",
                                  "typeString": "literal_string \"platform.wallet\""
                                },
                                "value": "platform.wallet"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_6df6ec6ae25a02a38b0a383a08b15f97b0d1cb899196a50df56a88bcc48925f2",
                                  "typeString": "literal_string \"platform.wallet\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 2337,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "5857:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 2338,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "5857:16:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 2340,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5857:35:13",
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
                          "id": 2336,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "5847:9:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 2341,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5847:46:13",
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
                        "id": 2334,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1981,
                        "src": "5823:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$1976",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 2335,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "addressStorage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1949,
                      "src": "5823:23:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view external returns (address)"
                      }
                    },
                    "id": 2342,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5823:71:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5798:96:13"
                },
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
                        "id": 2355,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 2349,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 2345,
                            "name": "operator",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2320,
                            "src": "5910:8:13",
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
                                "id": 2347,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5930:1:13",
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
                              "id": 2346,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "5922:7:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 2348,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5922:10:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "5910:22:13",
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
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 2354,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 2350,
                            "name": "platformWallet",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2333,
                            "src": "5936:14:13",
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
                                "id": 2352,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5962:1:13",
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
                              "id": 2351,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "5954:7:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 2353,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5954:10:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "5936:28:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "5910:54:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4f70657261746f72206f7220706c6174666f726d2077616c6c6574206e6f7420736574",
                        "id": 2356,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5966:37:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ef1fd3a3928c915d1b00402c28ebdbd0807c6ed69ffeef185e3df9166fa9fbd7",
                          "typeString": "literal_string \"Operator or platform wallet not set\""
                        },
                        "value": "Operator or platform wallet not set"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_ef1fd3a3928c915d1b00402c28ebdbd0807c6ed69ffeef185e3df9166fa9fbd7",
                          "typeString": "literal_string \"Operator or platform wallet not set\""
                        }
                      ],
                      "id": 2344,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20971,
                      "src": "5902:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5902:102:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2358,
                  "nodeType": "ExpressionStatement",
                  "src": "5902:102:13"
                },
                {
                  "assignments": [
                    2360
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2360,
                      "name": "operatorPortion",
                      "nodeType": "VariableDeclaration",
                      "scope": 2401,
                      "src": "6012:20:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2359,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "6012:4:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2368,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "313030",
                        "id": 2366,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6055:3:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        },
                        "value": "100"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "3939",
                            "id": 2363,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6047:2:13",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_99_by_1",
                              "typeString": "int_const 99"
                            },
                            "value": "99"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_99_by_1",
                              "typeString": "int_const 99"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 2361,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2314,
                            "src": "6035:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 2362,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "mul",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8786,
                          "src": "6035:11:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 2364,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6035:15:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 2365,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "div",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8800,
                      "src": "6035:19:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 2367,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6035:24:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6012:47:13"
                },
                {
                  "assignments": [
                    2370
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2370,
                      "name": "platformPortion",
                      "nodeType": "VariableDeclaration",
                      "scope": 2401,
                      "src": "6067:20:13",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2369,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "6067:4:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2375,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2373,
                        "name": "operatorPortion",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2360,
                        "src": "6102:15:13",
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
                        "id": 2371,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2314,
                        "src": "6090:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 2372,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sub",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8820,
                      "src": "6090:11:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 2374,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6090:28:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6067:51:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2379,
                        "name": "platformPortion",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2370,
                        "src": "6150:15:13",
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
                        "id": 2376,
                        "name": "platformWallet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2333,
                        "src": "6126:14:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 2378,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "6126:23:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 2380,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6126:40:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2381,
                  "nodeType": "ExpressionStatement",
                  "src": "6126:40:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2385,
                        "name": "operatorPortion",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2360,
                        "src": "6192:15:13",
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
                        "id": 2382,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2320,
                        "src": "6174:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 2384,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "6174:17:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 2386,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6174:34:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2387,
                  "nodeType": "ExpressionStatement",
                  "src": "6174:34:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "4173736574207061796f7574",
                        "id": 2391,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6235:14:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_86cdd4af8de775d906a1fba477eaf38ec8f85c8ca89a1ce3d688ffc88a65d5d9",
                          "typeString": "literal_string \"Asset payout\""
                        },
                        "value": "Asset payout"
                      },
                      {
                        "argumentTypes": null,
                        "id": 2392,
                        "name": "_assetAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2312,
                        "src": "6251:13:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2393,
                        "name": "operator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2320,
                        "src": "6266:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2394,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2314,
                        "src": "6276:7:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 2395,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6285:2:13",
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
                          "typeIdentifier": "t_stringliteral_86cdd4af8de775d906a1fba477eaf38ec8f85c8ca89a1ce3d688ffc88a65d5d9",
                          "typeString": "literal_string \"Asset payout\""
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
                        "id": 2388,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1983,
                        "src": "6216:6:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Events_$1942",
                          "typeString": "contract Events"
                        }
                      },
                      "id": 2390,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1941,
                      "src": "6216:18:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 2396,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6216:72:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2397,
                  "nodeType": "ExpressionStatement",
                  "src": "6216:72:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 2398,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "6303:4:13",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 2318,
                  "id": 2399,
                  "nodeType": "Return",
                  "src": "6296:11:13"
                }
              ]
            },
            "documentation": null,
            "id": 2401,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "payoutETH",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2315,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2312,
                  "name": "_assetAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2401,
                  "src": "5609:21:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2311,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5609:7:13",
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
                  "id": 2314,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 2401,
                  "src": "5632:12:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2313,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5632:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5608:37:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 2318,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2317,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2401,
                  "src": "5672:4:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2316,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5672:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5671:6:13"
            },
            "scope": 2605,
            "src": "5590:724:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2447,
              "nodeType": "Block",
              "src": "6519:440:13",
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
                                "hexValue": "63726f776473616c652e66696e616c697a6564",
                                "id": 2414,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6573:21:13",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_722b895a93b43851ba32be101c0d959c7d88657997dbce0fa087bee777576b55",
                                  "typeString": "literal_string \"crowdsale.finalized\""
                                },
                                "value": "crowdsale.finalized"
                              },
                              {
                                "argumentTypes": null,
                                "id": 2415,
                                "name": "_assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2403,
                                "src": "6596:13:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_722b895a93b43851ba32be101c0d959c7d88657997dbce0fa087bee777576b55",
                                  "typeString": "literal_string \"crowdsale.finalized\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 2412,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "6556:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 2413,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "6556:16:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 2416,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6556:54:13",
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
                          "id": 2411,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "6546:9:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 2417,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6546:65:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 2418,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6613:4:13",
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
                        "id": 2408,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1981,
                        "src": "6529:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$1976",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 2410,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setBool",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1968,
                      "src": "6529:16:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_bool_$returns$__$",
                        "typeString": "function (bytes32,bool) external"
                      }
                    },
                    "id": 2419,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6529:89:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2420,
                  "nodeType": "ExpressionStatement",
                  "src": "6529:89:13"
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
                                "hexValue": "63726f776473616c652e676f616c",
                                "id": 2427,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6675:16:13",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_045c9598f5cff548bbf5830749370eab2aded0c210192a78c3be7c20556f2247",
                                  "typeString": "literal_string \"crowdsale.goal\""
                                },
                                "value": "crowdsale.goal"
                              },
                              {
                                "argumentTypes": null,
                                "id": 2428,
                                "name": "_assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2403,
                                "src": "6693:13:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_045c9598f5cff548bbf5830749370eab2aded0c210192a78c3be7c20556f2247",
                                  "typeString": "literal_string \"crowdsale.goal\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 2425,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "6658:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 2426,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "6658:16:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 2429,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6658:49:13",
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
                          "id": 2424,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "6648:9:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 2430,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6648:60:13",
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
                        "id": 2421,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1981,
                        "src": "6628:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$1976",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 2423,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deleteUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1961,
                      "src": "6628:19:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) external"
                      }
                    },
                    "id": 2431,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6628:81:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2432,
                  "nodeType": "ExpressionStatement",
                  "src": "6628:81:13"
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
                                "hexValue": "61737365742e6d616e61676572466565",
                                "id": 2439,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6831:18:13",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_0a4a83d415c855c53faa95933c5f8f9d6fcb5eeb285cedb5527063dac2ccbd3b",
                                  "typeString": "literal_string \"asset.managerFee\""
                                },
                                "value": "asset.managerFee"
                              },
                              {
                                "argumentTypes": null,
                                "id": 2440,
                                "name": "_assetAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2403,
                                "src": "6851:13:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_0a4a83d415c855c53faa95933c5f8f9d6fcb5eeb285cedb5527063dac2ccbd3b",
                                  "typeString": "literal_string \"asset.managerFee\""
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 2437,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20954,
                                "src": "6814:3:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 2438,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "6814:16:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 2441,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6814:51:13",
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
                          "id": 2436,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20961,
                          "src": "6804:9:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 2442,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6804:62:13",
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
                        "id": 2433,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1981,
                        "src": "6784:8:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$1976",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 2435,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "deleteUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1961,
                      "src": "6784:19:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$returns$__$",
                        "typeString": "function (bytes32) external"
                      }
                    },
                    "id": 2443,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6784:83:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2444,
                  "nodeType": "ExpressionStatement",
                  "src": "6784:83:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 2445,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "6948:4:13",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 2407,
                  "id": 2446,
                  "nodeType": "Return",
                  "src": "6941:11:13"
                }
              ]
            },
            "documentation": null,
            "id": 2448,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finalizeCrowdsale",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2404,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2403,
                  "name": "_assetAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2448,
                  "src": "6464:21:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2402,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6464:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6463:23:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 2407,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2406,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2448,
                  "src": "6513:4:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2405,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "6513:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6512:6:13"
            },
            "scope": 2605,
            "src": "6437:522:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2458,
              "nodeType": "Block",
              "src": "7359:46:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2454,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 2451,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20967,
                            "src": "7375:3:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 2452,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "7375:9:13",
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
                          "id": 2453,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7387:1:13",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "7375:13:13",
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
                      "id": 2450,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20970,
                      "src": "7367:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 2455,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7367:22:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2456,
                  "nodeType": "ExpressionStatement",
                  "src": "7367:22:13"
                },
                {
                  "id": 2457,
                  "nodeType": "PlaceholderStatement",
                  "src": "7397:1:13"
                }
              ]
            },
            "documentation": null,
            "id": 2459,
            "name": "requiresEther",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2449,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7356:2:13"
            },
            "src": "7334:71:13",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2477,
              "nodeType": "Block",
              "src": "7479:116:13",
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
                                    "id": 2467,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "7543:7:13",
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
                                      "id": 2468,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20967,
                                      "src": "7552:3:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 2469,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "7552:10:13",
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
                                    "id": 2465,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20954,
                                    "src": "7526:3:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 2466,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "7526:16:13",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 2470,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7526:37:13",
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
                              "id": 2464,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20961,
                              "src": "7516:9:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 2471,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "7516:48:13",
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
                            "id": 2462,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1981,
                            "src": "7495:8:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DB_$1976",
                              "typeString": "contract DB"
                            }
                          },
                          "id": 2463,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1975,
                          "src": "7495:20:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 2472,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7495:70:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4e6f74206f776e6572",
                        "id": 2473,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7567:11:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c266efca4f4ed37612271196433531dcbb4fca89a694d568d1e290e32feb1682",
                          "typeString": "literal_string \"Not owner\""
                        },
                        "value": "Not owner"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c266efca4f4ed37612271196433531dcbb4fca89a694d568d1e290e32feb1682",
                          "typeString": "literal_string \"Not owner\""
                        }
                      ],
                      "id": 2461,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20971,
                      "src": "7487:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2474,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7487:92:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2475,
                  "nodeType": "ExpressionStatement",
                  "src": "7487:92:13"
                },
                {
                  "id": 2476,
                  "nodeType": "PlaceholderStatement",
                  "src": "7587:1:13"
                }
              ]
            },
            "documentation": null,
            "id": 2478,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2460,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7479:0:13"
            },
            "src": "7460:135:13",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2498,
              "nodeType": "Block",
              "src": "7964:127:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2493,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "7980:75:13",
                        "subExpression": {
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
                                      "hexValue": "706175736564",
                                      "id": 2486,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "8029:8:13",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_ee35723ac350a69d2a92d3703f17439cbaadf2f093a21ba5bf5f1a53eb2a14d9",
                                        "typeString": "literal_string \"paused\""
                                      },
                                      "value": "paused"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "id": 2488,
                                          "name": "this",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 21036,
                                          "src": "8047:4:13",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_CrowdsaleETH_$2605",
                                            "typeString": "contract CrowdsaleETH"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_contract$_CrowdsaleETH_$2605",
                                            "typeString": "contract CrowdsaleETH"
                                          }
                                        ],
                                        "id": 2487,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "8039:7:13",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_address_$",
                                          "typeString": "type(address)"
                                        },
                                        "typeName": "address"
                                      },
                                      "id": 2489,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "8039:13:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_ee35723ac350a69d2a92d3703f17439cbaadf2f093a21ba5bf5f1a53eb2a14d9",
                                        "typeString": "literal_string \"paused\""
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 2484,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20954,
                                      "src": "8012:3:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 2485,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "8012:16:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 2490,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "8012:41:13",
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
                                "id": 2483,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20961,
                                "src": "8002:9:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 2491,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8002:52:13",
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
                              "id": 2481,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1981,
                              "src": "7981:8:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$1976",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 2482,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "boolStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1975,
                            "src": "7981:20:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                              "typeString": "function (bytes32) view external returns (bool)"
                            }
                          },
                          "id": 2492,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7981:74:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "436f6e747261637420706175736564",
                        "id": 2494,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8057:17:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_3050dffacb9368cabd9386d9e9f4fef5deb3cfb41011f6d6a59caa1f97c9cb15",
                          "typeString": "literal_string \"Contract paused\""
                        },
                        "value": "Contract paused"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_3050dffacb9368cabd9386d9e9f4fef5deb3cfb41011f6d6a59caa1f97c9cb15",
                          "typeString": "literal_string \"Contract paused\""
                        }
                      ],
                      "id": 2480,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20971,
                      "src": "7972:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2495,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7972:103:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2496,
                  "nodeType": "ExpressionStatement",
                  "src": "7972:103:13"
                },
                {
                  "id": 2497,
                  "nodeType": "PlaceholderStatement",
                  "src": "8083:1:13"
                }
              ]
            },
            "documentation": null,
            "id": 2499,
            "name": "whenNotPaused",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2479,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7964:0:13"
            },
            "src": "7941:150:13",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2522,
              "nodeType": "Block",
              "src": "8226:148:13",
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
                        "id": 2517,
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
                                      "hexValue": "61737365742e6d616e61676572",
                                      "id": 2509,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "8293:15:13",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_c2b25eef4340162b026d227f7a9ebe7bae98953eff48283607445f4b250b0cbc",
                                        "typeString": "literal_string \"asset.manager\""
                                      },
                                      "value": "asset.manager"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 2510,
                                      "name": "_assetAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 2501,
                                      "src": "8310:13:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_c2b25eef4340162b026d227f7a9ebe7bae98953eff48283607445f4b250b0cbc",
                                        "typeString": "literal_string \"asset.manager\""
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 2507,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20954,
                                      "src": "8276:3:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 2508,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "8276:16:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 2511,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "8276:48:13",
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
                                "id": 2506,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20961,
                                "src": "8266:9:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 2512,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8266:59:13",
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
                              "id": 2504,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1981,
                              "src": "8242:8:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$1976",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 2505,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "addressStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1949,
                            "src": "8242:23:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                              "typeString": "function (bytes32) view external returns (address)"
                            }
                          },
                          "id": 2513,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8242:84:13",
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
                              "id": 2515,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "8338:1:13",
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
                            "id": 2514,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8330:7:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 2516,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8330:10:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "8242:98:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "496e76616c6964206173736574",
                        "id": 2518,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8342:15:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_13e63822319f457869f7e39533cb3e11d411566d67610a8db149f751583d3789",
                          "typeString": "literal_string \"Invalid asset\""
                        },
                        "value": "Invalid asset"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_13e63822319f457869f7e39533cb3e11d411566d67610a8db149f751583d3789",
                          "typeString": "literal_string \"Invalid asset\""
                        }
                      ],
                      "id": 2503,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20971,
                      "src": "8234:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2519,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8234:124:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2520,
                  "nodeType": "ExpressionStatement",
                  "src": "8234:124:13"
                },
                {
                  "id": 2521,
                  "nodeType": "PlaceholderStatement",
                  "src": "8366:1:13"
                }
              ]
            },
            "documentation": null,
            "id": 2523,
            "name": "validAsset",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2502,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2501,
                  "name": "_assetAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2523,
                  "src": "8203:21:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2500,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8203:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8202:23:13"
            },
            "src": "8183:191:13",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2560,
              "nodeType": "Block",
              "src": "8493:271:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2539,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2528,
                          "name": "now",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20969,
                          "src": "8509:3:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
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
                                      "hexValue": "63726f776473616c652e646561646c696e65",
                                      "id": 2534,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "8564:20:13",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_c5e60127e04b658a1e76a44b60aa4343ed732c83881e29ad6808d263771afcb1",
                                        "typeString": "literal_string \"crowdsale.deadline\""
                                      },
                                      "value": "crowdsale.deadline"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 2535,
                                      "name": "_assetAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 2525,
                                      "src": "8586:13:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_c5e60127e04b658a1e76a44b60aa4343ed732c83881e29ad6808d263771afcb1",
                                        "typeString": "literal_string \"crowdsale.deadline\""
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 2532,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20954,
                                      "src": "8547:3:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 2533,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "8547:16:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 2536,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "8547:53:13",
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
                                "id": 2531,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20961,
                                "src": "8537:9:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 2537,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8537:64:13",
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
                              "id": 2529,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1981,
                              "src": "8516:8:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$1976",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 2530,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "uintStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1956,
                            "src": "8516:20:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                              "typeString": "function (bytes32) view external returns (uint256)"
                            }
                          },
                          "id": 2538,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8516:86:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "8509:93:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "5061737420646561646c696e65",
                        "id": 2540,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8604:15:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e841f7af748f554af4bccaca1a3c04467c2f7b94efd83f3977633bf3f89802f2",
                          "typeString": "literal_string \"Past deadline\""
                        },
                        "value": "Past deadline"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_e841f7af748f554af4bccaca1a3c04467c2f7b94efd83f3977633bf3f89802f2",
                          "typeString": "literal_string \"Past deadline\""
                        }
                      ],
                      "id": 2527,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20971,
                      "src": "8501:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2541,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8501:119:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2542,
                  "nodeType": "ExpressionStatement",
                  "src": "8501:119:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2555,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2544,
                          "name": "now",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20969,
                          "src": "8636:3:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
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
                                      "hexValue": "63726f776473616c652e7374617274",
                                      "id": 2550,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "8691:17:13",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_1f60ac00b77a0109f8df6c5adee6dbd5eb34aede6439c0e3c2a90432d9ac0436",
                                        "typeString": "literal_string \"crowdsale.start\""
                                      },
                                      "value": "crowdsale.start"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 2551,
                                      "name": "_assetAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 2525,
                                      "src": "8710:13:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_1f60ac00b77a0109f8df6c5adee6dbd5eb34aede6439c0e3c2a90432d9ac0436",
                                        "typeString": "literal_string \"crowdsale.start\""
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 2548,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20954,
                                      "src": "8674:3:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 2549,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "8674:16:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 2552,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "8674:50:13",
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
                                "id": 2547,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20961,
                                "src": "8664:9:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 2553,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8664:61:13",
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
                              "id": 2545,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1981,
                              "src": "8643:8:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$1976",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 2546,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "uintStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1956,
                            "src": "8643:20:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                              "typeString": "function (bytes32) view external returns (uint256)"
                            }
                          },
                          "id": 2554,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8643:83:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "8636:90:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4265666f72652073746172742074696d65",
                        "id": 2556,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8728:19:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c752952f67eccad5a7218ca778a4209c452d47b287fe1cb0e54c7add8c274921",
                          "typeString": "literal_string \"Before start time\""
                        },
                        "value": "Before start time"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c752952f67eccad5a7218ca778a4209c452d47b287fe1cb0e54c7add8c274921",
                          "typeString": "literal_string \"Before start time\""
                        }
                      ],
                      "id": 2543,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20971,
                      "src": "8628:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2557,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8628:120:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2558,
                  "nodeType": "ExpressionStatement",
                  "src": "8628:120:13"
                },
                {
                  "id": 2559,
                  "nodeType": "PlaceholderStatement",
                  "src": "8756:1:13"
                }
              ]
            },
            "documentation": null,
            "id": 2561,
            "name": "betweenDeadlines",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2526,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2525,
                  "name": "_assetAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2561,
                  "src": "8470:21:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2524,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8470:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8469:23:13"
            },
            "src": "8444:320:13",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2582,
              "nodeType": "Block",
              "src": "8880:144:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 2577,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 2566,
                          "name": "now",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20969,
                          "src": "8896:3:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
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
                                      "hexValue": "63726f776473616c652e646561646c696e65",
                                      "id": 2572,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "8950:20:13",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_c5e60127e04b658a1e76a44b60aa4343ed732c83881e29ad6808d263771afcb1",
                                        "typeString": "literal_string \"crowdsale.deadline\""
                                      },
                                      "value": "crowdsale.deadline"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 2573,
                                      "name": "_assetAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 2563,
                                      "src": "8972:13:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_c5e60127e04b658a1e76a44b60aa4343ed732c83881e29ad6808d263771afcb1",
                                        "typeString": "literal_string \"crowdsale.deadline\""
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 2570,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20954,
                                      "src": "8933:3:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 2571,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "8933:16:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 2574,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "8933:53:13",
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
                                "id": 2569,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20961,
                                "src": "8923:9:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 2575,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "8923:64:13",
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
                              "id": 2567,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1981,
                              "src": "8902:8:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$1976",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 2568,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "uintStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1956,
                            "src": "8902:20:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_uint256_$",
                              "typeString": "function (bytes32) view external returns (uint256)"
                            }
                          },
                          "id": 2576,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8902:86:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "8896:92:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4265666f726520646561646c696e65",
                        "id": 2578,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8990:17:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_6c976861ba8e4bd475cb6b0b6ac131763c58b006e23a5323f49dbd283aa401ba",
                          "typeString": "literal_string \"Before deadline\""
                        },
                        "value": "Before deadline"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_6c976861ba8e4bd475cb6b0b6ac131763c58b006e23a5323f49dbd283aa401ba",
                          "typeString": "literal_string \"Before deadline\""
                        }
                      ],
                      "id": 2565,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20971,
                      "src": "8888:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2579,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8888:120:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2580,
                  "nodeType": "ExpressionStatement",
                  "src": "8888:120:13"
                },
                {
                  "id": 2581,
                  "nodeType": "PlaceholderStatement",
                  "src": "9016:1:13"
                }
              ]
            },
            "documentation": null,
            "id": 2583,
            "name": "afterDeadline",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2564,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2563,
                  "name": "_assetAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2583,
                  "src": "8857:21:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2562,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "8857:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "8856:23:13"
            },
            "src": "8834:190:13",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2603,
              "nodeType": "Block",
              "src": "9131:145:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2598,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "9148:88:13",
                        "subExpression": {
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
                                      "hexValue": "63726f776473616c652e66696e616c697a6564",
                                      "id": 2593,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "9197:21:13",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_722b895a93b43851ba32be101c0d959c7d88657997dbce0fa087bee777576b55",
                                        "typeString": "literal_string \"crowdsale.finalized\""
                                      },
                                      "value": "crowdsale.finalized"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 2594,
                                      "name": "_assetAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 2585,
                                      "src": "9220:13:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_722b895a93b43851ba32be101c0d959c7d88657997dbce0fa087bee777576b55",
                                        "typeString": "literal_string \"crowdsale.finalized\""
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 2591,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20954,
                                      "src": "9180:3:13",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 2592,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "9180:16:13",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 2595,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "9180:54:13",
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
                                "id": 2590,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20961,
                                "src": "9170:9:13",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 2596,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "9170:65:13",
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
                              "id": 2588,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1981,
                              "src": "9149:8:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$1976",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 2589,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "boolStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1975,
                            "src": "9149:20:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                              "typeString": "function (bytes32) view external returns (bool)"
                            }
                          },
                          "id": 2597,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9149:87:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "43726f776473616c652066696e616c697a6564",
                        "id": 2599,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "9238:21:13",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a6503060f8af80871d445a4769bf588434f89ca1172969ca665cd09e5241ab24",
                          "typeString": "literal_string \"Crowdsale finalized\""
                        },
                        "value": "Crowdsale finalized"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a6503060f8af80871d445a4769bf588434f89ca1172969ca665cd09e5241ab24",
                          "typeString": "literal_string \"Crowdsale finalized\""
                        }
                      ],
                      "id": 2587,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        20970,
                        20971
                      ],
                      "referencedDeclaration": 20971,
                      "src": "9139:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2600,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9139:121:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2601,
                  "nodeType": "ExpressionStatement",
                  "src": "9139:121:13"
                },
                {
                  "id": 2602,
                  "nodeType": "PlaceholderStatement",
                  "src": "9268:1:13"
                }
              ]
            },
            "documentation": null,
            "id": 2604,
            "name": "notFinalized",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 2586,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2585,
                  "name": "_assetAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 2604,
                  "src": "9108:21:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2584,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9108:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "9107:23:13"
            },
            "src": "9086:190:13",
            "visibility": "internal"
          }
        ],
        "scope": 2606,
        "src": "878:8403:13"
      }
    ],
    "src": "0:9282:13"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2019-01-16T04:27:15.916Z"
}