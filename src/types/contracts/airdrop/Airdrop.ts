/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface AirdropInterface extends utils.Interface {
  functions: {
    "airdropRecipients(uint256)": FunctionFragment;
    "amountReceived()": FunctionFragment;
    "execute(bytes32,string,string,bytes)": FunctionFragment;
    "executeWithToken(bytes32,string,string,bytes,string,uint256)": FunctionFragment;
    "gasService()": FunctionFragment;
    "gateway()": FunctionFragment;
    "getRecipients()": FunctionFragment;
    "sendToMany(string,string,address[],string,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "airdropRecipients"
      | "amountReceived"
      | "execute"
      | "executeWithToken"
      | "gasService"
      | "gateway"
      | "getRecipients"
      | "sendToMany"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "airdropRecipients",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "amountReceived",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeWithToken",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "gasService",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gateway", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRecipients",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendToMany",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "airdropRecipients",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "amountReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeWithToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gasService", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gateway", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRecipients",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sendToMany", data: BytesLike): Result;

  events: {};
}

export interface Airdrop extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AirdropInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    airdropRecipients(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    amountReceived(overrides?: CallOverrides): Promise<[BigNumber]>;

    execute(
      commandId: PromiseOrValue<BytesLike>,
      sourceChain: PromiseOrValue<string>,
      sourceAddress: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeWithToken(
      commandId: PromiseOrValue<BytesLike>,
      sourceChain: PromiseOrValue<string>,
      sourceAddress: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      tokenSymbol: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    gasService(overrides?: CallOverrides): Promise<[string]>;

    gateway(overrides?: CallOverrides): Promise<[string]>;

    getRecipients(overrides?: CallOverrides): Promise<[string[]]>;

    sendToMany(
      destinationChain: PromiseOrValue<string>,
      destinationAddress: PromiseOrValue<string>,
      destinationAddresses: PromiseOrValue<string>[],
      symbol: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  airdropRecipients(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  amountReceived(overrides?: CallOverrides): Promise<BigNumber>;

  execute(
    commandId: PromiseOrValue<BytesLike>,
    sourceChain: PromiseOrValue<string>,
    sourceAddress: PromiseOrValue<string>,
    payload: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeWithToken(
    commandId: PromiseOrValue<BytesLike>,
    sourceChain: PromiseOrValue<string>,
    sourceAddress: PromiseOrValue<string>,
    payload: PromiseOrValue<BytesLike>,
    tokenSymbol: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  gasService(overrides?: CallOverrides): Promise<string>;

  gateway(overrides?: CallOverrides): Promise<string>;

  getRecipients(overrides?: CallOverrides): Promise<string[]>;

  sendToMany(
    destinationChain: PromiseOrValue<string>,
    destinationAddress: PromiseOrValue<string>,
    destinationAddresses: PromiseOrValue<string>[],
    symbol: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    airdropRecipients(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    amountReceived(overrides?: CallOverrides): Promise<BigNumber>;

    execute(
      commandId: PromiseOrValue<BytesLike>,
      sourceChain: PromiseOrValue<string>,
      sourceAddress: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeWithToken(
      commandId: PromiseOrValue<BytesLike>,
      sourceChain: PromiseOrValue<string>,
      sourceAddress: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      tokenSymbol: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    gasService(overrides?: CallOverrides): Promise<string>;

    gateway(overrides?: CallOverrides): Promise<string>;

    getRecipients(overrides?: CallOverrides): Promise<string[]>;

    sendToMany(
      destinationChain: PromiseOrValue<string>,
      destinationAddress: PromiseOrValue<string>,
      destinationAddresses: PromiseOrValue<string>[],
      symbol: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    airdropRecipients(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    amountReceived(overrides?: CallOverrides): Promise<BigNumber>;

    execute(
      commandId: PromiseOrValue<BytesLike>,
      sourceChain: PromiseOrValue<string>,
      sourceAddress: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeWithToken(
      commandId: PromiseOrValue<BytesLike>,
      sourceChain: PromiseOrValue<string>,
      sourceAddress: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      tokenSymbol: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    gasService(overrides?: CallOverrides): Promise<BigNumber>;

    gateway(overrides?: CallOverrides): Promise<BigNumber>;

    getRecipients(overrides?: CallOverrides): Promise<BigNumber>;

    sendToMany(
      destinationChain: PromiseOrValue<string>,
      destinationAddress: PromiseOrValue<string>,
      destinationAddresses: PromiseOrValue<string>[],
      symbol: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    airdropRecipients(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    amountReceived(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    execute(
      commandId: PromiseOrValue<BytesLike>,
      sourceChain: PromiseOrValue<string>,
      sourceAddress: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeWithToken(
      commandId: PromiseOrValue<BytesLike>,
      sourceChain: PromiseOrValue<string>,
      sourceAddress: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      tokenSymbol: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    gasService(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRecipients(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendToMany(
      destinationChain: PromiseOrValue<string>,
      destinationAddress: PromiseOrValue<string>,
      destinationAddresses: PromiseOrValue<string>[],
      symbol: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
