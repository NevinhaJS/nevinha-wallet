import React, { useEffect } from 'react'
import Layout from '../../infra/Layout'
import useAuthentication from '../../hooks/useAuthentication'

import * as S from './styled'
import BalancesBox from './components/BalancesBox'
import WalletAddress from '../../components/WalletAddress'

function Balances() {
  const { saveSession } = useAuthentication()

  useEffect(() => {
    saveSession()
  }, [saveSession])

  return (
    <Layout>
      <WalletAddress />

      <S.WalletBoxContainer>
        <BalancesBox />
      </S.WalletBoxContainer>
    </Layout>
  )
}

export default Balances
