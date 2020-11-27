import React from 'react'
import Photo from '../assets/photo.jpg'
import Resume from '../Temp.pdf'
import { Download } from 'react-feather'
import store from '../redux/store'
import { setPrimaryColor } from '../redux/actions'
import { connect } from 'react-redux'
import { pageClick } from '../redux/actions'

const aboutText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet pharetra metus, nec mollis tortor.
In ultricies tempor sagittis. Maecenas eget velit blandit, congue lorem non, aliquet dolor. In rutrum,
tortor in varius volutpat, libero arcu finibus magna, vel commodo felis sapien ut erat. Quisque a purus
condimentum, dapibus velit ut, eleifend nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.
Fusce pharetra mi metus, vel vulputate sem vestibulum et. Integer eleifend ultrices justo, quis euismod metus
varius ac. Quisque dignissim nunc nec lectus venenatis, nec consectetur mi sodales. Sed porta venenatis
purus sed porta. Cras bibendum erat eu sem facilisis pharetra. Sed dui eros, dignissim a arcu non,
volutpat lobortis dolor. Sed volutpat, ex nec ornare dignissim, purus eros luctus sapien, a laoreet nisi
felis sit amet diam. Donec sed dolor sapien. Sed sit amet leo ligula.
`

const downloadResume = (dispatch) => {
  dispatch('resume')

  let a = document.createElement('a')

  a.href = Resume
  a.target ="_blank"
  a.click()
}

const Home = ({ pageClick, showAbout }) => (
  <div className="home-container">
    {
      showAbout ?
        <div className="home-about-container">
          <h1 className="about-me">About Me</h1>
          <h2 className="name">Cristian Camargo</h2>
          <h3 className="title">Software Engineer</h3>
          <p>
            {aboutText}
          </p>
        </div> :
        <div className="home-text-container">
        <div className="home-text-text-container">
          <h1 className="hello">Hello, my name is <span className="primary-color">Cristian</span>!</h1>
          <h2>I am a <span className="primary-color">Software Engineer</span>.</h2>
        </div>
        <div onClick={() => downloadResume(pageClick)} className="home-resume-button-container">
          <Download className="icon" size={30}/>
          <h2>Resume</h2>
        </div>
        {/* <button onClick={() => store.dispatch(setPrimaryColor("#BA5B50"))}>Red</button>
        <button onClick={() => store.dispatch(setPrimaryColor("#435892"))}>Blue</button>
        <button onClick={() => store.dispatch(setPrimaryColor("#8DA077"))}>Green</button> */}
      </div>
    }
    <img className='home-photo' src={Photo} />
  </div>
)

const mapDispatchToProps = {
  pageClick
}

const mapStateToProps = (state) => {
  return {
    showAbout: state.current.home === 'about'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)