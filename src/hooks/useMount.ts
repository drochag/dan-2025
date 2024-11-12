import { useEffect, useState } from 'react'

const useMount = (delay = 0) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true)
    }, delay)

    return () => clearTimeout(timeout)
  }, [delay])

  return mounted
}

export default useMount
