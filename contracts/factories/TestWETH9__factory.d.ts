import { Signer, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  TestWETH9,
  TestWETH9Interface,
} from '@arbitrum/sdk/dist/lib/abi/TestWETH9'
declare type TestWETH9ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>
export declare class TestWETH9__factory extends ContractFactory {
  constructor(...args: TestWETH9ConstructorParams)
  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & {
      from?: string | Promise<string>
    }
  ): Promise<TestWETH9>
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & {
      from?: string | Promise<string>
    }
  ): TransactionRequest
  attach(address: string): TestWETH9
  connect(signer: Signer): TestWETH9__factory
  static readonly contractName: 'TestWETH9'
  readonly contractName: 'TestWETH9'
  static readonly bytecode =
    '0x60806040523480156200001157600080fd5b506040516200104d3803806200104d833981810160405260408110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b50604052505082518391508290620001b8906003906020850190620001e7565b508051620001ce906004906020840190620001e7565b50506005805460ff19166012179055506200028c915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200022a57805160ff19168380011785556200025a565b828001600101855582156200025a579182015b828111156200025a5782518255916020019190600101906200023d565b50620002689291506200026c565b5090565b6200028991905b8082111562000268576000815560010162000273565b90565b610db1806200029c6000396000f3fe6080604052600436106100b25760003560e01c8063395093511161006f578063395093511461024f57806370a082311461028857806395d89b41146102bb578063a457c2d7146102d0578063a9059cbb14610309578063d0e30db014610342578063dd62ed3e1461034a576100b2565b806306fdde03146100b7578063095ea7b31461014157806318160ddd1461018e57806323b872dd146101b55780632e1a7d4d146101f8578063313ce56714610224575b600080fd5b3480156100c357600080fd5b506100cc610385565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101065781810151838201526020016100ee565b50505050905090810190601f1680156101335780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561014d57600080fd5b5061017a6004803603604081101561016457600080fd5b506001600160a01b03813516906020013561041b565b604080519115158252519081900360200190f35b34801561019a57600080fd5b506101a3610438565b60408051918252519081900360200190f35b3480156101c157600080fd5b5061017a600480360360608110156101d857600080fd5b506001600160a01b0381358116916020810135909116906040013561043e565b34801561020457600080fd5b506102226004803603602081101561021b57600080fd5b50356104cb565b005b34801561023057600080fd5b50610239610506565b6040805160ff9092168252519081900360200190f35b34801561025b57600080fd5b5061017a6004803603604081101561027257600080fd5b506001600160a01b03813516906020013561050f565b34801561029457600080fd5b506101a3600480360360208110156102ab57600080fd5b50356001600160a01b0316610563565b3480156102c757600080fd5b506100cc61057e565b3480156102dc57600080fd5b5061017a600480360360408110156102f357600080fd5b506001600160a01b0381351690602001356105df565b34801561031557600080fd5b5061017a6004803603604081101561032c57600080fd5b506001600160a01b03813516906020013561064d565b610222610661565b34801561035657600080fd5b506101a36004803603604081101561036d57600080fd5b506001600160a01b038135811691602001351661066d565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104115780601f106103e657610100808354040283529160200191610411565b820191906000526020600020905b8154815290600101906020018083116103f457829003601f168201915b5050505050905090565b600061042f610428610698565b848461069c565b50600192915050565b60025490565b600061044b848484610788565b6104c184610457610698565b6104bc85604051806060016040528060288152602001610ca5602891396001600160a01b038a16600090815260016020526040812090610495610698565b6001600160a01b03168152602081019190915260400160002054919063ffffffff6108dd16565b61069c565b5060019392505050565b6104d53382610974565b604051339082156108fc029083906000818181858888f19350505050158015610502573d6000803e3d6000fd5b5050565b60055460ff1690565b600061042f61051c610698565b846104bc856001600061052d610698565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff610a6a16565b6001600160a01b031660009081526020819052604090205490565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104115780601f106103e657610100808354040283529160200191610411565b600061042f6105ec610698565b846104bc85604051806060016040528060258152602001610d576025913960016000610616610698565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff6108dd16565b600061042f61065a610698565b8484610788565b61066b3334610acb565b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166106e15760405162461bcd60e51b8152600401808060200182810382526024815260200180610d336024913960400191505060405180910390fd5b6001600160a01b0382166107265760405162461bcd60e51b8152600401808060200182810382526022815260200180610c5d6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166107cd5760405162461bcd60e51b8152600401808060200182810382526025815260200180610d0e6025913960400191505060405180910390fd5b6001600160a01b0382166108125760405162461bcd60e51b8152600401808060200182810382526023815260200180610c186023913960400191505060405180910390fd5b61081d838383610bb5565b61086081604051806060016040528060268152602001610c7f602691396001600160a01b038616600090815260208190526040902054919063ffffffff6108dd16565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610895908263ffffffff610a6a16565b6001600160a01b03808416600081815260208181526040918290209490945580518581529051919392871692600080516020610ccd83398151915292918290030190a3505050565b6000818484111561096c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610931578181015183820152602001610919565b50505050905090810190601f16801561095e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b0382166109b95760405162461bcd60e51b8152600401808060200182810382526021815260200180610ced6021913960400191505060405180910390fd5b6109c582600083610bb5565b610a0881604051806060016040528060228152602001610c3b602291396001600160a01b038516600090815260208190526040902054919063ffffffff6108dd16565b6001600160a01b038316600090815260208190526040902055600254610a34908263ffffffff610bba16565b6002556040805182815290516000916001600160a01b03851691600080516020610ccd8339815191529181900360200190a35050565b600082820183811015610ac4576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b038216610b26576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610b3260008383610bb5565b600254610b45908263ffffffff610a6a16565b6002556001600160a01b038216600090815260208190526040902054610b71908263ffffffff610a6a16565b6001600160a01b038316600081815260208181526040808320949094558351858152935192939192600080516020610ccd8339815191529281900390910190a35050565b505050565b600082821115610c11576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b5090039056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef45524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220d7aafdaca1d257a255e078256a06b0d409f879b91a8b37b665eeffe983b8b13c64736f6c634300060b0033'
  static readonly abi: (
    | {
        inputs: {
          internalType: string
          name: string
          type: string
        }[]
        stateMutability: string
        type: string
        anonymous?: undefined
        name?: undefined
        outputs?: undefined
      }
    | {
        anonymous: boolean
        inputs: {
          indexed: boolean
          internalType: string
          name: string
          type: string
        }[]
        name: string
        type: string
        stateMutability?: undefined
        outputs?: undefined
      }
    | {
        inputs: {
          internalType: string
          name: string
          type: string
        }[]
        name: string
        outputs: {
          internalType: string
          name: string
          type: string
        }[]
        stateMutability: string
        type: string
        anonymous?: undefined
      }
  )[]
  static createInterface(): TestWETH9Interface
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestWETH9
}
export {}
