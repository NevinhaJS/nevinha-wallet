import React from 'react'
import { useContextSelector } from 'use-context-selector'
import { WalletContext } from '../../contexts/wallet/WalletProvider'
import Layout from '../../infra/Layout'

import * as S from './styled'

function Wallet() {
  const wallet = useContextSelector(WalletContext, (s) => s[0])

  return (
    <Layout>
      <S.WalletHeader>
        <h1 className="light txt-center">
          Wallet address
          <br />
          <span className="primary">{wallet.accounts[0].address}</span>
        </h1>
      </S.WalletHeader>
    </Layout>
  )
}

export default Wallet
