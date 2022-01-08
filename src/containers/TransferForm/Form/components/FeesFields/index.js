import React from 'react'

import { TransferFormInput, TransferFormLabel } from '../../../styled'

function FeesFields({ register, errors }) {
  return (
    <>
      <TransferFormLabel htmlFor="fee" className="light">
        Estimated fee
      </TransferFormLabel>
      <TransferFormInput
        id="fee"
        type="text"
        placeholder="0.0001 ETH"
        name="fee"
        required={'fee is required'}
        register={register}
        errors={errors}
        disabled
      />
      <button>Confirm</button>
    </>
  )
}

export default FeesFields
