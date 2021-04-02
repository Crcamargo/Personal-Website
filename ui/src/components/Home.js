import React, { useState } from 'react'
import Photo from '../assets/photo_skinny.jpg'
import Resume from '../Resume.pdf'
import { connect } from 'react-redux'
import { pageClick } from '../redux/actions'
import { useLocation, Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import ResumeButton from './ResumeButton'
import AboutSection from './AboutSection'

// How to change colors, for future use
/* <button onClick={() => store.dispatch(setPrimaryColor("#BA5B50"))}>Red</button>
        <button onClick={() => store.dispatch(setPrimaryColor("#435892"))}>Blue</button>
        <button onClick={() => store.dispatch(setPrimaryColor("#8DA077"))}>Green</button> */

const Home = ({ pageClick, isMobile }) => {
  const downloadResume = () => {
    pageClick('resume')
    let a = document.createElement('a')
    a.href = Resume
    a.target ="_blank"
    a.click()
  }

  const showAbout = useLocation().pathname === "/about" || isMobile
  const aboutComponent = <AboutSection downloadResume={downloadResume} />
  const resumeComponent = (
    <div className="home-text-container">
      <div className="home-text-text-container">
        <h1 className="hello">Hello, my name is <span className="primary-color">Cristian</span>!</h1>
        <h2>I am a <span className="primary-color">Software Engineer</span>.</h2>
      </div>
      <ResumeButton downloadResume={downloadResume}/>
    </div>
  )

  return (
    <div className="home-container">
      { showAbout ? aboutComponent : resumeComponent }
      <img className='home-photo' src={Photo} />
    </div>
)}

const mapDispatchToProps = { pageClick }
const mapStateToProps = (state) => ({ isMobile: state.isMobile })

export default connect(mapStateToProps, mapDispatchToProps)(Home)