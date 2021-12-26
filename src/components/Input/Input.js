import React from 'react'

import { InputComponent } from './styled'

function Input({ id, className, value, type = 'text', onChange, placeholder }) {
  return (
    <InputComponent
      value={value}
      className={className}
      id={id}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Input
