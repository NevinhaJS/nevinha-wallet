import { useRef, useEffect, useCallback } from 'react'

const usePolling = (fn, timing = 5000) => {
  const pollingRef = useRef(null)

  const startPolling = useCallback(() => {
    fn()

    pollingRef.current = setInterval(() => fn(), timing)
  }, [fn, timing])

  const cancelPolling = useCallback(() => {
    if (!pollingRef.current) return

    clearInterval(pollingRef.current)
  }, [])

  useEffect(() => cancelPolling, [])

  return { startPolling, cancelPolling }
}

export default usePolling
