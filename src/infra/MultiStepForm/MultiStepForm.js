import React from 'react'
import { useMachine } from '@xstate/react'
import { createLazyMachine } from './utils'

function MultiStepForm({ onSubmit, definition, forms }) {
  const [state, send] = useMachine(() => createLazyMachine(definition))

  const Component = forms[state.value]

  const handleFormSubmit = (data) => {
    if (state.done)
      return onSubmit({ ...state.context.form, [state.value]: data })

    send('next', { data: { key: state.value, value: data } })
  }

  if (!Component) return null

  return <Component onSubmit={handleFormSubmit} />
}

export default MultiStepForm
