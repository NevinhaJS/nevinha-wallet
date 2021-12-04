import React from 'react'
import { useContextSelector } from 'use-context-selector'
import { WalletContext } from '../../../../contexts/wallet/WalletProvider'
import { ChooseBox } from '../../styled'
import { ReactComponent as Logo } from '../../../../assets/svg/arrow.svg'
import * as S from './styled'

function Backup({ onScreenChange }) {
  const createdWallet = useContextSelector(WalletContext, (s) => s[0])
  const privateKey = createdWallet?.accounts[0]?.privateKey

  const handlePrivateKeyClick = () => {
    navigator.clipboard.writeText(privateKey)
  }

  return (
    <S.BackupContainer>
      <S.BackupTitle className="light">
        Please save your private key in a secure place
      </S.BackupTitle>

      <ChooseBox onClick={handlePrivateKeyClick} hoverable={false}>
        <S.BackupKey title="click to copy to your keyboard" className="primary">
          {privateKey}
        </S.BackupKey>
      </ChooseBox>

      <S.BackupButton
        onClick={() => onScreenChange('wallet')}
        className="primary"
      >
        To my wallet <Logo />
      </S.BackupButton>
    </S.BackupContainer>
  )
}

export default Backup
