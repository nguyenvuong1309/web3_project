import { getDefaultProvider, providers, Wallet } from "ethers";
import testnetInfo from "@axelar-network/axelar-chains-config/info/testnet.json";
import localEvm from "../../chain-config/local-evm.json";
import { EvmChain } from "@axelar-network/axelarjs-sdk";

if (typeof window === "undefined") {
  require("dotenv").config();
}

function getWallet() {
  const mnemonic = process.env.NEXT_PUBLIC_EVM_MNEMONIC as string;
  const privateKey = process.env.NEXT_PUBLIC_EVM_PRIVATE_KEY as string;
  return privateKey ? new Wallet(privateKey) : Wallet.fromMnemonic(mnemonic);
}

export const isTestnet = process.env.NEXT_PUBLIC_ENVIRONMENT === "testnet";
export const wallet = getWallet();

export const localChains = localEvm;

const testnetChains = Object.entries(testnetInfo).map(([, value]) => {
  return value;
});

export const chains = isTestnet ? testnetChains : localChains;

// export const srcChain = chains.find(
//   (chain: any) => chain.name === "Fantom"
// ) as any;

// export const destChain = chains.find(
//   (chain: any) => chain.name === "Moonbeam"
// ) as any;
interface chain {
  name: EvmChain;
  chainId: number;
  gateway: string;
  gasService: string;
  constAddressDeployer: string;
  create3Deployer: string;
  interchainTokenService: string;
  interchainTokenFactory: string;
  tokens: {
    [key: string]: string; // or specific tokens like 'aUSDC': string;
  };
  rpc: string;
  callContract: string;
  callContractWithToken: string;
  erc721: string;
  nftLinker: string;
  tokenSymbol?: any;
}

export const srcChain: chain = {
  name: EvmChain.FANTOM,
  chainId: 4002,
  gateway: "0x97837985Ec0494E7b9C71f5D3f9250188477ae14",
  gasService: "0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6",
  constAddressDeployer: "0x69aeB7Dc4f2A86873Dae8D753DE89326Cf90a77a",
  create3Deployer: "0x783E7717fD4592814614aFC47ee92568a495Ce0B",
  interchainTokenService: "0xD8E19d0fb8eDFB301a6bb7e6F31491319a670383",
  interchainTokenFactory: "0xc5663F4C39047c4e54895457567BdD1a045c4b72",
  tokens: {
    aUSDC: "aUSDC",
  },
  rpc: "https://rpc.testnet.fantom.network",
  callContract: "0x3a0Db9784F86BbF776863bE8e55aE1C6a8181704",
  callContractWithToken: "0x704260688f92B36cd763BFe220fB97742F4F730A",
  erc721: "0x79005276fce72dc73bb6243a01831aA46Fc37e9B",
  nftLinker: "0x4Ba6Be9ee877f406115c7AEBc6847b4b1Cea4970",
};

export const destChain: chain = {
  name: EvmChain.MOONBEAM,
  chainId: 1287,
  gateway: "0x5769D84DD62a6fD969856c75c7D321b84d455929",
  gasService: "0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6",
  constAddressDeployer: "0x69aeB7Dc4f2A86873Dae8D753DE89326Cf90a77a",
  create3Deployer: "0x783E7717fD4592814614aFC47ee92568a495Ce0B",
  interchainTokenService: "0xD8E19d0fb8eDFB301a6bb7e6F31491319a670383",
  interchainTokenFactory: "0xc5663F4C39047c4e54895457567BdD1a045c4b72",
  tokens: {
    aUSDC: "aUSDC",
  },
  rpc: "https://rpc.api.moonbase.moonbeam.network",
  callContract: "0x286b1Ad1f54D8440Ad800Cfda3CDdC02FB4A018F",
  callContractWithToken: "0xc93dacc790953FBfe1d6D48E62FB56e481c7DBDa",
  erc721: "0x79005276fce72dc73bb6243a01831aA46Fc37e9B",
  nftLinker: "0x4Ba6Be9ee877f406115c7AEBc6847b4b1Cea4970",
};

const useMetamask = false;

export const srcProvider = useMetamask
  ? new providers.Web3Provider((window as any).ethereum)
  : getDefaultProvider(srcChain.rpc);
export const srcConnectedWallet = useMetamask
  ? (srcProvider as providers.Web3Provider).getSigner()
  : wallet.connect(srcProvider);

export const destProvider = getDefaultProvider(destChain.rpc);
export const destConnectedWallet = wallet.connect(destProvider);

export const addressContractSendMessageSameChain = process.env
  .SEND_MESSAGE_SAME_CHAIN_CONTRACT_ADDRESS as String;
