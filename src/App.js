import { SWRConfig } from 'swr'
import Router from './Router'
import WalletProvider from './contexts/wallet/WalletProvider'
import useWeb3Loader from './hooks/useWeb3Loader'
import Footer from './components/Footer'

function App() {
  //TODO: move it to a loader component
  useWeb3Loader()

  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <WalletProvider>
        <Router />

        <Footer />
      </WalletProvider>
    </SWRConfig>
  )
}

export default App
