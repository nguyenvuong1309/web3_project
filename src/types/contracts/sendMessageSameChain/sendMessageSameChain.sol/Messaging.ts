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
} from "../../../common";

export declare namespace Messaging {
  export type MessageStruct = {
    sender: PromiseOrValue<string>;
    content: PromiseOrValue<string>;
    timestamp: PromiseOrValue<BigNumberish>;
  };

  export type MessageStructOutput = [string, string, BigNumber] & {
    sender: string;
    content: string;
    timestamp: BigNumber;
  };
}

export interface MessagingInterface extends utils.Interface {
  functions: {
    "getMessages(address)": FunctionFragment;
    "getMessagesFrom(address)": FunctionFragment;
    "sendMessage(address,string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getMessages" | "getMessagesFrom" | "sendMessage"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getMessages",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMessagesFrom",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessage",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMessagesFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessage",
    data: BytesLike
  ): Result;

  events: {
    "MessageSent(address,address,string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MessageSent"): EventFragment;
}

export interface MessageSentEventObject {
  from: string;
  to: string;
  content: string;
  timestamp: BigNumber;
}
export type MessageSentEvent = TypedEvent<
  [string, string, string, BigNumber],
  MessageSentEventObject
>;

export type MessageSentEventFilter = TypedEventFilter<MessageSentEvent>;

export interface Messaging extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MessagingInterface;

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
    getMessages(
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[Messaging.MessageStructOutput[]]>;

    getMessagesFrom(
      _from: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[Messaging.MessageStructOutput[]]>;

    sendMessage(
      _to: PromiseOrValue<string>,
      _content: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getMessages(
    _to: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<Messaging.MessageStructOutput[]>;

  getMessagesFrom(
    _from: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<Messaging.MessageStructOutput[]>;

  sendMessage(
    _to: PromiseOrValue<string>,
    _content: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getMessages(
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Messaging.MessageStructOutput[]>;

    getMessagesFrom(
      _from: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Messaging.MessageStructOutput[]>;

    sendMessage(
      _to: PromiseOrValue<string>,
      _content: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "MessageSent(address,address,string,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      content?: null,
      timestamp?: null
    ): MessageSentEventFilter;
    MessageSent(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      content?: null,
      timestamp?: null
    ): MessageSentEventFilter;
  };

  estimateGas: {
    getMessages(
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMessagesFrom(
      _from: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendMessage(
      _to: PromiseOrValue<string>,
      _content: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getMessages(
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMessagesFrom(
      _from: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sendMessage(
      _to: PromiseOrValue<string>,
      _content: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
