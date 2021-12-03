import Web3Service from '../../services/web3'
import { CREATE_WALLET, ADD_ACCOUNT } from './contants'

export const createWallet = (dispatch) => {
  const web3 = Web3Service.getInstance()
  const account = web3.eth.accounts.create()

  dispatch({
    type: CREATE_WALLET,
    payload: {
      accounts: [account],
    },
  })
}

export const addAccount = (dispatch, account) => {
  dispatch({
    type: ADD_ACCOUNT,
    payload: account,
  })
}
