import React from 'react'
import { initialCoins } from '../../services/fetcher/constants'

const TokensContext = React.createContext({
  1: initialCoins,
})

function TokensProvider({ children }) {
  return <TokensContext.Provider>{children}</TokensContext.Provider>
}

export default TokensProvider
