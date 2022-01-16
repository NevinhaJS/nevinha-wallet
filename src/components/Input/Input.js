import React from 'react'
import { ErrorMessage } from '@hookform/error-message'

import { InputComponent } from './styled'

function Input({
  id,
  disabled,
  register,
  name,
  required,
  className,
  value,
  type = 'text',
  onChange,
  placeholder,
  validate,
  errors,
}) {
  return (
    <>
      <InputComponent
        disabled={disabled}
        value={value}
        className={className}
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(name, { required, validate, onChange })}
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
