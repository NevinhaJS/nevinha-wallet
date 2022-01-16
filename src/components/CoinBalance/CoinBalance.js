import React from 'react'
import useSWR from 'swr'
import useCoinBalance from '../../hooks/useCoinBalance'
import fetcher from '../../services/fetcher'

import * as S from './styled'

const binanceAPI = 'https://api.binance.com/api/v3/ticker/price?symbol='
const loadingText = 'loading balance...'

function CoinBalance({
  onClick,
  item: { logoURI, symbol, address, abi },
  icon,
}) {
  const url = `${binanceAPI}${symbol}USDT`
  const { data, error } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  })
  const [balance, loading] = useCoinBalance(address, abi)

  const label = loading ? loadingText : `${balance.slice(0, 10)} ${symbol}`
  const usdBalance =
    !error &&
    data &&
    (parseFloat(balance || 0) * parseFloat(data.price)).toFixed(2)

  return (
    <S.CoinBalanceItem
      image={<img src={logoURI} alt={label} />}
      label={label}
      description={loading ? 'loading...' : `$${usdBalance || '-'} USD`}
      icon={icon}
      onClick={onClick}
    />
  )
}

export default CoinBalance
