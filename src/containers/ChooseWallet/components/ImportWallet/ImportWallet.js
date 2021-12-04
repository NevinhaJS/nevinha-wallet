import React, { useState, useEffect } from 'react'
import { useContextSelector } from 'use-context-selector'

import { ReactComponent as SubmitArrowIcon } from '../../../../assets/svg/submit-arrow.svg'
import Web3Service from '../../../../services/web3'
import { createWalletWithAccount } from '../../../../contexts/wallet/actions'
import { WalletContext } from '../../../../contexts/wallet/WalletProvider'
import { useNavigate } from 'react-router-dom'

import * as S from './styled'

function ImportWallet() {
  const [privateKey, setPrivateKey] = useState('')
  const [wallet, dispatch] = useContextSelector(WalletContext, (s) => s)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (wallet?.accounts) navigate('/wallet')
  }, [wallet, navigate])

  const handlePrivateKeyChange = (e) => {
    if (error) setError(false)

    setPrivateKey(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const web3 = Web3Service.getInstance()

    try {
      const account = await web3.eth.accounts.privateKeyToAccount(privateKey)

      createWalletWithAccount(dispatch, account)
    } catch (err) {
      setError(true)
    }
  }

  return (
    <S.ImportContainer as="form" onSubmit={handleSubmit}>
      <S.ImportTitle className="light">
        Please inform your private key on the input bellow
      </S.ImportTitle>

      <S.ImportInputContainer>
        <S.ImportInput
          required
          onChange={handlePrivateKeyChange}
          value={privateKey}
          type="password"
        />
        <S.ImportButton>
          <SubmitArrowIcon />
        </S.ImportButton>
      </S.ImportInputContainer>

      {error && (
        <S.ImportError className="error">
          Please inform a valid key
        </S.ImportError>
      )}
    </S.ImportContainer>
  )
}

export default ImportWallet
