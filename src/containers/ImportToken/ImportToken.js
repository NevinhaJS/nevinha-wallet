import React, { useEffect } from 'react'
import useAuthentication from '../../hooks/useAuthentication'
import WalletAddress from '../../components/WalletAddress'

import { ImportTokenContainer, ImportLayout } from './styled'
import TokenForm from './Form/TokenForm'

function ImportToken() {
  const { saveSession } = useAuthentication()

  useEffect(() => {
    saveSession()
  }, [saveSession])

  const handleFormSubmit = (data) => console.log(data)

  return (
    <ImportLayout>
      <WalletAddress />
      <ImportTokenContainer>
        <TokenForm />
      </ImportTokenContainer>
    </ImportLayout>
  )
}

export default ImportToken
