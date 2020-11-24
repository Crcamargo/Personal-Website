import React from 'react'

import {
  GreetingNavItem,
  ExperienceNavItem,
  ProjectsNavItem,
  AnalyticsNavItem
} from './NavItem'

export default ({ }) => (
  <div className="nav-bar-navigation-container">
    <GreetingNavItem />
    <ExperienceNavItem />
    <ProjectsNavItem />
    <AnalyticsNavItem />
  </div>
)