import React, { useState } from 'react'

import { useNavigate, useSearchParams } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'

import { ReactComponent as SubmitArrowIcon } from '../../../../assets/svg/submit-arrow.svg'
import { createPassword } from '../../../../contexts/wallet/actions'
import { WalletContext } from '../../../../contexts/wallet/WalletProvider'

import * as S from './styled'

function CreatePassword() {
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const dispatch = useContextSelector(WalletContext, (s) => s[1])

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    createPassword(dispatch, password)
    navigate('/' + searchParams.get('next'))
  }

  return (
    <S.CreatePasswordContainer as="form" onSubmit={handleSubmit}>
      <S.CreatePasswordTitle className="light">
        First you need to inform a password, to unlock your wallet later
      </S.CreatePasswordTitle>

      <S.CreatePasswordInputContainer>
        <S.CreatePasswordInput
          required
          onChange={handlePasswordChange}
          value={password}
        />
        <S.CreatePasswordButton type="submit">
          <SubmitArrowIcon />
        </S.CreatePasswordButton>
      </S.CreatePasswordInputContainer>
    </S.CreatePasswordContainer>
  )
}

export default CreatePassword
