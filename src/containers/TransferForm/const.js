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
      on: {
        next: {
          target: 'SUCCESS',
          actions: ['update'],
        },
      },
    },
    SUCCESS: {
      type: 'final',
    },
  },
}
