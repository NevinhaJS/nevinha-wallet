import ethImage from '../../assets/svg/etherium-logo.svg'
import bnbImage from '../../assets/svg/bnb.svg'
import polygonImage from '../../assets/svg/polygon-matic-logo.svg'

export const COVALENT_API_KEY = process.env.REACT_APP_COVALENT_API_KEY
export const COVALENT_NETWORK_ID = 1 // ETH Main Net
export const NETWORK_LINK =
  'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'

export const initialCoins = {
  ETH: {
    name: 'Ethereum',
    image: ethImage,
    symbol: 'ETH',
    address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  },
  MATIC: {
    name: 'Matic Token',
    image: polygonImage,
    symbol: 'MATIC',
    address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
  },
}

// export const COVALENT_NETWORK_ID = 42 // Kovan Network
// export const NETWORK_LINK =
//   'https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'

// export const initialCoins = {
//   ETH: {
//     name: 'Ethereum',
//     image: ethImage,
//     symbol: 'ETH',
//     address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
//   },
//   BNB: {
//     name: 'Binance Coin',
//     image: bnbImage,
//     symbol: 'BNB',
//     address: '0xad87240465f2a41787b0d8704fa01b61bd9ec869',
//   },
// }
