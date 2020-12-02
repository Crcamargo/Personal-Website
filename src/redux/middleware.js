import { SET_PRIMARY_COLOR } from "./actions"

export default store => next => action => {
  if (action.type === SET_PRIMARY_COLOR) {
    document.documentElement.style.setProperty('--primary-color', action.color)
  }

  next(action)
}
