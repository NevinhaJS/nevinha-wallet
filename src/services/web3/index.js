import Web3 from 'web3'

const Web3Service = (() => {
  let web3 = null

  const getInstance = () => web3
  const changeProvider = (provider) => (web3 = new Web3(provider))

  return {
    getInstance,
    changeProvider,
  }
})()

export default Web3Service
