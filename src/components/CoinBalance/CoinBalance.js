import React, { useEffect, useCallback, useState } from 'react'
import useSWR from 'swr'
import { useContextSelector } from 'use-context-selector'
import { WalletContext } from '../../contexts/wallet/WalletProvider'
import fetcher from '../../services/fetcher'
import Web3Service from '../../services/web3'

import * as S from './styled'

const defaultNetworkAddress = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
const binanceAPI = 'https://api.binance.com/api/v3/ticker/price?symbol='

function CoinBalance({ item: { image, symbol, address } }) {
  const { data, error } = useSWR(`${binanceAPI}${symbol}USDT`, fetcher)
  const [balance, setBalance] = useState(null)
  const wallet = useContextSelector(WalletContext, (s) => s[0])

  //TODO: Create a pooling for it and the price in the future
  const getDefaultNetworkBalance = useCallback(async () => {
    const web3 = Web3Service.getInstance()
    const data = await web3.eth.getBalance(wallet.accounts[0].address)
    const amount = web3.utils.fromWei(data)

    setBalance(amount)
  }, [setBalance, wallet])

  useEffect(() => {
    if (address === defaultNetworkAddress) getDefaultNetworkBalance()
  }, [getDefaultNetworkBalance, address])

  const isLoading = balance === null
  const loadingText = 'Loading...'
  const usdBalance =
    !error && data && (parseFloat(balance) * parseFloat(data.price)).toFixed(2)

  return (
    <S.CoinBalanceItem
      image={image}
      label={isLoading ? loadingText : `${balance.slice(0, 10)} ${symbol}`}
      description={`$${usdBalance || '-'} USD`}
    />
  )
}

export default CoinBalance
