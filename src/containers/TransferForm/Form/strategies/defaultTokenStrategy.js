import Web3Service from '../../../../services/web3'

const defaultTokenStrategy = (() => {
  const estimateGas = async (transactionForm) => {
    const web3 = Web3Service.getInstance()
    const transactionData = await getTransactionData(transactionForm)
    const estimatedGas = await web3.eth.estimateGas(transactionData)

    return estimatedGas
  }

  const getTransactionData = async (transactionForm) => {
    const web3 = Web3Service.getInstance()
    const { amount } = transactionForm?.INFO

    return {
      value: web3.utils.toHex(web3.utils.toWei(amount, 'ether')),
    }
  }

  return { getTransactionData, estimateGas }
})()

export default defaultTokenStrategy
