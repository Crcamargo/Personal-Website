const { detect } = require('detect-browser')

const browserInfo = detect()
const getEventBase = () => ({
  occurredAt: new Date(),
  browser: {
    ...browserInfo
  }
})

export const SET_TAB = "SET_TAB"
export const SET_HOME = "SET_HOME"
export const SET_PRIMARY_COLOR = "SET_PRIMARY_COLOR"
export const PAGE_VIEW = "PAGE_VIEW"
export const PAGE_CLICK = "PAGE_CLICK"

export const setTab = (tab) => ({ type: SET_TAB, tab })
export const setHome = (home) => ({ type: SET_HOME, home })
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

export const navigateToGreeting = () => setTab("greeting")
export const navigateToExperience = () => setTab("experience")
export const navigateToProjects = () => setTab("projects")
export const navigateToAnalytics = () => setTab("analytics")

export const navigateToAbout = () => setHome("about")
export const navigateToResume = () => setHome("resume")