import React from 'react'
import WalletAddress from '../../components/WalletAddress'

import { ImportTokenContainer, ImportLayout } from './styled'
import TokenForm from './Form/TokenForm'

function ImportToken() {
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
