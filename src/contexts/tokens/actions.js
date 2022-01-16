import { SET_ONE_INCH_TOKENS, ADD_TOKEN } from './constants'

export const addToken = (activeChain, token) => {
  console.log(activeChain)
  return {
    type: ADD_TOKEN,
    activeChain,
    payload: token,
  }
}

export const setOneInchTokens = (tokens) => {
  return {
    type: SET_ONE_INCH_TOKENS,
    payload: tokens,
  }
}
