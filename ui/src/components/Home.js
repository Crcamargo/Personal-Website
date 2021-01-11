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

const Home = ({ pageClick }) => {
  const checkWindowSize = () => window.matchMedia('(max-width: 769px)').matches
  const [isMobile, updateIsMobile] = useState(checkWindowSize)

  window.addEventListener('resize', () => updateIsMobile(checkWindowSize))

  const downloadResume = () => {
    pageClick('resume')

    let a = document.createElement('a')
    a.href = Resume
    a.target ="_blank"
    a.click()
  }

  const aboutComponent = <AboutSection isMobile={isMobile} downloadResume={downloadResume} />

  const mainComponent = useLocation().pathname === "/about" ? aboutComponent : (
    <div className="home-text-container">
      { !isMobile? null : <Redirect to="about" /> }
      <div className="home-text-text-container">
        <h1 className="hello">Hello, my name is <span className="primary-color">Cristian</span>!</h1>
        <h2>I am a <span className="primary-color">Software Engineer</span>.</h2>
      </div>
      <ResumeButton downloadResume={downloadResume}/>
    </div>
  )

  return (
    <div className="home-container">
      { mainComponent }
      <img className='home-photo' src={Photo} />
    </div>
)}

const mapDispatchToProps = {
  pageClick
}

export default connect(null, mapDispatchToProps)(Home)