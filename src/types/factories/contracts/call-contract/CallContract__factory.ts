/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CallContract,
  CallContractInterface,
} from "../../../contracts/call-contract/CallContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_gateway",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gasReceiver",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "NotApprovedByGateway",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_from",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    name: "Executed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commandId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "sourceChain",
        type: "string",
      },
      {
        internalType: "string",
        name: "sourceAddress",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commandId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "sourceChain",
        type: "string",
      },
      {
        internalType: "string",
        name: "sourceAddress",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "executeWithToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gasService",
    outputs: [
      {
        internalType: "contract IAxelarGasService",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gateway",
    outputs: [
      {
        internalType: "contract IAxelarGateway",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "message",
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
        internalType: "string",
        name: "destinationChain",
        type: "string",
      },
      {
        internalType: "string",
        name: "destinationAddress",
        type: "string",
      },
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    name: "sendInterchainMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "sourceAddress",
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
    name: "sourceChain",
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
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610f54380380610f5483398101604081905261002f9161008b565b816001600160a01b0381166100575760405163e6c4247b60e01b815260040160405180910390fd5b6001600160a01b039081166080521660a052506100be565b80516001600160a01b038116811461008657600080fd5b919050565b6000806040838503121561009e57600080fd5b6100a78361006f565b91506100b56020840161006f565b90509250929050565b60805160a051610e566100fe60003960008181610147015261052c0152600081816092015281816101f00152818161038901526105ce0152610e566000f3fe60806040526004361061007b5760003560e01c80636a22d8cc1161004e5780636a22d8cc14610135578063b0fa844414610169578063e21f37ce1461017e578063f065296d1461019357600080fd5b8063116191b6146100805780631a98b2e0146100d15780631c6ffa46146100f35780634916065814610115575b600080fd5b34801561008c57600080fd5b506100b47f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100dd57600080fd5b506100f16100ec366004610810565b6101a6565b005b3480156100ff57600080fd5b506101086102b1565b6040516100c89190610937565b34801561012157600080fd5b506100f1610130366004610951565b61033f565b34801561014157600080fd5b506100b47f000000000000000000000000000000000000000000000000000000000000000081565b34801561017557600080fd5b5061010861044f565b34801561018a57600080fd5b5061010861045c565b6100f16101a13660046109f5565b610469565b600085856040516101b8929190610a8f565b6040519081900381207f1876eed900000000000000000000000000000000000000000000000000000000825291506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690631876eed990610235908e908e908e908e908e9089908d908d908d90600401610ac8565b602060405180830381600087803b15801561024f57600080fd5b505af1158015610263573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102879190610b27565b6102a457604051631403112d60e21b815260040160405180910390fd5b5050505050505050505050565b600180546102be90610b49565b80601f01602080910402602001604051908101604052809291908181526020018280546102ea90610b49565b80156103375780601f1061030c57610100808354040283529160200191610337565b820191906000526020600020905b81548152906001019060200180831161031a57829003601f168201915b505050505081565b60008282604051610351929190610a8f565b6040519081900381207f5f6970c300000000000000000000000000000000000000000000000000000000825291506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690635f6970c3906103c8908b908b908b908b908b908990600401610b84565b602060405180830381600087803b1580156103e257600080fd5b505af11580156103f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041a9190610b27565b61043757604051631403112d60e21b815260040160405180910390fd5b61044587878787878761063c565b5050505050505050565b600280546102be90610b49565b600080546102be90610b49565b600034116104d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f476173207061796d656e74206973207265717569726564000000000000000000604482015260640160405180910390fd5b600082826040516020016104ec929190610bc5565b60408051601f19818403018152908290527f0c93e3bb00000000000000000000000000000000000000000000000000000000825291506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690630c93e3bb90349061056f9030908c908c908c908c908a903390600401610be1565b6000604051808303818588803b15801561058857600080fd5b505af115801561059c573d6000803e3d6000fd5b50506040517f1c92115f0000000000000000000000000000000000000000000000000000000081526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169350631c92115f925061060e91508a908a908a908a908890600401610c44565b600060405180830381600087803b15801561062857600080fd5b505af11580156102a4573d6000803e3d6000fd5b61064881830183610ca1565b805161065c916000916020909101906106ba565b506106696001878761073e565b506106766002858561073e565b507f0d97a9033491f569feb4c72abf12722b227eec24ee13547bec3654f8663ff711600260006040516106aa929190610df2565b60405180910390a1505050505050565b8280546106c690610b49565b90600052602060002090601f0160209004810192826106e8576000855561072e565b82601f1061070157805160ff191683800117855561072e565b8280016001018555821561072e579182015b8281111561072e578251825591602001919060010190610713565b5061073a9291506107b2565b5090565b82805461074a90610b49565b90600052602060002090601f01602090048101928261076c576000855561072e565b82601f106107855782800160ff1982351617855561072e565b8280016001018555821561072e579182015b8281111561072e578235825591602001919060010190610797565b5b8082111561073a57600081556001016107b3565b60008083601f8401126107d957600080fd5b50813567ffffffffffffffff8111156107f157600080fd5b60208301915083602082850101111561080957600080fd5b9250929050565b60008060008060008060008060008060c08b8d03121561082f57600080fd5b8a35995060208b013567ffffffffffffffff8082111561084e57600080fd5b61085a8e838f016107c7565b909b50995060408d013591508082111561087357600080fd5b61087f8e838f016107c7565b909950975060608d013591508082111561089857600080fd5b6108a48e838f016107c7565b909750955060808d01359150808211156108bd57600080fd5b506108ca8d828e016107c7565b9150809450508092505060a08b013590509295989b9194979a5092959850565b6000815180845260005b81811015610910576020818501810151868301820152016108f4565b81811115610922576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061094a60208301846108ea565b9392505050565b60008060008060008060006080888a03121561096c57600080fd5b87359650602088013567ffffffffffffffff8082111561098b57600080fd5b6109978b838c016107c7565b909850965060408a01359150808211156109b057600080fd5b6109bc8b838c016107c7565b909650945060608a01359150808211156109d557600080fd5b506109e28a828b016107c7565b989b979a50959850939692959293505050565b60008060008060008060608789031215610a0e57600080fd5b863567ffffffffffffffff80821115610a2657600080fd5b610a328a838b016107c7565b90985096506020890135915080821115610a4b57600080fd5b610a578a838b016107c7565b90965094506040890135915080821115610a7057600080fd5b50610a7d89828a016107c7565b979a9699509497509295939492505050565b8183823760009101908152919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b89815260c060208201526000610ae260c083018a8c610a9f565b8281036040840152610af581898b610a9f565b90508660608401528281036080840152610b10818688610a9f565b9150508260a08301529a9950505050505050505050565b600060208284031215610b3957600080fd5b8151801515811461094a57600080fd5b600181811c90821680610b5d57607f821691505b60208210811415610b7e57634e487b7160e01b600052602260045260246000fd5b50919050565b868152608060208201526000610b9e608083018789610a9f565b8281036040840152610bb1818688610a9f565b915050826060830152979650505050505050565b602081526000610bd9602083018486610a9f565b949350505050565b60006001600160a01b03808a16835260a06020840152610c0560a08401898b610a9f565b8381036040850152610c1881888a610a9f565b90508381036060850152610c2c81876108ea565b92505080841660808401525098975050505050505050565b606081526000610c58606083018789610a9f565b8281036020840152610c6b818688610a9f565b90508281036040840152610c7f81856108ea565b98975050505050505050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610cb357600080fd5b813567ffffffffffffffff80821115610ccb57600080fd5b818401915084601f830112610cdf57600080fd5b813581811115610cf157610cf1610c8b565b604051601f8201601f19908116603f01168101908382118183101715610d1957610d19610c8b565b81604052828152876020848701011115610d3257600080fd5b826020860160208301376000928101602001929092525095945050505050565b8054600090600181811c9080831680610d6c57607f831692505b6020808410821415610d8e57634e487b7160e01b600052602260045260246000fd5b83885260208801828015610da95760018114610dba57610de5565b60ff19871682528282019750610de5565b60008981526020902060005b87811015610ddf57815484820152908601908401610dc6565b83019850505b5050505050505092915050565b604081526000610e056040830185610d52565b8281036020840152610e178185610d52565b9594505050505056fea2646970667358221220df56f898cde546f06356383c52281f20bce9cdd45eb5b78e691c6707bb3ceec064736f6c63430008090033";

type CallContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CallContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CallContract__factory extends ContractFactory {
  constructor(...args: CallContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _gateway: PromiseOrValue<string>,
    _gasReceiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CallContract> {
    return super.deploy(
      _gateway,
      _gasReceiver,
      overrides || {}
    ) as Promise<CallContract>;
  }
  override getDeployTransaction(
    _gateway: PromiseOrValue<string>,
    _gasReceiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_gateway, _gasReceiver, overrides || {});
  }
  override attach(address: string): CallContract {
    return super.attach(address) as CallContract;
  }
  override connect(signer: Signer): CallContract__factory {
    return super.connect(signer) as CallContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CallContractInterface {
    return new utils.Interface(_abi) as CallContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CallContract {
    return new Contract(address, _abi, signerOrProvider) as CallContract;
  }
}
