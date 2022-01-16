import React from 'react'
import { ErrorMessage } from '@hookform/error-message'

import { InputComponent } from './styled'

function Input({
  register,
  name,
  required,
  type = 'text',
  onChange,
  errors,
  validate,
  ...rest
}) {
  return (
    <>
      <InputComponent
        {...rest}
        type={type}
        {...register(name, {
          required,
          validate,
          onChange,
        })}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        className="error input-error"
        as="p"
      />
    </>
  )
}

export default Input
