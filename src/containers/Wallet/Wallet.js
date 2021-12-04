import React, { useEffect } from 'react'
import { useContextSelector } from 'use-context-selector'
import { WalletContext } from '../../contexts/wallet/WalletProvider'
import Layout from '../../infra/Layout'
import useAuthentication from '../../hooks/useAuthentication'

import * as S from './styled'
import Balances from './components/Balances'

function Wallet() {
  const wallet = useContextSelector(WalletContext, (s) => s[0])
  const { saveSession } = useAuthentication()

  useEffect(() => {
    saveSession()
  }, [saveSession])

  return (
    <Layout>
      <S.WalletHeader>
        <h1 className="light txt-center">
          Wallet address
          <br />
          <span className="primary">{wallet.accounts[0].address}</span>
        </h1>

        <S.WalletBalances>
          <Balances />
        </S.WalletBalances>
      </S.WalletHeader>
    </Layout>
  )
}

export default Wallet
