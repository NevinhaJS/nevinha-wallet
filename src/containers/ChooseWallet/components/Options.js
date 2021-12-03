import React, { useEffect } from 'react'
import { useContextSelector } from 'use-context-selector'
import { WalletContext } from '../../../contexts/wallet/WalletProvider'
import logo from '../../../assets/svg/logo.svg'
import { createWallet } from '../../../contexts/wallet/actions'

import * as S from '../styled'
function Options({ onOptionClick }) {
  const dispatch = useContextSelector(WalletContext, (s) => s[1])
  const wallet = useContextSelector(WalletContext, (s) => s[0])

  useEffect(() => {
    if (wallet) onOptionClick('backup')
  }, [wallet, onOptionClick])

  const onCreateWalletClick = () => createWallet(dispatch)

  const onImportWalletClick = () => onOptionClick('importWallet')

  return (
    <S.ChooseContainer>
      <S.NevinhaLogo src={logo} className="App-logo" alt="logo" />

      <S.ChooseBox onClick={onCreateWalletClick}>
        <p>Create new wallet</p>
      </S.ChooseBox>

      <S.ChooseBox onClick={onImportWalletClick}>
        <p>Import wallet</p>
      </S.ChooseBox>
    </S.ChooseContainer>
  )
}

export default Options
