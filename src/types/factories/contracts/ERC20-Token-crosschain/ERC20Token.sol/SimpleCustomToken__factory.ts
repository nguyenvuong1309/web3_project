/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SimpleCustomToken,
  SimpleCustomTokenInterface,
} from "../../../../contracts/ERC20-Token-crosschain/ERC20Token.sol/SimpleCustomToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "defaultAdmin",
        type: "address",
      },
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101606040523480156200001257600080fd5b5060405162002662380380620026628339810160408190526200003591620004f4565b6040518060400160405280601181526020017029b4b6b83632a1bab9ba37b6aa37b5b2b760791b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280601181526020017029b4b6b83632a1bab9ba37b6aa37b5b2b760791b8152506040518060400160405280600581526020016456554f4e4760d81b8152508160039080519060200190620000da92919062000431565b508051620000f090600490602084019062000431565b5050506200010e6006836200022b60201b62000a4d1790919060201c565b610120526200012b8160076200022b602090811b62000a4d17901c565b61014052815160208084019190912060e052815190820120610100524660a052620001b960e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c05250620001ea33620001d66012600a6200063f565b620001e49061271062000657565b6200027f565b620001f760008362000347565b620002237f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68262000347565b50506200074b565b60006020835110156200024b576200024383620003eb565b905062000279565b8262000262836200042e60201b62000a841760201c565b815162000273926020019062000431565b5060ff90505b92915050565b6001600160a01b038216620002db5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b8060026000828254620002ef919062000679565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35b5050565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff16620003435760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620003a73390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600080829050601f8151111562000419578260405163305a27a960e01b8152600401620002d2919062000694565b80516200042682620006ec565b179392505050565b90565b8280546200043f9062000714565b90600052602060002090601f016020900481019282620004635760008555620004ae565b82601f106200047e57805160ff1916838001178555620004ae565b82800160010185558215620004ae579182015b82811115620004ae57825182559160200191906001019062000491565b50620004bc929150620004c0565b5090565b5b80821115620004bc5760008155600101620004c1565b80516001600160a01b0381168114620004ef57600080fd5b919050565b600080604083850312156200050857600080fd5b6200051383620004d7565b91506200052360208401620004d7565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b600181815b80851115620005835781600019048211156200056757620005676200052c565b808516156200057557918102915b93841c939080029062000547565b509250929050565b6000826200059c5750600162000279565b81620005ab5750600062000279565b8160018114620005c45760028114620005cf57620005ef565b600191505062000279565b60ff841115620005e357620005e36200052c565b50506001821b62000279565b5060208310610133831016604e8410600b841016171562000614575081810a62000279565b62000620838362000542565b80600019048211156200063757620006376200052c565b029392505050565b60006200065060ff8416836200058b565b9392505050565b60008160001904831182151516156200067457620006746200052c565b500290565b600082198211156200068f576200068f6200052c565b500190565b600060208083528351808285015260005b81811015620006c357858101830151858201604001528201620006a5565b81811115620006d6576000604083870101525b50601f01601f1916929092016040019392505050565b805160208083015191908110156200070e576000198160200360031b1b821691505b50919050565b600181811c908216806200072957607f821691505b602082108114156200070e57634e487b7160e01b600052602260045260246000fd5b60805160a05160c05160e051610100516101205161014051611ebc620007a6600039600061075d0152600061073201526000610fe401526000610fbc01526000610f1701526000610f4101526000610f6b0152611ebc6000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c806370a08231116100f9578063a217fddf11610097578063d505accf11610071578063d505accf146103ba578063d5391393146103cd578063d547741f146103f4578063dd62ed3e1461040757600080fd5b8063a217fddf1461038c578063a457c2d714610394578063a9059cbb146103a757600080fd5b806384b0196e116100d357806384b0196e1461031d57806391d148541461033857806395d89b41146103715780639dc29fac1461037957600080fd5b806370a08231146102ce57806379cc6790146102f75780637ecebe001461030a57600080fd5b80632f2ff15d1161016657806336568abe1161014057806336568abe14610282578063395093511461029557806340c10f19146102a857806342966c68146102bb57600080fd5b80632f2ff15d14610256578063313ce5671461026b5780633644e5151461027a57600080fd5b806318160ddd1161019757806318160ddd1461020e57806323b872dd14610220578063248a9ca31461023357600080fd5b806301ffc9a7146101be57806306fdde03146101e6578063095ea7b3146101fb575b600080fd5b6101d16101cc366004611a28565b610440565b60405190151581526020015b60405180910390f35b6101ee6104d9565b6040516101dd9190611ac2565b6101d1610209366004611af1565b61056b565b6002545b6040519081526020016101dd565b6101d161022e366004611b1b565b610583565b610212610241366004611b57565b60009081526005602052604090206001015490565b610269610264366004611b70565b6105a7565b005b604051601281526020016101dd565b6102126105d1565b610269610290366004611b70565b6105e0565b6101d16102a3366004611af1565b610671565b6102696102b6366004611af1565b6106b0565b6102696102c9366004611b57565b6106e4565b6102126102dc366004611b9c565b6001600160a01b031660009081526020819052604090205490565b610269610305366004611af1565b6106f1565b610212610318366004611b9c565b610706565b610325610724565b6040516101dd9796959493929190611bb7565b6101d1610346366004611b70565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6101ee6107c9565b610269610387366004611af1565b6107d8565b610212600081565b6101d16103a2366004611af1565b61080c565b6101d16103b5366004611af1565b6108b6565b6102696103c8366004611c69565b6108c4565b6102127f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b610269610402366004611b70565b610a28565b610212610415366004611cdc565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806104d357507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6060600380546104e890611d06565b80601f016020809104026020016040519081016040528092919081815260200182805461051490611d06565b80156105615780601f1061053657610100808354040283529160200191610561565b820191906000526020600020905b81548152906001019060200180831161054457829003601f168201915b5050505050905090565b600033610579818585610a87565b5060019392505050565b600033610591858285610bdf565b61059c858585610c71565b506001949350505050565b6000828152600560205260409020600101546105c281610e5e565b6105cc8383610e68565b505050565b60006105db610f0a565b905090565b6001600160a01b03811633146106635760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b61066d8282611035565b5050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061057990829086906106ab908790611d51565b610a87565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66106da81610e5e565b6105cc83836110b8565b6106ee3382611177565b50565b6106fc823383610bdf565b61066d8282611177565b6001600160a01b0381166000908152600860205260408120546104d3565b6000606080828080836107587f000000000000000000000000000000000000000000000000000000000000000060066112e0565b6107837f000000000000000000000000000000000000000000000000000000000000000060076112e0565b604080516000808252602082019092527f0f000000000000000000000000000000000000000000000000000000000000009b939a50919850469750309650945092509050565b6060600480546104e890611d06565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a661080281610e5e565b6105cc8383611177565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156108a95760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161065a565b61059c8286868403610a87565b600033610579818585610c71565b834211156109145760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015260640161065a565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886109438c611384565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061099e826113ac565b905060006109ae828787876113f4565b9050896001600160a01b0316816001600160a01b031614610a115760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015260640161065a565b610a1c8a8a8a610a87565b50505050505050505050565b600082815260056020526040902060010154610a4381610e5e565b6105cc8383611035565b6000602083511015610a6957610a628361141c565b90506104d3565b82828151610a7a926020019061198f565b5060ff90506104d3565b90565b6001600160a01b038316610b025760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161065a565b6001600160a01b038216610b7e5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161065a565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610c6b5781811015610c5e5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161065a565b610c6b8484848403610a87565b50505050565b6001600160a01b038316610ced5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161065a565b6001600160a01b038216610d695760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161065a565b6001600160a01b03831660009081526020819052604090205481811015610df85760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161065a565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610c6b565b6106ee8133611473565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff1661066d5760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610ec63390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015610f6357507f000000000000000000000000000000000000000000000000000000000000000046145b15610f8d57507f000000000000000000000000000000000000000000000000000000000000000090565b6105db604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff161561066d5760008281526005602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b03821661110e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161065a565b80600260008282546111209190611d51565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6001600160a01b0382166111f35760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161065a565b6001600160a01b038216600090815260208190526040902054818110156112825760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f6365000000000000000000000000000000000000000000000000000000000000606482015260840161065a565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050565b606060ff83146112f357610a62836114e8565b8180546112ff90611d06565b80601f016020809104026020016040519081016040528092919081815260200182805461132b90611d06565b80156113785780601f1061134d57610100808354040283529160200191611378565b820191906000526020600020905b81548152906001019060200180831161135b57829003601f168201915b505050505090506104d3565b6001600160a01b03811660009081526008602052604090208054600181018255905b50919050565b60006104d36113b9610f0a565b836040517f19010000000000000000000000000000000000000000000000000000000000008152600281019290925260228201526042902090565b600080600061140587878787611527565b91509150611412816115eb565b5095945050505050565b600080829050601f8151111561146057826040517f305a27a900000000000000000000000000000000000000000000000000000000815260040161065a9190611ac2565b805161146b82611d7f565b179392505050565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff1661066d576114a681611754565b6114b1836020611766565b6040516020016114c2929190611da3565b60408051601f198184030181529082905262461bcd60e51b825261065a91600401611ac2565b606060006114f58361194e565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561155e57506000905060036115e2565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156115b2573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166115db576000600192509250506115e2565b9150600090505b94509492505050565b60008160048111156115ff576115ff611e24565b14156116085750565b600181600481111561161c5761161c611e24565b141561166a5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161065a565b600281600481111561167e5761167e611e24565b14156116cc5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161065a565b60038160048111156116e0576116e0611e24565b14156106ee5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f7565000000000000000000000000000000000000000000000000000000000000606482015260840161065a565b60606104d36001600160a01b03831660145b60606000611775836002611e3a565b611780906002611d51565b67ffffffffffffffff81111561179857611798611d69565b6040519080825280601f01601f1916602001820160405280156117c2576020820181803683370190505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106117f9576117f9611e59565b60200101906001600160f81b031916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061184457611844611e59565b60200101906001600160f81b031916908160001a9053506000611868846002611e3a565b611873906001611d51565b90505b60018111156118f8577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106118b4576118b4611e59565b1a60f81b8282815181106118ca576118ca611e59565b60200101906001600160f81b031916908160001a90535060049490941c936118f181611e6f565b9050611876565b5083156119475760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161065a565b9392505050565b600060ff8216601f8111156104d3576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82805461199b90611d06565b90600052602060002090601f0160209004810192826119bd5760008555611a03565b82601f106119d657805160ff1916838001178555611a03565b82800160010185558215611a03579182015b82811115611a035782518255916020019190600101906119e8565b50611a0f929150611a13565b5090565b5b80821115611a0f5760008155600101611a14565b600060208284031215611a3a57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461194757600080fd5b60005b83811015611a85578181015183820152602001611a6d565b83811115610c6b5750506000910152565b60008151808452611aae816020860160208601611a6a565b601f01601f19169290920160200192915050565b6020815260006119476020830184611a96565b80356001600160a01b0381168114611aec57600080fd5b919050565b60008060408385031215611b0457600080fd5b611b0d83611ad5565b946020939093013593505050565b600080600060608486031215611b3057600080fd5b611b3984611ad5565b9250611b4760208501611ad5565b9150604084013590509250925092565b600060208284031215611b6957600080fd5b5035919050565b60008060408385031215611b8357600080fd5b82359150611b9360208401611ad5565b90509250929050565b600060208284031215611bae57600080fd5b61194782611ad5565b7fff00000000000000000000000000000000000000000000000000000000000000881681526000602060e081840152611bf360e084018a611a96565b8381036040850152611c05818a611a96565b606085018990526001600160a01b038816608086015260a0850187905284810360c0860152855180825283870192509083019060005b81811015611c5757835183529284019291840191600101611c3b565b50909c9b505050505050505050505050565b600080600080600080600060e0888a031215611c8457600080fd5b611c8d88611ad5565b9650611c9b60208901611ad5565b95506040880135945060608801359350608088013560ff81168114611cbf57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611cef57600080fd5b611cf883611ad5565b9150611b9360208401611ad5565b600181811c90821680611d1a57607f821691505b602082108114156113a657634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611d6457611d64611d3b565b500190565b634e487b7160e01b600052604160045260246000fd5b805160208083015191908110156113a65760001960209190910360031b1b16919050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611ddb816017850160208801611a6a565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351611e18816028840160208801611a6a565b01602801949350505050565b634e487b7160e01b600052602160045260246000fd5b6000816000190483118215151615611e5457611e54611d3b565b500290565b634e487b7160e01b600052603260045260246000fd5b600081611e7e57611e7e611d3b565b50600019019056fea264697066735822122005a850568b8bf956cf06d49d032ebff8089ab19bd7514d460bf9e53d780b60d964736f6c63430008090033";

type SimpleCustomTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleCustomTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleCustomToken__factory extends ContractFactory {
  constructor(...args: SimpleCustomTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    defaultAdmin: PromiseOrValue<string>,
    minter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleCustomToken> {
    return super.deploy(
      defaultAdmin,
      minter,
      overrides || {}
    ) as Promise<SimpleCustomToken>;
  }
  override getDeployTransaction(
    defaultAdmin: PromiseOrValue<string>,
    minter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(defaultAdmin, minter, overrides || {});
  }
  override attach(address: string): SimpleCustomToken {
    return super.attach(address) as SimpleCustomToken;
  }
  override connect(signer: Signer): SimpleCustomToken__factory {
    return super.connect(signer) as SimpleCustomToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleCustomTokenInterface {
    return new utils.Interface(_abi) as SimpleCustomTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleCustomToken {
    return new Contract(address, _abi, signerOrProvider) as SimpleCustomToken;
  }
}
