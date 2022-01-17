import React, { useReducer } from 'react'
import useSWR from 'swr'
import { createContext } from 'use-context-selector'
import fetcher from '../../services/fetcher'
import { setOneInchTokens } from './actions'

import tokensReducer, { initialState } from './reducer'

export const TokensContext = createContext(null)

function TokensProvider({ children }) {
  const [state, dispatch] = useReducer(tokensReducer, initialState)

  useSWR('https://api.1inch.exchange/v4.1/1/tokens', fetcher, {
    refreshInterval: 0,
    errorRetryInterval: 1000,
    onSuccess: ({ tokens }) => dispatch(setOneInchTokens(tokens)),
  })

  return (
    <TokensContext.Provider value={[state, dispatch]}>
      {children}
    </TokensContext.Provider>
  )
}

export default TokensProvider
