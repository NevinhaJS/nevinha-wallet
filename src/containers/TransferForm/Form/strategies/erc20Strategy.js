import { ERC20_ABI } from '../../../../services/tokens/constants'

import Web3Service from '../../../../services/web3'

const ERC20Strategy = (tokenSymbol, tokens) => {
  const estimateGas = async (transactionForm, from) => {
    const web3 = Web3Service.getInstance()
    const contract = new web3.eth.Contract(
      ERC20_ABI,
      tokens[tokenSymbol].address
    )

    const { amount, address } = transactionForm?.INFO

    const estimatedGas = await contract.methods
      .transfer(address, web3.utils.toWei(amount, 'ether'))
      .estimateGas({ from })

    return estimatedGas
  }

  const getTransactionData = async (transactionForm) => {
    const web3 = Web3Service.getInstance()
    const { amount, address } = transactionForm?.INFO

    const contract = new web3.eth.Contract(
      ERC20_ABI,
      tokens[tokenSymbol].address
    )

    const transactionData = contract.methods
      .transfer(address, web3.utils.toWei(amount, 'ether'))
      .encodeABI()

    return {
      data: transactionData,
      value: web3.utils.toHex(web3.utils.toWei('0', 'ether')),
    }
  }

  return {
    getTransactionData,
    estimateGas,
  }
}

export default ERC20Strategy
