import React, { useEffect } from 'react'
import Layout from '../../infra/Layout'
import useAuthentication from '../../hooks/useAuthentication'
import WalletAddress from '../../components/WalletAddress'
import Box from '../../components/Box'
import CoinBalance from '../../components/CoinBalance'
import { initialCoins } from '../../services/tokens/contants'
import MultiStepForm from '../../infra/MultiStepForm'

import { stepsDefinition } from './const'
import {
  TransferFormContainer,
  TransferFormInput,
  TransferFormLabel,
} from './styled'

const forms = {
  INFO: ({ onSubmit }) => (
    <>
      <Box className="wallet-container">
        <CoinBalance item={initialCoins.ETH} />
      </Box>

      <TransferFormLabel htmlFor="address" className="light">
        Address to transfer
      </TransferFormLabel>
      <TransferFormInput
        id="address"
        type="text"
        placeholder="0x00000000000000"
      />

      <TransferFormLabel htmlFor="amount" className="light">
        Amount
      </TransferFormLabel>
      <TransferFormInput id="amount" type="number" placeholder="0 ETH" />
    </>
  ),
  FEES: ({ onSubmit }) => (
    <p className="light" onClick={onSubmit}>
      fees component
    </p>
  ),
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
