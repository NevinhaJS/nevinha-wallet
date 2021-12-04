import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ChooseWallet from './containers/ChooseWallet'
import Wallet from './containers/Wallet'
import Options from './containers/ChooseWallet/components/Options'
import Backup from './containers/ChooseWallet/components/Backup/Backup'
import ImportWallet from './containers/ChooseWallet/components/ImportWallet/ImportWallet'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChooseWallet />}>
          <Route path="/" element={<Options />} />
          <Route path="/backup" element={<Backup />} />
          <Route path="/import" element={<ImportWallet />} />
        </Route>
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
