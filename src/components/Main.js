import React from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import Experience from './Experience'
import Projects from './Projects'
import Analytics from './Analytics'
import Constants from '../Constants'
import { Switch, Route } from   'react-router-dom'

const Main = ({ tab }) => {
  let comp = undefined

  switch (tab) {
    case Constants.State.Tabs.Greeting:
      comp = <Home />
      break
    
    case Constants.State.Tabs.Experience:
      comp = <Experience />
      break
    
    case Constants.State.Tabs.Projects:
      comp = <Projects />
      break
    
    case Constants.State.Tabs.Analytics:
      comp = <Analytics />
      break
    
    default:
      comp = <span>{tab}</span>
  }

  return(
    <div className='main-container'>
      <Switch>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tab: state.current.tab
  }
}

export default connect(mapStateToProps)(Main)