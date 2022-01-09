import { initialCoins } from '../fetcher/constants'
import { defaultNetworkAddress, ERC20_ABI } from './contants'

const TokensService = (() => {
  const getToken = (symbol) => {
    const isMainNet = initialCoins[symbol].address === defaultNetworkAddress

    return isMainNet
      ? initialCoins[symbol]
      : { ...initialCoins[symbol], abi: ERC20_ABI }
  }

  return {
    getToken,
  }
})()

export default TokensService
