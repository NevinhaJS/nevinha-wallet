import { useCallback } from 'react'
import { useContextSelector } from 'use-context-selector'
import { WalletContext } from '../contexts/wallet/WalletProvider'
import walletService from '../services/wallet'

const useAuthentication = () => {
  const wallet = useContextSelector(WalletContext, (s) => s[0])

  const saveSession = useCallback(() => {
    walletService.saveWallet(wallet.password)
  }, [wallet])

  return { saveSession }
}

export default useAuthentication
