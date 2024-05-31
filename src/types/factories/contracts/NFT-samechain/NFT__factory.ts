/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { NFT, NFTInterface } from "../../../contracts/NFT-samechain/NFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
    ],
    name: "BatchMetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "MetadataUpdate",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
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
    name: "tokenCount",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600881526711105c1c0813919560c21b6020808301918252835180850190945260048452630444150560e41b9084015281519192916200005e916000916200007d565b508051620000749060019060208401906200007d565b50505062000160565b8280546200008b9062000123565b90600052602060002090601f016020900481019282620000af5760008555620000fa565b82601f10620000ca57805160ff1916838001178555620000fa565b82800160010185558215620000fa579182015b82811115620000fa578251825591602001919060010190620000dd565b50620001089291506200010c565b5090565b5b808211156200010857600081556001016200010d565b600181811c908216806200013857607f821691505b602082108114156200015a57634e487b7160e01b600052602260045260246000fd5b50919050565b61189880620001706000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063b88d4fde11610066578063b88d4fde146101f5578063c87b56dd14610208578063d85d3d271461021b578063e985e9c51461022e57600080fd5b806370a08231146101b057806395d89b41146101d15780639f181b5e146101d9578063a22cb465146101e257600080fd5b8063095ea7b3116100d3578063095ea7b31461016257806323b872dd1461017757806342842e0e1461018a5780636352211e1461019d57600080fd5b806301ffc9a7146100fa57806306fdde0314610122578063081812fc14610137575b600080fd5b61010d610108366004611478565b61026a565b60405190151581526020015b60405180910390f35b61012a6102ae565b60405161011991906114ed565b61014a610145366004611500565b610340565b6040516001600160a01b039091168152602001610119565b610175610170366004611535565b610367565b005b61017561018536600461155f565b61049e565b61017561019836600461155f565b610515565b61014a6101ab366004611500565b610530565b6101c36101be36600461159b565b610595565b604051908152602001610119565b61012a61062f565b6101c360075481565b6101756101f03660046115b6565b61063e565b61017561020336600461167e565b61064d565b61012a610216366004611500565b6106cb565b6101c36102293660046116fa565b6107dc565b61010d61023c366004611743565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982167f490649060000000000000000000000000000000000000000000000000000000014806102a857506102a882610812565b92915050565b6060600080546102bd90611776565b80601f01602080910402602001604051908101604052809291908181526020018280546102e990611776565b80156103365780601f1061030b57610100808354040283529160200191610336565b820191906000526020600020905b81548152906001019060200180831161031957829003601f168201915b5050505050905090565b600061034b826108ad565b506000908152600460205260409020546001600160a01b031690565b600061037282610530565b9050806001600160a01b0316836001600160a01b031614156104015760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b336001600160a01b038216148061041d575061041d813361023c565b61048f5760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016103f8565b6104998383610914565b505050565b6104a8338261098f565b61050a5760405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526c1c881bdc88185c1c1c9bdd9959609a1b60648201526084016103f8565b610499838383610a0d565b6104998383836040518060200160405280600081525061064d565b6000818152600260205260408120546001600160a01b0316806102a85760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016103f8565b60006001600160a01b0382166106135760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e6572000000000000000000000000000000000000000000000060648201526084016103f8565b506001600160a01b031660009081526003602052604090205490565b6060600180546102bd90611776565b610649338383610c13565b5050565b610657338361098f565b6106b95760405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526c1c881bdc88185c1c1c9bdd9959609a1b60648201526084016103f8565b6106c584848484610ce2565b50505050565b60606106d6826108ad565b600082815260066020526040812080546106ef90611776565b80601f016020809104026020016040519081016040528092919081815260200182805461071b90611776565b80156107685780601f1061073d57610100808354040283529160200191610768565b820191906000526020600020905b81548152906001019060200180831161074b57829003601f168201915b50505050509050600061078660408051602081019091526000815290565b9050805160001415610799575092915050565b8151156107cb5780826040516020016107b39291906117b1565b60405160208183030381529060405292505050919050565b6107d484610d60565b949350505050565b60078054600091826107ed836117e0565b91905055506107fe33600754610dd4565b61080a60075483610dee565b505060075490565b60006001600160e01b031982167f80ac58cd00000000000000000000000000000000000000000000000000000000148061087557506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806102a857507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316146102a8565b6000818152600260205260409020546001600160a01b03166109115760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016103f8565b50565b6000818152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038416908117909155819061095682610530565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061099b83610530565b9050806001600160a01b0316846001600160a01b031614806109e257506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b806107d45750836001600160a01b03166109fb84610340565b6001600160a01b031614949350505050565b826001600160a01b0316610a2082610530565b6001600160a01b031614610a845760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016103f8565b6001600160a01b038216610aff5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016103f8565b826001600160a01b0316610b1282610530565b6001600160a01b031614610b765760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016103f8565b6000818152600460209081526040808320805473ffffffffffffffffffffffffffffffffffffffff199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b03161415610c755760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103f8565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610ced848484610a0d565b610cf984848484610ecf565b6106c55760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016103f8565b6060610d6b826108ad565b6000610d8260408051602081019091526000815290565b90506000815111610da25760405180602001604052806000815250610dcd565b80610dac84611027565b604051602001610dbd9291906117b1565b6040516020818303038152906040525b9392505050565b6106498282604051806020016040528060008152506110d1565b6000828152600260205260409020546001600160a01b0316610e785760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201527f6578697374656e7420746f6b656e00000000000000000000000000000000000060648201526084016103f8565b60008281526006602090815260409091208251610e97928401906113c9565b506040518281527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79060200160405180910390a15050565b60006001600160a01b0384163b1561101c57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610f13903390899088908890600401611809565b602060405180830381600087803b158015610f2d57600080fd5b505af1925050508015610f5d575060408051601f3d908101601f19168201909252610f5a91810190611845565b60015b611002573d808015610f8b576040519150601f19603f3d011682016040523d82523d6000602084013e610f90565b606091505b508051610ffa5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016103f8565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506107d4565b506001949350505050565b606060006110348361114f565b600101905060008167ffffffffffffffff811115611054576110546115f2565b6040519080825280601f01601f19166020018201604052801561107e576020820181803683370190505b5090508181016020015b600019017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85049450846110c4576110c9565b611088565b509392505050565b6110db8383611231565b6110e86000848484610ecf565b6104995760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016103f8565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611198577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef810000000083106111c4576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106111e257662386f26fc10000830492506010015b6305f5e10083106111fa576305f5e100830492506008015b612710831061120e57612710830492506004015b60648310611220576064830492506002015b600a83106102a85760010192915050565b6001600160a01b0382166112875760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016103f8565b6000818152600260205260409020546001600160a01b0316156112ec5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103f8565b6000818152600260205260409020546001600160a01b0316156113515760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103f8565b6001600160a01b0382166000818152600360209081526040808320805460010190558483526002909152808220805473ffffffffffffffffffffffffffffffffffffffff19168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b8280546113d590611776565b90600052602060002090601f0160209004810192826113f7576000855561143d565b82601f1061141057805160ff191683800117855561143d565b8280016001018555821561143d579182015b8281111561143d578251825591602001919060010190611422565b5061144992915061144d565b5090565b5b80821115611449576000815560010161144e565b6001600160e01b03198116811461091157600080fd5b60006020828403121561148a57600080fd5b8135610dcd81611462565b60005b838110156114b0578181015183820152602001611498565b838111156106c55750506000910152565b600081518084526114d9816020860160208601611495565b601f01601f19169290920160200192915050565b602081526000610dcd60208301846114c1565b60006020828403121561151257600080fd5b5035919050565b80356001600160a01b038116811461153057600080fd5b919050565b6000806040838503121561154857600080fd5b61155183611519565b946020939093013593505050565b60008060006060848603121561157457600080fd5b61157d84611519565b925061158b60208501611519565b9150604084013590509250925092565b6000602082840312156115ad57600080fd5b610dcd82611519565b600080604083850312156115c957600080fd5b6115d283611519565b9150602083013580151581146115e757600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115611623576116236115f2565b604051601f8501601f19908116603f0116810190828211818310171561164b5761164b6115f2565b8160405280935085815286868601111561166457600080fd5b858560208301376000602087830101525050509392505050565b6000806000806080858703121561169457600080fd5b61169d85611519565b93506116ab60208601611519565b925060408501359150606085013567ffffffffffffffff8111156116ce57600080fd5b8501601f810187136116df57600080fd5b6116ee87823560208401611608565b91505092959194509250565b60006020828403121561170c57600080fd5b813567ffffffffffffffff81111561172357600080fd5b8201601f8101841361173457600080fd5b6107d484823560208401611608565b6000806040838503121561175657600080fd5b61175f83611519565b915061176d60208401611519565b90509250929050565b600181811c9082168061178a57607f821691505b602082108114156117ab57634e487b7160e01b600052602260045260246000fd5b50919050565b600083516117c3818460208801611495565b8351908301906117d7818360208801611495565b01949350505050565b600060001982141561180257634e487b7160e01b600052601160045260246000fd5b5060010190565b60006001600160a01b0380871683528086166020840152508360408301526080606083015261183b60808301846114c1565b9695505050505050565b60006020828403121561185757600080fd5b8151610dcd8161146256fea2646970667358221220a31564c2d510cdc011b67dec0a6b70ca5663ea8b253287bfdbe0739f1963a90764736f6c63430008090033";

type NFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFT__factory extends ContractFactory {
  constructor(...args: NFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFT> {
    return super.deploy(overrides || {}) as Promise<NFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFT {
    return super.attach(address) as NFT;
  }
  override connect(signer: Signer): NFT__factory {
    return super.connect(signer) as NFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTInterface {
    return new utils.Interface(_abi) as NFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NFT {
    return new Contract(address, _abi, signerOrProvider) as NFT;
  }
}
