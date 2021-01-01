import React from 'react';
import './App.css';

import { Provider } from 'react-redux'
import store from './redux/store'

import { pageView } from './redux/actions'

import Main from './components/Main'
import NavBar from './components/NavBar'

import {
  BrowserRouter as Router,
} from "react-router-dom"

function App() {
  store.dispatch(pageView())
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Main />
          <NavBar />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
