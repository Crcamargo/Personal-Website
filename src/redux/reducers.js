import {
  SET_TAB, SET_PRIMARY_COLOR, PAGE_VIEW, PAGE_CLICK, SET_HOME
} from './actions'

import { combineReducers } from 'redux'

const defaultState = {
  tab: "greeting",
  color: "#435892",
  home: "resume"
}

export const stateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TAB:
      return {
        ...state,
        tab: action.tab
      }
    case SET_HOME:
      return {
        ...state,
        home: action.home
      }
    case SET_PRIMARY_COLOR:
      return {
        ...state,
        color: action.color
      }
    default:
      return state
  }
}

const defaultEvents = {
  views: [],
  clicks: []
}

export const eventReducer = (state = defaultEvents, action) => {
  switch (action.type) {
    case PAGE_VIEW:
      return {
        ...state,
        views: [
          ...state.views,
          action.event
        ]
      }
    case PAGE_CLICK:
      return {
        ...state,
        clicks: [
          ...state.clicks,
          action.event
        ]
      }
    default:
      return state
  }
}

export default combineReducers({
  current: stateReducer,
  events: eventReducer
})