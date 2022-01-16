import { SWRConfig } from 'swr'
import Router from './Router'
import WalletProvider from './contexts/wallet/WalletProvider'
import NetworkProvider from './contexts/network/NetworkProvider'
import cacheProvider from './modules/cache'
import useWeb3Loader from './hooks/useWeb3Loader'
import Footer from './components/Footer'
import TokensProvider from './contexts/tokens/TokensProvider'

function App() {
  //TODO: move it to a loader component
  useWeb3Loader()

  return (
    <SWRConfig value={{ provider: cacheProvider }}>
      <NetworkProvider>
        <TokensProvider>
          <WalletProvider>
            <Router />

            <Footer />
          </WalletProvider>
        </TokensProvider>
      </NetworkProvider>
    </SWRConfig>
  )
}

export default App
