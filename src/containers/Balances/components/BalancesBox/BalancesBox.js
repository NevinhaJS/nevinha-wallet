import React, { useState } from 'react'

import * as S from './styled'

import ethImage from '../../../../assets/svg/etherium-logo.svg'
import CoinBalance from '../../../../components/CoinBalance'
import { useNavigate } from 'react-router-dom'

const initialCoins = {
  ETH: {
    name: 'Ethereum',
    image: ethImage,
    symbol: 'ETH',
    address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  },
}

function Balances() {
  const [coins] = useState(initialCoins)
  const navigate = useNavigate()

  const onCoinClick = () =>
    navigate(`/wallet/transfer/${initialCoins.ETH.symbol}`)

  return (
    <S.BalanceBox>
      <CoinBalance onClick={onCoinClick} item={coins.ETH} />
    </S.BalanceBox>
  )
}

export default Balances
