import { initialCoins } from '../../../../services/fetcher/constants'
import {
  defaultNetworkAddress,
  ERC20_ABI,
} from '../../../../services/tokens/contants'

export const getTokensABI = () => {
  try {
    const coins = Object.keys(initialCoins).map((coinKey) => {
      const coin = initialCoins[coinKey]

      if (coin.address === defaultNetworkAddress) {
        return coin
      }

      return {
        ...coin,
        abi: ERC20_ABI,
      }
    })

    return coins
  } catch (err) {
    console.log('-------- error while fetching tokens abi --------')
    console.log(err)
  }
}
