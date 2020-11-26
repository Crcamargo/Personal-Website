import React from 'react'
import Photo from '../assets/photo.jpg'
import { Download } from 'react-feather'
import store from '../redux/store'
import { setPrimaryColor } from '../redux/actions'
import { connect } from 'react-redux'
import { pageClick } from '../redux/actions'

const Home = ({ pageClick, show }) => (
  <div className="home-container">
    <div className="home-text-container">
      <div className="home-text-text-container">
        <h1 className="hello">Hello, my name is <span className="primary-color">Cristian</span>!</h1>
        <h2>I am a <span className="primary-color">Software Engineer</span>.</h2>
      </div>
      <div onClick={() => pageClick('resume')} className="home-resume-button-container">
        <Download className="icon" size={30}/>
        <h2>Resume</h2>
      </div>
      {/* <button onClick={() => store.dispatch(setPrimaryColor("#BA5B50"))}>Red</button>
      <button onClick={() => store.dispatch(setPrimaryColor("#435892"))}>Blue</button>
      <button onClick={() => store.dispatch(setPrimaryColor("#8DA077"))}>Green</button> */}
    </div>
    <img className='home-photo' src={Photo} />
  </div>
)

const mapDispatchToProps = {
  pageClick
}

const mapStateToProps = (state) => {
  return {
    show: state.current.home
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)