import { useActor } from '@xstate/react'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import Box from '../../../components/Box'
import CoinBalance from '../../../components/CoinBalance'
import { MultiStepContext } from '../../../infra/MultiStepForm/MultiStepForm'
import { initialCoins } from '../../../services/tokens/contants'

import { FeesBox, TransferFormInput, TransferFormLabel } from '../styled'

function Fees({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const multiStepContext = useContext(MultiStepContext)
  const [state] = useActor(multiStepContext.authService)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FeesBox className="wallet-container">
        <CoinBalance item={initialCoins.ETH} />

        <p className="primary">
          <span className="light">To: </span>
          {state.context.form?.INFO?.address}
        </p>
        <p className="primary">
          <span className="light">Amount: </span>
          {state.context.form?.INFO?.amount}
        </p>
      </FeesBox>

      <TransferFormLabel htmlFor="estimated-fee" className="light">
        Estimated fee
      </TransferFormLabel>
      <TransferFormInput
        id="estimated-fee"
        type="number"
        placeholder="0.0001 ETH"
        name="estimated-fee"
        required={'estimated-fee is required'}
        register={register}
        errors={errors}
      />

      <TransferFormLabel htmlFor="maxFee" className="light">
        Max fee
      </TransferFormLabel>
      <TransferFormInput
        id="maxFee"
        type="text"
        placeholder="0 ETH"
        name="maxFee"
        required={'max fee is required'}
        register={register}
        errors={errors}
      />

      <button>Confirm</button>
    </form>
  )
}

export default Fees
