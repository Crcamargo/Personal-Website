import React from 'react'
import { navigateToGreeting, navigateToExperience, navigateToProjects, navigateToAnalytics, pageClick, navigateToAbout, navigateToResume } from '../redux/actions'
import { connect } from 'react-redux'
import { Home, Clock, GitMerge, PieChart, User, Feather } from 'react-feather'

const couple = (navigate, type, clickEvent) => {
  if (navigate) {
    navigate()
  }

  if (clickEvent && type) {
    clickEvent(type)
  }
}

export const NavItem = ({ Icon, text, navigate, isActive, clickEvent, type }) => (
  <div className={`${isActive ? 'active-item ' : ''}nav-item`} onClick={() => couple(navigate, type, clickEvent)}>
    <Icon className="icon"/>
    <span>{text}</span>
  </div>
)

const greetingProps = (state) => ({
  Icon: Home,
  text: 'Home',
  isActive: state.current.tab === 'greeting',
  type: 'greeting'
})

const greetingDispatch = {
  navigate: navigateToGreeting,
  clickEvent: pageClick
}

const experienceProps = (state) => ({
  Icon: Clock,
  text: 'Experience',
  isActive: state.current.tab === 'experience',
  type: 'experience'
})

const experienceDispatch = {
  navigate: navigateToExperience,
  clickEvent: pageClick
}

const projectsProps = (state) => ({
  Icon: GitMerge,
  text: 'Projects',
  isActive: state.current.tab === 'projects',
  type: 'projects'
})

const projectsDispatch = {
  navigate: navigateToProjects,
  clickEvent: pageClick
}

const analyticsProps = (state) => ({
  Icon: PieChart,
  text: 'Analytics',
  isActive: state.current.tab === 'analytics',
  type: 'analytics'
})

const analyticDispatch = {
  navigate: navigateToAnalytics,
  clickEvent: pageClick
}

const aboutProps = (state) => ({
  Icon: User,
  text: 'About',
  type: 'about'
})

const aboutDispatch = {
  navigate: navigateToAbout,
  clickEvent: pageClick
}

const resumeProps = (state) => ({
  Icon: Feather,
  text: 'Resume',
  type: 'resume-nav'
})

const resumeDispatch = {
  navigate: navigateToResume,
  clickEvent: pageClick
}

export const GreetingNavItem =  connect(greetingProps , greetingDispatch)(NavItem)
export const ExperienceNavItem =  connect(experienceProps, experienceDispatch)(NavItem)
export const ProjectsNavItem =  connect(projectsProps, projectsDispatch)(NavItem)
export const AnalyticsNavItem = connect(analyticsProps, analyticDispatch)(NavItem)
export const AboutNavItem = connect(aboutProps, aboutDispatch)(NavItem)
export const ResumeNavItem = connect(resumeProps, resumeDispatch)(NavItem)