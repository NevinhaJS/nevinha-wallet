import { defaultNetworkCoins } from '../../services/fetcher/constants'
import { ADD_TOKEN, SET_ONE_INCH_TOKENS } from './constants'

export const initialState = {
  1: defaultNetworkCoins,
  42: defaultNetworkCoins,
  oneInch: {},
}

const reducerMapper = {
  [ADD_TOKEN]: (state, action) => ({
    ...state,
    [action.activeChain]: {
      ...state[action.activeChain],
      [action.payload.symbol]: action.payload,
    },
  }),
  [SET_ONE_INCH_TOKENS]: (state, action) => ({
    ...state,
    oneInch: action.payload,
  }),
}

const tokensReducer = (state = initialState, action) =>
  reducerMapper[action.type] ? reducerMapper[action.type](state, action) : state

export default tokensReducer
