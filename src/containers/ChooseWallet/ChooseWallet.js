import { useContextSelector } from 'use-context-selector'
import { WalletContext } from '../../contexts/wallet/WalletProvider'
import Options from './components/Options'
import Backup from './components/Backup/Backup'

import * as S from './styled'
import { useState } from 'react'
import ImportWallet from './components/ImportWallet/ImportWallet'

const screenMapper = {
  options: Options,
  backup: Backup,
  importWallet: ImportWallet,
}

function ChooseWallet({ onScreenChange }) {
  const [screen, setScreen] = useState('options')
  const Component = screenMapper[screen]

  return (
    <S.ChooseWrapper>
      <Component onScreenChange={onScreenChange} onOptionClick={setScreen} />
    </S.ChooseWrapper>
  )
}

export default ChooseWallet
