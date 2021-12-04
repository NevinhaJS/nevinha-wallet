import React, { useEffect, useCallback, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { WalletContext } from '../../contexts/wallet/WalletProvider'
import Web3Service from '../../services/web3'

import * as S from './styled'

const defaultNetworkAddress = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'

function CoinBalance({ item: { image, symbol, address } }) {
  const [balance, setBalance] = useState(null)
  const wallet = useContextSelector(WalletContext, (s) => s[0])

  const getDefaultNetworkBalance = useCallback(async () => {
    const web3 = Web3Service.getInstance()
    const nextBalance = await web3.eth.getBalance(wallet.accounts[0].address)

    setBalance(web3.utils.fromWei(nextBalance))
  }, [setBalance, wallet])

  useEffect(() => {
    if (address === defaultNetworkAddress) getDefaultNetworkBalance()
  }, [getDefaultNetworkBalance, address])

  const isLoading = balance === null
  const loadingText = 'Loading...'

  return (
    <S.CoinBalanceItem
      image={image}
      label={isLoading ? loadingText : `${balance.slice(0, 10)} ${symbol}`}
      description={isLoading ? loadingText : `$200.01 USD`}
    />
  )
}

export default CoinBalance
