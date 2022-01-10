import { useContext, useCallback } from 'react'
import { useActor } from '@xstate/react'
import { useContextSelector } from 'use-context-selector'
import { WalletContext } from '../../../../contexts/wallet/WalletProvider'
import { MultiStepContext } from '../../../../infra/MultiStepForm/MultiStepForm'
import Web3Service from '../../../../services/web3'
import { initialCoins } from '../../../../services/fetcher/constants'

const useStrategies = (strategy) => {
  const wallet = useContextSelector(WalletContext, (s) => s[0])
  const multiStepContext = useContext(MultiStepContext)
  const [state] = useActor(multiStepContext.authService)

  const getGasInfo = useCallback(async () => {
    const web3 = Web3Service.getInstance()
    const { address: fromAddress } = wallet.accounts[0]
    const estimatedGas = await strategy.estimateGas(
      state.context.form,
      fromAddress
    )
    const gasPrice = await web3.eth.getGasPrice()

    return {
      estimatedGas,
      gasPrice,
    }
  }, [state, wallet, strategy])

  const execute = async (symbol, isMainNet) => {
    const { address: fromAddress, privateKey } = wallet.accounts[0]
    const web3 = Web3Service.getInstance()

    const txCount = await web3.eth.getTransactionCount(fromAddress, 'latest')
    // const { gasLimit } = await web3.eth.getBlock('latest')
    const transactionData = await strategy.getTransactionData(
      state.context.form
    )
    const { estimatedGas, gasPrice } = await getGasInfo(
      state.context.form,
      fromAddress
    )

    const { address } = state.context.form?.INFO
    const rawTransaction = {
      ...transactionData,
      to: isMainNet ? address : initialCoins[symbol].address,
      nonce: txCount,
      from: fromAddress,
      gasPrice,
      // gasLimit,
      gas: estimatedGas,
    }
    const signedTx = await web3.eth.accounts.signTransaction(
      rawTransaction,
      privateKey
    )

    return signedTx
  }

  return { execute, getGasInfo }
}

export default useStrategies
