import { SWRConfig } from 'swr'
import Router from './Router'
import WalletProvider from './contexts/wallet/WalletProvider'
import NetworkProvider from './contexts/network/NetworkProvider'
import cacheProvider from './modules/cache'
import useWeb3Loader from './hooks/useWeb3Loader'
import Footer from './components/Footer'

function App() {
  //TODO: move it to a loader component
  useWeb3Loader()

  return (
    <SWRConfig value={{ provider: cacheProvider }}>
      <NetworkProvider>
        <WalletProvider>
          <Router />

          <Footer />
        </WalletProvider>
      </NetworkProvider>
    </SWRConfig>
  )
}

export default App
