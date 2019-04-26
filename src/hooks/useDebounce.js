import { useEffect, useState } from "react"

export const useDebounce = (func, delay, value) => {
  useEffect(() => {
    const timer = setTimeout(() => func(), delay)
    return () => clearTimeout(timer)
  }, [value, delay])
}

export const useStateDebounce = (value, delay) => {
  const [dbVal, setDbVal] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDbVal(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return dbVal
}
