import React from 'react'
import Home from './Home'
import Experience from './Experience'
import Projects from './Projects'
import Analytics from './Analytics'
import { Switch, Route } from   'react-router-dom'

export default () => {
  return(
    <div className='main-container'>
      <Switch>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/analytics">
          <Analytics />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}
