import React, { useEffect } from 'react'
import Layout from '../../infra/Layout'
import useAuthentication from '../../hooks/useAuthentication'
import WalletAddress from '../../components/WalletAddress'

function TransferBalance() {
  const { saveSession } = useAuthentication()

  useEffect(() => {
    saveSession()
  }, [saveSession])

  return (
    <Layout>
      <WalletAddress />
    </Layout>
  )
}

export default TransferBalance
