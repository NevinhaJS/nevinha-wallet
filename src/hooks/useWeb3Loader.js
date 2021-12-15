import { useEffect } from 'react'
import Web3Service from '../services/web3'

const ethNetwork =
  'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'

const useWeb3Loader = () => {
  useEffect(() => {
    Web3Service.changeProvider(ethNetwork)
  }, [])
}

export default useWeb3Loader
