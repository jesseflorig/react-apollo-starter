import { useEffect } from "react"
import { TweenLite, Power4 } from "gsap"

const useTransition = (el, duration, transition) => {
  return useEffect(() => {
    if (!el) return
    const easing = transition.ease || "easeOut"
    transition.ease = Power4[easing]
    TweenLite.to(el, duration, transition)
  }, [el])
}

export default useTransition
