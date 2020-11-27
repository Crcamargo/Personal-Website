import React from 'react'
import { connect } from 'react-redux'

import {
  GreetingNavItem,
  ExperienceNavItem,
  ProjectsNavItem,
  AnalyticsNavItem,
  AboutNavItem,
  ResumeNavItem
} from './NavItem'

const NavBarNavigation = ({ showAbout }) => (
  <div className="nav-bar-navigation-container">
    <GreetingNavItem />
    { showAbout ? <AboutNavItem /> : <ResumeNavItem />}
    <ExperienceNavItem />
    <ProjectsNavItem />
    {/* <AnalyticsNavItem /> */}
  </div>
)

const mapStateToProps = (state) => ({
  showAbout: state.current.home === 'resume'
})

export default connect(mapStateToProps)(NavBarNavigation)