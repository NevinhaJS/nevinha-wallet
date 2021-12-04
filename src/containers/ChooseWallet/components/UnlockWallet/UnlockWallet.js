import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'

import { ReactComponent as SubmitArrowIcon } from '../../../../assets/svg/submit-arrow.svg'
import { importWallet } from '../../../../contexts/wallet/actions'
import { WalletContext } from '../../../../contexts/wallet/WalletProvider'
import walletService from '../../../../services/wallet'

import * as S from './styled'

function UnlockWallet() {
  const [wallet, dispatch] = useContextSelector(WalletContext, (s) => s)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (wallet) navigate('/wallet')
  }, [wallet, navigate])

  const handlePasswordChange = (e) => {
    if (error) setError(false)
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const accounts = await walletService.unlockWallet(password)
      importWallet(dispatch, {
        password,
        accounts,
      })
    } catch (_e) {
      setError(true)
    }
  }

  return (
    <S.UnlockWalletContainer as="form" onSubmit={handleSubmit}>
      <S.UnlockWalletTitle className="light">
        Please inform your password to unlock your wallet
      </S.UnlockWalletTitle>

      <S.UnlockWalletInputContainer>
        <S.UnlockWalletInput
          required
          onChange={handlePasswordChange}
          value={password}
        />

        <S.UnlockWalletButton type="submit">
          <SubmitArrowIcon />
        </S.UnlockWalletButton>
      </S.UnlockWalletInputContainer>

      {error && (
        <S.UnlockWalletError className="error">
          Please inform a valid key
        </S.UnlockWalletError>
      )}
    </S.UnlockWalletContainer>
  )
}

export default UnlockWallet
