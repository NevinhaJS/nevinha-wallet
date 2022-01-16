import { useEffect, useCallback, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { WalletContext } from '../contexts/wallet/WalletProvider'
import Web3Service from '../services/web3'
import usePooling from '../hooks/usePooling'
import { defaultNetworkAddress } from '../services/tokens/constants'
import { NetworkContext } from '../contexts/network/NetworkProvider'

const useCoinBalance = (address, abi) => {
  const [balance, setBalance] = useState(null)
  const wallet = useContextSelector(WalletContext, (s) => s[0])
  const activeChain = useContextSelector(
    NetworkContext,
    (s) => s[0].activeChain
  )

  const getDefaultNetworkBalance = useCallback(async () => {
    const web3 = Web3Service.getInstance()
    const data = await web3.eth.getBalance(wallet.accounts[0].address)
    const amount = web3.utils.fromWei(data)

    if (amount !== balance) {
      setBalance(amount)
    }
  }, [setBalance, wallet, balance])

  const getTokenBalance = useCallback(async () => {
    const web3 = Web3Service.getInstance()

    const Contract = new web3.eth.Contract(abi, address)
    const data = await Contract.methods
      .balanceOf(wallet.accounts[0].address)
      .call()
    const amount = web3.utils.fromWei(data)

    if (amount !== balance) {
      setBalance(amount)
    }
  }, [setBalance, wallet, balance, abi, address])

  const { startPolling, cancelPolling } = usePooling(
    getDefaultNetworkBalance,
    6000
  )
  const { startPolling: startTokenPolling, cancelPolling: cancelTokenPooling } =
    usePooling(getTokenBalance, 6000)

  useEffect(() => {
    if (address === defaultNetworkAddress) {
      startPolling()
    } else if (abi) {
      startTokenPolling()
    }

    return () => {
      cancelPolling()
      cancelTokenPooling()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, activeChain, abi])

  const isLoading = balance === null

  return [balance, isLoading]
}

export default useCoinBalance
