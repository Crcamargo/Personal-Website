import React from 'react'

import {
  GreetingNavItem,
  ExperienceNavItem,
  ProjectsNavItem,
  AnalyticsNavItem,
  AboutNavItem,
  ResumeNavItem
} from './NavItem'

import { useLocation } from 'react-router-dom'

export default () => (
  <div className="nav-bar-navigation-container">
      <GreetingNavItem />
      { useLocation().pathname !== '/about' ? <AboutNavItem /> :
                    <ResumeNavItem />
      }
      <ExperienceNavItem />
      <ProjectsNavItem />
      {/* <AnalyticsNavItem /> */}
  </div>
)