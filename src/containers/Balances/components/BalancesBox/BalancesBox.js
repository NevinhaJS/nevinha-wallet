import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'

import CoinBalance from '../../../../components/CoinBalance'
import { ReactComponent as ArrowIcon } from '../../../../assets/svg/submit-arrow.svg'

import * as S from './styled'
import { getTokensABI } from './utils'
import { TokensContext } from '../../../../contexts/tokens/TokensProvider'
import { NetworkContext } from '../../../../contexts/network/NetworkProvider'

function Balances() {
  const activeChain = useContextSelector(
    NetworkContext,
    (state) => state[0].activeChain
  )
  const tokens = useContextSelector(
    TokensContext,
    (state) => state[0][activeChain]
  )

  const navigate = useNavigate()
  const coins = getTokensABI(tokens) || []

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
