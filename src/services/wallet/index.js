import Web3Service from '../web3'

const walletService = (() => {
  const saveWallet = (password) => {
    const web3 = Web3Service.getInstance()
    const encryptedWallet = web3.eth.accounts.wallet.encrypt(password)

    localStorage.setItem('wallet', JSON.stringify(encryptedWallet))
  }

  const unlockWallet = async (password) => {
    try {
      const web3 = Web3Service.getInstance()
      const encryptedWallet = JSON.parse(getStoredWallet())

      return web3.eth.accounts.wallet.decrypt(encryptedWallet, password)
    } catch (err) {
      throw err
    }
  }

  const getStoredWallet = () => localStorage.getItem('wallet')

  return {
    saveWallet,
    unlockWallet,
    getStoredWallet,
  }
})()

export default walletService
