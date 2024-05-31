/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AxelarExecutable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AxelarExecutable__factory>;
    getContractFactory(
      name: "IAxelarExecutable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAxelarExecutable__factory>;
    getContractFactory(
      name: "IAxelarGasService",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAxelarGasService__factory>;
    getContractFactory(
      name: "IAxelarGateway",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAxelarGateway__factory>;
    getContractFactory(
      name: "IContractIdentifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IContractIdentifier__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IGovernable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernable__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "IProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProxy__factory>;
    getContractFactory(
      name: "IUpgradable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUpgradable__factory>;
    getContractFactory(
      name: "StringToAddress",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StringToAddress__factory>;
    getContractFactory(
      name: "BaseProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseProxy__factory>;
    getContractFactory(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: "Upgradable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Upgradable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "IERC4906",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC4906__factory>;
    getContractFactory(
      name: "IERC5267",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC5267__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Burnable__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721URIStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721URIStorage__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "EIP712",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EIP712__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "ShortStrings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShortStrings__factory>;
    getContractFactory(
      name: "Airdrop",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Airdrop__factory>;
    getContractFactory(
      name: "CallContractWithToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CallContractWithToken__factory>;
    getContractFactory(
      name: "CallContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CallContract__factory>;
    getContractFactory(
      name: "SimpleCustomToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimpleCustomToken__factory>;
    getContractFactory(
      name: "ERC20Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Token__factory>;
    getContractFactory(
      name: "Marketplace",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Marketplace__factory>;
    getContractFactory(
      name: "ERC721Demo",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Demo__factory>;
    getContractFactory(
      name: "NftLinker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NftLinker__factory>;
    getContractFactory(
      name: "ExampleProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ExampleProxy__factory>;
    getContractFactory(
      name: "NFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NFT__factory>;
    getContractFactory(
      name: "SenderReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SenderReceiver__factory>;
    getContractFactory(
      name: "SenderReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SenderReceiver__factory>;
    getContractFactory(
      name: "MessageContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MessageContract__factory>;
    getContractFactory(
      name: "Messaging",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Messaging__factory>;

    getContractAt(
      name: "AxelarExecutable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AxelarExecutable>;
    getContractAt(
      name: "IAxelarExecutable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAxelarExecutable>;
    getContractAt(
      name: "IAxelarGasService",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAxelarGasService>;
    getContractAt(
      name: "IAxelarGateway",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAxelarGateway>;
    getContractAt(
      name: "IContractIdentifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IContractIdentifier>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IGovernable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernable>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "IProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IProxy>;
    getContractAt(
      name: "IUpgradable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUpgradable>;
    getContractAt(
      name: "StringToAddress",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StringToAddress>;
    getContractAt(
      name: "BaseProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseProxy>;
    getContractAt(
      name: "Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Proxy>;
    getContractAt(
      name: "Upgradable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Upgradable>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "IERC4906",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC4906>;
    getContractAt(
      name: "IERC5267",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC5267>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Burnable>;
    getContractAt(
      name: "ERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721URIStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721URIStorage>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "EIP712",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EIP712>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "ShortStrings",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShortStrings>;
    getContractAt(
      name: "Airdrop",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Airdrop>;
    getContractAt(
      name: "CallContractWithToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CallContractWithToken>;
    getContractAt(
      name: "CallContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CallContract>;
    getContractAt(
      name: "SimpleCustomToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SimpleCustomToken>;
    getContractAt(
      name: "ERC20Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Token>;
    getContractAt(
      name: "Marketplace",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Marketplace>;
    getContractAt(
      name: "ERC721Demo",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Demo>;
    getContractAt(
      name: "NftLinker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NftLinker>;
    getContractAt(
      name: "ExampleProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ExampleProxy>;
    getContractAt(
      name: "NFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NFT>;
    getContractAt(
      name: "SenderReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SenderReceiver>;
    getContractAt(
      name: "SenderReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SenderReceiver>;
    getContractAt(
      name: "MessageContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MessageContract>;
    getContractAt(
      name: "Messaging",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Messaging>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}