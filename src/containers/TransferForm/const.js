export const stepsDefinition = {
  id: 'transferForm',
  initial: 'INFO',
  states: {
    INFO: {
      on: {
        next: {
          target: 'FEES',
          actions: ['update'],
        },
      },
    },
    FEES: {
      type: 'final',
    },
  },
}
