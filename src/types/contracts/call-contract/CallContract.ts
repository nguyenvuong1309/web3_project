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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface CallContractInterface extends utils.Interface {
  functions: {
    "execute(bytes32,string,string,bytes)": FunctionFragment;
    "executeWithToken(bytes32,string,string,bytes,string,uint256)": FunctionFragment;
    "gasService()": FunctionFragment;
    "gateway()": FunctionFragment;
    "message()": FunctionFragment;
    "sendInterchainMessage(string,string,string)": FunctionFragment;
    "sourceAddress()": FunctionFragment;
    "sourceChain()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "execute"
      | "executeWithToken"
      | "gasService"
      | "gateway"
      | "message"
      | "sendInterchainMessage"
      | "sourceAddress"
      | "sourceChain"
  ): FunctionFragment;

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
  encodeFunctionData(functionFragment: "message", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendInterchainMessage",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sourceAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sourceChain",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeWithToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gasService", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gateway", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "message", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendInterchainMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sourceAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sourceChain",
    data: BytesLike
  ): Result;

  events: {
    "Executed(string,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Executed"): EventFragment;
}

export interface ExecutedEventObject {
  _from: string;
  _message: string;
}
export type ExecutedEvent = TypedEvent<[string, string], ExecutedEventObject>;

export type ExecutedEventFilter = TypedEventFilter<ExecutedEvent>;

export interface CallContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CallContractInterface;

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

    message(overrides?: CallOverrides): Promise<[string]>;

    sendInterchainMessage(
      destinationChain: PromiseOrValue<string>,
      destinationAddress: PromiseOrValue<string>,
      _message: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sourceAddress(overrides?: CallOverrides): Promise<[string]>;

    sourceChain(overrides?: CallOverrides): Promise<[string]>;
  };

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

  message(overrides?: CallOverrides): Promise<string>;

  sendInterchainMessage(
    destinationChain: PromiseOrValue<string>,
    destinationAddress: PromiseOrValue<string>,
    _message: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sourceAddress(overrides?: CallOverrides): Promise<string>;

  sourceChain(overrides?: CallOverrides): Promise<string>;

  callStatic: {
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

    message(overrides?: CallOverrides): Promise<string>;

    sendInterchainMessage(
      destinationChain: PromiseOrValue<string>,
      destinationAddress: PromiseOrValue<string>,
      _message: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    sourceAddress(overrides?: CallOverrides): Promise<string>;

    sourceChain(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Executed(string,string)"(
      _from?: null,
      _message?: null
    ): ExecutedEventFilter;
    Executed(_from?: null, _message?: null): ExecutedEventFilter;
  };

  estimateGas: {
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

    message(overrides?: CallOverrides): Promise<BigNumber>;

    sendInterchainMessage(
      destinationChain: PromiseOrValue<string>,
      destinationAddress: PromiseOrValue<string>,
      _message: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sourceAddress(overrides?: CallOverrides): Promise<BigNumber>;

    sourceChain(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
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

    message(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendInterchainMessage(
      destinationChain: PromiseOrValue<string>,
      destinationAddress: PromiseOrValue<string>,
      _message: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sourceAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sourceChain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
