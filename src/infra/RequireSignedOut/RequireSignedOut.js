import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { WalletContext } from '../../contexts/wallet/WalletProvider'
import walletService from '../../services/wallet'

function RequireSignedOut() {
  const wallet = useContextSelector(WalletContext, (s) => s[0])

  if (wallet?.password) return <Navigate to="/wallet" />

  if (walletService.getStoredWallet()) return <Navigate to="/unlock-wallet" />

  return <Outlet />
}

export default RequireSignedOut
