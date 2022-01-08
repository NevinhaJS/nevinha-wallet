import React, { useEffect } from 'react'
import Layout from '../../infra/Layout'
import useAuthentication from '../../hooks/useAuthentication'
import WalletAddress from '../../components/WalletAddress'
import MultiStepForm from '../../infra/MultiStepForm'

import { stepsDefinition } from './const'
import { TransferFormContainer } from './styled'
import Info from './Form/Info'
import Fees from './Form/Fees'
import Success from './Form/Success'

const forms = {
  INFO: Info,
  FEES: Fees,
  SUCCESS: Success,
}

function TransferForm() {
  const { saveSession } = useAuthentication()

  useEffect(() => {
    saveSession()
  }, [saveSession])

  const handleFormSubmit = (data) => console.log(data)

  return (
    <Layout>
      <WalletAddress />

      <TransferFormContainer>
        <MultiStepForm
          onSubmit={handleFormSubmit}
          definition={stepsDefinition}
          forms={forms}
        />
      </TransferFormContainer>
    </Layout>
  )
}

export default TransferForm
