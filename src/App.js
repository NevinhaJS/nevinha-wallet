import Router from './Router'
import WalletProvider from './contexts/wallet/WalletProvider'
import useWeb3Loader from './hooks/useWeb3Loader'
import Footer from './components/Footer'

function App() {
  //TODO: move it to a loader component
  useWeb3Loader()

  return (
    <WalletProvider>
      <Router />

      <Footer />
    </WalletProvider>
  )
}

export default App
