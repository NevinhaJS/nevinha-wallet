import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { WalletContext } from '../../contexts/wallet/WalletProvider'
import walletService from '../../services/wallet'

function RequireAuth() {
  const wallet = useContextSelector(WalletContext, (s) => s[0])

  if (!wallet && walletService.getStoredWallet())
    return <Navigate to="/unlock-wallet" />

  if (!wallet) return <Navigate to="/" />

  return <Outlet />
}

export default RequireAuth
