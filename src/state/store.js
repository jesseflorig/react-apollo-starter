import React, { createContext, useContext } from "react"
import { useImmerReducer } from "use-immer"
import PropTypes from "prop-types"
import { initialNotificationState, notificationReducer } from "./notification"

export const storeInitialState = {
  notification: initialNotificationState
}

export const StoreContext = createContext(storeInitialState)
export const DispatchContext = createContext(() => {})

const mergeReducers = reducers => {
  const reducerKeys = Object.keys(reducers)
  const nextState = {}
  return (state, action) => {
    reducerKeys.forEach(key => {
      const reducer = reducers[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)
      nextState[key] = nextStateForKey
    })
  }
}

export const StoreProvider = props => {
  const reducer = mergeReducers({
    notification: notificationReducer
  })

  const initialState = { ...storeInitialState, ...props.initialState }
  const [state, dispatch] = useImmerReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </StoreContext.Provider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.node,
  initialState: PropTypes.object
}

export const useDispatch = () => useContext(DispatchContext)
export const useStore = key => useContext(StoreContext)[key]
