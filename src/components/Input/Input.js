import React from 'react'
import { ErrorMessage } from '@hookform/error-message'

import { InputComponent } from './styled'

function Input({
  id,
  register,
  name,
  required,
  className,
  value,
  type = 'text',
  onChange,
  placeholder,
  errors,
}) {
  return (
    <>
      <InputComponent
        value={value}
        className={className}
        id={id}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        {...register(name, { required })}
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
