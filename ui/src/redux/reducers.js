import {
  SET_PRIMARY_COLOR, PAGE_VIEW, PAGE_CLICK, SET_IS_MOBILE
} from './actions'

const defaultState = {
  color: "#435892",
  views: [],
  clicks: [],
  isMobile: window.matchMedia('(max-width: 769px)').matches
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_PRIMARY_COLOR:
      return {
        ...state,
        color: action.color
      }
    case SET_IS_MOBILE:
      return {
        ...state,
        isMobile: action.isMobile
      }
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