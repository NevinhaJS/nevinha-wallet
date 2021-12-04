import React, { useState } from 'react'
import ChooseWallet from './containers/ChooseWallet'
import Wallet from './containers/Wallet'

const screensMapper = {
  chooseWallet: ChooseWallet,
  wallet: Wallet,
}

function Router() {
  const [screen, setScreen] = useState('chooseWallet')
  const Component = screensMapper[screen]

  return <Component onScreenChange={setScreen} />
}

export default Router
