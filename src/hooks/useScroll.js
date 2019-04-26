import { useEffect, useState } from "react"

const useScroll = loading => {
  const [scrollPos, setScrollPos] = useState()

  const handleScroll = () => {
    if (!loading && window.scrollY !== 0) {
      setScrollPos(window.scrollY)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollPos
}

export default useScroll
