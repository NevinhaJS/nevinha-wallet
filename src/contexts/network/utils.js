export const formatNetworkItems = (items) => {
  if (!items || !items.length) return {}

  const networks = items.reduce(
    (acc, item) => ({
      ...acc,
      [item.chain_id]: item,
    }),
    {}
  )

  return networks
}
