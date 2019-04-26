export const initialNotificationState = {
  message: null,
  type: null,
  open: false
}

const actions = {
  throwNotification: state => ({ message, type }) => {
    state.message = message
    state.type = type
    state.open = true
  },
  closeNotification: state => () => {
    state.open = false
  }
}

export const notificationReducer = (state, { type, payload }) => {
  actions[type] && actions[type](state)(payload)
}
