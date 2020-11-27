import React from 'react';
import './App.css';

import { Provider } from 'react-redux'
import store from './redux/store'

import { pageView } from './redux/actions'

import Main from './components/Main'
import NavBar from './components/NavBar'

function App() {
  store.dispatch(pageView())
  return (
    <Provider store={store}>
      <div className="App">
      <Main />
        <NavBar />
      </div>
    </Provider>
  );
}

export default App;
