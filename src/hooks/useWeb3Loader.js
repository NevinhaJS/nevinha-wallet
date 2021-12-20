import { useEffect } from 'react'
import { NETWORK_LINK } from '../services/fetcher/constants'
import Web3Service from '../services/web3'

const ethNetwork = NETWORK_LINK

const useWeb3Loader = () => {
  useEffect(() => {
    Web3Service.changeProvider(ethNetwork)
  }, [])
}

export default useWeb3Loader
