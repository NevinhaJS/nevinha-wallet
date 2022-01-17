import ethImage from '../../assets/svg/etherium-logo.svg'

export const COVALENT_API_KEY = process.env.REACT_APP_COVALENT_API_KEY

export const NETWORK_LINK =
  'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'

export const defaultNetworkCoins = {
  ETH: {
    name: 'Ethereum',
    logoURI: ethImage,
    symbol: 'ETH',
    address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  },
}

export const availableNetworks = {
  1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  42: 'https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
}

export const networksExplorer = {
  1: 'https://etherscan.io',
  42: 'https://kovan.etherscan.io',
}
//   NET: {
//     name: 'Nevinha Token',
//     logoURI: NT,
//     symbol: 'NET',
//     address: '0x7b7591f95e71a88397034cbe9da82f5f56e93fb7',
//   },
