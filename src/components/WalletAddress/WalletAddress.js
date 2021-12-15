import React from 'react'
import { useContextSelector } from 'use-context-selector'
import { WalletContext } from '../../contexts/wallet/WalletProvider'

import * as S from './styled'

function WalletAddress() {
  const wallet = useContextSelector(WalletContext, (s) => s[0])

  return (
    <S.WalletHeader>
      <h1 className="light txt-center">
        Wallet address
        <br />
        <span className="primary">{wallet.accounts[0].address}</span>
      </h1>
    </S.WalletHeader>
  )
}

export default WalletAddress
