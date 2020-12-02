const { detect } = require('detect-browser')

const browserInfo = detect()
const getEventBase = () => ({
  occurredAt: new Date(),
  browser: {
    ...browserInfo
  }
})

export const SET_PRIMARY_COLOR = "SET_PRIMARY_COLOR"
export const PAGE_VIEW = "PAGE_VIEW"
export const PAGE_CLICK = "PAGE_CLICK"

export const setPrimaryColor = (color) => ({ type: SET_PRIMARY_COLOR, color })

export const pageView = () => ({
  type: PAGE_VIEW,
  event: {
    ...getEventBase()
  }
})

export const pageClick = (item) => ({
  type: PAGE_CLICK,
  event: {
    itemClicked: item,
    ...getEventBase()
  }
})