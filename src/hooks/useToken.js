import { useActiveChainTokensSelector } from '../contexts/tokens/selectors'
import { ERC20_ABI } from '../services/tokens/constants'

const useToken = (symbol) => {
  const tokens = useActiveChainTokensSelector()

  return {
    ...tokens[symbol],
    abi: ERC20_ABI,
  }
}

export default useToken
