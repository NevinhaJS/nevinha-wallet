import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ChooseWallet from './containers/ChooseWallet'
import Balances from './containers/Balances'
import Options from './containers/ChooseWallet/components/Options'
import Backup from './containers/ChooseWallet/components/Backup'
import ImportWallet from './containers/ChooseWallet/components/ImportWallet'
import CreatePassword from './containers/ChooseWallet/components/CreatePassword'
import UnlockWallet from './containers/ChooseWallet/components/UnlockWallet'
import RequireSignedOut from './infra/RequireSignedOut'
import RequireAuth from './infra/RequireAuth'
import TransferBalance from './containers/TransferBalance/TransferBalance'
import TransferForm from './containers/TransferForm'
import ImportToken from './containers/ImportToken'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChooseWallet />}>
          <Route element={<RequireSignedOut />}>
            <Route path="/" element={<Options />} />
          </Route>

          <Route path="/create-password" element={<CreatePassword />} />
          <Route path="/unlock-wallet" element={<UnlockWallet />} />
          <Route path="/import" element={<ImportWallet />} />

          <Route element={<RequireAuth />}>
            <Route path="/backup" element={<Backup />} />
          </Route>
        </Route>

        <Route path="/wallet" element={<RequireAuth />}>
          <Route exact path="/wallet" element={<Balances />} />
          <Route
            exact
            path="/wallet/transfer/:symbol"
            element={<TransferBalance />}
          />
          <Route
            path="/wallet/transfer/:symbol/form"
            element={<TransferForm />}
          />
          <Route path="/wallet/import-token" element={<ImportToken />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
