import { useEffect } from "react"
import { useImmerReducer } from "use-immer"

const initialMouseState = {
  x: null,
  y: null,
  isDragging: false,
  diffX: null,
  diffY: null,
  wheelDelta: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DRAGGING":
      state.isDragging = true
      return
    case "UNSET_DRAGGING":
      state.isDragging = false
      return
    case "SET_POSITION":
      state.x = action.position.x
      state.y = action.position.y
      return
    case "SET_DIFF":
      state.diffX = action.diff.x - state.x
      state.diffY = action.diff.y - state.y
      return
    case "SET_WHEEL":
      state.wheelDelta = action.wheelDelta
  }
}

export default function useMouse() {
  const [state, dispatch] = useImmerReducer(reducer, initialMouseState)

  function updateMousePosition(e) {
    const { screenX: x, screenY: y } = e
    dispatch({ type: "SET_POSITION", position: { x, y } })
  }

  function updateMouseDiff(e) {
    const { screenX: x, screenY: y } = e
    dispatch({ type: "SET_DIFF", diff: { x, y } })
  }

  function handleMouseMove(e) {
    updateMouseDiff(e)
    updateMousePosition(e)
  }

  function handleMouseDown(e) {
    if (e.buttons === 1) {
      dispatch({ type: "SET_DRAGGING" })
    }
  }

  function handleMouseUp() {
    dispatch({ type: "UNSET_DRAGGING" })
  }

  function round(n) {
    return n > 0 ? Math.ceil(n) : Math.floor(n)
  }

  function normalize(n) {
    return round((1 / 50) * n) * -1
  }

  function handleWheel(e) {
    const { deltaY: y } = e
    const normY = normalize(y)
    dispatch({ type: "SET_WHEEL", wheelDelta: normY })
  }

  // Map event listeners: {eventName: callbackName}
  const eventMap = {
    mousedown: handleMouseDown,
    mousemove: handleMouseMove,
    mouseup: handleMouseUp,
    wheel: handleWheel
  }

  useEffect(() => {
    // Create event listeners
    Object.keys(eventMap).map(key => {
      document.addEventListener(key, eventMap[key])
    })
    return () => {
      // Tear down event listeners
      Object.keys(eventMap).map(key => {
        document.removeEventListener(key, eventMap[key])
      })
    }
  }, [])

  return state
}
