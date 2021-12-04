import Web3Service from '../web3'

const walletService = (() => {
  const saveWallet = (password) => {
    const web3 = Web3Service.getInstance()
    const encryptedWallet = web3.eth.accounts.wallet.encrypt(password)

    localStorage.setItem('wallet', JSON.stringify(encryptedWallet))
  }

  const unlockWallet = (password) => {
    const web3 = Web3Service.getInstance()
    const encryptedWallet = JSON.parse(localStorage.getItem('wallet'))

    web3.eth.accounts.wallet.decrypt(encryptedWallet, password)
  }

  return {
    saveWallet,
    unlockWallet,
  }
})()

export default walletService
