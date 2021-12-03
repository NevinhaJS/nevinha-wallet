import React, { useState } from 'react'
import ChooseWallet from './containers/ChooseWallet'

const screensMapper = {
  chooseWallet: ChooseWallet,
}

function Router() {
  const [screen, setScreen] = useState('chooseWallet')
  const Component = screensMapper[screen]

  return <Component onScreenChange={setScreen} />
}

export default Router
