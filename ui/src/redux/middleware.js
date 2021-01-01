import { PAGE_CLICK, PAGE_VIEW, SET_PRIMARY_COLOR } from "./actions"

const eventEndpoint = "/api/events"

function sendEvent(event) {
  console.log(`Sending event ${JSON.stringify(event)}`)
  let requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(event)
  }
  fetch(eventEndpoint, requestOptions)
    .catch(error => console.log(`Error sending event. error: ${error}`))
}

export default store => next => action => {
  if (action.type === SET_PRIMARY_COLOR) {
    document.documentElement.style.setProperty('--primary-color', action.color)
  }

  if (action.type === PAGE_VIEW || action.type === PAGE_CLICK) {
    sendEvent(action.event)
  }

  next(action)
}
