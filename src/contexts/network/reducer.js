import { SET_ACTIVE_CHAIN, SET_NETWORKS } from './contants'

export const initialState = {
  activeChain: 1,
  networks: {},
}

const reducerMapper = {
  [SET_NETWORKS]: (state, action) => ({ ...state, networks: action.payload }),
  [SET_ACTIVE_CHAIN]: (state, action) => ({
    ...state,
    activeChain: action.payload,
  }),
}

const networkReducer = (state = initialState, action) =>
  reducerMapper[action.type] ? reducerMapper[action.type](state, action) : state

export default networkReducer
