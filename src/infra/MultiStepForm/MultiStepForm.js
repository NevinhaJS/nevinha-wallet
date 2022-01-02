import React, { createContext } from 'react'
import { createLazyMachine } from './utils'
import { useInterpret, useSelector } from '@xstate/react'

export const MultiStepContext = createContext({})

const stateSelector = (state) => {
  return [state.value, state.context, state.done]
}

function MultiStepForm({ onSubmit, definition, forms }) {
  const machine = () => createLazyMachine(definition)
  const authService = useInterpret(machine)
  const [value, context, isDone] = useSelector(authService, stateSelector)

  const { send } = authService
  const Component = forms[value]

  const handleFormSubmit = (data) => {
    if (isDone) return onSubmit({ ...context.form, [value]: data })

    send('next', { data: { key: value, value: data } })
  }

  if (!Component) return null

  return (
    <MultiStepContext.Provider value={{ authService }}>
      <Component onSubmit={handleFormSubmit} />
    </MultiStepContext.Provider>
  )
}

export default MultiStepForm
