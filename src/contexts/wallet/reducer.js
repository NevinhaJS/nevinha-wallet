import { CREATE_WALLET, CREATE_ACCOUNT, ADD_ACCOUNT } from './contants'

export const initialState = {
  accounts: [],
}

const reducerMapper = {
  [CREATE_WALLET]: (state, action) => ({ ...state, ...action.payload }),
  [CREATE_ACCOUNT]: (state, action) => ({ ...state, ...action.payload }),
  [ADD_ACCOUNT]: (state, action) => ({
    ...state,
    accounts: [...state.accounts, ...action.payload],
  }),
}

const walletReducer = (state = initialState, action) =>
  reducerMapper[action.type] ? reducerMapper[action.type](state, action) : state

export default walletReducer
