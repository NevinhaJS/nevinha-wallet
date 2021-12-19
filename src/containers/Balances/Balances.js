import React, { useEffect } from 'react'
import Layout from '../../infra/Layout'
import useAuthentication from '../../hooks/useAuthentication'

import BalancesBox from './components/BalancesBox'
import WalletAddress from '../../components/WalletAddress'
import TryToFindToken from '../../components/TryToFindToken'

function Balances() {
  const { saveSession } = useAuthentication()

  useEffect(() => {
    saveSession()
  }, [saveSession])

  return (
    <Layout>
      <WalletAddress />

      <article className="wallet-container">
        <BalancesBox />
      </article>

      <footer>
        <TryToFindToken />
      </footer>
    </Layout>
  )
}

export default Balances
