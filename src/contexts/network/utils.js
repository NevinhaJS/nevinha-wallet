export const formatNetworkItems = (data) => {
  if (!data) return {}

  const networks = data.items.reduce(
    (acc, item) => ({
      ...acc,
      [item.chain_id]: item,
    }),
    {}
  )

  return networks
}
