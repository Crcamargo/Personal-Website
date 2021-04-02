const { detect } = require('detect-browser')

export const SET_PRIMARY_COLOR = "SET_PRIMARY_COLOR"
export const PAGE_VIEW = "PAGE_VIEW"
export const PAGE_CLICK = "PAGE_CLICK"
export const SET_IS_MOBILE = "SET_IS_MOBILE"

export const setPrimaryColor = (color) => ({ type: SET_PRIMARY_COLOR, color })
export const setIsMobile = (isMobile) => ({ type: SET_IS_MOBILE, isMobile })

const browserInfo = detect()
const getEventBase = () => ({
  occurredAt: new Date(),
  browser: {
    ...browserInfo
  }
})

export const pageView = () => ({
  type: PAGE_VIEW,
  event: {
    eventType: "page-view",
    ...getEventBase()
  }
})

export const pageClick = (item) => ({
  type: PAGE_CLICK,
  event: {
    eventType: "page-click",
    itemClicked: item,
    ...getEventBase()
  }
})