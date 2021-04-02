import React, { useEffect } from 'react'
import Home from './Home'
import Experience from './Experience'
import Projects from './Projects'
import Analytics from './Analytics'
import { Switch, Route } from   'react-router-dom'
import { connect } from 'react-redux'
import { setIsMobile } from '../redux/actions'

const Main = ({ setIsMobile }) => {
  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.matchMedia('(max-width:769px)').matches)
    window.addEventListener('resize', updateIsMobile)
    return () => window.removeEventListener('resize', updateIsMobile)
  }, [])

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

const mapDispatchToProps = { setIsMobile }
export default connect(null, mapDispatchToProps)(Main)