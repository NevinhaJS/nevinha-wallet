import {
  defaultNetworkAddress,
  ERC20_ABI,
} from '../../../../services/tokens/constants'

export const getTokensABI = (tokens) => {
  try {
    const coins = Object.keys(tokens).map((coinKey) => {
      const coin = tokens[coinKey]

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
