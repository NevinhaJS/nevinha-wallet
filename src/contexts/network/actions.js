import { availableNetworks } from '../../services/fetcher/constants'
import Web3Service from '../../services/web3'
import { SET_ACTIVE_CHAIN } from './constants'

export const setActiveChain = (chainId) => {
  Web3Service.changeProvider(availableNetworks[chainId])

  return {
    type: SET_ACTIVE_CHAIN,
    payload: chainId,
  }
}
