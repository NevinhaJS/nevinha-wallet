import Web3Service from '../../services/web3'
import { CREATE_WALLET, ADD_ACCOUNT, CHANGE_PASSWORD } from './constants'

export const createWallet = (dispatch) => {
  const web3 = Web3Service.getInstance()
  const accounts = web3.eth.accounts.wallet.create(1)

  dispatch({
    type: CREATE_WALLET,
    payload: {
      accounts: [accounts[0]],
    },
  })
}

export const createWalletWithAccount = (dispatch, account) => {
  const web3 = Web3Service.getInstance()

  web3.eth.accounts.wallet.add(account)

  dispatch({
    type: CREATE_WALLET,
    payload: {
      accounts: [account],
    },
  })
}

export const importWallet = (dispatch, wallet) => {
  dispatch({
    type: CREATE_WALLET,
    payload: wallet,
  })
}

export const createPassword = (dispatch, password) => {
  dispatch({
    type: CHANGE_PASSWORD,
    payload: password,
  })
}

export const addAccount = (dispatch, account) => {
  dispatch({
    type: ADD_ACCOUNT,
    payload: account,
  })
}
