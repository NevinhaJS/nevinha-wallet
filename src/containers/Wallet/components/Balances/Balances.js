import React, { useState } from 'react'

import * as S from './styled'

import ethImage from '../../../../assets/svg/etherium-logo.svg'
import CoinBalance from '../../../../components/CoinBalance'

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

  return (
    <S.BalanceBox>
      <CoinBalance item={coins.ETH} />
    </S.BalanceBox>
  )
}

export default Balances
