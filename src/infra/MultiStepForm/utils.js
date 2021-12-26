import { createMachine, assign } from 'xstate'

export const createLazyMachine = (definition) =>
  createMachine(
    {
      ...definition,
      context: {
        form: {},
      },
    },
    {
      actions: {
        update: assign({
          form: (context, { data: { key, value } }) => ({
            ...context.form,
            [key]: value,
          }),
        }),
      },
    }
  )
