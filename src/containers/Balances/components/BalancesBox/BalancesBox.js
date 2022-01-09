import React from 'react'
import { useNavigate } from 'react-router-dom'

import CoinBalance from '../../../../components/CoinBalance'
import { ReactComponent as ArrowIcon } from '../../../../assets/svg/submit-arrow.svg'

import * as S from './styled'
import { getTokensABI } from './utils'

const coins = getTokensABI()

function Balances() {
  const navigate = useNavigate()

  const onCoinClick = (symbol) => () => navigate(`/wallet/transfer/${symbol}`)

  return (
    <S.BalanceBox>
      {coins.map((coin) => (
        <CoinBalance
          key={coin.symbol}
          onClick={onCoinClick(coin.symbol)}
          icon={<ArrowIcon />}
          item={coin}
        />
      ))}
    </S.BalanceBox>
  )
}

export default Balances
