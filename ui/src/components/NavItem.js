import React from 'react'
import { pageClick } from '../redux/actions'
import { connect } from 'react-redux'
import { Home, Clock, GitMerge, PieChart, User, Feather } from 'react-feather'

import { Link, useLocation } from "react-router-dom"

const isActive = (getLocation, route) => {
  // These are never 'active'
  if (route === '/about' || route === '/resume') {
    return false
  }

  let path = getLocation().pathname

  // Home is highlighted if current path is about or resume
  if ((path === '/about' || path === '/resume') && route === '/') {
    return true
  }

  return path === route
}

export const NavItem = ({ Icon, text, clickEvent, type, route }) => (
  <div className={`${isActive(useLocation, route)? 'active-item ' : ''}nav-item`} onClick={() => clickEvent(type)}>
    <Link to={route} className="link">
      <Icon className="icon"/>
      <span>{text}</span>
    </Link>
  </div>
)

const greetingProps = (state) => ({
  Icon: Home,
  text: 'Home',
  isActive: state.current.tab === 'greeting',
  type: 'greeting',
  route: '/'
})

const greetingDispatch = {
  clickEvent: pageClick
}

const experienceProps = (state) => ({
  Icon: Clock,
  text: 'Experience',
  isActive: state.current.tab === 'experience',
  type: 'experience',
  route: '/experience'
})

const experienceDispatch = {
  clickEvent: pageClick
}

const projectsProps = (state) => ({
  Icon: GitMerge,
  text: 'Projects',
  isActive: state.current.tab === 'projects',
  type: 'projects',
  route: '/projects'
})

const projectsDispatch = {
  clickEvent: pageClick
}

const analyticsProps = (state) => ({
  Icon: PieChart,
  text: 'Analytics',
  isActive: state.current.tab === 'analytics',
  type: 'analytics',
  route: '/analytics'
})

const analyticDispatch = {
  clickEvent: pageClick
}

const aboutProps = (state) => ({
  Icon: User,
  text: 'About',
  type: 'about',
  route: '/about'
})

const aboutDispatch = {
  clickEvent: pageClick
}

const resumeProps = (state) => ({
  Icon: Feather,
  text: 'Resume',
  type: 'resume-nav',
  route: '/resume'
})

const resumeDispatch = {
  clickEvent: pageClick
}

export const GreetingNavItem =  connect(greetingProps , greetingDispatch)(NavItem)
export const ExperienceNavItem =  connect(experienceProps, experienceDispatch)(NavItem)
export const ProjectsNavItem =  connect(projectsProps, projectsDispatch)(NavItem)
export const AnalyticsNavItem = connect(analyticsProps, analyticDispatch)(NavItem)
export const AboutNavItem = connect(aboutProps, aboutDispatch)(NavItem)
export const ResumeNavItem = connect(resumeProps, resumeDispatch)(NavItem)