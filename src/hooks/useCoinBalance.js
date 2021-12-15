import { useEffect, useCallback, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { WalletContext } from '../contexts/wallet/WalletProvider'
import Web3Service from '../services/web3'
import usePooling from '../hooks/usePooling'

const defaultNetworkAddress = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'

const useCoinBalance = (address) => {
  const [balance, setBalance] = useState(null)
  const wallet = useContextSelector(WalletContext, (s) => s[0])

  const getDefaultNetworkBalance = useCallback(async () => {
    const web3 = Web3Service.getInstance()
    const data = await web3.eth.getBalance(wallet.accounts[0].address)
    const amount = web3.utils.fromWei(data)

    if (amount !== balance) {
      setBalance(amount)
    }
  }, [setBalance, wallet, balance])

  const { startPolling } = usePooling(getDefaultNetworkBalance, 10000000)

  useEffect(() => {
    if (address === defaultNetworkAddress) {
      startPolling()
    }
  }, [])

  const isLoading = balance === null

  return [balance, isLoading]
}

export default useCoinBalance
