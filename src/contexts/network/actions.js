import { SET_ACTIVE_CHAIN } from './contants'

export const setActiveChain = (dispatch, chainId) => {
  return {
    type: SET_ACTIVE_CHAIN,
    payload: chainId,
  }
}
