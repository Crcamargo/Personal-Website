import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import defaultMiddleware from './middleware'

const store = createStore(reducer, applyMiddleware(defaultMiddleware))

store.subscribe(() => console.log(store.getState()))

export default store