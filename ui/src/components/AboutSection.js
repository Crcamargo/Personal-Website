import React from 'react'
import ResumeButton from './ResumeButton'
import NavBarContact from './NavBarContact'
import Photo from '../assets/photo-small.jpg'
import { connect } from 'react-redux'

const AboutSection = ({ isMobile, downloadResume}) => (
    <div className="home-about-container">
          {!isMobile ? null : <img className="about-photo-small" src={Photo} />}
          <h1 className="about-me">About Me</h1>
          <h2 className="name">Cristian Camargo</h2>
          <h3 className="title">Software Engineer</h3>
          <p className="home-about-text">
            In 2018 I graduated from The University of California San Diego with a B.S. in Mathematics and
            Computer Science. Since then, I've been working as a Software Engineer where I'm building
            large, complex, applications that serve thousands of enterprise
            customers.
            <br /><br />
            I have professional experience building back-end, multi-cloud, microservices in .NET and In my free time, I
            like to develop front-end web applications in React.
            <br /><br />
            Some of my hobbies include surfing, playing basketball, and enjoying nature!
          </p>
          {!isMobile ? null : <ResumeButton downloadResume={downloadResume}/>}
          {!isMobile ? null : <NavBarContact />}
    </div>
)

const mapStateToProps = state => ({ isMobile: state.isMobile })
export default connect(mapStateToProps)(AboutSection)
