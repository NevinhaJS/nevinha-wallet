import React, { useReducer } from 'react'
import useSWR from 'swr'
import { createContext } from 'use-context-selector'

import fetcher from '../../services/fetcher'
import { COVALENT_API_KEY } from '../../services/fetcher/constants'
import networkReducer, { initialState } from './reducer'
import { formatNetworkItems } from './utils'

export const NetworkContext = createContext(null)

const covalentLink = `https://api.covalenthq.com/v1/chains/?format=JSON&key=${COVALENT_API_KEY}`

function NetworkProvider({ children }) {
  const [state, dispatch] = useReducer(networkReducer, initialState)

  const fetchNetwork = async (...args) => {
    const { data, error } = await fetcher(covalentLink)

    if (error) return fetchNetwork(...args)

    return data?.items.filter(
      (item) => item.chain_id === '1' || item.chain_id === '42'
    )
  }

  useSWR(covalentLink, fetchNetwork, {
    refreshInterval: 0,
    errorRetryInterval: 1000,
    onErrorRetry: (_err, _key, _config, revalidate, retryCount) =>
      revalidate({ retryCount }),
    onSuccess: (data) =>
      dispatch({
        type: 'SET_NETWORKS',
        payload: formatNetworkItems(data),
      }),
  })

  return (
    <NetworkContext.Provider value={[state, dispatch]}>
      {children}
    </NetworkContext.Provider>
  )
}

export default NetworkProvider
