import React, { useReducer } from 'react'
import walletReducer from './reducer'
import { createContext } from 'use-context-selector'

export const WalletContext = createContext(null)

function WalletProvider({ children }) {
  const [state, dispatch] = useReducer(walletReducer, null)

  return (
    <WalletContext.Provider value={[state, dispatch]}>
      {children}
    </WalletContext.Provider>
  )
}

export default WalletProvider
