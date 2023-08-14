import { useCallback, useRef } from 'react'

/**
 * @param {Function} fn
 * @param {object} options
 * @param {number} options.delay
 */
const useDebounce = (fn, { delay }) => {
  const timer = useRef()
  return useCallback((...args) => {
    if (timer.current) clearTimeout(timer.current)

    timer.current = setTimeout(() => {
      fn(...args)
      clearTimeout(timer.current)
      timer.current = null
    }, delay);
  }, [fn, delay])
}

export default useDebounce