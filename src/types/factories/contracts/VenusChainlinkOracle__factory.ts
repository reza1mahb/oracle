/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  VenusChainlinkOracle,
  VenusChainlinkOracleInterface,
} from "../../contracts/VenusChainlinkOracle";

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
        indexed: false,
        internalType: "address",
        name: "feed",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxStalePeriod",
        type: "uint256",
      },
    ],
    name: "FeedSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousPriceMantissa",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "requestedPriceMantissa",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPriceMantissa",
        type: "uint256",
      },
    ],
    name: "PricePosted",
    type: "event",
  },
  {
    inputs: [],
    name: "VAI_VALUE",
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
    inputs: [],
    name: "admin",
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
        name: "asset",
        type: "address",
      },
    ],
    name: "assetPrices",
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
        internalType: "string[]",
        name: "symbols_",
        type: "string[]",
      },
      {
        internalType: "address[]",
        name: "feeds_",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "maxStalePeriods_",
        type: "uint256[]",
      },
    ],
    name: "batchSetFeeds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "getFeed",
    outputs: [
      {
        internalType: "contract AggregatorV2V3Interface",
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
        name: "asset",
        type: "address",
      },
    ],
    name: "getMaxStalePeriod",
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
        internalType: "contract VBep20Interface",
        name: "vToken",
        type: "address",
      },
    ],
    name: "getUnderlyingPrice",
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
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "setDirectPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "feed",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "maxStalePeriod",
        type: "uint256",
      },
    ],
    name: "setFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract VBep20Interface",
        name: "vToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "underlyingPriceMantissa",
        type: "uint256",
      },
    ],
    name: "setUnderlyingPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b031916331790556113cd806100326000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80635e9a523c11610081578063c346b81e1161005b578063c346b81e146101a5578063f851a440146101ce578063fc57d4df146101e157600080fd5b80635e9a523c1461014c578063704b6c0214610183578063b9de61e21461019657600080fd5b8063127ffda0116100b2578063127ffda0146100f65780632853d428146101095780633b39a51c1461011c57600080fd5b80630180b502146100ce57806309a8acb0146100e3575b600080fd5b6100e16100dc366004610e6d565b6101f4565b005b6100e16100f1366004610ec7565b6103b4565b6100e1610104366004610ec7565b61047f565b6100e1610117366004610f3f565b6105b0565b61012f61012a366004610fd9565b610796565b6040516001600160a01b0390911681526020015b60405180910390f35b61017561015a36600461100e565b6001600160a01b031660009081526001602052604090205490565b604051908152602001610143565b6100e161019136600461100e565b6107e2565b610175670de0b6b3a764000081565b6101756101b336600461100e565b6001600160a01b031660009081526002602052604090205490565b60005461012f906001600160a01b031681565b6101756101ef36600461100e565b6108a0565b6000546001600160a01b031633146102495760405162461bcd60e51b81526020600482015260136024820152721bdb9b1e4818591b5a5b881b585e4818d85b1b606a1b60448201526064015b60405180910390fd5b6001600160a01b0382161580159061026a57506001600160a01b0382163014155b6102b65760405162461bcd60e51b815260206004820152601460248201527f696e76616c6964206665656420616464726573730000000000000000000000006044820152606401610240565b600081116103065760405162461bcd60e51b815260206004820152601a60248201527f7374616c6520706572696f642063616e2774206265207a65726f0000000000006044820152606401610240565b600083604051602001610319919061105b565b60408051808303601f190181528282528051602091820120600081815260038352838120805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038a169081179091558152600290925291902084905591507f299d679eda3098a4fc6476268e65d9508575947c139367f2327a19983858ba0c906103a6908590879086906110a3565b60405180910390a150505050565b6000546001600160a01b031633146104045760405162461bcd60e51b81526020600482015260136024820152721bdb9b1e4818591b5a5b881b585e4818d85b1b606a1b6044820152606401610240565b6001600160a01b038216600081815260016020908152604091829020548251938452908301528101829052606081018290527fdd71a1d19fcba687442a1d5c58578f1e409af71a79d10fd95a4d66efd8fa9ae79060800160405180910390a16001600160a01b03909116600090815260016020526040902055565b6000546001600160a01b031633146104cf5760405162461bcd60e51b81526020600482015260136024820152721bdb9b1e4818591b5a5b881b585e4818d85b1b606a1b6044820152606401610240565b6000826001600160a01b0316636f307dc36040518163ffffffff1660e01b8152600401602060405180830381865afa15801561050f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053391906110d5565b6001600160a01b038116600081815260016020908152604091829020548251938452908301528101849052606081018490529091507fdd71a1d19fcba687442a1d5c58578f1e409af71a79d10fd95a4d66efd8fa9ae79060800160405180910390a16001600160a01b031660009081526001602052604090205550565b6000546001600160a01b031633146106005760405162461bcd60e51b81526020600482015260136024820152721bdb9b1e4818591b5a5b881b585e4818d85b1b606a1b6044820152606401610240565b8483146106405760405162461bcd60e51b815260206004820152600e60248201526d0d2dcecc2d8d2c840d8cadccee8d60931b6044820152606401610240565b8481146106805760405162461bcd60e51b815260206004820152600e60248201526d0d2dcecc2d8d2c840d8cadccee8d60931b6044820152606401610240565b846106cd5760405162461bcd60e51b815260206004820152600b60248201527f656d7074792066656564730000000000000000000000000000000000000000006044820152606401610240565b60005b8581101561078d5761077b8787838181106106ed576106ed6110f2565b90506020028101906106ff9190611108565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250899250889150859050818110610748576107486110f2565b905060200201602081019061075d919061100e565b85858581811061076f5761076f6110f2565b905060200201356101f4565b8061078581611165565b9150506106d0565b50505050505050565b600060036000836040516020016107ad919061105b565b60408051601f19818403018152918152815160209283012083529082019290925201600020546001600160a01b031692915050565b6000546001600160a01b031633146108325760405162461bcd60e51b81526020600482015260136024820152721bdb9b1e4818591b5a5b881b585e4818d85b1b606a1b6044820152606401610240565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff1983168117909355604080519190921680825260208201939093527ff9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc910160405180910390a15050565b600080826001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa1580156108e1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610909919081019061117e565b905061093181604051806040016040528060048152602001633b21272160e11b8152506109d8565b1561094e5761094761094282610796565b610a32565b9392505050565b610973816040518060400160405280600381526020016256414960e81b8152506109d8565b156109885750670de0b6b3a764000092915050565b6109ad816040518060400160405280600381526020016258565360e81b8152506109d8565b156109cf5750506001600160a01b031660009081526001602052604090205490565b61094783610bcf565b6000816040516020016109eb919061105b565b6040516020818303038152906040528051906020012083604051602001610a12919061105b565b604051602081830303815290604052805190602001201490505b92915050565b600080610aa5836001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9a91906111f5565b60129060ff16610d4c565b9050600080846001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610ae8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0c9190611237565b506001600160a01b03891660009081526002602052604081205493965090945091925050819003610b435750600095945050505050565b80610b8e836040518060400160405280601c81526020017f757064617465644174206578636565647320626c6f636b2074696d650000000081525042610d589092919063ffffffff16565b1115610ba05750600095945050505050565b8315610bc557610bbb610bb485600a61136b565b8490610d84565b9695505050505050565b5090949350505050565b600080826001600160a01b0316636f307dc36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3491906110d5565b6001600160a01b03811660009081526001602052604090205490915015610c75576001600160a01b0381166000908152600160205260409020549150610ce4565b610ce1610942826001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015610cb9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261012a919081019061117e565b91505b6000610d27826001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a76573d6000803e3d6000fd5b90508015610d4557610d3d610bb482600a61136b565b949350505050565b5050919050565b60006109478284611377565b60008184841115610d7c5760405162461bcd60e51b8152600401610240919061138e565b505050900390565b600061094782846113a1565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610dcf57610dcf610d90565b604052919050565b600067ffffffffffffffff821115610df157610df1610d90565b50601f01601f191660200190565b600082601f830112610e1057600080fd5b8135610e23610e1e82610dd7565b610da6565b818152846020838601011115610e3857600080fd5b816020850160208301376000918101602001919091529392505050565b6001600160a01b0381168114610e6a57600080fd5b50565b600080600060608486031215610e8257600080fd5b833567ffffffffffffffff811115610e9957600080fd5b610ea586828701610dff565b9350506020840135610eb681610e55565b929592945050506040919091013590565b60008060408385031215610eda57600080fd5b8235610ee581610e55565b946020939093013593505050565b60008083601f840112610f0557600080fd5b50813567ffffffffffffffff811115610f1d57600080fd5b6020830191508360208260051b8501011115610f3857600080fd5b9250929050565b60008060008060008060608789031215610f5857600080fd5b863567ffffffffffffffff80821115610f7057600080fd5b610f7c8a838b01610ef3565b90985096506020890135915080821115610f9557600080fd5b610fa18a838b01610ef3565b90965094506040890135915080821115610fba57600080fd5b50610fc789828a01610ef3565b979a9699509497509295939492505050565b600060208284031215610feb57600080fd5b813567ffffffffffffffff81111561100257600080fd5b610d3d84828501610dff565b60006020828403121561102057600080fd5b813561094781610e55565b60005b8381101561104657818101518382015260200161102e565b83811115611055576000848401525b50505050565b6000825161106d81846020870161102b565b9190910192915050565b6000815180845261108f81602086016020860161102b565b601f01601f19169290920160200192915050565b6001600160a01b03841681526060602082015260006110c56060830185611077565b9050826040830152949350505050565b6000602082840312156110e757600080fd5b815161094781610e55565b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811261111f57600080fd5b83018035915067ffffffffffffffff82111561113a57600080fd5b602001915036819003821315610f3857600080fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016111775761117761114f565b5060010190565b60006020828403121561119057600080fd5b815167ffffffffffffffff8111156111a757600080fd5b8201601f810184136111b857600080fd5b80516111c6610e1e82610dd7565b8181528560208385010111156111db57600080fd5b6111ec82602083016020860161102b565b95945050505050565b60006020828403121561120757600080fd5b815160ff8116811461094757600080fd5b805169ffffffffffffffffffff8116811461123257600080fd5b919050565b600080600080600060a0868803121561124f57600080fd5b61125886611218565b945060208601519350604086015192506060860151915061127b60808701611218565b90509295509295909350565b600181815b808511156112c25781600019048211156112a8576112a861114f565b808516156112b557918102915b93841c939080029061128c565b509250929050565b6000826112d957506001610a2c565b816112e657506000610a2c565b81600181146112fc576002811461130657611322565b6001915050610a2c565b60ff8411156113175761131761114f565b50506001821b610a2c565b5060208310610133831016604e8410600b8410161715611345575081810a610a2c565b61134f8383611287565b80600019048211156113635761136361114f565b029392505050565b600061094783836112ca565b6000828210156113895761138961114f565b500390565b6020815260006109476020830184611077565b60008160001904831182151516156113bb576113bb61114f565b50029056fea164736f6c634300080d000a";

type VenusChainlinkOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VenusChainlinkOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VenusChainlinkOracle__factory extends ContractFactory {
  constructor(...args: VenusChainlinkOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VenusChainlinkOracle> {
    return super.deploy(overrides || {}) as Promise<VenusChainlinkOracle>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VenusChainlinkOracle {
    return super.attach(address) as VenusChainlinkOracle;
  }
  override connect(signer: Signer): VenusChainlinkOracle__factory {
    return super.connect(signer) as VenusChainlinkOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VenusChainlinkOracleInterface {
    return new utils.Interface(_abi) as VenusChainlinkOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VenusChainlinkOracle {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as VenusChainlinkOracle;
  }
}
