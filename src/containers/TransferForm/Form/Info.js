import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import Box from '../../../components/Box'
import CoinBalance from '../../../components/CoinBalance'
import Web3Service from '../../../services/web3'
import useToken from '../../../hooks/useToken'

import { TransferFormInput, TransferFormLabel } from '../styled'

function Info({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { symbol } = useParams()
  const token = useToken(symbol)

  const web3 = Web3Service.getInstance()

  const addressValidate = (value) =>
    !web3.utils.isAddress(value) ? 'Invalid address' : true

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Box className="wallet-container">
        <CoinBalance item={token} />
      </Box>

      <TransferFormLabel htmlFor="address" className="light">
        Address to transfer
      </TransferFormLabel>
      <TransferFormInput
        id="address"
        type="text"
        placeholder="0x00000000000000"
        name="address"
        required={'Address is required'}
        register={register}
        validate={addressValidate}
        errors={errors}
      />

      <TransferFormLabel htmlFor="amount" className="light">
        Amount
      </TransferFormLabel>
      <TransferFormInput
        id="amount"
        type="number"
        min="0"
        placeholder={`0 ${symbol}`}
        name="amount"
        required={'Amount is required'}
        autoComplete="off"
        register={register}
        errors={errors}
      />

      <button>Continue</button>
    </form>
  )
}

export default Info
