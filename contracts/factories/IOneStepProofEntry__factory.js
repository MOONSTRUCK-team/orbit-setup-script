'use strict'
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, '__esModule', { value: true })
exports.IOneStepProofEntry__factory = void 0
const ethers_1 = require('ethers')
const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'maxInboxMessagesRead',
            type: 'uint256',
          },
          {
            internalType: 'contract IBridge',
            name: 'bridge',
            type: 'address',
          },
        ],
        internalType: 'struct ExecutionContext',
        name: 'execCtx',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'machineStep',
        type: 'uint256',
      },
      {
        internalType: 'bytes32',
        name: 'beforeHash',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'proof',
        type: 'bytes',
      },
    ],
    name: 'proveOneStep',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'afterHash',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
class IOneStepProofEntry__factory {
  static createInterface() {
    return new ethers_1.utils.Interface(_abi)
  }
  static connect(address, signerOrProvider) {
    return new ethers_1.Contract(address, _abi, signerOrProvider)
  }
}
exports.IOneStepProofEntry__factory = IOneStepProofEntry__factory
IOneStepProofEntry__factory.abi = _abi
