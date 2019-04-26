import { useEffect } from "react"

const useClickAway = (ref, handleClick) => {
  useEffect(() => {
    const handleDocumentClick = event => {
      const node = ref.current
      const doc = (node && node.ownerDocument) || document
      if (
        doc.documentElement &&
        doc.documentElement.contains(event.target) &&
        !node.contains(event.target)
      ) {
        handleClick(event)
      }
    }

    document.addEventListener("click", handleDocumentClick)

    return () => {
      document.removeEventListener("click", handleDocumentClick)
    }
  }, [ref])
}

export default useClickAway
