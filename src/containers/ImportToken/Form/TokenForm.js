import React from 'react'
import { useForm } from 'react-hook-form'

import { TransferFormInput, TransferFormLabel } from '../styled'

function TokenForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TransferFormLabel htmlFor="address" className="light">
        Token contract address
      </TransferFormLabel>
      <TransferFormInput
        id="address"
        type="text"
        placeholder="0x00000000000000"
        name="address"
        required={'Token contract is required'}
        register={register}
        errors={errors}
      />

      <TransferFormLabel htmlFor="tokenSymbol" className="light">
        Token symbol
      </TransferFormLabel>
      <TransferFormInput
        id="tokenSymbol"
        type="text"
        name="tokenSymbol"
        placeholder="token symbol will be displayed here"
        required={'Token symbol is required'}
        register={register}
        disabled
        errors={errors}
      />

      <TransferFormLabel htmlFor="tokenDecimal" className="light">
        Token decimals
      </TransferFormLabel>
      <TransferFormInput
        id="tokenDecimal"
        type="text"
        disabled
        name="tokenDecimal"
        placeholder="token decimal will be displayed here"
        required={'token decimal is required'}
        register={register}
        errors={errors}
      />

      <button>Continue</button>
    </form>
  )
}

export default TokenForm
