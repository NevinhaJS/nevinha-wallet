import React from 'react'

import * as S from './styled'
import { useNavigate } from 'react-router-dom'

import CoinBalance from '../../../../components/CoinBalance'
import { initialCoins } from '../../../../services/tokens/contants'
import { ReactComponent as ArrowIcon } from '../../../../assets/svg/submit-arrow.svg'

function Balances() {
  const navigate = useNavigate()

  const onCoinClick = () =>
    navigate(`/wallet/transfer/${initialCoins.ETH.symbol}`)

  return (
    <S.BalanceBox>
      <CoinBalance
        onClick={onCoinClick}
        icon={<ArrowIcon />}
        item={initialCoins.ETH}
      />
    </S.BalanceBox>
  )
}

export default Balances
