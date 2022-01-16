import { useContextSelector } from 'use-context-selector'
import { NetworkContext } from '../network/NetworkProvider'
import { TokensContext } from './TokensProvider'

export const useActiveChainTokensSelector = () => {
  const activeChain = useContextSelector(
    NetworkContext,
    (state) => state[0].activeChain
  )
  const tokens = useContextSelector(
    TokensContext,
    (state) => state[0][activeChain]
  )

  return tokens
}
